[nomo-messenger-kit](README.md) / Exports

# nomo-messenger-kit

## Table of contents

### Interfaces

- [UserMatrix](interfaces/UserMatrix.md)

### Functions

- [nomoJoinRoom](modules.md#nomojoinroom)
- [nomoListenRoom](modules.md#nomolistenroom)
- [nomoRegisterOrLogin](modules.md#nomoregisterorlogin)
- [nomoSendMessage](modules.md#nomosendmessage)

## Functions

### nomoJoinRoom

▸ **nomoJoinRoom**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[join_room/join_room.ts:1](https://github.com/nomo-app/nomo-messenger-kit/blob/2b37e2d/src/join_room/join_room.ts#L1)

___

### nomoListenRoom

▸ **nomoListenRoom**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[listen_room/listen_room.ts:1](https://github.com/nomo-app/nomo-messenger-kit/blob/2b37e2d/src/listen_room/listen_room.ts#L1)

___

### nomoRegisterOrLogin

▸ **nomoRegisterOrLogin**(): `Promise`<[`UserMatrix`](interfaces/UserMatrix.md)\>

#### Returns

`Promise`<[`UserMatrix`](interfaces/UserMatrix.md)\>

#### Defined in

[register_login/register_login.ts:8](https://github.com/nomo-app/nomo-messenger-kit/blob/2b37e2d/src/register_login/register_login.ts#L8)

___

### nomoSendMessage

▸ **nomoSendMessage**(`args`): `Promise`<`void`\>

TODO: document here

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `SendMessageArgs` |

#### Returns

`Promise`<`void`\>

#### Defined in

[send_message/send_message.ts:10](https://github.com/nomo-app/nomo-messenger-kit/blob/2b37e2d/src/send_message/send_message.ts#L10)
