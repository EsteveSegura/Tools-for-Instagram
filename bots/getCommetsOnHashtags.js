
require('../src/tools-for-instagram.js');

async function getCommentsOnHashtag(ig,hashtag){
    //get all pictures media id
    let picturesInHashtag = await recentHashtagList(ig,hashtag);
    let picturesMediaId = await picturesInHashtag.map(post => post.pk);

    //loop mediaids and show comments
    for(let i = 0; i < picturesMediaId.length;i++){
        let commentsFeed = await ig.feed.mediaComments(picturesMediaId[i].toString()); 
        let commentsResponse = await commentsFeed.items();
        if(commentsResponse.length){//If array not empty
            await sleep(4)
            let getCommentsInPicture = commentsResponse.map( comment => comment.text)
            console.log(getCommentsInPicture)
        }else{//Else if array is empty
            console.log("no_commments")
        }
    }
}

(async () =>{
    //Login
    let ig = await login()
    //Define hashtags
    /*const hashtagsfood = [
        "vegan",
        "govegan",
        "foodporn",
        "foodgasm",
        "foodie",
        "cooking",
        "cook",
        "recip",
        "yummy",
        "delicious",
        "instafood",
        "nomnom",
        "food"
    ]*/
    const hashtagMainStream =[
        "picoftheday",
        "catsofinstagram"
    ]

    for(let i = 0 ; i < hashtagMainStream.length; i++){
        console.log("ACTUAL HASHTAG ---> " + hashtagMainStream[i])
        await getCommentsOnHashtag(ig,"vegan")
    }

})();
