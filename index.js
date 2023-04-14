
document.addEventListener("keydown",function (event){
  switch(event.key){
  case 'q':
    var image1=document.querySelector("#image1");
    var audio1=document.querySelector("#audio1");
    audio1.play();
    break;
    case 'w':
        var image2=document.querySelector("#image2");
        var audio2=document.querySelector("#audio2");

            audio2.play();
       
    break;
    case 'e':
        var image3=document.querySelector("#image3");
var audio3=document.querySelector("#audio3");

    audio3.play();

        break;
        case 'r':
            
var image4=document.querySelector("#image4");
var audio4=document.querySelector("#audio4");

    audio4.play();

            break;
            case 't':
                
var image5=document.querySelector("#image5");
var audio5=document.querySelector("#audio5");

    audio5.play();
    

break;
default:
    break;
            
}
})

