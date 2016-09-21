# All In Order API

##Customer Home Item Cataloger
This is the repository for the API

This API was built in Node.js
The API is being served up using Express.js
The database being utilized is MongoDB and the local name being used is "AllInOneDb"

###Get It Running

To start up locally first start up MongoDB

`mongod`

The run the server

`npm start`

To run the tests

`npm test`


###Endpoints

Get all admins and their data (This is for development and would be removed for security purposes)

`/admin/test`

Create a new admin account

`/admin/create`

Sign in with an already created admin account

`/admin/signin`

Create a new customer

`/customer/create`

Get all customers and related information

`/customer/all`

Get all items from a specfic customer based on the permalink provided

`/customer/items`

Adds an item to a specific customer's list based on the permalink provided

`/customer/add/item`

Update status of a specific item in a customer's list

`/customer/status`

Forward email with customer permalink to a specified email

`/customer/forwardLink`


