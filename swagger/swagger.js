const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Social Media Todo CRUD API',
      version: '1.0.0',
      description: 'API for managing social media posts tasks by Ahmad Al Qodri Azizi Dalimunthe',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Post: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'The title of the post',
            },
            brand: {
              type: 'string',
              description: 'The brand associated with the post',
            },
            description: {
              type: 'string',
              description: 'A brief description of the post',
            },
            platform: {
              type: 'string',
              enum: ['Instagram', 'Facebook', 'Twitter', 'TikTok', 'LinkedIn'],
              description: 'The social media platform',
            },
            dueDate: {
              type: 'string',
              format: 'date',
              description: 'The due date of the post',
            },
            payment: {
              type: 'number',
              description: 'The payment amount for the post',
            },
            status: {
              type: 'string',
              enum: ['Pending', 'In Progress', 'Completed'],
              description: 'The status of the post',
            },
          },
          example: {
            title: 'New Campaign',
            brand: 'Nike',
            description: 'A new campaign for Nike on Instagram',
            platform: 'Instagram',
            dueDate: '2023-12-31',
            payment: 500,
            status: 'Pending',
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;