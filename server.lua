local _ = function(k,...) return ImportPackage("i18n").t(GetPackageName(),k,...) end

-- LOADING

function LoadPhone(player)
    SetPlayerAnimation(player, 'PHONE_HOLD')
    local query = mariadb_prepare(sql, "SELECT * FROM messages WHERE messages.from = '?' OR messages.to = '?';", tostring(PlayerData[player].phone_number), tostring(PlayerData[player].phone_number))

    mariadb_async_query(sql, query, OnMessagesLoaded, player)
end
AddRemoteEvent("LoadPhone", LoadPhone)


function UnloadPhone(player)
    SetPlayerAnimation(player, 'PHONE_TAKEOUT_HOLD')
end
AddRemoteEvent("UnloadPhone", UnloadPhone)

function OnMessagesLoaded(player)
    local messages = {}

    for i = 1, mariadb_get_row_count() do
        local message = mariadb_get_assoc(i)

        messages[i] = { content = string.gsub(message['content'], '"', "\\\""), from = message['from'], to = message['to'] }
    end

    CallRemoteEvent(player, "OnPhoneLoaded", player, PlayerData[player].phone_number, messages, PlayerData[player].phone_contacts)
end

-- CONTACTS

function ContactCreated(player, name, phone)
    local query = mariadb_prepare(sql, "INSERT INTO phone_contacts (`id`, `owner_id`, `name`, `phone`, `last_message_at`) VALUES (NULL, '?', '?', '?', '?');",
		tostring(PlayerData[player].accountid), name, phone, tostring(os.time(os.date("!*t"))))

	mariadb_query(sql, query, NullCallback, player)
end
AddRemoteEvent("ContactCreated", ContactCreated)

-- CONTACTS

function ContactUpdated(player, name, phone)
    local query = mariadb_prepare(sql, "INSERT INTO phone_contacts (`id`, `owner_id`, `name`, `phone`, `last_message_at`) VALUES (NULL, '?', '?', '?', '?');",
        tostring(PlayerData[player].accountid), name, phone, tostring(os.time(os.date("!*t"))))

    mariadb_query(sql, query, NullCallback, player)
end
AddRemoteEvent("ContactCreated", ContactCreated)

-- MESSAGES

function MessageSent(player, phone, content)
    local created_at = tostring(os.time(os.date("!*t")))
    local query = mariadb_prepare(sql, "INSERT INTO messages (`id`, `from`, `to`, `content`, `created_at`) VALUES (NULL, '?', '?', '?', '?');",
        tostring(PlayerData[player].phone_number), phone, content, created_at)

    mariadb_query(sql, query, OnMessageCreated, player, phone, content, created_at)
end
AddRemoteEvent("MessageSent", MessageSent)

function OnMessageCreated(player, phone, content, created_at)
    CallRemoteEvent(player, "NewMessage", PlayerData[player].phone_number, phone, content, created_at)
end

-- LOADERS

function OnAccountByPhoneLoaded(player)
	if (mariadb_get_row_count() == 0) then
		CallRemoteEvent(player, "MessagesLoaded", {})
	else
        local receiverId = mariadb_get_value_index(1, 1)
        
        local query = mariadb_prepare(sql, "SELECT * FROM messages WHERE (from_id = '?' AND to_id = '?') OR (from_id = '?' AND to_id = '?');", tostring(PlayerData[player].accountid), tostring(receiverId), tostring(receiverId), tostring(PlayerData[player].accountid))

	    mariadb_async_query(sql, query, OnMessagesLoaded, player, receiverId)
    end
end

-- UTILS

function NullCallback()
end