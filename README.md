# React Native 環境構築手順

以下手順にしたがって環境構築を行ってください

## clone 前の注意点

改行コードの自動変換を`false`にしてください  
以下コマンドを実行することで設定できます

```
git config --global core.autocrlf false
```

以下コマンドで設定確認ができます

```
git config --global --list
or
git config --global -l
```

一覧の中に`core.autocrlf=false`というような記載があれば OK

## 1. 開発に必要なソフトウェアのインストール

まずは開発にて利用する各種ソフトウェアのインストールを行います  
一応参考サイトも載せておきますが、一生懸命書いたので  
下の手順に沿ってインストールを進めてもらえると嬉しいです

<u>**注意**</u>

下記手順は WindowsOS 向けの内容です  
MacOS 利用の方は参考サイトの内容にて環境構築をお願いします

#### 参考サイト

■ 公式の環境構築手順  
　英語に自信がある方はこちら

- [Setting up the development environment · React Native](https://reactnative.dev/docs/environment-setup?guide=native)

■ WindowsOS 向け

- [React Native を使用した Android 向けの開発の開始](https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/react-native-for-android)
- [ReactNative の環境構築方法](https://port365.jp/react-native/)

■ MacOS 向け

- [VisualStudioCode で ReactNative のデバッグ環境を構築する](https://qiita.com/t_okkan/items/2b6b94340b837189054c)
- [【React Native】 開発環境の構築とアプリ作成最初の一歩【初心者向け】](https://qiita.com/keneo/items/aaa5946bfa4d10353302)

#### 参考サイトの手順を見る人向け

後述しますが Android アプリ開発を行うため、JDK のインストールも必要になります  
上記サイトの手順では Android Studio（Android アプリ開発向け IDE）のインストールと別手順で導入していますが、  
Android Studio に JDK が同梱されていますので、別でインストールする必要はありません  
（すでに java8 を導入している方はそれを利用するでも OK です）

### **① 統合開発環境**

手始めに統合開発環境（以降 IDE）のインストールを行います  
以下手順で実施してください

### **①-1 Visual Studio Code**

まずは Visual Studio Code （以降 vscode）をインストールします  
（すでにインストール済みの方はそれを使うで OK です）  
以下サイトより、インストーラをダウンロードしてインストールを行ってください
https://code.visualstudio.com/

インストーラを起動して道なりにウィザードを進めていけば問題なくインストールできるかと思います

### **①-2 フォーマッタ（vscode の拡張機能、ここはお好みで良いです）**

以下の拡張機能のインストールを行ってください

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

上記拡張機能の導入後、vscode の`setting.json`に以下を追加してください  
`File` > `Preferences` > `Settings` から設定を開き、  
右上の `Open Settings(JSON)` のアイコンを押下すると対象のファイルが開かれます

※ Windows 環境の場合は対象ファイルは以下にありますので、こちらを編集しても OK です  
`(ユーザーのホームディレクトリ)\AppData\Roaming\Code\User\settings.json`　　
ユーザーのホームディレクトリ = C:\Users\\(windows アカウント名)

```
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.validate": [
    "javascript",
    "typescriptreact",
    "javascript",
    "typescriptreact"
  ]
```

### **② Node.js インストール**

ReactNative では Javascript を動作させる必要がありますので、  
Javascript の実行環境となる Node.js を導入します  
LTS 版の Node.js であれば問題ないかと思いますが、  
こちらで動作確認ができている v18 系の Node.js 導入を行います

以下の手順に沿ってインストールしてください

#### **②-1 nvm-windows インストール**

まずはバージョンの選択をして、動作環境を構築できるようマネージャソフトを導入します

以下リンクにアクセスして、最新バージョンの `nvm-setup.exe` をダウンロードし、インストールを行なってください  
[Releases · coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

以下コマンドを叩いて、バージョンが返ってくれば OK です

```
> nvm version

1.1.12
```

#### **②-2 nvm を使って Node.js インストール**

以下コマンドで、nvm が管理している Node.js のバージョン情報を確認できます

```
> nvm list available

|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|    21.5.0    |   20.10.0    |   0.12.18    |   0.11.16    |
|    21.4.0    |    20.9.0    |   0.12.17    |   0.11.15    |
|    21.3.0    |   18.19.0    |   0.12.16    |   0.11.14    |
|    21.2.0    |   18.18.2    |   0.12.15    |   0.11.13    |
|    21.1.0    |   18.18.1    |   0.12.14    |   0.11.12    |
|    21.0.0    |   18.18.0    |   0.12.13    |   0.11.11    |
|    20.8.1    |   18.17.1    |   0.12.12    |   0.11.10    |
|    20.8.0    |   18.17.0    |   0.12.11    |    0.11.9    |
|    20.7.0    |   18.16.1    |   0.12.10    |    0.11.8    |
|    20.6.1    |   18.16.0    |    0.12.9    |    0.11.7    |
|    20.6.0    |   18.15.0    |    0.12.8    |    0.11.6    |
|    20.5.1    |   18.14.2    |    0.12.7    |    0.11.5    |
|    20.5.0    |   18.14.1    |    0.12.6    |    0.11.4    |
|    20.4.0    |   18.14.0    |    0.12.5    |    0.11.3    |
|    20.3.1    |   18.13.0    |    0.12.4    |    0.11.2    |
|    20.3.0    |   18.12.1    |    0.12.3    |    0.11.1    |
|    20.2.0    |   18.12.0    |    0.12.2    |    0.11.0    |
|    20.1.0    |   16.20.2    |    0.12.1    |    0.9.12    |
|    20.0.0    |   16.20.1    |    0.12.0    |    0.9.11    |
|    19.9.0    |   16.20.0    |   0.10.48    |    0.9.10    |

This is a partial list. For a complete list, visit https://nodejs.org/en/download/releases
```

上記確認後、LTS 18.系 の最新版を導入してください  
今回（2023/01/15 時点）は以下コマンドを実行し、18.19.0 を導入します  
※ 以降 expo や Storybook のアップデートで別バージョンが利用できるようになる可能性があります

```
> nvm install 18.19.0
```

インストールが完了したら、以下コマンドを実行し利用するバージョンを切り替えますが、  
まずは導入されている Node.js のバージョンを確認します

以下コマンドを入力し、↑ の手順でインストールしたバージョンと異なるバージョンが返ってくる、  
または node コマンドが利用できないようなエラーが表示されるかと思います

```
> node -v
```

<u>**注意**</u>  
この時バージョンが表示されている場合はプロジェクト業務で利用している  
Node.js がインストールされているものと思われます  
こちらでの作業が終わり次第、戻す必要があるかと思いますので  
表示されたバージョンはメモしておくなり、記憶するなりしておいてください

利用バージョンを以下のコマンドによって切り替えます

```
> nvm use 18.19.0
```

以下コマンドを実行し、切り替え後のバージョンが返ってくれば OK です

```
> node -v

v18.19.0
```

### **③ React Native CLI**

Node.js の インストールが済めば、パッケージマネージャーである  
npm の利用も可能となっているかと思います

React Native 開発の CLI もありますので、これをインストールしておきましょう

```
npm install -g react-native-cli
```

### **④ Chocolatey（Python の導入にしか使わないので飛ばしても OK です）**

以降諸々のインストールを行いますので、  
管理を容易にするべくパッケージマネージャーとなる Chocolatey を導入します  
Linux の yum などと同じような立ち位置のものと思ってください

以下リンクより `Now run the following command:` にあるコマンドをコピー
[Chocolatey Software | Installing Chocolatey](https://chocolatey.org/install#individual)

たぶん以下のようなコマンドがコピーされるかと思います

```
> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

コマンドプロンプトを管理者権限で実行より開き、コピーしたコマンドを実行してください

以下コマンドを実行してバージョンが帰ってきたら Chocolatey のインストールは完了です

```
> choco -v

2.2.2
```

### **⑤ Python インストール （導入済みの方は無視で OK です）**

ReactNative はビルド時に Python を利用しているため Python の実行環境が必要となります

#### Chocolatey を導入している方

以下コマンドを叩くだけだけです

```
> choco install -y python
```

#### Chocolatey を導入していない方

[Python の公式サイト](https://www.python.org/)よりインストーラをダウンロード、起動してインストールを行ってください  
3 系の最新版で OK です

#### Python インストールの確認

Python はインストール後、実行可能とするために  
OS の再起動が必要となりますので OS の再起動を行ってください

例によって、バージョン確認コマンドを叩いてバージョンが帰ってくれば OK です

```
> python --version

Python 3.12.1
```

## 2. Android Studio の導入

Android Studio は Android アプリ開発向けの IDE です
今回の ReactNative 開発で利用する IDE は最初に導入してもらった vscode となるので、IDE としては利用しません

ただ、Android Studio には AndroidOS のエミュレータや Android SDK など、  
便利アイテムが同梱されていますので Android Studio の導入を行います

### ① Android Studio のインストール

[Android Studio の公式サイト](https://developer.android.com/studio?hl=ja)よりインストーラをダウンロードしてください  
（WindowsOS、MacOS どちらも上記サイトよりインストーラが取得できるはず）

インストーラを起動したら、 `Android Studio Setup` というタイトルのダイアログが表示されるかと思います  
各設定はデフォルトのまま当該ダイアログでのインストールを行ってください

それが完了し Android Studio を起動すると、  
今度は `Android Studio Setup Wizard` というダイアログが表示されますので、  
以降の手順に従って操作を行ってください

**(1) `Install Type` の画面にて `Custom` を選択**

![AndroidStudio_セットアップウィザード_インストール方式](./readme_img/androidstudio_setup_wizard_install_type.png)

**(2) `SDK Components Setup` の画面にて `Performance (Intel ® HAXM)` と `Android Virtual Device` を選択**

おそらく最初からチェックボックスにチェックが入った状態で表示されるかと思いますが、  
念のため確認し、チェックが入っていない場合にはチェックを入れてください

![AndroidStudio_セットアップウィザード_SDKコンポーネント](./readme_img/androidstudio_setup_wizard_sdk_components_setup.png)

**(3) `Emulator Settings` の画面にて、推奨されるメモリ数を指定**

![AndroidStudio_セットアップウィザード_エミュレータ設定](./readme_img/androidstudio_setup_wizard_emulator_settings.png)

上記で進め、以降の画面はそのまま進めてもらえれば OK です

### ② 環境変数の設定

システム環境変数にそれぞれ以下を設定してください

| 対応     | 変数（キー） | 値                                                                      |
| -------- | ------------ | ----------------------------------------------------------------------- |
| 新規追加 | JAVA_HOME    | C:\Program Files\Android\Android Studio\jbr                             |
| 新規追加 | ANDROID_HOME | (ユーザーのホームディレクトリ)\AppData\Local\Android\Sdk                |
| 追記     | path         | (ユーザーのホームディレクトリ)\AppData\Local\Android\Sdk\platform-tools |

`path` 設定の確認のため以下コマンドを実行し、記載のように表示されれば OK です

```
> adb

Android Debug Bridge version 1.0.41
Version 34.0.5-10900879
Installed as C:\Users\a17001092\AppData\Local\Android\Sdk\platform-tools\adb.exe
Running on Windows 10.0.22621

～ 長いので以下省略 ～
```

## 3. アプリケーション起動

以下手順にて、Android エミュレータ上でアプリを起動します

### 3-1. アプリケーション起動手順

以下コマンドを実行することで、[Metro](https://metrobundler.dev/)という JavaScript の Bundler が起動します  
これは React Native で記載したコードをトランスパイルし、  
依存関係を含めた開発モジュールを 1 つの JavaScript ファイルにまとめます

```
> npm start
```

起動するとコンソール上に以下のような出力がされます

![Metro起動](/readme_img/start_metro.png)

今回は Android エミュレータにて起動を行いますので、  
案内の通り、`a` キーを押下します

すると、Android エミュレータ上でアプリを立ち上げることができます
