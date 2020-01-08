const localStrategy =  require("passport-local").Strategy
const bcrypt = require("bcrypt")

function initialize(passport , getUser , getUserbyId){  
    const authenticateUser = async (username , password , done)=>{
        console.log("FUNCTION CALLED");
        
        const user = getUser(username)
        if(user==null){
            return done(null , false , {message : "User Not Found"})
        }
        try{
            console.log(user);
            
            if(await bcrypt.compare(password , user.doctorPass)){
                console.log('LOGGED IN');
                
                return done(null,user)
            }
            else{
                return done(null ,false, {message : "Wrong Password"})
            }
        }
        catch(e){
            return done(e)

        }

    }
    passport.use(new localStrategy({usernameField : 'username'}, authenticateUser))

    passport.serializeUser((username,done) => done(null,username))
    passport.deserializeUser((username,done)=>{
        return done(null ,username)}) 
}

module.exports = initialize