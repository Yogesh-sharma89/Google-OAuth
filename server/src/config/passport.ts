import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import envConfig from "./env.config";
import UserModel from "../models/user.model";

passport.use(
    new GoogleStrategy(
        {
            clientID: envConfig.googleClientId!,
            clientSecret: envConfig.googleClientSecret!,
            callbackURL: envConfig.callbackUrl!
        },
        async (_accessToken, _refreshToken, profile, done) => {

            try {

                let user = await UserModel.findOne({ googleId: profile.id })

                if (!user) {

                    //check email exist in profile or not '
                    const email = profile.emails?.[0]?.value;

                    if (!email) {
                        return done(null, false);
                    }

                    user = await UserModel.create({
                        googleId: profile.id,
                        email,
                        name: profile.displayName,
                        avatar: profile.profileUrl
                    })
                }

                return done(null, user);
            } catch (err) {
                return done(err as Error)
            }

        }
    )
);

passport.serializeUser((user: Express.User, done) => {
    done(null, (user as any)._id.toString());
})


passport.deserializeUser(async (id: string, done) => {

    try {

        let user = await UserModel.findById(id);

        done(null, user)

    } catch (err) {
        done(err);
    }

})