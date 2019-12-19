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
- Contact deletion and update needs to synchronized with `PlayerData[player].phone_contacts`
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

Load player's `phone_contacts`:

```
function LoadPlayerPhoneContacts(player)
	local query = mariadb_prepare(sql, "SELECT * FROM phone_contacts WHERE phone_contacts.owner_id = ? ORDER BY phone_contacts.name;", PlayerData[player].accountid)

	mariadb_async_query(sql, query, OnPhoneContactsLoaded, player)
end

function OnPhoneContactsLoaded(player)
	for i = 1, mariadb_get_row_count() do
        local contact = mariadb_get_assoc(i)
        PlayerData[player].phone_contacts[i] = { id = tostring(contact['id']),  name = contact['name'], phone = contact['phone'] }
    end
    print("Phone contacts loaded for "..PlayerData[player].accountid)
end
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