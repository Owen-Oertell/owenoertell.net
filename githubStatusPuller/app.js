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

        response.writeHead(200, { 'Content-Type': 'application/json' });
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
                    let parsed = JSON.parse(body);
                    for (let i = 0; i < parsed.length; i++) {
                        if (parsed[i].type == "PushEvent") {
                            done(null, parsed[i]);
                            return;
                        }
                    }
                })
            },
            // Second async function call
            (priorVal, done) => {

                let repoID = priorVal.repo.id;
                let commitMessage = priorVal.payload.commits[0].message;
                let createdAt = priorVal.created_at;
                let avatar = priorVal.actor.avatar_url;
                let username = priorVal.actor.login;

                req({
                    headers: {
                        'User-Agent': 'owen-oertell'
                    },
                    url: `https://api.github.com/repositories/${repoID}`,
                    method: 'GET'
                }, function (err, res, body) {
                    let parsed = JSON.parse(body);
                    let returnObject = {
                        'repoName': parsed.full_name,
                        'repoURL': parsed.html_url,
                        'repoStars': parsed.stargazers_count,
                        'commitMessage': commitMessage,
                        'createdAs': createdAt,
                        'avatar': avatar,
                        'username': username
                    };

                    done(null, returnObject);
                })
            },
            // Third  async function call
            (priorRes, done) => {
                // Parse to return in JSON format:
                // - Commit Message
                // - Last Commit (Time)
                // - Repo (full) Name
                // - Repo Stars
                // - Repo Link
                // - Repo Description
                // https://api.github.com/repositories/:id
                response.write(JSON.stringify(priorRes));
                done(null);
            }
        ], (err) => {
            response.end();
        })


        // Going to github and requesting last push by user.
        //https://api.github.com/users/owen-oertell/events

        
    });
}).listen(8000);