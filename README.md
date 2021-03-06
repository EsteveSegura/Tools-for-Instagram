# Tools-for-Instagram

<img src="https://i.imgur.com/J2PsoIZ.png" width="100">

[![Telegram Chat](https://img.shields.io/badge/telegram-join%20chat-informational.svg)](https://t.me/toolsforinstagram)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/tools-for-instagram)
![NPM](https://img.shields.io/npm/l/tools-for-instagram)
![npm](https://img.shields.io/npm/dt/tools-for-instagram)

Automation scripts for Instagram </br></br>
<img src="https://i.imgur.com/aaTVSP2.png" width="540">

![View changes](https://github.com/linkfy/Tools-for-Instagram/wiki/Changelog)

## How to use it
### Easy way:
    1. npm install tools-for-instagram
    2. create a .env file on the main directory with this fields:

```
IG_USERNAME=myUsername
IG_PASSWORD=myPassword

# Uncomment next line to use a proxy
# IG_PROXY=http://proxyuser:proxypassword@xxx.xxx.xxx.xxx:xxxxx
# Uncomment next line to use email verifications | sms by default
# IG_VERIFICATION=email
```
    3. Copy the example.js on the root folder of your project from the repo
    4. Execute'node example.js' to test the scripts.

#### Following steps:
    1. Write your automation bots or copy the existent ones inside Tools-for-Instagram module 
    (Recommended to create a 'bots' folder in root of the project)
    2. Tests the bot using 'node bots/yourBot.js'

### Git way:
    1. Download the repo and install dependencies using this terminal commands:
```
    git clone https://github.com/linkfy/Tools-for-Instagram.git
    cd Tools-for-Instagram
    npm install
```
    2. Rename .env_example to .env and edit the configuration.
    3. Execute 'node example.js' to test the scripts.

#### Following steps:
    1. Write your automation bots inside bots folder or use the existent ones
    2. Tests the bot using 'node bots/bot.js'

## Bot skills:
- [x] Login Flow
- [x] SMS/Email verification modes
- [x] Save Cookies in files
- [x] Remove Cookies
- [x] Get User Information
- [x] Get User Recent Posts
- [x] Get recent post Likers / By Username
- [x] Get Followers of account (save into a json file)
- [x] Get Followings of account (save into a json file)
- [x] Read Following/Followers files generated and return Array.
- [x] Like Content by URL
- [x] Like Content by MediaId 
- [x] Like Content by Post
- [x] Follow by Username
- [x] Follow User by Post
- [x] Unfollow by Username
- [x] View stories by User Id
- [x] View stories by Username
- [x] Get recent posts list of a hashtag
- [x] Get top posts list of a hashtag
- [x] Get recent post list by location
- [x] Get top post list by location
- [x] Save post list into scrape list
- [x] Implement lowdb Database
- [x] Save Likes information
- [x] Save Follows information
- [x] Save Unfollows information
- [x] Get Like activity
- [x] Get Follow activity
- [x] Get Unfollow activity
- [x] Current Time In Range Validator [ex: from 8:00 to 23:00]
- [x] Proxies
- [x] Multi-login
- [x] Like Recent Hashtags By Intervals
- [x] Follow Recent Hashtags By Intervals
- [x] Simple Bot
- [x] NPM package support
- [x] View Stories from User  Id/Ids
- [x] View Stories from User Followers
- [x] View Stories from User Following
- [x] Live Streaming
- [ ] Postprocessing of scrape list (detect faces, language, business accounts)

<img src="https://media.giphy.com/media/ignhVpXU7h4qHMwXix/giphy.gif" width="340">

## Wiki

https://github.com/linkfy/Tools-for-Instagram/wiki


## Telegram group

https://t.me/toolsforinstagram

## Follow the project

You can follow the streams of the project on the Twitch channel<br>
https://www.twitch.tv/mimi_twitchbot

## Follow the development status

Follow the development status to see what's the next upcoming idea<br>
https://trello.com/b/ZlwRr6l0/tools-for-instagram


## Api mods

- Injected loggedInUser inside ig Object after login (ig.loggedInUser)
- Injected db inside ig Object after login (ig.db)
- Injected shortid generator inside ig Object

# Api
### Basic example
#### Using npm package
```javascript
require("tools-for-instagram");

(async () => {

    let ig = await login();

    // .. Implement your code here
    let info = await getUserInfo(ig, "Instagram");
    console.log("User information, username: " + info.username);
    
    // ..
})();
```
#### Using Git repo:
```javascript
require('./src/tools-for-instagram');

(async () => {
    let ig = await login();
    
    // .. Implement your code here
    let info = await getUserInfo(ig, "Instagram");
    console.log("User information, username: " + info.username);
    
    // ..

})();
```
#### loadConfig(loginFileName)
Load a config file from the logins folder

By default it will use the proxy from .env file if the proxy is not set on login().

```javascript
    let acc = loadConfig('exampleAccount');
    let myAccount2 = await login(acc.account, acc.password, acc.proxy);
    //same as await login("username", "password");

```

To avoid the default proxy from the .env file use false as a third parameter on login:

```javascript
    let acc = loadConfig('exampleAccount');
    let myAccount2 = await login(acc.account, acc.password, false);

```

#### getUserInfo(ig, username)
Get the user information of the desired username
```javascript
   let info = await getUserInfo(ig, 'Instagram');
```


#### getRecentPostLikers(ig, post);
Get the last likers (max of 1000) of a post
```javascript
    let posts = await getUserRecentPosts(ig, username);
    let likers = await getRecentPostLikers(ig, posts[0]);
```

#### getRecentPostLikersByUsername(ig, username)
Get the last likers (max of 1000) of the last post of the desired username

```javascript
let likers = await getRecentPostLikersByUsername(ig,'instagram');
//Show the last liker of the array
console.log(likers[likers.length-1]);
```


#### getFollowers(ig, username)
It will save the followers inside the outputfolder with the format "acountName_followers.json"
```javascript
   await getFollowers(ig, 'Instagram');
```

#### getFollowing(ig, username)
It will save the following inside the outputfolder with the format "acountName_following.json"
```javascript
   await getFollowing(ig, 'Instagram');
```

#### readFollowers(ig, username)
It will return the followers inside the outputfolder with the format "acountName_followers.json"
```javascript
   let followers = await readFollowers(ig, 'Instagram');
```
#### readFollowing(ig, username)
It will return the following inside the outputfolder with the format "acountName_following.json"
```javascript
   let followers = await readFollowing(ig, 'Instagram');
```

#### likeUrl(ig, username, [force: bool])
like the desired instagram Url, the like will be saved inside database. 
```javascript
   await likeUrl(ig, 'https://www.instagram.com/p/B1gzzVpA462/');
```
If 'force' is set to true, when the item was already liked before it will force to continue the operation.
```javascript
   await likeUrl(ig, 'https://www.instagram.com/p/B1gzzVpA462/', true);
```

#### viewStoriesFromUser(ig, username)
View all the current stories of the given username
```javascript
   await viewStoriesFromUser(ig, 'instagram');
```

#### isTimeInRange(startTime, endTime)
Returns True or False if the current time is inside the range
```javascript
   await isTimeInRange("10:00", "23:00");
```
It is also possible to calculate night ranges between the current day and tomorrow.

```javascript
   await isTimeInRange("23:00", "3:00");
```

#### likeRecentHashtagsByIntervals(ig, hashtagArray, intervals, likesPerInterval, waitMinutesBetweenLikes)

Automate like actions on given array of recent hashtags feed

```javascript
    let likesPerInterval = 15;
    let waitMinutesBetweenLikes = 3;

    let intervals = [
        ["7:00",    "8:00"],
        ["10:00",   "11:00"],
        ["22:00",   "23:00"],
    ];
    let hashtagArray = [
        "cats",
        "dogs",
        "music"
    ];

   let likeInterval = likeRecentHashtagsByIntervals(
                                                    ig,
                                                    hashtagArray, 
                                                    intervals, 
                                                    likesPerInterval,
                                                    waitMinutesBetweenLikes);
```
It is also possible to stop the interval clearing it

```javascript
   clearInterval(likeInterval);
```



### This documentation is not yet finished...
#### recentHashtagList(ig, hashtag)
#### topHashtagList(ig, hashtag)
#### likePost(ig, post)
#### recentLocationList(ig, location, [randomize: bool])
#### topLocationList(ig, location, [randomize: bool])
#### savePosts(ig, posts, filename)
#### followUser(ig, username)
#### followUserByPost(ig. post)
#### getLikeActivityByHours(ig, startingHour)
#### getFollowActivityByHours(ig, startingHour)
#### getUnfollowActivityByHours(ig, startingHour)
#### getLikeActivityFromHourToNow(ig, "12:05")
#### lastLikeMinutesAgo(ig)
#### removeCookie(ig)
#### followRecentHashtagsByIntervals(ig, hashtagArray, intervals, followsPerInterval, waitMinutesBetweenFollows)
#### viewStoriesFromId(ig, userId)
#### viewStoriesFromFollowing(ig, username)
#### viewStoriesFromFollowers(ig, username)
#### getUserRecentPosts(ig, username)
#### requestLivestream(ig)


