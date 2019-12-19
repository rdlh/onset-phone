# Onset-Phone

## 🚀 Features
### 🏠 Homepage
- Choose an app
	- SMS (by [@rdlh](https://github.com/rdlh))
	- Contacts (by [@rdlh](https://github.com/rdlh))
### 🧑‍🤝‍🧑 Contacts:
- View and search your contacts list
- Create contacts
- Update contacts
- Delete contacts
### 💬 Messages:
- Send messages
- Receive messages
- Send emojis (Ex: `:)` -> `😊`)
### 🔐 Security
- [x] XSS injections proof
- [x] SQL injections proof

## TODO:
- Create a random and unused number for accounts
- Make sure the receiver is getting the message (needs to be tested on a real server)

## Coming soon:
- Darkmode
- Change background
- Send GPS position
- More emoji
- Bug fixes

## Add it in your server:

```
"server_scripts": [
	...
    "onset-phone/server.lua"
],
"client_scripts": [
    ...
    "onset-phone/client.lua"
],
"files": [
    ...
    "onset-phone/ui/dist/index.html",
    "onset-phone/ui/dist/app.js",
    "onset-phone/ui/dist/chunk-vendors.js",
    "onset-phone/ui/dist/app.css"
]
```

and don't forget to run [onset-phone.sql](https://github.com/rdlh/onset-phone/blob/master/onset-phone.sql)

## Contribute:

All PR answered in less than 1 day.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```