# Social Media Todo Management

This is a simple CRUD API for managing social media posts tasks. It is built with Node.js, Express, and MongoDB. The API is documented using Swagger.
This project is designed to fulfill a technical test for a backend developer internship in octoscript

## Prerequisites

- Node.js
- MongoDB

## Getting Started

1. Clone the repository
2. Start the server with `node app.js`

The server will start on `http://localhost:3000`.

## API Documentation

The API is documented using Swagger. You can access the API documentation at `http://localhost:3000/api-docs`.

## Routes

- `POST /api/posts`: Create a new post
- `GET /api/posts`: Get all posts
- `GET /api/posts/{id}`: Get a post by ID
- `PUT /api/posts/{id}`: Update a post by ID
- `DELETE /api/posts/{id}`: Delete a post by ID

## Post Model

The Post model has the following fields:

- `title`: The title of the post
- `brand`: The brand associated with the post
- `description`: A brief description of the post
- `platform`: The social media platform
- `dueDate`: The due date of the post
- `payment`: The payment amount for the post
- `status`: The status of the post

## Example

Here is an example of a post:

```
{
  "title": "New Campaign",
  "brand": "Nike",
  "description": "A new campaign for Nike on Instagram",
  "platform": "Instagram",
  "dueDate": "2023-12-31",
  "payment": 500,
  "status": "Pending"
}
```

## Author

Ahmad Al Qodri Azizi Dalimunthe

## License

This project is licensed under the MIT License.
