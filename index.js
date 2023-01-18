let scoreHome1 = document.getElementById("scoreHome");
let scoreGuest1 = document.getElementById("scoreGuest");
let resultHome = 0;
let resultguest = 0;

function plussOneHome(){
    resultHome += 1;
    scoreHome1.textContent = resultHome;
    console.log(resultHome);
}

function plussTwoHome(){
    resultHome += 2;
    scoreHome1.textContent = resultHome;
    console.log(resultHome);
}

function plussThreeHome(){
    resultHome += 3;
    scoreHome1.textContent = resultHome;
    console.log(resultHome);
}

function plussOneGuest(){
    resultguest += 1;
    scoreGuest1.textContent = resultguest;
    console.log(resultguest);
}

function plussTwoGuest(){
    resultguest += 2;
    scoreGuest1.textContent = resultguest;
    console.log(resultguest);
}

function plussThreeGuest(){
    resultguest += 3;
    scoreGuest1.textContent = resultguest;
    console.log(resultguest);
}