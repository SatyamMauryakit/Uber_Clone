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

# User Login Endpoint Documentation

## Endpoint: `/users/login`

### Method: POST

### Description:

This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body:

The request body should be a JSON object with the following properties:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (200):

- **Description**: User successfully logged in.
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
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password not accepted",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Client Error (401):

- **Description**: Invalid email or password.
- **Body**: A JSON object containing the error message.

```json
{
  "message": "Invalid email or password"
}
```

### Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making the request.

# User Profile Endpoint Documentation

## Endpoint: `/users/profile`

### Method: GET

### Description:

This endpoint is used to retrieve the profile information of the authenticated user.

### Headers:

- `Authorization` (string, required): The JWT token of the authenticated user.

### Responses:

#### Success (200):

- **Description**: User profile successfully retrieved.
- **Body**: A JSON object containing the user details.

```json
{
  "_id": "user_id_here",
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com"
}
```

#### Client Error (404):

- **Description**: User not found.
- **Body**: A JSON object containing the error message.

```json
{
  "message": "User not found"
}
```

#### Server Error (500):

- **Description**: Server error.
- **Body**: A JSON object containing the error message.

```json
{
  "message": "Server error",
  "error": "error_details_here"
}
```

### Notes:

- Ensure that the `Authorization` header is set to `Bearer <jwt_token>` when making the request.

# User Logout Endpoint Documentation

## Endpoint: `/users/logout`

### Method: POST

### Description:

This endpoint is used to log out the authenticated user. It clears the authentication token from the cookies and blacklists the token.

### Headers:

- `Authorization` (string, required): The JWT token of the authenticated user.

### Responses:

#### Success (200):

- **Description**: User successfully logged out.
- **Body**: A JSON object containing the success message.

```json
{
  "message": "Logout successful"
}
  ```

### Notes:

- Ensure that the `Authorization` header is set to `Bearer <jwt_token>` when making the request.

# Captain Profile Endpoint Documentation

## Endpoint: `/captains/profile`

### Method: GET

### Description:

This endpoint is used to retrieve the profile information of the authenticated captain.

### Headers:

- `Authorization` (string, required): The JWT token of the authenticated captain.

### Responses:

#### Success (200):

- **Description**: Captain profile successfully retrieved.
- **Body**: A JSON object containing the captain details.

```json
{
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Client Error (404):

- **Description**: Captain not found.
- **Body**: A JSON object containing the error message.

```json
{
  "message": "Captain not found"
}
```

#### Server Error (500):

- **Description**: Server error.
- **Body**: A JSON object containing the error message.

```json
{
  "message": "Server error",
  "error": "error_details_here"
}
```

### Notes:

- Ensure that the `Authorization` header is set to `Bearer <jwt_token>` when making the request.
