var http = require('http');
http.get(
    'http://api.b.st-hatena.com/entry.count?url=http://nodejs.org/',
    function(res){
        res.setEncoding('utf-8');
        res.on('data', function(chunk){
            console.log('nodejs.org のはてブ数 : ' + chunk);
        });
    }
).
on('error', function(e){
    console.log('ERROR', e.message);
});
