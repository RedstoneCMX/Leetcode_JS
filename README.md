# Leetcode_JS
leetcode编程题，javascript版本

##NO.35 Search Insert Position
这道题非常简单，数组是有序数组，只需要遍历一遍数组，判断当前值是否等于target或者大于target即可返回其位置值。如果都不满足，
说明target比nums中所有数都大，直接插入数组尾部，因为返回size。

##NO.62 Unique Paths
这道题是一道动态规划的题，还算简单。状态转移方程为：
```JavaScript
path[i][j] = path[i-1][j] + path[i][j-1];
```
i和j表示的是i\*j的网格从左上角到右下角的路径数量。
并且初始的时候path[i][j]都为1。
为方便起见，这里我从path[1][1]开始，表示1\*1的网格的路径数量，不从0开始。

##NO.100 Same Tree
这道题是关于二叉树的题，非常基础的题，递归思路。这道题主要就是熟悉二叉树的相关操作，这里给出了一个前序输入二叉树的函数。

##NO.112 Path Sum
这道题是关于二叉树的题，递归思路，也就是DFS的思路。
这里递归需要判断的是左右子树都为空的时候才是叶子节点，才能进行sum的最终判断。
这道题和257题求解二叉树的路径类似。

##NO.136 Single Number
这个题非常简单的方法就是将所有数进行异或，出现两次的数进行异或就变成0了，只出现一次的数最终就会留下。

##NO.190 Reverse Bits
简单题，和求解十进制的整数反转类似。但是这里需要注意的一个问题是，这里必须循环32次，即使一个数的二进制表示，
高位全是0在进行反转的时候高位变成了低位可以使得以前的低位变成高位。比如1011，应该完整表示为32位0000 0000 0000 0000 0000 0000 0000 1011，
反转为1101 0000 0000 0000 0000 0000 0000 0000。而不能单纯的只是反转1011为1101。

##NO.191 Number of 1 Bits
这道题比较简单，就是求一个整数转化为二进制之后1的个数。按照求解一个整数的二进制表示法进行计算，得到1则计数加1即可。
这里需要注意的是在js中，因为变量是弱类型，因此在求n = n/2时需要转int，否则会得到小数。

##NO.226 Invert Binary Tree
这道题是关于二叉树的题，左右倒置二叉树，非常基础的题，递归思路，交换左右子树。
但是对于js来说，这里需要知道一个很重要的知识点，js传参到底是怎么传的，是按值传递还是引用传递，还是其他传递方式。
JS的基本类型，是按值传递的。
而对于JS的对象类型，是按共享传递的，准确的说，JS中的基本类型按值传递，对象类型按共享传递的(call by sharing，也叫按对象传递、按对象共享传递)。
该策略的重点是：调用函数传参时，函数接受对象实参引用的副本(既不是按值传递的对象副本，也不是按引用传递的隐式引用)。 
它和按引用传递的不同在于：在共享传递中对函数形参的赋值，不会影响实参的值。如下面例子中，不可以通过修改形参o的值，来修改obj的值。

##NO.237 Delete Node in a Linked List
这道题是链表操作的题，比较简单。只需要将当前节点的值赋成下一节点的值，并删除下一节点即可。

##NO.242 Valid Anagram
这道题使用hash是非常简单的，而且时间复杂度为O(n)。
首先既然题目已经明说了只有小写字母，那么就定义一个hash表，长度是26，初始全为0，然后遍历第一个字符串，并更新hash表的值，
从i = 0开始，hash[s[i]-97]++。然后遍历第二个字符串t，hash[t[i]-97]--。
两个字符串都遍历完之后，hash表也更新完了，如果两个字符串是同字母异序词，那么最终hash表的值肯定还都是0。
那么只需要遍历这个hash表，只要出现了值不为0的情况就返回0，说明就不是同字母异序词。否则则返回1。

##NO.258 Add Digits
简单题，如果仅仅就按照题目的意思的思路去写，这个题其实确实非常简单，没有什么难点。而题目建议能否不使用循环和递归，
在O(1)的时间复杂度内完成。其实就是一个找规律的题。
```javascript
输入：1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
结果：1, 2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2 
```
根据上面的尝试，我们可以发现，这里是有规律的。 
即结果满足，（num-1）%9+1 

##NO.263 Ugly Number
这道题比较简单。
只需要对num分别除去含2，3，5的因子，若最后是1，说明num就只有2，3，5这三个素数因子。
对于除去含2，3，5的因子，就是直接循环判断num是否被2整除，若是则继续除去2，直到不被2整除，再进行3和5的因子的除去操作。

##NO.268 Missing Number
这道题非常简单，就是找到那个0~n那个缺失的数字，首先求解0~n的所有数的和，然后再求解整个nums数组的和，两者相减就得到那个缺失的数字了。

##NO.283 Move Zeroes
这道题最简单的思路就是直接在当前数组操作，用一个标记pos，初始为0，将非0的数全部移到前面，移完之后再将0补全，直到pos = size-1。
