const crypto = require("crypto");

// 暗号・複合対象の文字列
const originalText = 'I am text.';
// 暗号化キー
const key = crypto.randomBytes(32);
// 初期化ベクトル（IVと書かれることが多い）
const iv = crypto.randomBytes(16);

// 暗号化（出力用にhex（16進数に変換しています））
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
cipher.update(originalText, 'utf8', 'hex');
const encryptedText = cipher.final('hex'); 
console.log('encrypted:', encryptedText);

// 復号化
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
decipher.update(encryptedText, 'hex', 'utf8');
const decryptedText = decipher.final('utf8');
console.log('decrypted:', decryptedText);
