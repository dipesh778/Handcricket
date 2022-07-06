

let score = 0;
let a=0;




function scoreCalc(userHit) {
	let x = userHit * 1;
	let y = computerHit();
	if (userHit * 1 === y) {
		playAudio1();
		document.getElementById("outImage").style.visibility = "visible";
		popupOut();
		totalScore.push(score);

		setTimeout(outDelay, 700);

		function outDelay() {
			// alert("yes");
			document.getElementById("highScore").innerText = highscore();
			document.getElementById("highScore1").innerText = highscore();


			document.getElementById("score").innerText = score;
			document.getElementById("finalScore").innerText = score;
			document.getElementById("resultPage").style.zIndex = "4";
			document.getElementById("resultPage").style.visibility = "visible";
			document.getElementById("outImage").style.visibility = "hidden";

		}
	}

	else {

		if (x === 4) {
			playAudio();
			document.getElementById("fourImage").style.visibility = "visible";
			popup4();
			setTimeout(delay4, 1000);
		}

		if (x === 6) {
		    playAudio();
			document.getElementById("sixImage").style.visibility = "visible";
			popup6();
			setTimeout(delay6, 1000);
		}

		score = score + x;
		
		if(score>=50 && a===0){
			playAudio();
			document.getElementById("fiftyImage").style.visibility = "visible";
			popup50();
			a++;
		}
		// score=x;
		document.getElementById("score").innerText = score;
		document.getElementById("finalScore").innerText = score;

	}


}
function delay4() {
	document.getElementById("fourImage").style.visibility = "hidden";
}
function delay6() {
	document.getElementById("sixImage").style.visibility = "hidden";
}


function computerHit() {
	const a = Math.floor(Math.random() * 7);
	if (a == 0 || a == 5) {
		computerHit();
	} else {
		document.getElementById("cInput").innerText = a;
		return a;
	}
}
// let storeScore[]={};



function homePage() {
	// totalScore.push(score);
	// console.log(highScore);
	// highscore = score;
	score = 0;
	a=0;
	document.getElementById("resultPage").style.zIndex = "1";
	document.getElementById("resultPage").style.visibility = "hidden";
	document.getElementById("score").innerText = "Start";
	document.getElementById("cInput").innerText = "";






}

// animation

function popupOut() {
	let id = null;
	let x = 0;
	let y = -37;
	clearInterval(id);
	id = setInterval(frame, 8);
	function frame() {
		const event = document.getElementById("outImage");
		if (x == 40) {
			clearInterval(id);
		} else {
			x++;
			y++;
			event.style.width = x + "vh";
			event.style.right = y + "vh";


		}

	}
}



function popup4() {
	let id = null;
	let x = 0;

	clearInterval(id);
	id = setInterval(move4, 8);
	function move4() {
		const event = document.getElementById("fourImage");
		if (x == 90) {
			clearInterval(id);
		}
		else {
			x++;
			event.style.bottom = x + "vh";
		}
	}
}

function popup6() {
	let id = null;
	let x = 0;

	clearInterval(id);
	id = setInterval(move6, 8);
	function move6() {
		const event = document.getElementById("sixImage");
		if (x == 90) {
			clearInterval(id);
		}
		else {
			x++;
			event.style.bottom = x + "vh";
		}
	}
}

function popup50() {
	let id = null;
	let x = 0;

	clearInterval(id);
	id = setInterval(move6, 8);
	function move6() {
		const event = document.getElementById("fiftyImage");
		if (x == 100) {
			clearInterval(id);
		}
		else {
			x++;
			event.style.bottom = x + "vh";
		}
	}
}

function gameStart() {
	document.getElementById("imgbox").style.visibility = "hidden";
	document.getElementById("homepage").style.visibility = "hidden";

}
const totalScore = [0];
function highscore() {
	return Math.max(...totalScore);

}

var audioOnClick = document.getElementById("myAudio");
var audioOnClick1 = document.getElementById("myAudio1");

function playAudio() {
	audioOnClick.play();
}
function playAudio1() {
	audioOnClick1.play();
}