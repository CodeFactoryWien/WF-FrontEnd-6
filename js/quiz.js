
// var lang = (localStorage.getItem("lang"));								//**********************************LOCALSTORAGE****Language********************************
// 	if (lang == "" || lang == null){lang = "Eng"};
// var grade = localStorage.getItem("quizGrade");  						//**********************************LOCALSTORAGE****GRADE********************************
var lang = "Eng"; //prov
var quizData = window["quizJson"+lang];

var questionCounter = 0;
var logObj = {	};
var answerObj = {  };
var quizLength = quizData.length;
var border = 60; // grenze ab wann das quiz als geschafft gilt in %
var smileQuest = 1; //Nummer of question who desides the value of the grade. question wrong and grade will be reduced.
var optChange = 0;

function initQuiz(gKursNr){
	kursNr = gKursNr
	introduction()
	questionCounter = 0;
	smileCount = 0;
}; //window.onload = introduction();

function introduction(){
	mainClear();
	if(kursNr != ""){	
		for (itemC of course){
			if (itemC.id == kursNr){
				kursNrText = itemC.title;
			};
		};
	}else{kursNrText = ""};

	let intro = document.createElement("h1");
		intro.className = "introClass text-light rounded text-center";
		intro.textContent = quizData[0].IntroHead;
		document.getElementById('mainDiv').appendChild(intro);

	let introText = document.createElement("p");
		introText.className = "introTet";
		introText.textContent = quizData[0].IntroText +" | " + kursNrText /* + "Smiley Counter: "+ smileCount+ " | "  + quizData[0].Vorgaenger + grade + " %" */ ;
		document.getElementById('mainDiv').appendChild(introText);
	
	let startBtn = document.createElement("button");
		startBtn.className = "startBtn btn btn-dark mb-5 ";
		startBtn.textContent = quizData[0].StartBtn;
		startBtn.addEventListener("click", function(){
			var n = new Date().getTime();
			logObj[String(n)] = "start";
			questionCounter = questionCounter+1;
			questionBuilder(questionCounter)
		});
		document.getElementById('mainDiv').appendChild(startBtn);
	grade = 0;
}

// ----------------------------------Question----------------------------------------------------------------
function questionBuilder(questionCounter){	

mainClear();
thisId = questionCounter;

let qBox = document.createElement("div");
	qBox.className = "quizcontainer mb-5";
	qBox.id = "quizcontainerID";
	document.getElementById('mainDiv').appendChild(qBox);

	let qh3 = document.createElement("h1");
		qh3.className = "question text-light mt-2 rounded text-center";
		qh3.id = "question"+thisId;
		qh3.textContent = quizData[0].FrageTitel + thisId;
		document.getElementById("quizcontainerID").appendChild(qh3);

	let questText = document.createElement("p");
		questText.className = "questText h3";
		questText.id = "questText"+thisId;
		questText.textContent = quizData[thisId].Frage;
		document.getElementById("quizcontainerID").appendChild(questText);

	let qInput = document.createElement("div");
		qInput.className = "quizInput";
		qInput.id = "quizInput"+thisId;
		document.getElementById("quizcontainerID").appendChild(qInput);

		for (i=0;i<quizData[thisId].Antworten.length; i++){
			let bootstrapDiv = document.createElement("div");
				bootstrapDiv.className = "container p-3 pl-5";
				bootstrapDiv.id = "bootstrapDiv"+i;
				document.getElementById("quizInput"+thisId).appendChild(bootstrapDiv);

			let antOption = document.createElement("input");
				antOption.className = "antOption custom-control-input"
				antOption.id = "Opt"+ i;
				antOption.type = "radio";
				antOption.name = "antwort";
				antOption.value = "ant"+i; // for later, here comes the question ID (quId)
				antOption.addEventListener("change", function(o){
					radioChange(o.target.id);
				});
				document.getElementById("bootstrapDiv"+i).appendChild(antOption);
			let label = document.createElement("label");
				label.htmlFor = "Opt"+ i;
				label.className = "custom-control-label";
				label.textContent = quizData[thisId].Antworten[i];
				document.getElementById("bootstrapDiv"+i).appendChild(label); 
		// let br = document.createElement("br");
		// 	document.getElementById("quizInput"+thisId).appendChild(br);
		}

	let qBtn = document.createElement("button");
		qBtn.className = "answerBtn btn btn-dark";
		qBtn.id = "answer"+thisId;
		if (thisId== quizLength-1){
			qBtn.textContent = quizData[0].NextBtn[1];
		}else{
			qBtn.textContent = quizData[0].NextBtn[0]+(thisId+1)+"/"+(quizLength-1);
		}
		qBtn.addEventListener("click", function(e){
			nextBtn(e.target.id);
		});
		document.getElementById("quizcontainerID").appendChild(qBtn);

//questTimer = setInterval(function(){ timerExe(); }, 5000); 
}
//--------------------------End---Question---------------------------

