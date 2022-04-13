Function.prototype._bind = function(...args) {
    const _this = args[0] || window
    _this.fn = this
    return function(...params) {
        _this.fn(...args.splice(1).concat(params))
        delete _this.fn
    }
}


function test(value) {
    console.log(this.name, value)
    return 111
}

const obj = {
    name: 'hello world'
}

console.log(test(111), test._bind(obj)(111), )
