var express = require('express'),
    app = module.exports = express();

app.use( express.static( __dirname ) );

app.get('*', function( req, res ) {
    res.sendFile( __dirname + '/index.html');
});

app.listen( 80, function(){
  console.log('Express server listening on port 80');
});