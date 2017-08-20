const gifContainer = document.querySelector('.gif-container');
const element = document.querySelector('input');

const btn = document.querySelector('button');

function cleanGif(){

    gifContainer.innerHTML=''


}

function apiaccess(search) {
console.log(search);
  let urlsearch ="http://api.giphy.com/v1/gifs/search?q="+search+"&api_key=dc6zaTOxFJmzC"
  $.ajax({
    url:urlsearch,
    success: function(response) {
cleanGif()

      for(let i=0; i<response.data.length; i++){
      var img = document.createElement("img")
      img.src=response.data[i].images.preview_gif.url
      gifContainer.appendChild(img)

}
    }
  })

}

btn.addEventListener('click',function(){
apiaccess(String(element.value))
})

element.addEventListener('keypress', function(event) {

  if (event.keyCode === 13) {
  apiaccess(element.value)

  }

})
