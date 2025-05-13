//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
async function downloadImages () {
	var loading = document.getElementById("loading");
  var error = document.getElementById("error");
  var output = document.getElementById("output");
  
  loading.innerText="Loading..."
    const array = await Promise.all([fetch(images[0]["url"]),fetch(images[1]["url"]),fetch(images[2]["url"])])
    if(array){
     loading.innerText="";
     console.log(array,"arrau")
     let imagesSrcArray= [images[0]["url"],images[1]["url"],images[2]["url"]];
     imagesSrcArray.forEach((el)=>{
         const img = document.createElement("img");
         img.src=el;
         img.style.width="200px";
         img.style.height="200px"
         output.appendChild(img);
     })
    }else{
        loading.innerText=""
        error.innerText="Error downloading images"
    }
}

document.addEventListener("DOMContentLoaded",async function(){
//     <div id="output"></div>
//   <div id="error"></div>
//   <div id="loading"></div>
  
})
