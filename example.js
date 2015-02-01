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
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @api {DELETE} http://hostname/chats/id_chat Close a current chat
 * @apiName DeleteChat
 * @apiGroup Chats
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

 /**
 * @api {GET} http://hostname/chats/id_chat Show status of a chat
 * @apiName ShowChat
 * @apiGroup Chats
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

 /**
 * @api {POST} http://hostname/chats/id_chat/rate Rate a chat
 * @apiName RateChat
 * @apiGroup Chats
 *
 * @apiParam {bool} smart I have talked to a smart person.
 * @apiParam {bool} funny  I have talked to a funny person.
 * @apiParam {bool} polite  I have talked to a polite person.
 * @apiParam {bool} nice  I have talked to a nice person.
 *
 * @apiExample Example usage:
 *     {
 *       "smart": true,
 *       "funny": true,
 *       "polite": false,
 *       "nice": true
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/* USERS: */

/**
 * @api {POST} http://hostname/users Create a new user
 * @apiName CreateUser
 * @apiGroup Users
 *
 * @apiParam {String} email User e-mail for login.
 * @apiParam {String} password User password for login.
 * @apiParam {String} country User country location.
 * @apiParam {String} age User age.
 * @apiParam {Array} languages Languages that user can talk.
 *
 * @apiExample Example usage:
 *     {
 *       "email": "Romerio",
 *       "password": "123456",
 *       "country": "Brazil",
 *       "age": "25",
 *       "languages": ["Portuguese", "English"]
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

 /**
 * @api {GET} http://hostname/users/my Show user information
 * @apiName ShowUser
 * @apiGroup Users
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

 /**
 * @api {PUT} http://hostname/users/my Update user information
 * @apiName UpdateUser
 * @apiGroup Users
 *
 * @apiParam {String} email User e-mail for login.
 * @apiParam {String} password User password for login.
 * @apiParam {String} country User country location.
 * @apiParam {String} age User age.
 * @apiParam {Array} languages Languages that user can talk.
 *
 * @apiExample Example usage:
 *     {
 *       "email": "Romerio",
 *       "password": "654321",
 *       "country": "Brazil",
 *       "age": "25",
 *       "languages": ["Portuguese", "English"]
 *     }
 *
 * @apiHeader (Headers) {String} Content-type application/json
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/* SESSIONS: */

/**
 * @api {DELETE} http://hostname/sessions/my Logout user
 * @apiName LogoutSession
 * @apiGroup Sessions
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @api {POST} http://hostname/users Login user
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
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/* MESSAGES: */

/**
 * @api {GET} http://hostname/chats/id_chat/messages Show all messages headers
 * @apiName ShowMessages
 * @apiGroup Messages
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

 /**
 * @api {GET} http://hostname/chats/id_chat/messages/id_message Show message content by id
 * @apiName IndexMessage
 * @apiGroup Messages
 *
 * @apiHeader (Headers) {String} X-Token Token of session
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

 /**
 * @api {POST} http://hostname/chats/id_chat/messages Create a new message
 * @apiName CreateMessage
 * @apiGroup Messages
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
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

</pre></body></html>_application/javascriptUUTF-8    ( ? N ` v � � �4             
              :