const crypto = require('crypto') //crypto 단방향, chiper 양방향
const bcrypt = require('bcrypt') // 'salt'를 그 때 그 때 마다 다르게 입력하여 암호화 시킴


let pass = '1111'
let salt = 'sdflkj23i432n89S(*D(#W*#'
let sha512 = crypto.createHash('sha512').update(pass+salt).digest('base64')
let sha5122 = crypto.createHash('sha512').update(pass+salt).digest('base64')
console.log(pass)
console.log(sha512)
console.log(sha5122)


let hash
const genPass = async() => {
  hash = await bcrypt.hash(pass, 5)
  console.log(hash)
}
const comparePass = async () => {
  let compare = await bcrypt.compare('1111', hash)
  console.log(compare)
}
genPass()
setTimeout(comparePass, 2000)