let workInProgressHook;
let isMount = true;

// App组件对应的fiber对象
const fiber = {
  // 保存该FunctionComponent对应的Hooks链表
  memoizedState: null,
  stateNode: App,
};

function schedule() {
  // 通过workInProgressHook变量指向当前正在工作的hook
  workInProgressHook = fiber.memoizedState;
  // 触发组件render
  const app = fiber.stateNode();
  // 组件首次render为mount，以后再触发的更新为update
  isMount = false;
  return app;
}

function dispatchAction(queue, action) {
  // 创建update
  const update = {
    action,
    next: null,
  };

  // 环状单向链表操作
  if (queue.pending === null) {
    update.next = update;
  } else {
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;

  // 模拟React开始调度更新
  schedule();
}

function useState(initialState) {
  let hook;

  if (isMount) {
    hook = {
      // 保存update的queue，即上文介绍的环状单向链表queue
      queue: {
        pending: null,
      },
      // 保存hook对应的state
      memoizedState: initialState,
      // 与下一个Hook连接形成单向无环链表
      next: null,
    };
    // 将hook插入fiber.memoizedState链表末尾
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      workInProgressHook.next = hook;
    }
    // 移动workInProgressHook指针
    workInProgressHook = hook;
  } else {
    // ...update时从workInProgressHook中取出该useState对应的hook
    hook = workInProgressHook;
    // 在组件render时，每当遇到下一个useState，我们移动workInProgressHook的指针。
    workInProgressHook = workInProgressHook.next;
  }

  let baseState = hook.memoizedState;
  if (hook.queue.pending) {
    // 获取update环状单向链表中第一个update
    let firstUpdate = hook.queue.pending.next;

    do {
      // 执行update action
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
      // 最后一个update执行完后跳出循环
    } while (firstUpdate !== hook.queue.pending);
    // 清空queue.pending
    hook.queue.pending = null;
  }
  // 将update action执行完后的state作为memoizedState
  hook.memoizedState = baseState;

  return [baseState, dispatchAction.bind(null, hook.queue)];
}

function App() {
  const [num, updateNum] = useState(0);

  console.log(`${isMount ? "mount" : "update"} num: `, num);

  return {
    click() {
      updateNum((num) => num + 1);
      updateNum((num) => num + 1);
      updateNum((num) => num + 1);
    },
  };
}

global.app = schedule();
global.app.click()