//--------------------------Timer active---------------------------------
function timerExe(){
	clearInterval(questTimer);
	alert("you were to slow");

	nextBtn(document.getElementsByClassName("answerBtn")[0].id);
}
//---------------------------End Timer------------------------------------

//----------------------------Main Clearing---------------------------
function mainClear(){
	var div = document.getElementById('mainDiv');
	while(div.firstChild){
	    div.removeChild(div.firstChild);
	}
}
//------------------------------End Main Clearing----------------------

//--------------------------Sprachwahl---------------------------------
function langChange(lang){
	quizData = window["quizJson"+lang];
	localStorage.setItem("lang", lang)

	if(questionCounter==0){introduction();}
	if(questionCounter>0 && questionCounter<quizLength){questionBuilder(questionCounter);}
	if(questionCounter>=quizLength){reView();}
}
//--------------------------Ende Sprachwahl----------------------------

//-----------------------Button--------------------------------------
function nextBtn(e){
	var	y = document.querySelector("input[name='antwort']:checked");
	if (y != null ) {
		y = document.querySelector("input[name='antwort']:checked").id
	
		var n = new Date().getTime();
		logObj[String(n)]=e //+y;
		answerObj[Number(e.slice(6	))]=Number(y.slice(3));

		mainClear();
		
		if (questionCounter<(quizLength-1)){
			questionCounter++;
			questionBuilder(questionCounter);

		}else{
			evaluation();
			// weiter zur Registrierung
		};

	}else{
		alert(quizData[0].KeineWahl);
	}
}
//------------------------End-Button---------------------------------

//-----------------------radiobutton-listener------------------------------
function radioChange(o){
	var n = new Date().getTime();
	logObj[n]=o;
}
//---------------------End-radiobutton-listener-------------------------

//-------------------------Evaluation---Summary of quiz an smileycount-------------------------------
function evaluation(){
	var questCheckObj = {};
	ansCounter = 0;
	questionCounter = questionCounter+1;

	for (i=1;i<quizData.length;i++){
		questCheckObj[quizData[i].quId]=quizData[i].Richtig;
		if(quizData[i].Richtig == answerObj[i]){ansCounter++}
	}

	startTime = Object.keys(logObj)[0];
	lengthTime = Object.keys(logObj).length;
	endTime = Object.keys(logObj)[lengthTime-1];
	
	time = timeCalc(endTime-startTime);								// gesamtzeit ausrechnen

	grade  = ((ansCounter/(quizLength-1))*100);

	if (quizData[smileQuest].Richtig != answerObj[smileQuest]){
		grade = grade/2;
		gradeBool =true
	}else{
		gradeBool =false
		}

	// smileCount = JSON.parse(localStorage.getItem("smileyCount"));
	// 	if (smileCount == "" || smileCount == null){smileCount = 0};
	
	// if (Number(smileCount)== 0){
	// 	grade = grade * 0.8;
	// }else{
	// 	grade = grade + (Number(smileCount)/2);
	// }

	localStorage.setItem("quizGrade", grade);  //**********************************LOCALSTORAGE************************************

	//die zeitstempel der antworten auflisten------------------------------
	var answerTime = [];										
		answerTime.push(startTime);	
	for (var i = 1; i<quizLength; i++){
		var answerSet = valueForKey("answer"+i, logObj);
			answerTime.push(answerSet);
		}
		
	//die zeitabstände auflisten------------------------------
	answerTimeList = [];									
	for (var j = 1; j < answerTime.length; j++){
		var i = j-1;
		//answerTime[j]-answerTime[i]
		answerTimeList.push(answerTime[j]-answerTime[i])
	}
	//console.log(answerTimeList);
	
	//den index des grössten zeitabstand suchen------------------------------
	let longestTimeIndex = Math.max.apply(null, answerTimeList);	
	langeFrageIndex = (answerTimeList.indexOf(longestTimeIndex)); // index plus 1 ergibt die fragennummer
	//console.log(answerTimeList.indexOf(longestTimeIndex)); // index plus 1 ergibt die fragennummer

	//umentscheidungen zählen------------------------------
	optChange = (Object.keys(logObj).length)  -  (((quizLength-1)*2)+1) // optChange ist die Zahl der Umentscheidungen
	//console.log(optChange);

	reView();
}
//--------------------------------------End of Evaluation-------------------------------------

