---
sidebar_position: 2
---

import Mermaid from '@theme/mermaid'

# DB Schema

---

## Summary

* FirestoreDb
  * Collections
  * References
  * Types
* RealtimeDb - Not Implemented

---

## FirestoreDb

The FirestoreDB will store the permanent data of conversations, users, etc

| Collection Name | Short description |
| --------------- | ----------------- |
| users | Stores the users details that are not saved by the FirebaseAuth. |
| conversations | Stores the conversations details : 2 peoples + lastRead + lastMessageRef |
| messages -- obsolete | Stores the message : conversationId + createdDate + read |
| families | Stores the families details : members + code + name |



> For the User, do **not** use auto-generated ID. FirebaseAuth generates UID that can be used as the ID, and makes it easier to link to the user document

> The User document does not have the email as it is stored with the FirebaseAuth. 

```TypeScript
interface User {
    firstName: string
    lastName: string
	familyId: string
}
```

```TypeScript
interface Conversation {
    members: string[] // can be 2 people conv, or the entire family(.members) 
    name: string
    lastReadId: string // last read message
}
```

```TypeScript
interface Message {
    conversationId: string
    senderId: string
    content: string
    read: boolean
}
```

```TypeScript
interface Family {
    members: stirng[]
    name: string
    code: string // sha1(familyName + Date.now()).slice(0, 9)
}
```

<Mermaid chart={`
    stateDiagram-v2
        FirestoreDB --> users
        FirestoreDB --> families
        FirestoreDB --> conversations
        conversations --> messages
        users --> user[obj]
        families --> family[obj]
        conversations --> conversation[obj]
        family[obj] --> user[obj]
        user[obj] --> family[obj]
        messages --> message[obj]
        message[obj] --> conversation[obj]
        conversation[obj] --> user[obj]
`}/>


## RealtimeDB - Not Implemented

The RTDB stores the data as json. When a conversation is opened, load the last 10 messages in RTDB, and add all other messages afterwards. When conversation is closed, save all messages into FirestoreDB.

As 50 simultaneous convs max, might have to change or not use RTDB at all

```json
{
    '{conversationID}': {
        'dest': '',
        'src': '',
        'lastRead': '',
        'lastMessage': '',
        'messages': [
            {
                'conversation': '{conversationId}',
                'content': 'hello grand pere',
                'read': false
            },
            // last 10 message
        ]
    }
}
```