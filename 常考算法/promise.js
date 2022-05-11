class _Promise {
    constructor(fn) {
        this.status = 'pending'  // fulfilled | rejected
        this.value = null

        this.fulfillFn = []
        this.rejectFn = []

        const resolve = (value) => {
            if (this.status == 'pending') {
                this.status = 'fulfilled'
                this.value = value
                this.fulfillFn.forEach(Fn => {
                    Fn(this.value)
                })
            }
        }

        const reject = (value) => {
            if (this.status == 'pending') {
                this.status = 'rejected'
                this.value = value
                this.rejectFn.forEach(Fn => {
                    Fn(this.value)
                })
            }
        }

        try {
            fn(resolve, reject)
        } catch(e) {
            reject(e)
        }
    }

    then = (fufillFn, rejectFn) => {
        const self = this
        return new _Promise((r, j) => {
            const run = (value) => {
                setTimeout(() => {
                    const fufillValue = fufillFn(value)
                    if (fufillValue instanceof _Promise) {
                        fufillValue.then(r, j)
                    } else {
                        r(fufillValue)
                    }
                    
                }, 0);
            }
    
            const reject = (value) => {
                setTimeout(() => {
                    const rejectValue = rejectFn(value)
                    if (rejectValue instanceof _Promise) {
                        rejectValue.then(r, j)
                    } else {
                        j(rejectValue)
                    }
                }, 0);
            }
    
            if (self.status === 'fulfilled') {
                run(self.value)
            }
    
            if (self.status === 'rejected') {
                reject(self.value)
            }
    
            if (self.status === 'pending') {
                self.fulfillFn.push(run)
                self.rejectFn.push(reject)
            }
        })
    }

    static all = (arr = []) => {
        const list = []
        return new _Promise((r, j) => {
            arr.forEach((fn, index) => {
                fn.then((res, rej) => {
                    list[index] = res
                    if (list.length === arr.length) {
                        r(list)
                    }
                })
            })
        })
    }

    static race = (arr = []) => {
        return new _Promise((r, j) => {
            arr.forEach((fn, index) => {
                fn.then((res, rej) => {
                    r(res)
                })
            })
        })
    }
}

let z = new _Promise((resolve, reject) => {
    resolve('hello world')
}).then(val => {
    console.log(val)
    return new _Promise((r, j) => {
        r(val + 'sss')
    })
}).then(val => {
    console.log(val, 'next')
})

_Promise.all([
    new _Promise((r, j) => r(100)),
    new _Promise((r, j) => r(200))
]).then((r, j) => {
    console.log(r)
})