Function.prototype._call = function(...args) {
    const _this = args[0] || window
    _this.fn = this
    _this.fn(...args.splice(1))
    delete _this.fn
}


function test() {
    console.log(this.name)
}

const obj = {
    name: 'hello world'
}

console.log(test(), test._apply(obj))