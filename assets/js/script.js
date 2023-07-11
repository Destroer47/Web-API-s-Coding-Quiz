let startQuiz = document.querySelector("#start");
let startText= document.querySelector("#startText");
let nextQuestion = document.querySelector("#next");
let hideStart = document.querySelector("#hideStart");
let hideSubmit = document.querySelector("#hideSubmit");
let qBox = document.querySelector("#qBox");
let displayTimer = document.querySelector("#timer");
let endCard = document.querySelector("#endCard");
let questionBox = document.querySelector("#questionBox");
let answersBox = document.querySelectorAll("label");
let answersDiv = document.getElementById("answers");
let endScore = document.querySelector("#score");
let retryQuiz = document.querySelector("#retry");
let submitScore = document.querySelector("#submit");
let highScores = document.querySelector("#highScores");
let highScoreDiv = document.querySelector("#scoreList");
let highScoreMenu = document.querySelector("#highScoreMenu");
let initialInput

//https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
let questions = {
    1: "Inside which HTML element do we put the JavaScript?",
    2: "What is the correct JavaScript syntax to change the content of the HTML element? <p id='demo'>This is a demonstration.</p>",
    3: "Where is the correct place to insert a JavaScript?",
    4: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    5: 'The external JavaScript file must contain the <script> tag.',
    6: 'How do you write "Hello World" in an alert box?',
    7: 'How do you create a function in JavaScript?',
    8: 'How do you call a function named "myFunction"?',
    9: 'How to write an IF statement in JavaScript?',
    10: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    11: 'How does a WHILE loop start?',
    12: 'How does a FOR loop start?',
    13: 'How can you add a comment in a JavaScript?',
    14: 'How to insert a comment that has more than one line?',
    15: 'What is the correct way to write a JavaScript array?',
    16: 'How do you round the number 7.25, to the nearest integer?',
    17: 'How do you find the number with the highest value of x and y?',
    18: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
    19: 'JavaScript is the same as Java.',
    20: "How can you detect the client's browser name?",
    21: 'Which event occurs when the user clicks on an HTML element?',
    22: 'How do you declare a JavaScript variable?',
    23: 'Which operator is used to assign a value to a variable?',
    24: 'What will the following code return: Boolean(10 > 9)',
    25: 'Is JavaScript case-sensitive?'
};

