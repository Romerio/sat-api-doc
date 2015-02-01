bplist00�_WebMainResource�	
_WebResourceFrameName^WebResourceURL_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingNameP_3http://apidocjs.com/source/example_basic/example.jsOL<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/*
 * Basic Example
 *
 * This is a basic example for apiDoc.
 * Documentation blocks without @api (like this block) will be ignored.
 */

/* CHATS: */

/**
 * @api {POST} http://hostname/chats Create a new chat
 * @apiName CreateChat
 * @apiGroup Chats
 *
 * @apiParam {bool} close I wanna chat with someone close to me.
 * @apiParam {String} language Langhage that I can talk at the chat.
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
 * @api {GET} http://hostname/chats/id_chat Show status of a chat
 * @apiName ShowChat
 * @apiGroup Chats
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

/* MESSAGES: */

/**
 * @api {GET} http://hostname/chats/messages Show all messages headers
 * @apiName ShowMessages
 * @apiGroup Chat Messages
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 */

 /**
 * @api {GET} http://hostname/chats/messages Show message content by id
 * @apiName IndexMessage
 * @apiGroup Chat Messages
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 * @apiHeader (Headers) {String} Id-Message Id of a Message that I want to see
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

/* PROFILES: */

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
 * @api {PUT} http://hostname/accounts Delete a user
 * @apiName DeleteUser
 * @apiGroup Users
 *
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
 * @apiParam {String} password user password.
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

</pre></body></html>_application/javascriptUUTF-8    ( ? N ` v � � �4             
              :