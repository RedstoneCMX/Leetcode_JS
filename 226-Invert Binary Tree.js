/*这道题是关于二叉树的题，左右倒置二叉树，非常基础的题，递归思路，交换左右子树。
但是对于js来说，这里需要知道一个很重要的知识点，js传参到底是怎么传的，是按值传递还是引用传递，还是其他传递方式。
JS的基本类型，是按值传递的。
而对于JS的对象类型，是按共享传递的，准确的说，JS中的基本类型按值传递，对象类型按共享传递的(call by sharing，也叫按对象传递、按对象共享传递)。
该策略的重点是：调用函数传参时，函数接受对象实参引用的副本(既不是按值传递的对象副本，也不是按引用传递的隐式引用)。 
它和按引用传递的不同在于：在共享传递中对函数形参的赋值，不会影响实参的值。如下面例子中，不可以通过修改形参o的值，来修改obj的值。
*/
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

function getinvertTree(root){
	if(root === null)
		return ;
	var tempnode = root.left;
	root.left = root.right;
	root.right = tempnode;
	getinvertTree(root.left);
	getinvertTree(root.right);
}

var invertTree = function(root) {
    getinvertTree(root);
    return root;
};