//---------------------------------Search value for key---------------------------------------
function valueForKey(val,array){
    for (var key in array) {
        if(array[key] == val){
            return key;
        }
    }
 return false;
}
//----------End------------Search value for key-------------------------

//-------------------------Zeitrechner----------------------------------
function timeCalc(millisec){
	var minutes = Math.floor(millisec / 60000);
	var seconds = ((millisec % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
//--------------------------Ende-Zeitrechner----------------------------

//----------------------------Review------------------------------------
function reView(){
	mainClear()

	let finalMessage = document.createElement("h2");
		finalMessage.className = "finalMessage"
		if (grade>border){
			finalMessage.textContent = quizData[0].FinalMessage;
		}else{
			finalMessage.textContent = quizData[0].FinalLoose;
		}
		document.getElementById('mainDiv').appendChild(finalMessage);

	let reViewBox = document.createElement("div");
		reViewBox.className = "reViewBox";
		reViewBox.textContent += quizData[0].Auswertung[0] + timeCalc(endTime-startTime) + quizData[0].Auswertung[1] + ansCounter + quizData[0].Auswertung[2] +  (quizLength-1) + quizData[0].Auswertung[3];
		if (gradeBool==true){
			reViewBox.textContent += quizData[0].AuswertungSmiley[0];
		}
		reViewBox.textContent += " | " + quizData[0].Auswertung[4] + grade.toFixed(2) + "%";
		// reViewBox.textContent += " | " + quizData[0].AuswertungSmiley[1] + smileCount; 
		reViewBox.textContent += " | " + quizData[0].AuswertTime[0]+ " " + (langeFrageIndex+1) + " " + quizData[0].AuswertTime[1] + " (" + timeCalc(answerTimeList[langeFrageIndex]) + ")";
		if (optChange>6){
			reViewBox.textContent  += " | " +optChange + " " + quizData[0].AuswertChange[0] + " " + quizData[0].AuswertChange[1];
		}
		document.getElementById('mainDiv').appendChild(reViewBox);
		
	let finBtn = document.createElement("button");
		finBtn.className = "finBtn";
		if (grade > border){
			finBtn.textContent = quizData[0].FinBtn;
			finBtn.addEventListener("click", function(){
				window.open("addMember.html", "_self");
			});
		}else{
			finBtn.textContent = quizData[0].FinBtnBack;
			finBtn.addEventListener("click", function(){
				initCourse(kursNr); // Button - Changed from the priviors code
			});			
		}
		document.getElementById('mainDiv').appendChild(finBtn);

	for (var i = 1; i < quizData.length; i++){

	let qBox = document.createElement("div");
		qBox.className = "reViewContainer";
		qBox.id = "quizcontainer"+quizData[i].quId;
		document.getElementById('mainDiv').appendChild(qBox);
		
		let question = document.createElement("h4");
			question.className = "reViewQuestion";
			question.textContent = quizData[i].Frage;
			document.getElementById("quizcontainer"+quizData[i].quId).appendChild(question);
		
		if (quizData[i].Richtig == answerObj[i]){
			let yourAnswer = document.createElement("p");			//wenn richtig geraten
				yourAnswer.className = "reViewYours";
				yourAnswer.textContent = quizData[0].reViewCorr+quizData[i].Antworten[answerObj[i]];
				document.getElementById("quizcontainer"+quizData[i].quId).appendChild(yourAnswer);	
		}else{
			let corrAnswer = document.createElement("p");			//wenn falsch geraten
				corrAnswer.className = "reViewCorr";
				corrAnswer.textContent = quizData[0].reViewNope; //+quizData[i].Antworten[quizData[i].Richtig];
				document.getElementById("quizcontainer"+quizData[i].quId).appendChild(corrAnswer);
		}
	}
		finBtn2 = finBtn.cloneNode(true);
		finBtn2.addEventListener("click", function(){
				initCourse(kursNr); // Button - Changed from the priviors code
			});

		document.getElementById('mainDiv').appendChild(finBtn2);
}
//-----------------Ende--------Review------------------------------------

// let flagge_eng = document.getElementById("eng").addEventListener("click", function(){langChange("Eng")})
// let flagge_ger = document.getElementById("ger").addEventListener("click", function(){langChange("Ger")})
// let flagge_hun = document.getElementById("hun").addEventListener("click", function(){langChange("Hun")})

