define({ "api": [
  {
    "type": "POST",
    "url": "http://hostname/chats/messages",
    "title": "Create a new message",
    "name": "CreateMessage",
    "group": "Chat_Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of a message.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"content\": \"Hello world!\"\n}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "GET",
    "url": "http://hostname/chats/messages/to-me",
    "title": "Show message content by id",
    "name": "IndexMessage",
    "group": "Chat_Messages",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Id-Message",
            "description": "<p>Id of a Message that I want to see</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "GET",
    "url": "http://hostname/chats/messages",
    "title": "Show messages headers",
    "name": "ShowMessages",
    "group": "Chat_Messages",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Chat_Messages"
  },
  {
    "type": "POST",
    "url": "http://hostname/chats",
    "title": "Create a new chat",
    "name": "CreateChat",
    "group": "Chats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "close",
            "description": "<p>I wanna chat with someone close to me.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language that I can talk at the chat.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"close\": true,\n  \"language\": \"English\"\n}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Chats"
  },
  {
    "type": "DELETE",
    "url": "http://hostname/chats/id_chat",
    "title": "Close a current chat",
    "name": "DeleteChat",
    "group": "Chats",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Chats"
  },
  {
    "type": "GET",
    "url": "http://hostname/chats",
    "title": "Show status of a chat",
    "name": "ShowChat",
    "group": "Chats",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Chats"
  },
  {
    "type": "GET",
    "url": "http://hostname/friends",
    "title": "Get a user friend list basic profile",
    "name": "GetFriends",
    "group": "Profiles",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friend",
            "description": "<p>List of friends basic profile.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"friends\": [\n\t\t\t\t\t\t{\"nick\": \"Anna\", \"photo\": \"http://media.chatapp.com/photo/fsdfrfsdfsdf\"},\n\t\t\t\t\t\t{\"nick\": \"Giselle\", \"photo\": \"http://media.chatapp.com/photo/fsdfrfsiuaof\"},\n\t\t\t\t\t\t{\"nick\": \"Mike\", \"photo\": \"http://media.chatapp.com/photo/fsdfaosifsdf\"},\n\t\t\t\t\t]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "GET",
    "url": "http://hostname/profiles/:nick",
    "title": "Get a user profile",
    "name": "GetProfile",
    "group": "Profiles",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nick",
            "description": "<p>User nickname.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Link for user photo.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "friends",
            "description": "<p>Number of user friends.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rate",
            "description": "<p>Rate of a user at the SAT.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      \"nick\": \"Anna\",\n      \"photo\": \"http://media.chatapp.com/photo/fsdfrfsdfsdf\",\n\t\t \"friends\": 32,\n\t\t \"rate\": \"Cool girl\",\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "POST",
    "url": "http://hostname/profiles",
    "title": "Update a user profile",
    "name": "UpdateProfile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick",
            "description": "<p>User nickname.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>User description.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"nick\": \"Mero\",\n  \"about\": \"I'm a nice man\"\n}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "POST",
    "url": "http://hostname/auth",
    "title": "Login user",
    "name": "LoginSession",
    "group": "Sessions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"email\": \"Romerio\",\n  \"password\": \"123456\"\n}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Sessions"
  },
  {
    "type": "DELETE",
    "url": "http://hostname/auth",
    "title": "Logout user",
    "name": "LogoutSession",
    "group": "Sessions",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Sessions"
  },
  {
    "type": "POST",
    "url": "http://hostname/accounts",
    "title": "Create a new user",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User e-mail for login.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password for login.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"email\": \"Romerio\",\n  \"password\": \"123456\",\n}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "http://hostname/accounts",
    "title": "Delete a user",
    "name": "DeleteUser",
    "group": "Users",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "http://hostname/accounts",
    "title": "Show user information",
    "name": "ShowUser",
    "group": "Users",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Users"
  },
  {
    "type": "PUT",
    "url": "http://hostname/accounts",
    "title": "Update user information",
    "name": "UpdateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User e-mail for login.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password for login.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"email\": \"Romerio\",\n  \"password\": \"654321\",\n}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "X-Token",
            "description": "<p>Token of session</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Users"
  }
] });