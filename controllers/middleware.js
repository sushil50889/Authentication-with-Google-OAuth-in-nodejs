var middleware = {};

middleware.isUserLoggedIn = function(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
        req.flash("error", "Please Login First !!!");
        res.redirect("/login-form");
}

module.exports = middleware;