/*这道题最简单的思路就是直接在当前数组操作，用一个标记pos，初始为0，将非0的数全部移到前面，移完之后再将0补全，直到pos = size-1。
*/
var moveZeroes = function(nums) {
    var len = nums.length;
    var pos = 0;
    for(var i = 0; i < len; i++){
    	if(nums[i]){
    		nums[pos] = nums[i];
    		pos++;
    	}
    }

    while(pos < len){
    	nums[pos++] = 0;
    }
};