/*这道题是关于二叉树的题，非常基础的题，递归思路。这道题主要就是熟悉二叉树的相关操作，这里给出了一个前序输入二叉树的函数。
*/
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/*************************在leetcode上直接提交以下代码即可******************************/ 
var isSameTree = function(p, q) {
    if(p === null && q === null)
    	return true;
    if((p === null && q !== null)|| (p !== null && q === null))
    	return false;
    if(p.val == q.val)
    {
    	if(isSameTree(p.left,q.left))
    		return isSameTree(p.right,q.right);
    	else
    		return false;
    }
    return false;
};
/*************************在leetcode上直接提交以上代码即可******************************/