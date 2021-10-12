##  求最长子串

### 最长回文子串

5 https://leetcode-cn.com/problems/longest-palindromic-substring/

给你一个字符串 `s`，找到 `s` 中最长的回文子串。

>方法1：动态规划
>
>意义：dp\[i][j]表示s中的字符串下标从i到j，是否为回文子串
>
>初始化：长度为1或者长度2的字符串，比较i和j是否相等
>
>方程：dp\[i][j] = s[i] === s[j] && dp\[i + 1][j - 1]; 如果i和j的元素相等，则由i+1和j-1是否是回文字符串决定
>
>方法2：从中心延伸法

### 最长有效括号长度

32 https://leetcode-cn.com/problems/longest-valid-parentheses/

给你一个只包含 `'('` 和 `')'` 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

> 意义：dp\[i]表示s中的字符串下标从0到i，最长有效括号子串
>
> 初始化：全部初始化为0
>
> 方程：若当前为')'，则进入匹配流程，如果前一个是(, 则与之匹配起来：dp[i] = dp[i - 2] + 2。 如果前一个不是(, 则需要向前找到一个左括号与之匹配，例如（）（（））：            dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]





### 连续子数组最大和

53 https://leetcode-cn.com/problems/maximum-subarray/

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

> 意义：dp\[i]表示数组到以i下标结束时的最大和
>
> 初始化：dp[0] = nums[0]
>
> 方程：dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])

### 不能间隔子序列最大和

198 https://leetcode-cn.com/problems/house-robber/

求数组中相加和最大，但不能选择下标相邻的两个值

注意：不能直接求奇术和与偶数和进行比较，因为可能存在【2，1，1，2】这样的情况，此时最大为4，而不是3

>dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])

#### 最长递增子序列

300 https://leetcode-cn.com/problems/longest-increasing-subsequence/

给你一个整数数组 `nums` ，找到其中最长严格递增子序列的长度。

> 找到i前比nums[i]小的值+1，比较找到最小值





### 最小路径和

64 https://leetcode-cn.com/problems/minimum-path-sum/

给定一个包含非负整数的 `*m* x *n*` 网格 `grid` ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

>意义：dp\[i][j]表示走到下标从i到j，路径上的数字总和为最小的值
>
>初始化: dp\[0][0] = grid\[0][0]
>
>注意：i=0,  dp\[i][j] = dp\[i][j - 1] + grid\[i][j]
>
>j=0,  dp\[i][j] = dp\[i-1][j] + grid\[i][j]
>
>方程：dp\[i][j] = Math.min(dp\[i - 1][j], dp\[i][j - 1]) + grid\[i][j]



### 最小编辑距离

72 https://leetcode-cn.com/problems/edit-distance/

给你两个单词 `word1` 和 `word2`，请你计算出将 `word1` 转换成 `word2` 所使用的最少操作数 。可以对字符串进行增删改查

> 意义：dp\[i][j] 代表 word1 中前 i 个字符，变换到 word2 中前 j 个字符，最短需要操作的次数
>
> **特殊的初始化**： **dp数组增加一行一列。**需要考虑 word1 或 word2 一个字母都没有，即全增加/删除的情况，所以预留 dp\[0][j] 和 dp\[i][0]
>
> 方程：若word1[i - 1] === word2[j - 1]，则说明什么也不用做，dp\[i][j] = dp\[i - 1][j - 1]，否则，dp\[i][j] = Math.min(dp\[i ][j-1] + 1, dp\[i-1][j ] + 1, dp\[i - 1][j - 1] + 1);在增删改中寻找最小的操作数+1



## 买卖股票

121 

122

## 零钱问题

322

518