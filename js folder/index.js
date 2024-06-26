//$ npx json-server db.json
//https://phaseone-project-db.onrender.com/artwork

//Function that targets and adds the data from the submission field into the db
document.getElementById("art-form").addEventListener("submit", handleSubmission)
//Code event handlers
function handleSubmission(e){
   e.preventDefault()
   const paintObj = {
      name:e.target.name.value,
      description:e.target.description.value,
      paintingUrl:e.target.painting.value
   }
   displayPaintings(paintObj)
   displayNewPainting(paintObj)
}

//Function that render the DOM
function displayPaintings(art){
   let paintingsCard = document.createElement("li")
   paintingsCard.className = "card"
   paintingsCard.innerHTML =`
   <div class ="row-sm- mb-3 p-3 ">
      <img src="${art.painting}" alt="Painting" style="width:100%">
      <div class="container">
        <h4><b>${art.name}</b></h4>
        <p>${art.description}</p>
      </div>
      
   </div>
`
document.getElementById("List-paintings").appendChild(paintingsCard)
}

//fetch requests

//
function getAllPaintings(){
fetch("https://phaseone-project-db.onrender.com/artwork")
   .then(response => response.json())
   .then(artwork =>  artwork.forEach(art => displayPaintings(art)))
}
//
function displayNewPainting(paintObj){
fetch("https://phaseone-project-db.onrender.com/artwork",{
         method:"POST",
         headers:{
            "Content-type": "appllication/json"
      },
      body:JSON.stringify(paintObj)
   })
.then(response => response.json())
.then(art => console.log(art))
}





// fetches for the required data from the artwork database
function initialize(){
   getAllPaintings()

}
initialize()


