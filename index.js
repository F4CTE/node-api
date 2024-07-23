import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import userRoutes from "./routes/users.js";


dotenv.config()
connectDB();

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json())
app.use(morgan('dev'))

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application to manages favorite movies made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "S.Chelgoui",
                url: "https://test.com",
                email: "shems.chelgoui@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})