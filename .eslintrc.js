module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "serviceworker": true  // サービスワーカーのグローバル変数を有効化
  },
  "extends": "eslint:recommended",
  "globals": {
    "self": "readonly",
    "caches": "readonly",
    "fetch": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    // 必要に応じてルールを追加
  }
};