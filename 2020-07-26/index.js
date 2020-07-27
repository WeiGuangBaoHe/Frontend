// console.log(typeof true)
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof 123)
// console.log(typeof 123n)
// console.log(typeof 'abc')
// console.log(typeof Symbol('symbol'))
// console.log(typeof {a: 1, b: 2})
// console.log(typeof function name(params) {})

// console.log(typeof {a: 'a', b: 'b'})
// console.log(typeof Promise.resolve())
// console.log(typeof new Date())
// console.log(typeof [1, 2, 3])

const _toString = Object.prototype.toString
class A {

}

console.log(_toString.call(new A()))