// need object of all questions
// need array of all answers inside each question
// need index/counter to keep track which question on

//note to self, you can use for loop to iterate over object and display only whats stored inside the object

// need event listener to get answer from click 
// need to check if answer clicked on was correct
// need local storage for name and score
// need to keep track of score
let startQuiz = document.querySelector("#start");
let nextQuestion = document.querySelector("#next");
let hideStart = document.querySelector("#hideStart");
let qBox = document.querySelector("#qBox");
let displayTimer = document.querySelector("#timer");
let endCard = document.querySelector("#endCard");
let questionBox = document.querySelector("#questionBox");
let answersBox = document.querySelectorAll("label")
let answersDiv = document.getElementById("answers");

let questions = {
    1: "Inside which HTML element do we put the JavaScript?",
    2: "lkajsh"
};

let answers = {
    1: ["sdfg", "ggg", "nnnr", "sdfg"],
    2: ["asdf", "casd", "asdf" ]
};

let answersIndex = {
    1: ["a", "b", "c", "d"],
    2: ["a", "b", "c"]
}

let correctAns = {
    1: "a",
    2: "c"
};

let qCount = 1;
let correctCount = 0;

function generateQuestions() {

    document.getElementById("qNumber").innerHTML = "Question " + qCount + " out of 25.";
    questionBox.textContent = questions[qCount];
    let qLength = Object.keys(answers[qCount]).length

// https://www.geeksforgeeks.org/html-dom-input-checkbox-object/
    for (let i = 0; i < qLength; i++) {
        let ans = answers[qCount][i];
        let ansIndex = answersIndex[qCount][i];
        let checkbox = document.createElement("input")
        checkbox.type = "radio";
        checkbox.name = "answerChoice";
        checkbox.id = ansIndex;
        let label = document.createElement("label");
        label.htmlFor = ansIndex;
        label.textContent = ans;
        answersDiv.appendChild(checkbox);
        answersDiv.appendChild(label);
    };
};


startQuiz.addEventListener("click", function(){
    displayTimer.textContent = minutes + ":" + seconds;
    hideStart.setAttribute("style", "display:none");
    qBox.setAttribute("style", "display:inline");
    generateQuestions();
    startTimer();
});

cancel = 0;
// https://stackoverflow.com/questions/923407/fast-way-to-validate-if-all-checkboxes-are-un-selected
function answerCheck() {
    let checkboxes = document.querySelectorAll("input")
    console.log(checkboxes);
    for (let j = 0; j < checkboxes.length; j++) {
        console.log(checkboxes[j].checked)
        if (checkboxes[j].checked) {
            // localStorage.setItem(qCount, checkboxes[j].id)
            // console.log(localStorage.getItem(qCount, checkboxes[j].id))
            if (checkboxes[j].id === correctAns[qCount]) {
                correctCount++
                alert("Correct!");
            }
            else {
                timeLoss();
                alert("Wrong!")
            }
            cancel = 0;
            return
        }
    };
    alert("You must pick at least one answer.");
    cancel = 1;
};

nextQuestion.addEventListener("click", function() {
    answerCheck(cancel);

    if (cancel === 1) {
        return
    }

    if (qCount === 25) {
        qBox.setAttribute("style", "display:none");
        endCard.setAttribute("style", "display:inline");
        return
    }

    else {
        qCount++
        answersDiv.innerHTML = "";
        generateQuestions();
    }
});

    let minutes = 5;
    let seconds = "0" + 0;
function startTimer() {
    setTimer = setInterval(function() {
        if (seconds <= 0 && minutes <= 0) {
            displayTimer.textContent = "Time's Up!";
            clearInterval(setTimer);
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
    displayTimer.textContent = minutes + ":" + seconds
    if (seconds <= 0 && minutes <= 0) {
        displayTimer.textContent = "Time's Up!";
        clearInterval(setTimer);
    }
    else if (seconds < 0) {
        minutes--;
        seconds = 60 + seconds;
        displayTimer.textContent = minutes + ":" + seconds;
    }
};