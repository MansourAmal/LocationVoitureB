//AuthRoute
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/compte'); // Assurez-vous d'ajuster le chemin en fonction de votre structure de fichiers

// Sérialisation de l'utilisateur
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Désérialisation de l'utilisateur
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Stratégie locale
passport.use(new LocalStrategy(
    {
      usernameField: 'Adresse',
      passwordField: 'MotDePass',
    },
    async (Adresse, MotDePass, done) => {
      try {
        const user = await User.findOne({ Adresse: Adresse });
        if (!user) {
          return done(null, false, { message: 'Adresse e-mail non enregistrée.' });
        }
  
        const isMatch = await user.comparePassword(MotDePass);
        if (isMatch) {
          return done(null, user);
        }
  
        return done(null, false, { message: 'Mot de passe incorrect.' });
      } catch (error) {
        return done(error);
      }
    }
  ));
  

module.exports = passport;
