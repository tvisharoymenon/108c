Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src"'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vCfA3xBPu/model.json',modelLoded);
function modelLoded(){
    console.log('modelLoded!');
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is ";
    speak_data2 = "The second prediction is ";
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);

}
function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
    console.log("check is working")


}
function gotResult(error,results){
    console.log("ok");
    if(error) {
        console.log(error);
    
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "LOL"){
         document.getElementById("update_emoji").innerHTML="&#128514"        ;}
         if(results[0].label == "happy"){
            document.getElementById("update_emoji").innerHTML="&#128522"        ;}
            if(results[0].label == "sad"){
                document.getElementById("update_emoji").innerHTML="&#128532"        ;}
                if(results[0].label == "angry"){
                    document.getElementById("update_emoji").innerHTML="&#128548"        ;}
                    if(results[1].label == "LOL"){
                        document.getElementById("update_emoji2").innerHTML="&#128514"        ;}
                        if(results[1].label == "happy"){
                           document.getElementById("update_emoji2").innerHTML="&#128522"        ;}
                           if(results[1].label == "sad"){
                               document.getElementById("update_emoji2").innerHTML="&#128532"        ;}
                               if(results[1].label == "angry"){
                                   document.getElementById("update_emoji2").innerHTML="&#128548"        ;}
               

    }
}
    