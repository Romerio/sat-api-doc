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
    "url": "http://hostname/chats/messages",
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
    "title": "Show all messages headers",
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
            "description": "<p>Langhage that I can talk at the chat.</p> "
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
    "url": "http://hostname/chats/id_chat",
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
            "description": "<p>user password.</p> "
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
    "type": "PUT",
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