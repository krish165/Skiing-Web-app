function preload()
{

}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(400,400);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw()
{
   image(video,0,0,400,400);
}

function modelLoaded()
{
    console.log("PoseNet is working");

}
function snapshot()
{
    save("sap_img.png");
}
function gotPoses(results)
{
   
    if(results.length>0)
    {
        console.log(results);
        console.log("Right_Eye X="+results[0].pose.rightEye.x);
        console.log("Right_Eye Y="+results[0].pose.rightEye.y);
        console.log("Left_Eye X="+results[0].pose.leftEye.x);
        console.log("Left_Eye Y="+results[0].pose.leftEye.y);
    }
}
