
for(var i=0;i<document.querySelectorAll(".numbT").length;i++)
{
    document.querySelectorAll(".numbT")[i].addEventListener("click",function()
    {
        var buttonInnerHTML=this.innerText;

        switch(buttonInnerHTML)
        {
            case "1":
                var audioA=new Audio("sounds_numbers/one.mp3");
                audioA.play();
                break;
            case "2":
                var audioB=new Audio("sounds_numbers/two.mp3");
                audioB.play();
                break;
            case "3":
                var audioC=new Audio("sounds_numbers/three.mp3");
                audioC.play();
                break;
            case "4":
                var audioD=new Audio("sounds_numbers/four.mp3");
                audioD.play();
                break;
            case "5":
                var audioE=new Audio("sounds_numbers/five.mp3");
                audioE.play();
                break;
            case "6":
                var audioF=new Audio("sounds_numbers/six.mp3");
                audioF.play();
                break;
            case "7":
                var audioG=new Audio("sounds_numbers/seven.mp3");
                audioG.play();
                break;
            case "8":
                var audioH=new Audio("sounds_numbers/eight.mp3");
                audioH.play();
                break;
            case "9":
                var audioI=new Audio("sounds_numbers/nine.mp3");
                audioI.play();
                break;
            case "10":
                var audioJ=new Audio("sounds_numbers/ten.mp3");
                audioJ.play();
                break;
            case "11":
                var audioK=new Audio("sounds_numbers/eleven.mp3");
                audioK.play();
                break;
            case "12":
                var audioL=new Audio("sounds_numbers/twelve.mp3");
                audioL.play();
                break;
            case "13":
                var audioM=new Audio("sounds_numbers/thirteen.mp3");
                audioM.play();
                break;
            case "14":
                var audioN=new Audio("sounds_numbers/fourteen.mp3");
                audioN.play();
                break;
            case "15":
                var audioO=new Audio("sounds_numbers/fifteen.mp3");
                audioO.play();
                break;
            case "16":
                var audioP=new Audio("sounds_numbers/sixteen.mp3");
                audioP.play();
                break;
            case "17":
                var audioQ=new Audio("sounds_numbers/seventeen.mp3");
                audioQ.play();
                break;
            case "18":
                var audioR=new Audio("sounds_numbers/eighteen.mp3");
                audioR.play();
                break;
            case "19":
                var audioS=new Audio("sounds_numbers/nineteen.mp3");
                audioS.play();
                break;
            case "20":
                var audioT=new Audio("sounds_numbers/twenty.mp3");
                audioT.play();
                break;
            default:
                console.log("testing default case");
        }
    });
}



