# 偽 · 登入系統 LoginTinyProject version 1.1

一個基於 Node.js 的 Express 框架練習專案

## 專案畫面 Demo
[<img align="center" src="https://github.com/MOMOJMOGG/LoginTinyProject/blob/master/public/images/HomePage.PNG" height="300" width="500" />]()
[<img align="center" src="https://github.com/MOMOJMOGG/LoginTinyProject/blob/master/public/images/Succeed.PNG" height="300" width="500" />]()
[<img align="center" src="https://github.com/MOMOJMOGG/LoginTinyProject/blob/master/public/images/Fail.PNG" height="300" width="500" />]()

## 功能描述 - Features
- 使用者輸入帳號與密碼進行登入驗證
- 使用者可以保持登入狀態 　--v1.1 更新功能
- 使用者可以登出　--v1.1 更新功能

## 環境建置需求與套件版本 - Prerequisies & Package Version
- 開發平台: [Visual Studio Code](https://code.visualstudio.com/download)
- 開發環境: [Node.js](https://nodejs.org/en/) - v10.15.0
- 開發框架: [Express](https://expressjs.com/en/starter/installing.html) - v4.17.1
- 開發套件: [Express-handlebars](https://www.npmjs.com/package/express-handlebars) - v5.3.0
- 開發套件: [Nodemon](https://www.npmjs.com/package/nodemon) - v2.0.7
- 開發套件: [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers) - v0.10.0
- 開發套件: [cookie-parser](https://www.npmjs.com/package/cookie-parser) - v1.4.5


## 安裝與執行步驟 - Installation & Execution
1. 打開你的終端機(Terminal)，git clone 此專案至本機電腦，或直接從 github 下載並解壓縮此專案

```
git clone https://github.com/MOMOJMOGG/RestaurantList.git
```

2. 在終端機下指令，進入存放此專案的資料夾，Ex: 放置此專案位置 D://RestaurantList

```
cd D://RestaurantList
```

3. 在終端機下指令，安裝此專案需要的 npm 套件

```
npm install
```

4. 運行 start 腳本指令，啟動專案伺服器

```
npm run start
```

5. 當終端機出現以下字樣，表示伺服器已啟動成功

```
App is running on http://localhost:3000.
```

6. 在終端機下指令 Ctrl+C 兩次，關閉伺服器

7. 使用以下 5 組帳號密碼，進行登入

```
# Account 1
tony@stark.com
iamironman

# Account 2
captain@hotmail.com
icandothisallday

# Account 3
peter@parker.com
enajyram

# Account 4
natasha@gamil.com
*parol#@$!

# Account 5
nick@shield.com
password
```

8. (Option) 若想在此專案使用開發者模式，在終端機下指令，安裝 nodemon 套件，幫助自動重啟伺服器。在第四步驟，改運行 dev 腳本指令，啟動專案伺服器

```
npm install -g nodemon

npm run dev
```


## 專案開發人員 - Contributor

> [MOMOJ](https://github.com/MOMOJMOGG)
