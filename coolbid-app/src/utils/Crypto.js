const crypto = require('crypto')
const chalk = require('chalk')

const priPassword = 'myPassword'
const message = 'Testing Message'
play2RSA(message, priPassword)

async function play2RSA(message, priPassword) {
  const keyPair = await makeKeyPair(priPassword)
  console.log(chalk.bgBlue.bold(`PublicKey: ${keyPair.publicKey}`))
  console.log(chalk.bgGreen.bold(`PrivateKey: ${keyPair.privateKey}`))
  const crypted = encrypt(message, keyPair.publicKey)
  console.log(
    chalk.bgCyan.bold(`Encrypt Result: ${crypted.toString('base64')}`)
  )
  try {
    const decrypted = decrypt(crypted, keyPair.privateKey, priPassword)
    console.log(chalk.bgRed.bold(`Decrypt Result: ${decrypted.toString()}`))
  } catch (error) {
    console.log(chalk.bgWhite.bold('Decrypt Failed'))
  }
}

// Encrypt
function encrypt(data, key) {
  return crypto.publicEncrypt(key, Buffer.from(data))
}

// Decrypt
function decrypt(encrypted, key, priPassword) {
  const keyObj = {
    key: key,
    passphrase: priPassword
  }
  return crypto.privateDecrypt(keyObj, encrypted)
}

// Create KeyPair and encrypt PrivateKey again
function makeKeyPair(priPassword) {
  return new Promise((resolve, reject) => {
    crypto.generateKeyPair(
      'rsa',
      {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem'
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
          cipher: 'aes-256-cbc',
          passphrase: priPassword
        }
      },
      (err, publicKey, privateKey) => {
        const keyPair = {
          publicKey: publicKey,
          privateKey: privateKey
        }
        err !== null ? reject(err) : resolve(keyPair)
      }
    )
  })
}
