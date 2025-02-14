let Main = document.getElementById("main");
//Main.innerHTML = "DIV";

class character {
    
    static renders = [];
    
    constructor (name, img, traits){
        this.name = name;
        this.img = img;
        this.traits = traits;
    }
    
    getName(){
        alert(this.name);
        return this.name;
    }
    
    display(left, top){
        let image = document.createElement('img');
        image.src = this.img;
        image.width = 200;
        //alert("Added image");
        
        // Position the image
        image.style.position = "absolute";
        image.style.left = left;
        image.style.top = top;
        //alert("Positioned image");
        
        let display = main.appendChild(image);
        display.onclick = () => {
            let leftDist = 0;
            let topDist = 0;
            for(let i = 0; i < this.traits.length; i++){
                trait.renders.push(this.traits[i].display(leftDist + "px", topDist + "px"));
                
                if(leftDist < screen.width - 800){
                    leftDist += 400;
                } else {
                    leftDist = 0;
                    topDist += 200;
                }
            };
            destroyArray(character.renders);
        };
        
        return display;
    }
}

class trait {
    static renders = [];
    
    constructor(quotes, img){
        this.quotes = quotes;
        this.img = img;
    }
    
    display(left, top){
        let image = document.createElement('img');
        image.src = this.img;
        image.width = 400;
        //alert("Added image");
        
        // Position the image
        image.style.position = "absolute";
        image.style.left = left;
        image.style.top = top;
        image.onclick = () => {this.quote();};
        //alert("Positioned image");
        
        let display = main.appendChild(image);
        
        return display;
    }
    
    quote(){
        let text = document.createElement('p');
        text.innerHTML = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        text.onclick = () => {runLoop(); text.remove();};
        
        Main.appendChild(text);
        
        destroyArray(trait.renders);
    }
}

function destroyArray(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].remove();
    }
}

let button = new trait(["blah", "bloo", "bleh"], 'https://codehs.com/uploads/9666398ecd0cb8f4711330f2803a7922');

let button2 = new trait(["Blah", "Bloo", "Bleh"], 'https://codehs.com/uploads/9666398ecd0cb8f4711330f2803a7922');

let button3 = new trait(["BLAH", "BLOO", "BLEH"], 'https://codehs.com/uploads/9666398ecd0cb8f4711330f2803a7922');

let beowulf = new character('Beowulf', 'https://codehs.com/uploads/3a6dbeffc5736a2210d89543a468e226', [button, button2, button3]);

let beowulf2 = new character('Beowulf2', 'https://codehs.com/uploads/3a6dbeffc5736a2210d89543a468e226', [button, button3]);

let beowulf3 = new character('Beowulf3', 'https://codehs.com/uploads/3a6dbeffc5736a2210d89543a468e226', [button, button2, button3, button3, button2, button2]);
//let beowulfObj = beowulf.display("0px", "0px");
//character.renders.push(beowulfObj);

let characterList = [beowulf, beowulf2, beowulf3];

function runLoop(){
    let leftDist = 0;
    let topDist = 0;
    for(let i = 0; i < characterList.length; i++){
        let characterObj = characterList[i].display(leftDist+ "px", topDist + "px");
        character.renders.push(characterObj);
        if(leftDist < 400){
            leftDist += 200;
        } else {
            topDist += 200;
            leftDist = 0;
        }
    }
}

runLoop();
