const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if(!bearerHeader) {
        return res.redirect('/login');
    }
    try{
        const bearerToken = bearerHeader.split(" ")[1];
        const decoded = jwt.verify(bearerToken, "contoh_access_token");
        
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = verifyToken;