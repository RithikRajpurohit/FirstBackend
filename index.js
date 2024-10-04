require('dotenv').config()

const express  = require("express");
const app = express();

const port = 4000;

const DATA_GIT =
{
    "login": "RithikRajpurohit",
    "id": 176563475,
    "node_id": "U_kgDOCoYlEw",
    "avatar_url": "https://avatars.githubusercontent.com/u/176563475?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/RithikRajpurohit",
    "html_url": "https://github.com/RithikRajpurohit",
    "followers_url": "https://api.github.com/users/RithikRajpurohit/followers",
    "following_url": "https://api.github.com/users/RithikRajpurohit/following{/other_user}",
    "gists_url": "https://api.github.com/users/RithikRajpurohit/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/RithikRajpurohit/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/RithikRajpurohit/subscriptions",
    "organizations_url": "https://api.github.com/users/RithikRajpurohit/orgs",
    "repos_url": "https://api.github.com/users/RithikRajpurohit/repos",
    "events_url": "https://api.github.com/users/RithikRajpurohit/events{/privacy}",
    "received_events_url": "https://api.github.com/users/RithikRajpurohit/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2024-07-25T07:05:48Z",
    "updated_at": "2024-07-25T07:06:14Z"
}

app.get("/",(req,res)=>
{
    res.send("Welcome to the website of Rithik");
})

app.get("/Login",(req,res)=>{
    res.send('<h1>Click on the button</h1>')
})
app.get("/Twitter",(req,res)=>{
    res.send('<h1>Now ur in twitter </h1>')
})
app.get("/Github",(req,res)=>{
    res.json(DATA_GIT)
})
app.listen(process.env.PORT,()=>{
    console.log(`the website is listening at ${port} `);
    
})