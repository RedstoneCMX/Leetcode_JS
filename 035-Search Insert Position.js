/*这道题非常简单，数组是有序数组，只需要遍历一遍数组，判断当前值是否等于target或者大于target即可返回其位置值。如果都不满足，
说明target比nums中所有数都大，直接插入数组尾部，因为返回size。
*/
var searchInsert = function(nums, target) {
    var len = nums.length;
    if(len === 0)
    	return 0;
    for(var i = 0; i < len; i++){
    	if(nums[i] == target || nums[i] > target)
    		return i;
    }
    return len;
};