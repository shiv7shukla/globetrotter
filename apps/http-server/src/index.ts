import express from "express";
import { ENV } from "./lib/env";
import cors from "cors";

const app = express();
const corsOptions = {
    origin: `http:localhost/${ENV.PORT}`,
    // credentials: true
}

app.use(express.json());
app.use(cors(corsOptions));
app.listen(ENV.PORT);