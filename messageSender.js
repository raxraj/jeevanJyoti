var unirest = require("unirest");


module.exports = function(message,contactNumber){
    var req = unirest("POST", "https://www.fast2sms.com/dev/bulk");

    req.headers({
    "authorization": process.env.FAST2SMS_API_KEY
    });

    req.form({
    "sender_id": "FSTSMS",
    "message": message,
    "language": "english",
    "route": "p",
    "numbers": contactNumber,
    });

    req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
    });
}