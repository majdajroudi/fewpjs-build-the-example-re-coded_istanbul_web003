// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like")
const errorModal = document.querySelector("#errorModal")
const heartElements = document.querySelectorAll(".like-glyph")
heartElements.forEach(element => {
  element.addEventListener("click",(e) => {
    e.target.classList.remove("actiavted-heart")
  })
})

likes.forEach(like => {
  like.addEventListener("click", mimicServerCall()
  .then(data => {
    heartElements.forEach(element => {
      element.classList.add("activated-heart")
    })
  })
  .catch(error => {
    errorModal.classList.remove("hidden")
    errorModal.innerText = error
    setTimeout(() => errorModal.classList.add("hidden"),5000)
  })
  )
})

heartElements.forEach(element => {
  element.addEventListener("click",() => {
    element.classList.remove("actiavted-heart")
  })
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
