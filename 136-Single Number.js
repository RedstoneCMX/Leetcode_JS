/*这个题非常简单的方法就是将所有数进行异或，出现两次的数进行异或就变成0了，只出现一次的数最终就会留下。
*/
var singleNumber = function(nums) {
    var len = nums.length;
    var snumber = nums[0];
    for(var i = 1; i < len; i++){
    	snumber ^= nums[i];
    }
    return snumber;
};