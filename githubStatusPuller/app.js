const http = require('http');
const req = require('request');
var async = require("async");

const { brotliDecompress } = require('zlib');
const { parse } = require('path');
const { parseDate } = require('tough-cookie');
const { nextTick } = require('process');

http.createServer((request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        // Server Logic Starts Here:
        async.waterfall([
            // First async function call
            (done) => {
                req({
                    headers: {
                        'User-Agent': 'owen-oertell'
                    },
                    url: 'https://api.github.com/users/owen-oertell/events',
                    method: 'GET'
                }, function (err, res, body) {
                    //it works!
                    let parsed = JSON.parse(body);
                    for(let i=0; i<parsed.length; i++) {
                        if(parsed[i].type == "PushEvent") {
                            done(null, parsed[i]);
                            return;
                        }
                    }
                })            
            },
            // Second async function call
            (priorRes, done) => {
                console.log(priorRes.type)
                done(null);
            }
        ], (err) => {
            console.log("Yay I finished");
        })


        // Going to github and requesting last push by user.
        //https://api.github.com/users/owen-oertell/events

        

        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify("Testing testing 123"));
    });
}).listen(8000);