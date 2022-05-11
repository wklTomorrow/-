/**
 * 红亮3s，绿亮2s,黄亮1s
 * 用职责链表示
 */

class Wrap {
    constructor(type, time) {
        this.type = type
        this.time = time
        this.next = null
    }

    setNextFn = (nextType) => {
        this.next = nextType
    }

    excute = () => {
        setTimeout(() => {
            console.log(this.type)
            this.next && this.next.excute()
        }, this.time)
    }
}

const green = new Wrap('green', 2000)
const yellow = new Wrap('yellow', 1000)
const red = new Wrap('red', 3000)
red.setNextFn(green)
green.setNextFn(yellow)
yellow.setNextFn(red)

red.excute()

