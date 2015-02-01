bplist00—_WebMainResource’	
_WebResourceFrameName^WebResourceURL_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingNameP_3http://apidocjs.com/source/example_basic/example.jsOL<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/*
 * Basic Example
 *
 * This is a basic example for apiDoc.
 * Documentation blocks without @api (like this block) will be ignored.
 */

/* CHAT MESSAGES: */

/**
 * @api {GET} http://hostname/chats/messages Show headers of unread messages
 * @apiName ShowMessages
 * @apiGroup Chat Messages
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

 /**
 * @api {GET} http://hostname/chats/messages/to-me Show message content by id
 * @apiName IndexMessage
 * @apiGroup Chat Messages
 *
 * @apiParam {String} id Id-Message Id of a Message that I want to see.
 *
 * @apiExample Example usage:
 *     {
 *       "id": 12545
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

 /**
 * @api {POST} http://hostname/chats/messages Create a new message
 * @apiName CreateMessage
 * @apiGroup Chat Messages
 *
 * @apiParam {String} content Content of a message.
 *
 * @apiExample Example usage:
 *     {
 *       "content": "Hello world!"
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

/* CHATS: */

/**
 * @api {POST} http://hostname/chats Create a new chat
 * @apiName CreateChat
 * @apiGroup Chats
 *
 * @apiParam {bool} close I wanna chat with someone close to me.
 * @apiParam {String} language Language that I can talk at the chat.
 *
 * @apiExample Example usage:
 *     {
 *       "close": true,
 *       "language": "English"
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

/**
 * @api {DELETE} http://hostname/chats/id_chat Close a current chat
 * @apiName DeleteChat
 * @apiGroup Chats
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

 /**
 * @api {GET} http://hostname/chats Show status of a chat
 * @apiName ShowChat
 * @apiGroup Chats
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

/* INBOX MESSAGES*/

 /**
 * @api {POST} http://hostname/user/inbox Create a new inbox message 
 * @apiName CreateInboxMessage
 * @apiGroup Inbox Messages
 *
 * @apiParam {String} nick User recipient.
 * @apiParam {String} content Content of a message.
 *
 * @apiExample Example usage:
 *     {
 *       "nick": "Anna"
 *       "content": "Hello Anna!"
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

 /**
 * @api {GET} http://hostname/user/inbox/to-me Show inbox message content by id
 * @apiName ShowInboxMessage
 * @apiGroup Inbox Messages
 *
 * @apiParam {String} id Id-Message Id of a inbox message that I want to see.
 *
 * @apiExample Example usage:
 *     {
 *       "id": 12465
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

  /**
 * @api {GET} http://hostname/user/inbox Show headers of unread inbox messages
 * @apiName IndexInboxMessage
 * @apiGroup Inbox Messages
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

/* PROFILES: */

/**
 * @api {POST} http://hostname/profiles Update a user profile
 * @apiName UpdateProfile
 * @apiGroup Profiles
 *
 * @apiParam {String} nick User nickname.
 * @apiParam {String} about User description.
 *
 * @apiExample Example usage:
 *     {
 *       "nick": "Mero",
 *       "about": "I'm a nice man"
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

 /**
 * @api {GET} http://hostname/profiles/:nick Get a user profile
 * @apiName GetProfile
 * @apiGroup Profiles
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {String} nick User nickname.
 * @apiSuccess {String} photo  Link for user photo.
 * @apiSuccess {Number} friends Number of user friends.
 * @apiSuccess {String} rate  Rate of a user at the SAT.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "nick": "Anna",
 *       "photo": "http://media.chatapp.com/photo/fsdfrfsdfsdf",
 *       "friends": 32,
 *       "rate": "Cool girl"
 *     }
 *
 */

  /**
 * @api {GET} http://hostname/friends Get a user friend list basic profiles
 * @apiName GetFriends
 * @apiGroup Profiles
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {Array} friend List of friends basic profile.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "friends": [
 *                      {"nick": "Anna", "photo": "http://media.chatapp.com/photo/fsdfrfsdfsdf"},
 *                      {"nick": "Giselle", "photo": "http://media.chatapp.com/photo/fsdfrfsiuaof"},
 *                      {"nick": "Mike", "photo": "http://media.chatapp.com/photo/fsdfaosifsdf"}
 *                  ]
 *     }
 *
 */

/* SCRAPS: */

 /**
 * @api {GET} http://hostname/users/scraps Request scraps of a nick
 * @apiName GetScrap
 * @apiGroup Sraps
 *
 * @apiParam {String} nick Nickname of friend.
 *
 * @apiExample Example usage:
 *     {
 *       "nick": "Mero",
 *     }
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {Array} scraps List of scraps.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "scraps": [
 *                    {"id": 1851, "sender": "Anna", "content": "That's a nice man", "likes": 7},
 *                    {"id": 2158, "sender": "Giselle", "content": "I love you!", "likes": 12}
 *                 ]
 *     }
 *
 */
 /**
 * @api {POST} http://hostname/users/scraps Create a new scrap
 * @apiName CreateScrap
 * @apiGroup Sraps
 *
 * @apiParam {String} nick Nickname of a friend.
 * @apiParam {String} content Content of scrap.
 *
 * @apiExample Example usage:
 *     {
 *       "nick": "Mero",
 *       "content": "That's a nice man"
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */
 /**
 * @api {DELETE} http://hostname/users/scraps Delete scrap
 * @apiName DeleteScrap
 * @apiGroup Sraps
 *
 * @apiParam {String} id Scrap id.
 *
 * @apiExample Example usage:
 *     {
 *       "id": 2158
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

/* SESSIONS: */

/**
 * @api {DELETE} http://hostname/auth Logout user
 * @apiName LogoutSession
 * @apiGroup Sessions
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

/**
 * @api {POST} http://hostname/auth Login user
 * @apiName LoginSession
 * @apiGroup Sessions
 *
 * @apiParam {String} email User email.
 * @apiParam {String} password User password.
 *
 * @apiExample Example usage:
 *     {
 *       "email": "Romerio",
 *       "password": "123456"
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 *
 */

/* USERS: */

/**
 * @api {POST} http://hostname/accounts Create a new user
 * @apiName CreateUser
 * @apiGroup Users
 *
 * @apiParam {String} email User e-mail for login.
 * @apiParam {String} password User password for login.
 *
 * @apiExample Example usage:
 *     {
 *       "email": "Romerio",
 *       "password": "123456",
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 *
 */

 /**
 * @api {GET} http://hostname/accounts Show user information
 * @apiName ShowUser
 * @apiGroup Users
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

 /**
 * @api {PUT} http://hostname/accounts Update user information
 * @apiName UpdateUser
 * @apiGroup Users
 *
 * @apiParam {String} email User e-mail for login.
 * @apiParam {String} password User password for login.
 *
 * @apiExample Example usage:
 *     {
 *       "email": "Romerio",
 *       "password": "654321",
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

  /**
 * @api {DELETE} http://hostname/accounts Delete a user
 * @apiName DeleteUser
 * @apiGroup Users
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */


</pre></body></html>_application/javascriptUUTF-8    ( ? N ` v î ï À4             
              :