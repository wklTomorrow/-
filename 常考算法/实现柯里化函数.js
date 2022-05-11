/**
 * add(1)(2)(3) add(1,2,3) add(1,2)(3)
 */

const curryFn = (...list) => {
    const params = [...list]

    const addParams = (...arr) => {
        params.push(...arr)

        return addParams
    }

    addParams.toString = () => {
        return params.reduce((a, b) => a + b)
    }

    return addParams
}

console.log(curryFn(1)(2)(3).toString(), curryFn(1,2,3).toString(), curryFn(1,2)(3).toString())