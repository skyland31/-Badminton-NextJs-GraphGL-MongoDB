import dotenv from "dotenv";
dotenv.config();
import express from "express";
import server from "./server";
import mongoose from "mongoose";

const { db_username, db_password, DB_name, PORT } = process.env;

const createServer = async() => {
    try {
        await mongoose.connect(
            // replace 'url' with your mongodb url
            `mongodb+srv://${db_username}:${db_password}@qraphqlbasic-e7zl1.mongodb.net/${DB_name}?retryWrites=true&w=majority`, { useUnifiedTopology: true }
        );

        const app = express();

        server.applyMiddleware({ app });

        app.listen({ port: PORT }, () =>
            console.log(
                `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
            )
        );
    } catch (error) {
        console.log(error);
    }
};
createServer();