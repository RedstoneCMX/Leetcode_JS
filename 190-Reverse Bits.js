/*简单题，和求解十进制的整数反转类似。但是这里需要注意的一个问题是，这里必须循环32次，即使一个数的二进制表示，
高位全是0在进行反转的时候高位变成了低位可以使得以前的低位变成高位。比如1011，应该完整表示为32位0000 0000 0000 0000 0000 0000 0000 1011，
反转为1101 0000 0000 0000 0000 0000 0000 0000。而不能单纯的只是反转1011为1101。
*/
var reverseBits = function(n) {
    var rn = 0;
    var count = 32;
    while(count--){
    	var temp = n % 2;
    	rn = rn * 2 + temp;
    	n = parseInt(n / 2);
    }

    return rn;
};