/**
 * 平级数据转树状结构
 */

const treeList = [
    {
        id: 1,
        name: '1',
    },
    {
        pid: 1,
        name: '1-1',
        id: 11
    },
    {
        pid: 1,
        name: '1-2',
        id: 12
    },
    {
        pid: 12,
        name: '121',
        id: 121
    },
    {
        pid: 1,
        name: '2-1',
        id: 21
    }
]

const exchage = arr => {
    const treemap = {}
    treeList.forEach(item => {
        item.children = []
        treemap[item.id] = item
    })
    const result = []
    treeList.forEach(item => {
        if (!item.pid) {
            result.push(item)
        } else {
            treemap[item.pid].children.push(item)
        }
    })
    return result
}

console.log(JSON.stringify(exchage(treeList)))