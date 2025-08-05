import * as CryptoJS from 'crypto-js'

/** AES-256 암호화 */
export function encryptAES256(message: string, secret: string) {
  const key = secret.length > 32 ? CryptoJS.SHA256(secret).toString().slice(0, 32) : secret.padEnd(32, ' '); // AES-256은 32바이트 키가 필요
  const encrypted = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(''),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  });

  return encrypted.toString()
}

/** AES-256 복호화 */
export function decryptAES256(encryptedMessage: string, secret: string) {
  const key = secret.length > 32 ? CryptoJS.SHA256(secret).toString().slice(0, 32) : secret.padEnd(32, ' '); // AES-256은 32바이트 키가 필요
  const decrypted = CryptoJS.AES.decrypt(encryptedMessage, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(''),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
  })

  return decrypted.toString(CryptoJS.enc.Utf8)
}

/** 이벤트 페이지 url 생성 */
export function createEventUrl<T extends { userId: string }>(domain: string, data: T, secret: string) {
  const json = JSON.stringify(data)
  const encryptedJson = encryptAES256(json, secret)

  const id = btoa(encryptedJson)
  const urlEncodedId = encodeURIComponent(id)

  return `https://${domain}?id=${urlEncodedId}`
}

// ** createEventUrl 에서 생성된 암호화된 id 복호화 */
export function decodeEventUserId<T>(encodedId: string, secret: string): T {
  const encryptedJson = atob(encodedId)
  const json = decryptAES256(encryptedJson, secret)
  return JSON.parse(json)
}