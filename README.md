# property-management

## To run the app:

- Clone the repository.
- Create a .env file and put the required value.
- Run the project by typing "npm run dev" command.

## 1. Database connection

In order to connect a database, at first please create .env file and add the database credentials by following the config/database.js file.

## 2. Seed sample data

Run the seed script by typing command `node seed.js` from the root directory to add 3 sample data.

## 3. User authentication

Authentication is needed to create, update or delete data. User can do the following operations by utilizing the token.

### Register user:

- Endpoint: /api/v1/users/register
- Request type: **_POST_**
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
- Request type: **_POST_**
- Parameters: `{
"email":"demo@test.com",
"password":"123456"
}`
- Response: `{
"token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...",
"success":  true
}`

## 4. Property CRUD operations

In order to do create, update or delete operations the user must be authenticated as a result, she/he needs to add the token in the **_Headers_** of such requests. Procedure:
**_Authorization_**: **_Bearer "token value"_**

- Get all properties:
  - Request type: **_GET_**
  - Endpoint: /api/v1/properties/
  - Responses: {
    "properties": [
    {
    "id": 6,
    "name": "Cathedral",
    "city": "Scotland",
    "price": 800000,
    "status": "available",
    "createdAt": "2025-10-16T07:49:29.589Z",
    "updatedAt": "2025-10-16T07:50:31.447Z"
    },
    {
    "id": 4,
    "name": "Sample name 2",
    "city": "Sample city: 2",
    "price": 100002,
    "status": "available",
    "createdAt": "2025-10-16T06:21:32.117Z",
    "updatedAt": "2025-10-16T06:21:32.117Z"
    },
    ],
    "success": true
    }
- Get a single property:
  - Request type: **_GET_**
  - Endpoint: /api/v1/property/:id
  - Response: {
    "property": {
    "id": 6,
    "name": "Cathedral",
    "city": "Scotland",
    "price": 800000,
    "status": "available",
    "createdAt": "2025-10-16T07:49:29.589Z",
    "updatedAt": "2025-10-16T07:50:31.447Z"
    },
    "success": true
    }
- Create a property:
  - Request type: **_POST_**
  - Endpoint: /api/v1/property
  - Parameters: `{
    "name":"Hut",
    "city":"Chittagong",
    "price":10000,
    "status":"sold"
}`
  - Response:{
    "message": "Property created",
    "success": true
    }
    Please note status could be set to only **_available or sold_**
- Update a property:
  - Request type: **_PUT_**
  - Endpoint: /api/v1/property/:id
  - Parameters: `{
  "name":"Cathedral",
  "city":"Scotland",
  "price":800000,
  "status":"available"
}`
  - Response:{
    "message": "Property updated successfully",
    "success": true
    }
    User could update one or all of the fields.
- Delete a property:
  - Request type: **_DELETE_**
  - Endpoint: /api/v1/property/:id
  - Response: {
    "message": "Property destroyed successfully",
    "success": true
    }
