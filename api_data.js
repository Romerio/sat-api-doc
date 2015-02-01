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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id-Message Id of a Message that I want to see.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"id\": 12545\n}",
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
    "url": "http://hostname/chats/messages",
    "title": "Show headers of unread messages",
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
    "type": "POST",
    "url": "http://hostname/user/inbox",
    "title": "Create a new inbox message",
    "name": "CreateInboxMessage",
    "group": "Inbox_Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick",
            "description": "<p>User recipient.</p> "
          },
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
        "content": "{\n  \"nick\": \"Anna\"\n  \"content\": \"Hello Anna!\"\n}",
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
    "groupTitle": "Inbox_Messages"
  },
  {
    "type": "GET",
    "url": "http://hostname/user/inbox",
    "title": "Show headers of unread inbox messages",
    "name": "IndexInboxMessage",
    "group": "Inbox_Messages",
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
    "groupTitle": "Inbox_Messages"
  },
  {
    "type": "GET",
    "url": "http://hostname/user/inbox/to-me",
    "title": "Show inbox message content by id",
    "name": "ShowInboxMessage",
    "group": "Inbox_Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id-Message Id of a inbox message that I want to see.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"id\": 12465\n}",
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
    "groupTitle": "Inbox_Messages"
  },
  {
    "type": "GET",
    "url": "http://hostname/friends",
    "title": "Get a user friend list basic profiles",
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
            "type": "Array",
            "optional": false,
            "field": "friend",
            "description": "<p>List of friends basic profile.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"friends\": [\n                 {\"nick\": \"Anna\", \"photo\": \"http://media.chatapp.com/photo/fsdfrfsdfsdf\"},\n                 {\"nick\": \"Giselle\", \"photo\": \"http://media.chatapp.com/photo/fsdfrfsiuaof\"},\n                 {\"nick\": \"Mike\", \"photo\": \"http://media.chatapp.com/photo/fsdfaosifsdf\"}\n             ]\n}",
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
            "type": "Number",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"nick\": \"Anna\",\n  \"photo\": \"http://media.chatapp.com/photo/fsdfrfsdfsdf\",\n  \"friends\": 32,\n  \"rate\": \"Cool girl\"\n}",
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
    "url": "http://hostname/users/scraps",
    "title": "Create a new scrap",
    "name": "CreateScrap",
    "group": "Sraps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick",
            "description": "<p>Nickname of a friend.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of scrap.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"nick\": \"Mero\",\n  \"content\": \"That's a nice man\"\n}",
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
    "groupTitle": "Sraps"
  },
  {
    "type": "DELETE",
    "url": "http://hostname/users/scraps",
    "title": "Delete scrap",
    "name": "DeleteScrap",
    "group": "Sraps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Scrap id.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"id\": 2158\n}",
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
    "groupTitle": "Sraps"
  },
  {
    "type": "GET",
    "url": "http://hostname/users/scraps",
    "title": "Request scraps of a nick",
    "name": "GetScrap",
    "group": "Sraps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nick",
            "description": "<p>Nickname of friend.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n  \"nick\": \"Mero\",\n}",
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
            "type": "Array",
            "optional": false,
            "field": "scraps",
            "description": "<p>List of scraps.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"scraps\": [\n               {\"id\": 1851, \"sender\": \"Anna\", \"content\": \"That's a nice man\", \"likes\": 7},\n               {\"id\": 2158, \"sender\": \"Giselle\", \"content\": \"I love you!\", \"likes\": 12}\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Sraps"
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