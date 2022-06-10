function debounde(fn, delay) {
    let timer = null
    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
            clearTimeout(timer)
            timer = null
        }, delay);
    }
}