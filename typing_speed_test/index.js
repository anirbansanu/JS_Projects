"use strict";
const arr = ["Bootstrap 5 is the latest major release by Bootstrap in which they have revamped the UI and made various changes. Buttons are the components provided to create various buttons. Bootstrap 5 includes several predefined button styles, each serving its own purpose.",
"Bootstrap 5 provides a series of classes that can be used when we need to use outline styled buttons in our project, i.e. button without background color. The outline button classes remove any background color or background image style applied to the buttons. All the button types support it as given in the example below . This example uses show the working of different outline buttons in Bootstrap 5.",
"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself",
"Other than .form-control, floating labels are only available on .form-selects. They work in the same way, but unlike , they’ll always show the  in its floated state. Selects with size and multiple are not supported."];

const msg = document.getElementById('sampletext');

const typeWords = document.getElementById('text');

const startBtn = document.getElementById('startBtn');
const doneBtn = document.getElementById('doneBtn');

//const showtime = document.getElementById('showtime');
const showtime = document.getElementById('time');
const matched = document.getElementById('matched');
const unmatched = document.getElementById('unmatched');
const notwritten = document.getElementById('notwritten');

var starttime,endtime;

var randomNumber;

var active = false;

let t = 0;
let countTime;

const showTimer = () => {
    if(t<10)
    {
        showtime.innerText = `00:0${t++}`;
    }
    
    else if(t<61)
    {
        showtime.innerText = `00:${t++}`;
    }
    else
    {
        clearInterval(countTime);
        alert("Time Out");
    }
    
}



startBtn.addEventListener("click",function(){
    if(this.innerText == "Start")
    {
        typeWords.value = "";
        if(typeWords.disabled)
        {
            active = false;
            typeWords.disabled = active;
        }
        let date = new Date();
        starttime = date.getTime();
        //console.log(starttime);

        randomNumber = Math.floor((Math.random() * arr.length));
        //console.log("Num is : "+randomNumber);
        msg.innerHTML = arr[randomNumber];
        showtime.innerText = "00:00";
        t = 0;
        countTime = setInterval(showTimer, 1000);
        this.innerText = "Done";
        startGame();
    }
    else if(this.innerText == "Done")
    {
        clearInterval(countTime);
        if(!typeWords.disabled)
        {
            active = true;
            typeWords.disabled = active;
        }
        let date = new Date();
        endtime = date.getTime();
        //console.log(endtime);
        let totaltime = endtime - starttime;
        console.log(totaltime/1000);

        //showtime.innerText = "Write Here";
        let totalStr = typeWords.value;
        let counterObj = counter(totalStr);
        console.log(counterObj);
        doneGame();
        matched.innerText = counterObj.matched.length;
        unmatched.innerText = counterObj.unmatched.length;
        notwritten.innerText = counterObj.notWritten.length;
        this.innerText = "Start";
    }
    else
    {
        console.log('Else running');
    }
})

/* typeWords.addEventListener("keyup",function(){
    if(!active)
    {
        let str = typeWords.value;
        let orgStr = arr[randomNumber];
        for(let i=0;i<str.length;i++)
        {
            if(str[i] == orgStr[i])
            {
                console.log("accepted");
            }
            else
            {
                
                console.log("Original input : "+orgStr[i]);
                console.log("Wrong input : "+str[i]);
            }
        }
        console.log(str);
    }
}) */

/* doneBtn.addEventListener("click",function(){
    if(this.innerText == "Done")
    {
        clearInterval(countTime);
        if(!typeWords.disabled)
        {
            active = true;
            typeWords.disabled = active;
        }
        let date = new Date();
        endtime = date.getTime();
        //console.log(endtime);
        let totaltime = endtime - starttime;
        console.log(totaltime/1000);

        //showtime.innerText = "Write Here";
        let totalStr = typeWords.value;
        let counterObj = counter(totalStr);
        console.log(counterObj);
        doneGame();
        matched.innerText = counterObj.matched.length;
        unmatched.innerText = counterObj.unmatched.length;
        notwritten.innerText = counterObj.notWritten.length;
    }
    else
    {
        console.log('Else running');
    }
})
 */
const startGame = ()=>{
    console.log('Game Start ');
}

const doneGame = ()=>{
    console.log('Game Finished');
}

const counter = (str)=>{
    console.log('Counter Start');
    let words = str.split(" ");

    let orgWords = arr[randomNumber].split(" ");

    let matched = [];
    let unmatched = [];
    let notWritten = [];
    // console.log(words);
    for(let i=0;i<orgWords.length;i++)
    {
        if(words[i] == orgWords[i])
        {
            //console.log("Matched");
            matched[matched.length] = words[i];
        }
        else
        {
            if(!words[i])
            {
                notWritten[notWritten.length] = orgWords[i];
            }
            else
            {
                unmatched[unmatched.length] = words[i];
            }
            
            //console.log("Original input : "+orgWords[i]);
            //console.log("Wrong input : "+words[i]);
        }
    }
    //console.log(matched);
    //console.log(unmatched);
    //console.log(notWritten);
    return {'matched': matched,
            'unmatched': unmatched,
            'notWritten':notWritten};
}
const matcher = (str)=>{
    console.log('Matcher Start');
    let orgStr = arr
}