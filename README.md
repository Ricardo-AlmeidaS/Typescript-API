# Users API 

Development of a complete REST API, including CRUD (Create, Read, Update, Delete) operations for user management, using Node.js, Express.js, TypeScript, and MongoDB.

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
| GET    | `/api/users`               | Get all users                    |
| POST   | `/api/users/`              | Create a user                    |
| PATCH  | `/api/users/:id`           | Update a user                    |
| DELETE | `/api/users/:id`           | Delete a user     |
