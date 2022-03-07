function throttle(fn, delay) {
    const timer = null
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                fn()
                clearTimeout(timer)
                timer = null
            }, delay);
        }
    }
}