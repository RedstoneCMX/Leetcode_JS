# Leetcode_JS
leetcode编程题，javascript版本

##NO.100 Same Tree
这道题是关于二叉树的题，非常基础的题，递归思路。这道题主要就是熟悉二叉树的相关操作，这里给出了一个前序输入二叉树的函数。

##NO.136 Single Number
这个题非常简单的方法就是将所有数进行异或，出现两次的数进行异或就变成0了，只出现一次的数最终就会留下。

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

##NO.258 Add Digits
简单题，如果仅仅就按照题目的意思的思路去写，这个题其实确实非常简单，没有什么难点。而题目建议能否不使用循环和递归，
在O(1)的时间复杂度内完成。其实就是一个找规律的题。
```javascript
输入：1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
结果：1, 2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2 
```
根据上面的尝试，我们可以发现，这里是有规律的。 
即结果满足，（num-1）%9+1 

##NO.283 Move Zeroes
这道题最简单的思路就是直接在当前数组操作，用一个标记pos，初始为0，将非0的数全部移到前面，移完之后再将0补全，直到pos = size-1。
