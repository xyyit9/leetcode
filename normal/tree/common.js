function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var serialize = function (root) {
    const str = ''
    return rserialize(root, '').slice(0, -1);
};

var deserialize = function (data) {
    const dataArray = data.split(",");
    return rdeserialize(dataArray);
};

const rserialize = (root, str) => {
    if (root === null) {
        str += "#,";
    } else {
        str += root.val.toString() + ",";
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }
    return str;
}

const rdeserialize = (dataList) => {
    if (dataList.length === 0) {
        return null
    }
    if (dataList[0] === "#") {
        dataList.shift();
        return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = rdeserialize(dataList);
    root.right = rdeserialize(dataList);

    return root;
}


// const tree = deserialize('1,2,#,#,3,4,#,#,5,#,#')
// console.log(tree)
// const str = serialize(tree)
// console.log(str)
module.exports = {
    deserialize
}