/**
 * http://www.baidu.com?uid=100&str=search&type=tomorrow
 */

// 使用正则
const url = 'http://www.baidu.com?uid=100&str=search&type=tomorrow'
const getParams = url => {
    const matchs = url.match(/([^?&=]+)=([^&=]+)/g)
    return matchs.map(item => {
        arr = item.split('=')
        return {
            [arr[0]]: arr[1]
        }
    })
}

console.log(getParams(url))
