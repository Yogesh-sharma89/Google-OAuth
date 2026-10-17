import { config } from "dotenv";

config();

const envConfig = {
  port: Number(process.env.PORT ?? 3000),
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  callbackUrl:process.env.GOOGLE_CALLBACK_URL,
  googleClientSecret:
    process.env.GOOGLE_CLIENT_SECRET ?? process.env.GOOGLE_CLIENT_SCRET,
  dbUrl: process.env.DB_URL,
  nodeEnv: process.env.NODE_ENV,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
};

export default envConfig;