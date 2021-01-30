// 1
let first_name = 'Yahel',
    last_name = 'Rosen',
    country = 'Israel',
    city = 'Modiin',
    age = 19,
    is_married = false,
    year = 2020

console.log(typeof first_name)
console.log(typeof last_name)
console.log(typeof country)
console.log(typeof age)
console.log(typeof is_married)
console.log(typeof year)

// 2
console.log('10' == 10)
// 3
console.log(parseInt('9.8') == 10)

// 4 i
// true values
console.log(10 === 10)
console.log('9' > '2')
console.log(0 == false)

// 4 ii
// false values
console.log(10 === '10')
console.log(undefined === null)
console.log('milk'.length != 'boys'.length)

// 5
/*1. true
* 2. true
* 3. false
* 4. false
* 5. true
* 6. true
* 7. false
* 8. false
* 9. false
* 10. true
* 11. false*/
// 12.
console.log('python'.length === 'jargon'.length)

// level 2
//1
// let base = prompt('enter base')
// let height = prompt('enter height')
// alert('area: ' + base * height * 0.5)
//
// // 2
// let a = prompt('enter a')
// let b = prompt('enter b')
// let c = prompt('enter c')
// alert('perimeter: ' + a * b * c)
//
// //3
// let length = prompt('enter length')
// let width = prompt('enter width')
// alert('area: ' + length * width)
// alert('perimeter: ' + 2 * (length + width))

// level 3
let dateFormat = require('dateformat')
const date = new Date()
console.log(dateFormat(date, 'yyyy-mm-dd HH:mm'))
console.log(dateFormat(date, 'dd-mm-yyyy HH:mm'))
console.log(dateFormat(date, 'dd/mm/yyyy HH:mm'))
console.log(dateFormat(date, 'yyyy-mm-dd HH:mm'))
