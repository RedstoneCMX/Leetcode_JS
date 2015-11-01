/*这道题是关于二叉树的题，递归思路，也就是DFS的思路。
这里递归需要判断的是左右子树都为空的时候才是叶子节点，才能进行sum的最终判断。
这道题和257题求解二叉树的路径类似。
*/
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var mysum;
var bo;
var getPathSum = function(root,getsum){
	if(root === null || bo)
		return;
	getsum += root.val;
	if(root.left === null && root.right === null){
		if(getsum == mysum){
			bo = true;
			return ;
		}	
	}
	else{
		getPathSum(root->left,getsum);
		getPathSum(root->right,getsum);
	}

}
var hasPathSum = function(root, sum) {
    mysum = sum;
    bo = false;
    getPathSum(root,0);
    return bo;
};

