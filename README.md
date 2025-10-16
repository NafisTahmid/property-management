# property-management

  

## 1. Database connection
In order to connect a database, at first please create .env file and add the database credentials by following the config/database.js file.
## 2. Seed sample data
Run the seed script by typing command `node seed.js` from the root directory to add 3 sample data.
## 3. User authentication
Authentication is needed to create, update or delete data. User can do the following operations by utilizing the token.
### Register user:
- Endpoint: /api/v1/users/register
- Request type: ***POST***
- Parameters: `{
	"username":"Demo",
	"email":"demo@test.com",
	"password":"123456"
	}`
- Response: `{
	"token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...",
	"success":  true
	}`
### Login user:
- Endpoint: /api/v1/users/login
- Request type: ***POST***
- Parameters: `{
	"email":"demo@test.com",
	"password":"123456"
	}`
- Response: `{
	"token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...",
	"success":  true
	}`
## 4. Property CRUD operations
In order to do create, update or delete operations the user must be authenticated as a result, she/he needs to add the token in the ***Headers*** of such requests. Example:
***Authorization***: ***Bearer "token value"***

- Get all properties:
	-  Request type: ***GET***
	- Endpoint: /api/v1/properties/
- Get a single property:
	-  Request type: ***GET***
	- Endpoint: /api/v1/property/:id
- Create a property:
	-  Request type: ***POST***
	- Endpoint: /api/v1/property
	- Parameters: `{
	"name":"Demo",
	"city":"Demo city",
	"price":"Demo price",
	"status":"available"
	}`
	###### Please note status could be set to only ***available or sold***
- Update a property:
	-  Request type: ***PUT***
	- Endpoint: /api/v1/property/:id
	- Parameters: `{
	"name":"Demo",
	"city":"Demo city",
	"price":"Demo price",
	"status":"available"
	}`
	###### User could update one or all of the fields.
- Delete a property:
	-  Request type: ***DELETE***
	- Endpoint: /api/v1/property/:id








