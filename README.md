# Users API 

Development of a complete REST API, including CRUD (Create, Read, Update, Delete) operations for user management, using Node.js, Express.js, TypeScript, and MongoDB.

## External packages

- validator (email validator)
- yarn (JavaScript dependency manager)
- nodemon (automatically restarts the node server)
- eslint (code corrector)

## Concepts utilized

- SOLID
- Dependency Injection
- Repository pattern

## Entities 

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

## Routes 

| Method | Endpoint                   | Description                      |
|--------|----------------------------|----------------------------------|
| GET    | `/users`                   | Get all users                    |
| POST   | `/users`                   | Create a user                    |
| PATCH  | `/users/:id`               | Update a user                    |
| DELETE | `/users/:id`               | Delete a user                    | 


## Architecture

![Architecture](https://imgur.com/k5mXFoZ.png)










