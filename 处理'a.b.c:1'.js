let a = {'a.b.c': 1, 'a.b.d': 2, 'a.b.e': 3, 'a.b.f': 4}
const obj = {}
Object.keys(a).map(key => {
    let arr = key.split('.')
    let cur = {}
    for (let i = 0; i < arr.length ; i++) {
        if (i === arr.length - 1) {
            cur[arr[i]] = a[key]
            break
        }
        if (i === 0) {
            if (obj[arr[i]]) {
                cur = obj[arr[i]]
            } else {
                cur[arr[i]] = {}
                Object.assign(obj, {...cur})
                cur = cur[arr[i]]
            }
        } else {
            cur[arr[i]] = cur[arr[i]] || {}
            cur = cur[arr[i]]
        }
    }
})

console.log(obj)

