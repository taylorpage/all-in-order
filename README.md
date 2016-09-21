# All In Order API

##Customer Home Item Cataloger
This is the repository for the API

This API was built in Node.js, the sever was built with Express.js and the database being utilized is MongoDB.

###Get It Running

To start up locally first start up MongoDB

`mongod`
(DB Name for local repo is: **AllInOneDb**)


To run the server

`npm start`

To run the tests

`npm test`


###Endpoints

Get all admins and their data (This is for development and would be removed for security purposes)

GET: `/admin/all`

Create a new admin account

POST: `/admin/create`

#####Request Body: `{ name: STRING, email: STRING, password: STRING }`

Sign in with an already created admin account

POST: `/admin/signin`

#####Request Body: `{ email: STRING, password: STRING }`

Create a new customer

POST: `/customer/create`

#####Request Body: `{ name: STRING, email: STRING, property: STRING }`

Get all customers and related information

GET: `/customer/all`

Get all items from a specfic customer based on the permalink provided

POST: `/customer/items`

#####Request Body: `{ permalink: STRING }`

Adds an item to a specific customer's list based on the permalink provided

POST: `/customer/add/item`

#####Request Body: `{ item: { name: STRING, status: STRING }, permalink: STRING }`

Update status of a specific item in a customer's list

POST: `/customer/status`

#####Request Body: `{ item: { name: STRING, status: STRING }, permalink: STRING }`

Forward email with customer permalink to a specified email

POST: `/customer/forwardLink`

#####Request Body: `{ to: STRING, permalink: STRING }`


