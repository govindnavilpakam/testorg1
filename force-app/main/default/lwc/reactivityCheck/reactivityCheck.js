import { LightningElement } from 'lwc';

export default class ReactivityCheck extends LightningElement {
    
    userAddress = "Block 1, Hyderabad"

    myPersonalDetails = [
  {
    "_id": "69b01a6a3c830368a1e79272",
    "index": 0,
    "guid": "d74b7151-9127-4cc7-a261-b065ccf85407",
    "isActive": true,
    "balance": "$1,938.04",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Patty Marquez",
    "gender": "female",
    "company": "EVIDENDS",
    "email": "pattymarquez@evidends.com",
    "phone": "+1 (905) 580-3659",
    "address": "267 Pierrepont Street, Swartzville, Oregon, 9714",
    "registered": "2022-12-15T06:38:56 -06:-30",
    "latitude": -69.546927,
    "longitude": 171.249097,
    "tags": [
      "aliquip",
      "cillum",
      "reprehenderit",
      "non",
      "quis",
      "aliquip",
      "amet"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Anna Higgins"
      },
      {
        "id": 1,
        "name": "Nettie Benson"
      },
      {
        "id": 2,
        "name": "Marcy Donaldson"
      }
    ],
    "greeting": "Hello, Patty Marquez! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  }
]
    updateAddress(){
        this.userAddress = "Block 2, Hyderabad";
        this.myPersonalDetails[0].guid = "1234567890";
        this.myPersonalDetails[0].friends[1].name = "Govind";
    }
}