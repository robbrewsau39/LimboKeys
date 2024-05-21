let answer; // Used ChatGPT a little bit here to figure out how to get the answer from the JSON file across both functions
let wins = 0;
let losses = 0;

let winsElement = document.getElementById("winScore");
let lossesElement = document.getElementById("loseScore");

// Define the function to fetch the video
function fetchVideo(){
    const submitBtn = document.getElementById("submitBtn"); // Grab the submit button from the HTML
    submitBtn.disabled = false; // Enable the submit button

    const myVideo = document.getElementById("myVideo"); // Grab the video element from the HTML
    fetch("videos.json") // Fetch the JSON file
        .then(response => response.json()) // Convert the response object to JSON
        .then(value => { // Get the actual data as an array of objects
            const randNum = Math.floor(Math.random() * value.length); // Get random number between 0 and the length of the array
            const videoName = value[randNum].video; // Returns name of video from random number
            myVideo.src = `./media/${videoName}`; // Set the source of the video to the video name
            myVideo.style.display = "block"; // Display the video
            // Styles to always be nice
            myVideo.style.width = "100vw"; // Set the width of the video
            myVideo.style.height = "50vh"; // Set the height of the video

            answer = value[randNum].answer; // Set the answer to the answer from the JSON file
            
    });
    
}
// Create a function to handle what user selects
function userSelect(){
    // Get the user response from their key selection
    const submitBtn = document.getElementById("submitBtn"); // Grab the submit button from the HTML
    const myVideo = document.getElementById("myVideo"); // Grab the video element from the HTML, running for checks
    const result = document.getElementById("result"); // Grab the result element from the HTML

    let userResponse = document.getElementById('keyOptions'); // The reason why its keyOptions and not userAnswer is because it selects one of the key options
    userResponse = userResponse.value; // Get the value of the key option

    if(myVideo.src === ""){
        alert("Please get a video first!");
        return;
    } else {
        if(userResponse === answer){
            result.innerHTML = `Result: Correct! The answer was ${answer}!`;
            submitBtn.disabled = true;
            wins++;
            winsElement.innerHTML = `Wins: ${wins}`;
        } else if (userResponse === ""){
            alert("Please select a key!");
        } else {
            result.innerHTML = "Result: Incorrect, the correct answer was " + answer + "!";
            submitBtn.disabled = true;
            losses++;
            lossesElement.innerHTML = `Losses: ${losses}`;
        };
    }
}

// Getting custom volume buttons

// Defining default volume on page load
const myVideo = document.getElementById("myVideo");
myVideo.volume = 0.5;
const loudness = document.getElementById("totalVolume");
loudness.innerHTML = `Volume: ${Math.floor(myVideo.volume * 100)}%`;

// Run functions for when increasing and decresing volume
function quieter(){
    const myVideo = document.getElementById("myVideo");
    const loudness = document.getElementById("totalVolume");
    myVideo.volume -= 0.1;
    loudness.innerHTML = `Volume: ${Math.floor(myVideo.volume * 100)}%`;
}

function louder(){
    const myVideo = document.getElementById("myVideo");
    const loudness = document.getElementById("totalVolume");
    myVideo.volume += 0.1;
    loudness.innerHTML = `Volume: ${Math.floor(myVideo.volume * 100)}%`;
}

// Mute function
function mute(){
    const myVideo = document.getElementById("myVideo");
    const loudness = document.getElementById("totalVolume");
    myVideo.volume = 0;
    loudness.innerHTML = `Volume: ${Math.floor(myVideo.volume * 100)}%`;
}

// Play and pause function
function play(){
    const myVideo = document.getElementById("myVideo");
    const playButton = document.getElementById("playBtn");
    // If the video source is empty, alert the user to get a video first
    if (myVideo.src === ""){
        alert("Please get a video first!");
        return;
    } else {
        if(myVideo.paused){
            myVideo.play();
            playButton.innerHTML = "Pause";
        } else {
            myVideo.pause();
            playButton.innerHTML = "Play";
        }
    };
};

// Creating a switch for changing what image is hovered over
function renderImage(){
    const keyImage = document.getElementById("keyImage");
    const keyOptions = document.getElementById("keyOptions");
    switch(keyOptions.value){
        case "Mint":
            keyImage.src = "./key_img/mint.png";
            break;
        case "Yellow":
            keyImage.src = "./key_img/yellow.png";
            break;
        case "Blue":
            keyImage.src = "./key_img/blue.png";
            break;
        case "Purple":
            keyImage.src = "./key_img/purple.png";
            break;
        case "Pink":
            keyImage.src = "./key_img/pink.png";
            break;
        case "Cyan":
            keyImage.src = "./key_img/cyan.png";
            break;
        case "Red":
            keyImage.src = "./key_img/red.png";
            break;
        case "Lime":
            keyImage.src = "./key_img/lime.png";
            break;
    };
    keyImage.style.display = "flex";
}