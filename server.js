/**
 * Created by IrshaadTechnologies on 4/16/2017.
 */
var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
   if (req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://' + req.hostname + req.url);
   }else{
      next();
   }
});

app.use(express.static('public'));

app.listen(PORT, function () {
   console.log('Express Server is running on port ' + PORT);
});

