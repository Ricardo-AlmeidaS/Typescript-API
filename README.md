# Users API 

Development of a complete REST API, including CRUD (Create, Read, Update, Delete) operations for user management, using Node.js, Express.js, TypeScript, and MongoDB.

## External packages

- validator (email validator)
- yarn (JavaScript dependency manager)
- nodemon (automatically restarts the node server)
- eslint (code corrector)

## In-depth project

The project is created with the purpose of registering users, where the registration is done using first name, last name, CPF (Brazilian Taxpayer Registry identification), and password. It utilizes a CRUD (Create, Read, Update, and Delete) for managing the database. 

If all four requirements for creating a registration are not provided, an error will be returned to the user, indicating which information is missing or which requirement is not fulfilled.

Only the back-end of the project was developed, and for its testing, Postman was used. All CRUD functionalities were successfully tested and approved.

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

## License

This project is licensed under the MIT License.
