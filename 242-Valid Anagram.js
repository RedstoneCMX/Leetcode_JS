/*这道题使用hash是非常简单的，而且时间复杂度为O(n)。
首先既然题目已经明说了只有小写字母，那么就定义一个hash表，长度是26，初始全为0，然后遍历第一个字符串，并更新hash表的值，
从i = 0开始，hash[s[i]-97]++。然后遍历第二个字符串t，hash[t[i]-97]--。
两个字符串都遍历完之后，hash表也更新完了，如果两个字符串是同字母异序词，那么最终hash表的值肯定还都是0。
那么只需要遍历这个hash表，只要出现了值不为0的情况就返回0，说明就不是同字母异序词。否则则返回1。
*/

var isAnagram = function(s, t) {
    var lens = s.length;
    var lent = t.length;
    if(lens != lent)
    	return false;
    var hash = new Array(26);
    for(var i = 0; i < 26; i++)
    	hash[i] = 0;
    for(i = 0; i < lens; i++)
    	hash[s[i].charCodeAt()-97]++;
    for(i = 0; i < lent; i++)
    	hash[t[i].charCodeAt()-97]--;
    for(i = 0; i < 26; i++)
    	if(hash[i] !== 0)
    		return false;
    return true;
};