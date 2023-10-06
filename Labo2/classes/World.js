import Island from "./Island.js";


export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // hook events like clicking buttons to a specific function
      document.querySelector("#btnAddIsland").addEventListener("click", () => {
        this.addIsland();
      } );

      
    }
  
    save() {
      // save array islands to localstorage as string
      // loop over all this.islands and save the names
    }
  
    load() {
      // load islands from localstorage into array
      // loop over the array and addIslands()
    }
  
    getCoordinates() {
      // return coordinates within the screen at random, feel free to change it up!
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
    }
  
    addIsland(island) {
        let div = document.createElement("div");
        //add classlist to div
        div.classList.add("island");

        //add random name to div
        let name = new Island();
        div.innerHTML = name.getRandomName();

        //add random color to div
        let color = new Island();
        div.style.backgroundColor = color.getRandomColor();

        //add random coordinates to div form function getCoordinates
        document.body.appendChild(div);
        // let coordinates = this.getCoordinates();
        
        //moveIsland function to move the island 
        this.moveIsland(div);


        
        
        
                

    }
  
    moveIsland(island) {
      // this might be a good point to animate the islands with JS Animations API
      //new animation for the island to move to the random coordinates

      let coords = this.getCoordinates();
      island.animate(
        [
          { transform: `translate(0px, 0px)` },
          { transform: `translate(${coords.x}px, ${coords.y}px) `}
        ],
        {
          duration: 1000,
          iterations: 1,
          fill: "forwards",
        }
        );
        

        console.log(island.coords);
    }
  }
  