
# API Website Portfolio

Tech stack
- node js
- express js
- swagger
- mongo db


# Base Path

BASE_PATH = api.arialog.com/v1

## About Me

### get_about

PATH [GET] : {BASE_PATH}/about 

response :

```json
{
    "response" : 200,
    "status" : "berhasil",
    "body" : [
        "name" : "Nur Aria Hibnastiar",
        "occupation" : "Design Grafis",
        "description" : "Bla bla bla",
        "photos" : "url",
        "skils" : [
            [
                "name" : "laravel",
                "img" : ""
            ],
            [
                "name" : "laravel",
                "img" : ""
            ]
        ],
    ]
}

```

### create_about

PATH [POST] : {BASE_PATH}/about

request :

```json
{
    "name" : "Nur Aria Hibnastiar",
    "occupation" : "Design Grafis",
    "description" : "Bla bla bla",
    "photos" : "url",
    "skils" : [
        [
            "name" : "laravel",
            "img" : ""
        ],
        [
            "name" : "laravel",
            "img" : ""
        ]
    ],
}

```


success response :

```json
{
    "response" : 200,
    "status" : "berhasil",
    "body" : [
        "name" : "Nur Aria Hibnastiar",
        "occupation" : "Design Grafis",
        "description" : "Bla bla bla",
        "photos" : "url",
        "skils" : [
            [
                "name" : "laravel",
                "img" : ""
            ],
            [
                "name" : "laravel",
                "img" : ""
            ]
        ],
    ]
}

```

error response :

```json
{
    "response" : 404,
    "status" : "error",
    "description" : "erornya knp"
}

```