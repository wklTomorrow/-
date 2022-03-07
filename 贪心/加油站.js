/**
 * https://leetcode-cn.com/problems/gas-station/
 * 输入: 
 * gas  = [1,2,3,4,5]
 * cost = [3,4,5,1,2]
 * 输出: 3
 * 解释:
 * 从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
 * 开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
 * 开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
 * 开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
 * 开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
 * 开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
 * 因此，3 可为起始索引。
 * 这里我们需要注意的就是: 什么时候一定有解
 * 很显然,当所有当gas[i]和大于cost[i]和时，一定会存在解
 * 那么我们需要维护一个total变量,然后去判断当前当curr是不是小于0
 * 小于0的话，说明从当前的第i个点出来,是不合理的，也就是到达不了
 * 这样子的话，就能计算出答案
 * totol记入的是整个gas-cost的话费,currTotal维护的内容就是从第i个出发后的结果
 * ans记入的就是结果
 */

const gas = (gas, cost) => {
    let total = 0, curTotal = 0, ans = 0
    for (let i = 0; i < gas.length; i++) {
        curTotal = gas[i] - cost [i]
        if (curTotal < 0) {
            curTotal = 0
            ans = i + 1
        }
        total = total + gas[i] - cost[i]
    }
    return total >= 0 ? ans : -1
}

 const canCompleteCircuit = (gas, cost) => {
    let len = gas.length, total = 0, currTotal = 0, ans = 0
    for (let i = 0; i < len; i++) {
      currTotal += gas[i] - cost[i]
      if (currTotal < 0) {
        currTotal = 0
        ans = i+ 1
      }
      total = total + gas[i] - cost[i]
    }
    return total >= 0 ? ans : -1
}