# レベルアップNode.js

「レベルアップNode.js」のサンプルコードです。

## 注意事項

本書におけるJavaScriptの動作確認は、執筆を開始した時点の最新版（Node.js v12.6.0）で行なっております。
なお筆者は、macのnodebrewを利用いたしました。

## 【参考】：macでのnodebrewのインストール

```sh
# Homebrew で nodebrew をインストールします。
$ brew install nodebrew

# インストール可能な Node.js の一覧を表示します。
$ nodebrew ls-remote

# LTSであるv12のNode.js(2020/01/21時点)をインストールします。
# なお単なる nodebrew install v12.14.1 でも問題ありません(遅いですが)
$ nodebrew install-binary v12.14.1

# インストール後に使用を宣言すると有効になります
# これは nodebrew が Node.js のバージョン切り替え機能を有しているためです
$ nodebrew use v12.14.1

# nodebrewでインストールしたnodeのパスを通す
$ vim ~/.bash_profile
# 以下がなければ追加する
> # Node.js
> export PATH=$HOME/.nodebrew/current/bin:$PATH

$ source ~/.bash_profile
$ node --version
v12.14.1
```
