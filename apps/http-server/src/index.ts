import express from "express";
import { ENV } from "./lib/env";
import cors from "cors";
import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(['8.8.8.8', '8.8.4.4']);
const app = express();
const corsOptions = {
    origin: `http://localhost/${ENV.PORT}`,
    // credentials: true
}

app.use(express.json());
app.use(cors(corsOptions));
app.options("/{*path}", cors(corsOptions));

const startServer = async () => {
    try {
            console.log("connecting to database");
            await mongoose.connect(ENV.DB_URL);
            console.log("Mongo connected to:", mongoose.connection.name);
            app.listen(ENV.PORT, () => {console.log("Backend running on port", ENV.PORT)});
            console.log("NEW DEPLOY TEST");
        }
    catch (error) {
        console.error("Error starting the server", error);
    }
}

startServer();