let answers = {
    1: ["<js>", "<javascript>", "<scripting>", "<script>"],
    2: ["#demo.innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World!';", 'document.getElement("p").innerHTML = "Hello World!";'],
    3: ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body> section"],
    4: ['<script href="xxx.js">', '<script name="xxx.js">', '<script src="xxx.js">'],
    5: ['True','False'],
    6: ['alertBox("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'alert("Hello World");'],
    7: ['function:myFunction()', 'function = myFunction()', 'function myFunction()'],
    8: ['myFunction()', 'call function myFunction()', 'call myFunction()'],
    9: ['if (i == 5)', 'if i = 5 then', 'if i = 5', 'if i == 5 then'],
    10: ['if (i <> 5)', 'if (i != 5)', 'if i =! 5 then', 'if i <> 5'],
    11: ['while (i <= 10; i++)', 'while (i <= 10)', 'while i = 1 to 10'],
    12: ['for i = 1 to 5', 'for (i <= 5; i++)', 'for (i = 0; i <= 5; i++)', 'for (i = 0; i <= 5)'],
    13: ["'This is a comment", '//This is a comment', '<!--This is a comment-->'],
    14: ['//This comment has more than one line//', '<!--This comment has more than one line-->', '/*This comment has more than one line*/'],
    15: ['var colors = ["red", "green", "blue"]', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
    16: ['rnd(7.25)', 'Math.round(7.25)', 'round(7.25)', 'Math.rnd(7.25)'],
    17: ['top(x, y)', 'ceil(x, y)', 'Math.max(x, y)', 'Math.ceil(x, y)'],
    18: ['w2 = window.new("http://www.w3schools.com");', 'w2 = window.open("http://www.w3schools.com");'],
    19: ['False', 'True'],
    20: ['navigator.appName', 'client.navName', 'browser.name'],
    21: ['onmouseclick', 'onmouseover', 'onchange', 'onclick'],
    22: ['var carName;', 'v carName;', 'variable carName;'],
    23: ['x', '=', '*', '-'],
    24: ['true', 'false', 'NaN'],
    25: ['Yes', 'No']
};

let answersIndex = {
    1: ["a", "b", "c", "d"],
    2: ["a", "b", "c", "d"],
    3: ["a", "b", "c"],
    4: ["a", "b", "c"],
    5: ["a", "b"],
    6: ["a", "b", "c", "d"],
    7: ["a", "b", "c"],
    8: ["a", "b", "c"],
    9: ["a", "b", "c", "d"],
    10: ["a", "b", "c", "d"],
    11: ["a", "b", "c"],
    12: ["a", "b", "c", "d"],
    13: ["a", "b", "c"],
    14: ["a", "b", "c"],
    15: ["a", "b", "c", "d"],
    16: ["a", "b", "c", "d"],
    17: ["a", "b", "c", "d"],
    18: ["a", "b"],
    19: ["a", "b"],
    20: ["a", "b", "c"],
    21: ["a", "b", "c", "d"],
    22: ["a", "b", "c"],
    23: ["a", "b", "c", "d"],
    24: ["a", "b", "c"],
    25: ["a", "b"]
};

let correctAns = {
    1: "d",
    2: "b",
    3: "a",
    4: "c",
    5: "b",
    6: 'd',
    7: 'c',
    8: 'a',
    9: 'a',
    10: 'b',
    11: 'b',
    12: 'c',
    13: 'b',
    14: 'c',
    15: 'a',
    16: 'b',
    17: 'c',
    18: 'b',
    19: 'a',
    20: 'a',
    21: 'd',
    22: 'a',
    23: 'b',
    24: 'a',
    25: 'a'
};


let qCount = 1;
let correctCount = 0;
let scoreStorage = [];

function generateQuestions() {

    document.getElementById("qNumber").innerHTML = "Question " + qCount + " out of 25.";
    questionBox.textContent = questions[qCount];
    let qLength = Object.keys(answers[qCount]).length

// https://www.geeksforgeeks.org/html-dom-input-checkbox-object/
    for (let i = 0; i < qLength; i++) {
        let ans = answers[qCount][i];
        let ansIndex = answersIndex[qCount][i];
        let checkbox = document.createElement("input");
        checkbox.type = "radio";
        checkbox.name = "answerChoice";
        checkbox.classList.add("answerChoice");
        checkbox.id = ansIndex;
        let label = document.createElement("label");
        label.htmlFor = ansIndex;
        label.textContent = ans;
        answersDiv.appendChild(checkbox);
        answersDiv.appendChild(label);
    };
};


startQuiz.addEventListener("click", function(){
    highScoreDiv.innerHTML = "";
    displayTimer.textContent = minutes + ":" + seconds;
    hideStart.setAttribute("style", "display:none");
    qBox.setAttribute("style", "display:inline");
    generateQuestions();
    startTimer();
});

cancel = 0;
// https://stackoverflow.com/questions/923407/fast-way-to-validate-if-all-checkboxes-are-un-selected
function answerCheck() {
    let checkboxes = document.getElementsByClassName("answerChoice")
    for (let j = 0; j < checkboxes.length; j++) {
        if (checkboxes[j].checked) {
            if (checkboxes[j].id === correctAns[qCount]) {
                correctCount++
            }
            else {
                timeLoss();
            }
            cancel = 0;
            return
        }
    };
    alert("You must pick at least one answer.");
    cancel = 1;
};

cancel2 = 0
function initialCheck() {
    initialInput = document.getElementById("initials").value;
    console.log(initialInput);
    if (!initialInput) {
        cancel2 = 1;
        alert("Please input initials into textbox to submit score!");
        return
    }
    else {
        let scoreArray = [initialInput, correctCount];
        scoreStorage.push(scoreArray);
        console.log[scoreStorage];
        localStorage.setItem("score", JSON.stringify(scoreStorage));
        console.log(localStorage.getItem("score"));
        cancel2 = 0;
    }
}

function renderScores() {
    highScoreDiv.innerHTML = "";
    let storedScores = JSON.parse(localStorage.getItem("score"))
    for (let q = 0; q < storedScores.length; q++) {
        let scoreList = document.createElement("li");
        scoreList.setAttribute("style", "margin-top: 10px");
        tempName = storedScores[q][0];
        tempScore = storedScores[q][1];
        console.log(storedScores);
        console.log(tempName);
        console.log(tempScore);
        scoreList.textContent = tempName + ": " + tempScore + "/25";
        highScoreDiv.appendChild(scoreList);
    }
};

function clearScores() {

};

nextQuestion.addEventListener("click", function() {
    answerCheck(cancel);
    console.log(correctCount);
    if (cancel === 1) {
        return
    }

    if (qCount === 25) {
        scoreSubmit();
        return
    }

    else {
        qCount++
        answersDiv.innerHTML = "";
        generateQuestions();
    }
});

retryQuiz.addEventListener("click", function() {
    qCount = 1;
    correctCount = 0;
    minutes = 5;
    seconds = "0" + 0;
    answersDiv.innerHTML = "";
    highScoreDiv.innerHTML = "";
    highScoreMenu.disabled = false;
    highScoreMenu.setAttribute("style", "opacity:1; cursor:allowed");
    displayTimer.textContent = minutes + ":" + seconds;
    hideStart.setAttribute("style", "display:none");
    endCard.setAttribute("style", "display:none");
    qBox.setAttribute("style", "display:inline");
    generateQuestions();
    clearInterval(setTimer);
    startTimer();
});

    let minutes = 5;
    let seconds = "0" + 0;
function startTimer() {
    setTimer = setInterval(function() {
        if (seconds <= 0 && minutes <= 0) {
            displayTimer.textContent = "Time's Up!";
            setTimeout(function(){
                scoreSubmit();
                clearInterval(setTimer);
            }, 2000);
            return
        }
        else if (seconds <= 0) {
            minutes--;
            seconds = "" + 59;
            displayTimer.textContent = minutes + ":" + seconds;
        }
        else {
            seconds--;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            displayTimer.textContent = minutes + ":" + seconds;
        }
    }, 1000)
};

function timeLoss() {
    seconds = seconds - 4;
    if (seconds <= 0 && minutes <= 0) {
        displayTimer.textContent = "Time's Up!";
        clearInterval(setTimer);
    }
    else if (seconds < 10 && seconds > 0) {
        seconds = "0" + seconds;
        displayTimer.textContent = minutes + ":" + seconds;
    }
    else if (seconds < 0) {
        minutes--;
        seconds = 60 + seconds;
        displayTimer.textContent = minutes + ":" + seconds;
    }
    else {
        displayTimer.textContent = minutes + ":" + seconds;
    }
};

function scoreSubmit() {
    qBox.setAttribute("style", "display:none");
    endCard.setAttribute("style", "display:inline");
    hideSubmit.setAttribute("style", "display:inline");
    initialInput = document.getElementById("initials");
    initialInput.value = "";
    console.log(endCard);
    endScore.textContent = "You got " + correctCount + " out of 25 questions correct."
}

submitScore.addEventListener("click", function() {
    initialCheck(cancel2);
    if (cancel2 === 1) {
        return
    }

    else {
        hideSubmit.setAttribute("style", "display:none");
        highScores.setAttribute("style", "display:inline");
        highScoreMenu.disabled = true;
        highScoreMenu.setAttribute("style", "opacity:0.6; cursor:not-allowed");
        renderScores();
    }
});

highScoreMenu.addEventListener("click", function() {
    qCount = 1;
    correctCount = 0;
    clearInterval(setTimer);
    minutes = 5;
    seconds = "0" + 0;
    answersDiv.innerHTML = "";
    hideStart.setAttribute("style", "display:inline");
    startText.setAttribute("style", "display:none");
    qBox.setAttribute("style", "display:none");
    // startQuiz.setAttribute("style", "display:inline");
    console.log(startQuiz);
    highScores.setAttribute("style", "display:inline");
    renderScores();
});