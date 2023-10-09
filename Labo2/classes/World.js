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

      document.querySelector("#btnSave").addEventListener("click", () => {
        this.save();
      } );

      document.querySelector("#btnLoad").addEventListener("click", () => {
        this.load();
      } );

      
    }
  
    save() {
      // save array islands to localstorage as string
      // loop over all this.islands and save the names

      localStorage.setItem('islands', JSON.stringify(this.islands));
      console.log(localStorage.getItem('islands'));

    }
  
    load() {
      // load islands from localstorage into array

      try {
        // Retrieve the JSON string from localStorage
        const islandsJSON = localStorage.getItem('islandsData');
    
        if (islandsJSON !== null) {
          // Parse the JSON string to an array
          const savedIslands = JSON.parse(islandsJSON);
    
          // Clear the current this.islands array (if needed)
          this.islands.length = 0;
    
          // Add the saved islands to this.islands
          savedIslands.forEach(savedIsland => {
            // Create a new Island instance and add it to this.islands
            const newIsland = new Island();
            newIsland.setName(savedIsland.name); // Assuming your Island class has a setName method
            this.islands.push(newIsland);
            console.log(newIsland);
          });
    
          console.log('Islands data loaded from localStorage.');
          
        } else {
          console.log('No islands data found in localStorage.');
        }
      } catch (error) {
        console.error('Error while loading islands data:', error);
      }


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
  
    addIsland() {
        let div = document.createElement("div");
        //add classlist to div
        div.classList.add("island");

        //add random name to div
        let name = new Island();
        div.innerHTML = name.getRandomName();

        //add random color to div
        let island = new Island();
        div.style.backgroundColor = island.getRandomColor();

        //add random coordinates to div form function getCoordinates
        document.body.appendChild(div);
        // let coordinates = this.getCoordinates();
        
        //moveIsland function to move the island 
        this.moveIsland(div);
        
        
        this.islands.push(island.getRandomColor(), island.getRandomName());

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
        

        // console.log(island.coords);
    }
  }
  