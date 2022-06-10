/**
 * 实现深拷贝
 * 考虑环
 * 考虑日期
 * 考虑正则
 * 考虑dom
 */
const symbolName = Symbol();
const obj = {
    objNumber: new Number(1),
    number: 1,
    objString: new String('ss'),
    string: 'stirng',
    objRegexp: new RegExp('\\w'),
    regexp: /w+/g,
    date: new Date(),
    function: function () {},
    array: [{name: 1}, 2],
    [symbolName]: 111
}
obj.d = obj;

const isObj = (obj) => obj !== null && (typeof obj === 'object' || typeof fn === 'function')

const isFunction = (fn) => typeof fn === 'function'

const deepClone = (obj, map = new Map()) => {
    if (map.get(obj)) {
        return map.get(obj)
    }
    if (!isObj(obj)) {
        return obj
    }

    if (isFunction(obj)) {
        return obj
    }

    let cloneObj

    const Constructor = obj.constructor

    switch (Constructor) {
        case Boolean:
        case Date:
            return new Date(+obj)
        case Number:
        case String:
        case RegExp:
            return new Constructor(obj)
        default:
            cloneObj = new Constructor()
            map.set(obj, cloneObj)
    }

    [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)].forEach(item => {
        cloneObj[item] = deepClone(obj[item], map)
    })
    return cloneObj
}

console.log(deepClone(obj))

const isObjs = obj => typeof obj !== null && (typeof obj === 'object' || typeof obj === 'function') 

const deepC = (obj, map = new Map) => {
    if (map.get(obj)) {
        return map.get(obj)
    }

    if (!isObjs(obj)) {
        return obj
    }

    if (typeof obj === 'function') {
        return obj
    }

    const Constructor = obj.constructor
    let cloneObj = null

    switch(Constructor) {
        case Boolean:
        case Date:
            cloneObj = new Date(+obj)
            break
        case String:
        case Number:
        case RegExp:
            cloneObj = new Constructor()
            break
        default:
            cloneObj = new Constructor()
            map.set(obj, cloneObj)
    }
    ;[...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)].forEach(item => {
        cloneObj[item] = deepC(obj[item], map)
    })
    return cloneObj
}