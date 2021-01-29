// Level 1

let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0, 2))
console.log(challenge.substr(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let corpos = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(corpos.split(', '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let weird = 'You cannot end a sentence with because because because is a conjunction'
console.log(weird.indexOf('because'))
console.log(weird.lastIndexOf('because'))
console.log(weird.search('because'))
console.log(challenge.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('ipt'))
console.log(challenge.match('a'))
console.log('30 Days of'.concat(' JavaScript'))
console.log(challenge.repeat(2))

// Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
console.log(Math.ceil(parseFloat('9.8')))
console.log('python'.includes('on') && 'jargon'.includes('on'))
let jargon_sentence = 'I hope this course is not full of jargon'
console.log(jargon_sentence.includes('jargon'))
console.log(Math.random() * 100)
console.log(Math.random() * 256)
console.log('11111\n21248\n313927\n4141664\n51525125')
console.log(weird.substr(weird.indexOf('because'), 'because '.length * 3))

// Level 3
let love_sen = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love_sen.toLowerCase().split('love').length - 1)
console.log(weird.match(new RegExp('because', 'g')).length)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^\w ]/g, ''))
let income_sen = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let num_only = (val) => {
    if (!isNaN(val)) {
        return val;
    }
}
income_sen = income_sen.split(' ').filter(num_only)
income_sen = income_sen.map((val) => parseInt(val))
console.log(income_sen.reduce((a, b) => a + b, 0))