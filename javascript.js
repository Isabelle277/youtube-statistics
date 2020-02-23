// This is where you'll place your javascript code

// open your Developer Tools (CTRL + Shift + j) to see this message :)
//console.log("Hello World!");

// a fetch request is used to access data from an API (application programming interface)



function populateData(url){
fetch(url).then(response => response.json()).then(data => {
    const top10MostLikedVideos = data.result;

    // 0 corresponds to the first item in the list of videos
    const firstVideo = top10MostLikedVideos[0];

    console.log(firstVideo); // look at the details for the first video in the developer tools

    top10MostLikedVideos.map(function(video, idx) {
        populateListItem(video, idx);
    });
})
}

function populateListItem(video, num) {
    const title = document.querySelector(`#title${num}`);
    title.innerHTML = video._id;

    const image = document.querySelector(`#image${num}`);
    image.src = video.thumbnail;

    const views = document.querySelector(`#views${num}`);
    views.innerHTML = video.views;

    const likes= document.querySelector(`#likes${num}`);
    likes.innerHTML = video.likes;

    const dislikes= document.querySelector(`#dislikes${num}`);
    dislikes.innerHTML = video.dislikes;

    const comments= document.querySelector(`#comments${num}`);
    comments.innerHTML = video.comments;
}

// function getListItem(video) {
//     const title = video._id;

//     return `<li>${title}. Views: ${Intl.NumberFormat("en-GB").format(video.views)}</li>`
// }

 const buttonviewed = document.querySelector("#mostViewed");
// const text = document.querySelector(".text");

 buttonviewed.addEventListener("click", () => {
    const url = "http://www.girlsintech.co.uk/api/top10?category=views";
    populateData (url);

    populateLabel ("Most Viewed");
 });

 const buttondisliked = document.querySelector("#mostDisliked");
// const text = document.querySelector(".text");

 buttondisliked.addEventListener("click", () => {
    const url = "http://www.girlsintech.co.uk/api/top10?category=dislikes";
    populateData (url);

    populateLabel ("Most Disliked");
 });

 const buttonliked = document.querySelector("#mostLiked");
 // const text = document.querySelector(".text");
 
  buttonliked.addEventListener("click", () => {
     const url = "http://www.girlsintech.co.uk/api/top10?category=likes";
     populateData (url);

     populateLabel("Most Liked");
  });

  const buttoncomment = document.querySelector("#mostCommented");
  // const text = document.querySelector(".text");
  
   buttoncomment.addEventListener("click", () => {
      const url = "http://www.girlsintech.co.uk/api/top10?category=comments";
      populateData (url);

      populateLabel("Most Commented")
   });
  
  
   const url = "http://www.girlsintech.co.uk/api/top10?category=views";
   populateData (url);

   function populateLabel(title) {
    const label = document.querySelector("#label");
    label.innerHTML = title;
   }