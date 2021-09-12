noseX=0;
noseY=0;
eyex=0;
eyey=0;
function preload(){
lip=loadImage("https://i.postimg.cc/Fs3W2P0v/lip.png");
glasses=loadImage("https://i.postimg.cc/prGF7MkC/glasses1.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);

}

function modelLoaded(){
    console.log("model Loaded!!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("mouth x= "+results[0].pose.nose.x);
        console.log("mouth y= "+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        eyex=results[0].pose.rightEye.x;
        eyey=results[0].pose.rightEye.y;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(lip,noseX-15,noseY+7,35,35);
    image(glasses,eyex-35,eyey-38,100,75);
}
function take_snapshot(){
    save("myFilterImage.png");
}