import { Passport } from 'passport';
import { Strategy as LocalStrategy } from "passport-local";

const User = require('../models/user');

//
Passport.serializeUser((user, done) =>{
    done(null, user.id);
});

Passport.deserializeUser(async (id, done) =>{
    const user = await User.findById(id);
    done(null, user)
});

//
Passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    nameField: 'name',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const users = await User.findOne({'email': email});
    if(users){
        return done(null, false, req.flash('signupMessage', 'El email ya existe.'));
    }else {
        const user = new User(req.body);
        await user.save();
        done(null, user);
    }
}));

Passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    nameField: 'name',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({'email': email, 'password': password});
    if(!user){
        return done(null, false, req.flash('signinMessage', 'Usuario o contraseña incorrecta, vuelva a intentar.'))
    } else {
        done(null, user);
    }
}));