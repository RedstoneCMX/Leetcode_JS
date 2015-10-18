/*这道题是一道动态规划的题，还算简单。状态转移方程为：
path[i][j] = path[i-1][j] + path[i][j-1];
i和j表示的是i*j的网格从左上角到右下角的路径数量。
并且初始的时候path[i][j]都为1。
为方便起见，这里我从path[1][1]开始，表示1*1的网格的路径数量，不从0开始。
*/
var uniquePaths = function(m, n) {
    var path = new Array(m+1);
    for(var i = 0; i <= m; i++){
    	path[i] = new Array(n+1);
    	for(var j = 0; j <= n; j++)
    		path[i][j] = 1;
    }
    for(i = 2; i <=m; i++)
    	for(j = 2; j <=n; j++)
    		path[i][j] = path[i-1][j] + path[i][j-1];
    return path[m][n];
    	
};