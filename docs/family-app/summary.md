---
sidebar_position: 1
---

# Summary

- [Repository Architecture](/docs/family-app/architecture)
- [Getting Started](/docs/family-app/getting-started)

- [Redux](/docs/family-app/redux)

### TOMAS Family App

The Family Application is the part of the project dedicated to the family. It includes a clean UI to comply with other tool applications we can find on the stores nowdays. The application, compared to the senior part, includes more features, as detailed below

| Feature | Description |
|---|---|
| Family Management | The family creator can manage the family members : invite new members to join, remove undesired users of the family, edit informations or roles. |
| Cloud Picture Management | The family members can remove picture from the shared cloud. |
| Conversation Creation | The family members can start a new conversation with one or several people in the same family |

### Technical details

The Family App is developped using [Flutter](https://flutter.dev). Flutter is a powerful framework built on dart, developed and maintained by Google. We chose to use flutter for the tools helping to provide a clean and simple UI, and for the huge community behind that offers support.

The app runs on android devices from API 28, and iOS devices from iOS 14+.

All the data is stored in a Firebase Project, providing Analytics (in the EU), a real-time DB and a NoSQL DB (Firestore, both stored in the EU). Moreover Firebase provides authentication services and crash anayltics and a shared environment for Over The Air environment updates.

The Family App also uses [Redux](https://redux.js.org/) which is a way to share data through all the Flutter Widgets. See the [section](/docs/family-app/redux)