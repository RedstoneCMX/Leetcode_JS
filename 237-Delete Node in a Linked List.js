/*
这道题是链表操作的题，比较简单。
*/
function ListNode(val) {
	this.val = val;
	this.next = null;
}

var deleteNode = function(node) {
    var nextval = node.next.val;
    node.val = nextval;
    node.next = node.next.next;
};