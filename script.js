const allDivs = document.querySelectorAll(".col");



// for (let div of allDivs){
//     div.addEventListener("click", function (){
    
//         allDivs.style.backgroundColor = "green";
        
        
        
//     })
        
//     };



for (let div of allDivs) {


  div.addEventListener("click", function (){

    for (let div of allDivs) {

        div.style.backgroundColor = "grey";
        div.style.boxShadow = "none"; 

    }

  this.style.backgroundColor = "black";
  this.style.boxShadow = "0px 0px 2px 2px black"; 



 })

};

// for (let div of allDivs) {

// div.addEventListener("mouseover", () =>{

//   div.style.height = "300px"
  

//  })

    
// }

    
