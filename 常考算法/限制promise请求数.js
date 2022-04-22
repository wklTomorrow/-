/**
 * 给定一个最大长度，限流的执行promise
 */

class Limit {
    constructor(max) {
        this.max = max
        this.queue = []
        this.count = 0
    }

    add(fn) {
        this.queue.push(fn)
        return this
    }

    excute() {
        const run = () => {
            while (this.count < this.max && this.queue.length) {
                const fn = this.queue.shift()
                this.count ++
                fn().then(() => {
                    this.count --
                    run()
                })
            }
        }
        // 尽早的开始执行
        const quickStart = Array.from({
            length: Math.max(this.max, this.queue.length),
        }, () => Promise.resolve().then(() => run()))
        return Promise.all([...quickStart])
    }
}

const p = (time) => {
    return function () {
        return new Promise((r, j) => {
            setTimeout(() => {
                console.log(time)
                r()
            }, time)
        })
    }
}

const limit = new Limit(2)
limit.add(p(100)).add(p(20000)).add(p(0)).add(p(4000)).excute()