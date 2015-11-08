/*这道题非常简单，就是找到那个0~n那个缺失的数字，首先求解0~n的所有数的和，然后再求解整个nums数组的和，两者相减就得到那个缺失的数字了。
*/
var missingNumber = function(nums) {
    var len = nums.length;
    var umiss_sum = 0;
    for(var i = 0; i <= len; i++)
    	umiss_sum += i;
    var miss_sum = 0;
    for(i = 0;i < len; i++)
    	miss_sum += nums[i];
    return umiss_sum - miss_sum;
};