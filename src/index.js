document.addEventListener("DOMContentLoaded", function(){
    challengeOne()
    challengeTwo()
    challengeThree()
    challengeFour()
})

function challengeOne() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res => {
          return res.json()
      })
      .then(json =>{
          showImage(json)
      })
}

function showImage(images) {
    images.message.map(image => {
        addImage(image)
    });

}

function addImage(image) {
    const list = document.createElement("ul")
    const div = document.getElementById("dog-image-container")
    const img = document.createElement("img")
    img.src= image
    list.appendChild(img)
    div.appendChild(list)
}

function challengeTwo() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res =>{
          return res.json()
      })
      .then(json =>{
          showBreed(json)
      })

}

function showBreed(breeds) {
    // console.log(Object.keys(breeds.message))
    Object.keys(breeds.message).map(breed =>{
        addBreed(breed)
    })
    
}

function addBreed(breed) {
    const li= document.createElement("li")
    const ul = document.getElementById("dog-breeds")
    li.innerHTML = breed

    ul.appendChild(li)
    
}

function challengeThree() {
    const list = document.getElementById("dog-breeds")
    list.addEventListener("click", function(event){
         event.target.style = "color:red;";
    })
    
}

function challengeFour() {
    
    const dropMenu = document.getElementById("breed-dropdown") 
    dropMenu.addEventListener("change", function(event){
        const letter = event.path[0].value
        searchByLetter(letter)
    })
    
}

function searchByLetter(letter) {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(res =>{
          return res.json()
      })
      .then(json =>{
         filter(json)
      })

      function filter(breeds) {
        const ul = document.getElementById("dog-breeds")
        ul.innerHTML=""
        console.log(ul)
        //   console.log(breeds)
        Object.keys(breeds.message).map(breed =>{
            if(breed[0] === letter) { 
               filterBreed(breed)
            }
        })
      }
      function filterBreed(element) {
        const ul=document.getElementById("dog-breeds")
        const li = document.createElement("li")
        li.innerText = element
        ul.appendChild(li)
      }

}