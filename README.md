# api-quotes-vietnamese

[![CodeFactor](https://www.codefactor.io/repository/github/vkhangstack/api-quotes-vietnamese/badge)](https://www.codefactor.io/repository/github/vkhangstack/api-quotes-vietnamese)
[![DeepScan grade](https://deepscan.io/api/teams/15608/projects/18785/branches/469129/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=15608&pid=18785&bid=469129)

Một server trả về các quotes theo random, author, categories, length,day,...
dưới dạng json

## List API

### Add quote to list of quotes

> /quotes

**Request body**

```js
{
    "content": "Nếu cuộc đờ là một bộ phim. Tại sao ta không viết lên kết thúc của bộ phim ấy?",
    "author": {
        "_id": "vkhang",
        "name":"Khang Ta"
    },
    "tags": ["technical", "love", "css"]
}
```

**Response**

```js
{
    "quote": {
        "content": "Nếu cuộc đờ là một bộ phim. Tại sao ta không viết lên kết thúc của bộ phim ấy?",
        "author": {
            "_id": "vkhang",
            "name": "Khang Ta"
        },
        "tags": [
            "technical",
            "love",
            "css"
        ],
        "length": 23,
        "_id": "6155a423c54de836935538e7",
        "createdAt": "2021-09-30T11:48:51.457Z",
        "updatedAt": "2021-09-30T11:48:51.457Z",
        "__v": 0
    }
}
```

### Get single quote random

> /quotes/random

**Response**

```js
{
    "_id": "6153064c44dbbb21ef9cba2b",
    "content": "Nếu cuộc đờ là một bộ phim. Tại sao ta không viết lên kết thúc của bộ phim ấy?",
    "author": {
        "_id": "vkhang",
        "name": "Khang Ta"
    },
    "tags": [
        "technical",
        "love",
        "css"
    ],
    "length": 23,
    "createdAt": "2021-09-28T12:10:52.221Z",
    "updatedAt": "2021-09-28T12:10:52.221Z",
    "__v": 0
}
```

### Get single quote random by author

> /quotes/author/id_author

**example**: /quotes/author/vkhang

**Response**

```ts
{
    "_id": "61557a32c577c764905d2409",
    "content": "Nếu cuộc đờ là một bộ phim. Tại sao ta không viết lên kết thúc của bộ phim ấy?",
    "author": {
        "_id": "vkhang",
        "name": "Khang Ta"
    },
    "tags": [
        "technical",
        "love",
        "css"
    ],
    "length": 23,
    "createdAt": "2021-09-30T08:49:54.245Z",
    "updatedAt": "2021-09-30T08:49:54.245Z",
    "__v": 0
}
```
