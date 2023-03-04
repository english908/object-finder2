video = "";
function preload(){
    video = createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas = createCanvas(420 , 420);
    canvas.center();

}
function draw(){
    image(video ,0 , 0, 420 , 420);
}
function start(){
    objectDetector.ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelLoaded(){
    console.log("Model Loaded!!*");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}