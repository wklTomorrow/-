/**
 * 保证下一个排列最大
 * 
 *   1. 我们是不是需要考虑，让后面更大的数字去跟前面更小的数字替换呢
 *      从低位挑一个大一点的数，换掉前面的小一点的一个数。
 *       于是，从右往左，寻找第一个比右邻居小的数。（把它换到后面去） 
 * 
 *      2. 如何保证变大的幅度更小呢,将右侧比它大数字替换。
 *         然后我们从第i+1个位置到len - 1区间,我们可以做的就是翻转，为啥可以这么做呢，前面已经保证了升序
 */

const next = arr => {
    const cur = length - 2
    while (cur >= 0 && arr[cur] >= arr[cur + 1]) {
        cur --
    }
    if (cur >= 0) {
        let next = arr.length - 1
        while (next >= cur && arr[cur] >= arr[next]) {
            next --
        }
        ;[arr[cur], arr[next]] = [arr[next], arr[cur]]
    }
    let l = cur + 1
    let r = arr.length - 1
    while (l < r) {
        ;[arr[l], arr[r]] = [arr[r], arr[l]]
        l ++
        r -- 
    }
}