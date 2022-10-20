
for(var i=0;i<document.querySelectorAll(".numbT").length;i++)
{
    document.querySelectorAll(".numbT")[i].addEventListener("click",function()
    {
        var buttonInnerHTML=this.innerText;

        switch(buttonInnerHTML)
        {
            case "Aa":
                var audioA=new Audio("sounds_alphabets/A.mp3");
                audioA.play();
                break;
            case "Bb":
                var audioB=new Audio("sounds_alphabets/B.mp3");
                audioB.play();
                break;
            case "Cc":
                var audioC=new Audio("sounds_alphabets/C.mp3");
                audioC.play();
                break;
            case "Dd":
                var audioD=new Audio("sounds_alphabets/D.mp3");
                audioD.play();
                break;
            case "Ee":
                var audioE=new Audio("sounds_alphabets/E.mp3");
                audioE.play();
                break;
            case "Ff":
                var audioF=new Audio("sounds_alphabets/F.mp3");
                audioF.play();
                break;
            case "Gg":
                var audioG=new Audio("sounds_alphabets/G.mp3");
                audioG.play();
                break;
            case "Hh":
                var audioH=new Audio("sounds_alphabets/H.mp3");
                audioH.play();
                break;
            case "Ii":
                var audioI=new Audio("sounds_alphabets/I.mp3");
                audioI.play();
                break;
            case "Jj":
                var audioJ=new Audio("sounds_alphabets/J.mp3");
                audioJ.play();
                break;
            case "Kk":
                var audioK=new Audio("sounds_alphabets/K.mp3");
                audioK.play();
                break;
            case "Ll":
                var audioL=new Audio("sounds_alphabets/L.mp3");
                audioL.play();
                break;
            case "Mm":
                var audioM=new Audio("sounds_alphabets/M.mp3");
                audioM.play();
                break;
            case "Nn":
                var audioN=new Audio("sounds_alphabets/N.mp3");
                audioN.play();
                break;
            case "Oo":
                var audioO=new Audio("sounds_alphabets/O.mp3");
                audioO.play();
                break;
            case "Pp":
                var audioP=new Audio("sounds_alphabets/P.mp3");
                audioP.play();
                break;
            case "Qq":
                var audioQ=new Audio("sounds_alphabets/Q.mp3");
                audioQ.play();
                break;
            case "Rr":
                var audioR=new Audio("sounds_alphabets/R.mp3");
                audioR.play();
                break;
            case "Ss":
                var audioS=new Audio("sounds_alphabets/S.mp3");
                audioS.play();
                break;
            case "Tt":
                var audioT=new Audio("sounds_alphabets/T.mp3");
                audioT.play();
                break;
            case "Uu":
                var audioU=new Audio("sounds_alphabets/U.mp3");
                audioU.play();
                break;
            case "Vv":
                var audioV=new Audio("sounds_alphabets/V.mp3");
                audioV.play();
                break;
            case "Ww":
                var audioW=new Audio("sounds_alphabets/W.mp3");
                audioW.play();
                break;
            case "Xx":
                var audioX=new Audio("sounds_alphabets/X.mp3");
                audioX.play();
                break;
            case "Yy":
                var audioY=new Audio("sounds_alphabets/Y.mp3");
                audioY.play();
                break;
            case "Zz":
                var audioZ=new Audio("sounds_alphabets/Z.mp3");
                audioZ.play();
                break;
            default:
                console.log("testing default case");
        }
    });
}



