//Score
var scoreLeftWrist = 0;
// Status
var statusOfSong = "";
var statusOfSong1 = "";
// Songs
var song = "";
var song1 = "";
// Wrist X 
var leftWristX = 0;
var rightWristX = 0;
// Wrist Y
var leftWristY = 0;
var rightWristY = 0;

function preload() {
   song = loadSound("music.mp3");
   song1 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(540, 540);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded");
}
function draw()
{
    image(video, 0, 0, 350, 350);
    fill("red");
    stroke("red");
    song_status1 = song1.isPlaying();
    song_status2 = song2.isPlaying();
    if(scorerw>0.2)
    {
        circle(rightWristX, rightWristY, 20);
        song2.stop();
        if(song_status1 == false)
        {
            song1.play();
            document.getElementById('song_name').innerHTML = "Playing Harry Potter Song";
        }
    }
    if(scorelw>0.2)
    {
        circle(rightWristX, rightWristY, 20);
        song1.stop();
        if(song_status2 == false)
        {
            song2.play();
            document.getElementById('song_name').innerHTML = "Playing Peter Pan Song";
        }
    }
}

function gotPoses(results){
   
    if(results.length > 0) {
    console.log(results);

    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log(scoreLeftWrist);
    
    leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX, "Left Wrist Y = " + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX, "Right Wrist Y = " + rightWristY);
    }
}