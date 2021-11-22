
var ele = document.querySelector('.All-characters')                    //selected the div with class All-characters

fetch('http://hp-api.herokuapp.com/api/characters')             //fetching all the data of characters from api
.then((data) => data.json()) 
.then((data1) => {
    for(var i=0;i<25;i++){                                      //limiting the data to 25 characters as image data is unavailable for rest of the characters in the Api
        let character = data1[i];
                                                                //appending each character detail and image to the div 
                ele.innerHTML+=`<div class='character'>                      
                <img class='character-image' src=${character.image}>
                <div class='details'>
                <p>Actor: ${character.actor}</p>
                <p>Character: ${character.name}</p>
                </div>
                </div>`
            
            
        }
    }
).catch(function(error) {                                       
        console.log(error);
    });

