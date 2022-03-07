
/**
 * dp[i][j] 表示从 i 到 j 是不是回文串
 * 先进行判断是否为回文串
 */

const getStr = str => {
    const res = []
    const dp = Array.from({
        length: str.length
    }, () => Array.from({
        length: str.length
    }, () => 0))
    // 判断回文串
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < j; i++) {
            if (i === j) {
                dp[i][j] = true
            } else if (j - i == 1 && str[i] == str[j]) {
                dp[i][j] = true
            } else if (j - i > 1 && str[i] == str[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true
            } else {
                dp[i][j] = false
            }
        }
    }
    // // 裁剪回文串

    // function dps(temp, start) {
    //     if ()
    // }
    // dps([], 0)
}