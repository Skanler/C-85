canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasaimages = ["mars1.jpg","mars2.jpg","mars3.jpg"];
randomnumber = Math.floor(Math.random() * 4);

background_image = nasaimages[randomnumber];
rover_image = "rover.png";
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

function add(){
background_tag = new Image();
background_tag.onload = uploadBackground;
background_tag.src = background_image;

rover_tag = new Image();
rover_tag.onload = uploadRover;
rover_tag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_tag, 0,0, canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_tag, rover_x,rover_y, rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40' ){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}


function up(){
    if(rover_y >=0){
        rover_y -= 10;
        console.log("When up arrow is pressed = " + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y <=500){
        rover_y += 10;
        console.log("When down arrow is pressed = " + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x >=0){
        rover_x -= 10;
        console.log("When left arrow is pressed = " + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x <=700){
        rover_x += 10;
        console.log("When right arrow is pressed = " + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}