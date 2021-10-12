## 求组合

### 从不同的组合中取

17 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

电话号码按键，根据数字返回所有可能的字母组合，例如："23"，返回["ad","ae","af","bd","be","bf","cd","ce","cf"]。

> 从各个不同的集合中取出，进行组合

22  https://leetcode-cn.com/problems/generate-parentheses/

数字 `n` 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效的** 括号组合。

> 分成左括号和右括号两种集合，然后按照这样特殊的规则去取：只要剩余左括号数量大于0，就可以选择左括号，只有右括号比左括号剩余数量多的时候，才能选右括号

### 从一个组合中取

#### 从一个组合中无限取

39 https://leetcode-cn.com/problems/combination-sum/

给定无重复正整数的数组和一个目标数字，从数组中无限制地重复选择数字，组成和为目标数字

> 在一个集合中无限次选择数字，按照常规的回溯做法，就会出现[2,2,3]和[3,2,2]这样的结果，所以需要有一个**startIndex**对数组的可选项进行收缩。

#### 从一个数组中取k个

77 https://leetcode-cn.com/problems/combinations/

给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。

> 选取n个数组中的k个数，如果不加以限制，也会出现重复的情况，比如[1,2]和[2,1]。每次从集合中选取元素，可选择的范围随着选择的进行而收缩，所以需要有一个**startIndex**对数组的可选项进行收缩。

78 https://leetcode-cn.com/problems/subsets/

给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。

>类似77，而此时的k为任意数，依然需要有一个**startIndex**对数组的可选项进行收缩。

216 https://leetcode-cn.com/problems/combination-sum-iii/

找出所有相加之和为 ***n*** 的 **k** 个数的组合**。**组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

> 也就是在集合【1-9】中选择k个数，其相加之和为n。需要有一个**startIndex**对数组的可选项进行收缩。

93 https://leetcode-cn.com/problems/restore-ip-addresses/

给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 `s` 获得的 有效 IP 地址 。

> 也就是从字符串中，每次取出长度为1-3的字符，需要有一个**startIndex**对数组的可选项进行收缩。

## 排列

46 https://leetcode-cn.com/problems/permutations/

给定一个不含重复数字的数组 `nums` ，返回其 所有可能的全排列 。

> 最基本的回溯，数组中已经取过的元素不能再取

## dfs+回溯

79 https://leetcode-cn.com/problems/word-search/

给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在于网格中，返回 `true` ；否则，返回 `false` 。

> 需要一个二维数组，记录该字母是否被使用过。向外面进行深度优先遍历，如果此路不同，就回溯，注意本题中return true和return false的位置

