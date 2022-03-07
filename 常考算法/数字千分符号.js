/**
 * 123456789
 * 123,456,789
 */

const num = '123456789'

const deal = str => {
    return str.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

console.log(deal(num))