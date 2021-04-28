## 常规，查找目标值，和左右边界
* 35 不重复 排序数组 查找target
* 34 在排序数组中查找target的开始位置和结束位置

## 求左边界，即小于目标值中的最大值
* 29 两数相除 特殊情况判断多，意义不大
* 69 求平方根

## 旋转排序数组
### 查找target
* 33 不重复 旋转排序数组 查找target
* 81 重复   旋转排序数组 查找target
规则：
1.判断哪边区间是有序的，再判断值是否在有序的区间内
2. 重复数字，当`mid==right`时，`right--`重新划定范围
### 查找最小值
* 153 不重复 旋转排序数组 查找最小值
优秀题解：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/er-fen-cha-zhao-wei-shi-yao-zuo-you-bu-dui-cheng-z/
* 154 重复 旋转排序数组 查找最小值
规则：
1. 重复数字，当`mid==right`时，`right--`重新划定范围
2. 旋转排序数组，寻找最小值，要使用right和mid比较，因为如果用left和mid比较：
 [1,2,3]中>左  选左边
 [4,5,6,0]中>左  选右边
 相同的情况却使用不同的策略，故必须用right和mid比较
 如果是寻找最大值，则用left和mid比较



## 确定一个有范围的整数
* 162 无序数组 寻找峰值
* 287 无序数组 寻找重复的数字
优秀题解：https://leetcode-cn.com/problems/find-the-duplicate-number/solution/er-fen-fa-si-lu-ji-dai-ma-python-by-liweiwei1419/
* 540 有序数组 寻找单一元素
规则：
1. 若存在`left=mid`或者`right=mid`的设置时，循环条件需要改成`left<right`,否则会存在`left=right=mid`的死循环
2. 若存在`left=mid`，则对mid的计算需要靠右，即使用`let mid = left + Math.floor((right - left + 1) / 2)`,否则会存在left == mid < right的死循环
同理，若存在`right=mid`, 则读mid的计算要靠左，即使用`let mid = left + Math.floor((right - left) / 2) `

## 其它
* 74 二维矩阵查找target
* 209 不建议用二分

