import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import envConfig from "./config/env.config";
import passport from "passport";
import authRouter from "./routers/auth.route";


const app = express();

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))

const sessionConfig = {

    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: envConfig.dbUrl!,
    }),
}

//laod the session
app.use(session(sessionConfig));

//load the passport
app.use(passport.initialize());

app.use(passport.session())

app.use("/api/auth",authRouter);

app.get("/health", (_req, res) => {
    res.json({ message: "Server is running properly" })
})


//globalErrorHandler

export default app;

