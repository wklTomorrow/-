Function.prototype._apply = function(...args) {
    const _this = args[0] || window
    _this.fn = this
    _this.fn(...args[1])
    delete _this.fn
}


function test(value) {
    console.log(this.name, value)
}

const obj = {
    name: 'hello world'
}

console.log(test(111), test._apply(obj, [11]))