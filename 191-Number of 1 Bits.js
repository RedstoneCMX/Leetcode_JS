/*这道题比较简单，就是求一个整数转化为二进制之后1的个数。按照求解一个整数的二进制表示法进行计算，得到1则计数加1即可。
这里需要注意的是在js中，因为变量是弱类型，因此在求n = n/2时需要转int，否则会得到小数。
*/
var hammingWeight = function(n) {
    var count = 0;
    while(n){
    	var m = n % 2;
    	if(m)
    		count++;
    	n = parseInt(n / 2);
    }

    return count;
};