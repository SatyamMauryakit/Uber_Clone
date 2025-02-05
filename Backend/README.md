# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It requires the user's first name, email, and password. Optionally, the user can also provide a last name.

### Request Body:

The request body should be a JSON object with the following properties:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (201):

- **Description**: User successfully registered.
- **Body**: A JSON object containing the authentication token and user details.

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Client Error (400):

- **Description**: Validation error or missing required fields.
- **Body**: A JSON object containing the validation errors.

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Client Error (409):

- **Description**: Email is already registered.
- **Body**: A JSON object containing the error message.

```json
{
  "error": "Email is already registered. Please use a different email."
}
```

### Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making the request.
- The password is hashed before being stored in the database.
