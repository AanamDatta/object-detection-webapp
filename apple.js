status =""
function preload(){
    img = loadImage("apple.jpg")
}
function setup(){
    canvas = createCanvas(650,420)
    canvas.center()
    ObjectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "status: detecting objects"
}
function modelLoaded(){
    console.log("model is loaded")
    status = true
    ObjectDetector.detect(img, gotresult )

}
function gotresult(error,results) {
if (error) {
    console.log(error)
} else {
    console.log(results)
}
}
function draw(){
    image(img, 0,0,650,420)
} 