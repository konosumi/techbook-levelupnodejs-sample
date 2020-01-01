# Node.js中級者を目指す

技術書典7「Node.js中級者を目指す」のサンプルコードです

## 【参考】：macでのnodebrewのインストール

```sh
# Homebrew で nodebrew をインストールします。
$ brew install nodebrew

# インストール可能な Node.js の一覧を表示します。
$ nodebrew ls-remote

# 今回はv12の最新版(2019/07/16時点)をインストールします。
# なお単なる nodebrew install v12.6.0 でも問題ありません(遅いですが) 
$ nodebrew install-binary v12.6.0

# インストール後に使用を宣言すると有効になります
# これは nodebrew が Node.js のバージョン切り替え機能を有しているためです
$ nodebrew use v12.6.0

# nodebrewでインストールしたnodeのパスを通す
$ vim ~/.bash_profile 
# 以下がなければ追加する
> # Node.js
> export PATH=$HOME/.nodebrew/current/bin:$PATH

$ source ~/.bash_profile
$ node --version
v12.6.0
```

## お知らせ

* リンク集（links.md）を追加しました。
