/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
    const queue = []
    if(root===null){
        return queue
    }
    const res =[]
    queue.push(root)
    while(queue.length>0){
        const size = queue.length
        const levelArray = []
        for(let i =0;i<size;i++){
            const item = queue.shift();
            levelArray.push(item.val)
            if(item.left){
                queue.push(item.left)
            }
            if(item.right){
               queue.push(item.right)
           }
        }
        res.unshift(levelArray)
    }
    return res
};