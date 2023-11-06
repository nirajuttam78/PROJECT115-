lipsX = 0;
lipsY = 0;
lipstick = "";

function preload(){
 lipstick = loadImage("https://i.postimg.cc/KzQPPqZw/image-removebg-preview-17.png");
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Intitialized');
}

function draw(){
   image(video, 0, 0, 400, 300);
   image(lipstick, lipsX+25, lipsY+5, 40, 30);
}

function take_snapshot(){
    save("myFilterImage.png");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        lipsX = results[0].pose.nose.x;
        console.log("nose y = " + results[0].pose.nose.y);
        lipsY = results[0].pose.nose.y;
    }
}