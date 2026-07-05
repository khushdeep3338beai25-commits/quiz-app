//QUESTIONS

//HTML
const htmlquestions=[
    {
        question:"What does HTML stand for?",
        options:["Hyper Text Transfer Protocol","Hyper Text Markup Language","Hyper Text Makeup Language","None of these"],
        correct: 1,
    },

    {
        question:"Which HTML tag is used to create a hyperlink?",
        options: ["<link>","<a>","<href>","url"],
        correct: 1,
    },

    {
        question:"Which HTML tag is used to insert an image?",
        options: ["<picture>","<img>","<image>","<src>"],
        correct: 1,
    },

    {
        question:"Which attribute is used to specify the image source?",
        options: ["href","src","alt","link"],
        correct: 1,
    },

    {
        question:"Which tag is used to create an unordered list?",
        options: ["<ol","<ul>","<li>","<list>"],
        correct: 1,
    },

    {
        question:"Which tag is used to create a numbered list?",
        options: ["<ul>","<li>","<ol>","<dl>"],
        correct: 2,
    },

    {
        question:"Which HTML element is used for the largest heading?",
        options: ["<heading>","<head>","<h6>","<h1>"],
        correct: 3,
    },

    {
        question:"Which tag is used to create a line break?",
        options: ["<break>","<lb>","<br>","<newline>"],
        correct: 2 ,
    },

    {
        question:"Which tag is used to create a paragraph?",
        options: ["<para>","<p>","<paragraph>","<text>"],
        correct: 1,
    },

    {
        question:"Which attribute provides alternative text for an image?",
        options: ["<td>","<tr>","<th>","<table-row>"],
        correct: 1,
    },

]

//CSS
const cssquestions=[
    {
        question:"What does CSS stands for?",
        options: ["Creative Style Sheets","Cascading Style Sheets","Creative Style Sheets","Colorful Style Sheets"],
        correct: 1,
    },

    {
        question: "Which CSS property changes the text color?",
        options: ["text-color","font-color","background-color","color"],
        correct: 3,
    },

    {
        question: "Which HTML tag is used to link an external CSS file?",
        options: ["<css>","<style>","<link>","<script>"],
        correct: 2,
    },

    {
        question: "Which CSS property changes the background color?",
        options: ["color","background-color","bg-color","background"],
        correct: 2,
    },

    {
        question: "Which property is used to change the font size?",
        options: ["text-size","font-size","size","font-style"],
        correct: 1,
    },

    {
        question: "Which CSS property changes the background color?",
        options: ["font-weight","text-weight","font-bold","weight"],
        correct: 0,
    },

    {
        question: "Which property changes the font type?",
        options: ["font-family","font-type","font-style","font-name"],
        correct: 0,
    },

    {
        question: "Which selector selects all elements?",
        options: ["#",".","*","&"],
        correct: 2,
    },

    {
        question: "Which selector is used for an ID?",
        options: ["#",".","*","&"],
        correct: 0,
    },

    {
        question: "Which selector is used for a class?",
        options: ["#",".","*","&"],
        correct: 1,
    },

]

//JS
const javascriptquestions=[
    {
        question: "Which keyword is used to declare a block-scoped variable in js ?",
        options:["var","let", "const","both b and c" ],
        correct: 3,
    },

    {
        question: "What is the output of typeof null?",
        options: ["null","object","undefined","boolean"],
        correct: 1,
    },

    {
        question: "Which method is used to add an element at the end of an array?",
        options: ["shift()","pop()","push()","unshift()"],
        correct: 2,
    },

    {
        question: "Which symbol is used for strict equality comparison?",
        options: ["==","=","===","!="],
        correct: 2,
    },

    {
        question: "What will be the output of console.log(2+'2')?",
        options: ["4","22","NaN","Error"],
        correct: 1,
    },

    {
        question: "Which function is used to display a popup message in the browser?",
        options: ["print()","prompt()","alert()","confirm()"],
        correct: 2,
    },

    {
        question:"Which loop is guaranteed to execute at least once?",
        options: ["for","while","do...while","for...of"],
        correct: 2,
    },

    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()","JSON.parse()","JSON.convert()","JSON.object()"],
        correct: 1,
    },

    {
        question: "Which of the following is not a javascript data type?",
        options:["String","Boolean","Float","Undefined"],
        correct: 2,
    },

    {
        question: "Which method removes the last element from an array?",
        options:["shift()","splice()","pop()","slice()"],
        correct: 2,
    },
];

//GK
const gkquestions=[
    {
        question: "What is the capital of france?",
        options: ["Berlin","Madrid","Paris","Rome"],
        correct: 2,
    },

    {
        question:"Which planet is known as the red planet?",
        options: ["Venus","Mars","Jupiter","Saturn"],
        correct: 1,
    },

    {
        question: "What is the longest river in the world?",
        options: ["Amazon River","Yangtze River","Nile River","Mississippi River"],
        correct: 2,
    },

    {
        question: "What is the hardest substance in the human body?",
        options:["Femur","Skull","Fingernails","Tooth enamel"],
        correct: 3,
    },

    {
        question: "Who was the first person to step onto the moon?",
        options :["Buzz Aldrin","Neil Armstrong","Yuri Gagarin","Michael Collins"],
        correct : 1,
    },
]

let activeQuestions=[];
let currentQuestionIndex=0;
let score=0;


//to add timer
let timer;
let timeLeft;

//GET DOM ELEMENT

const startScreen=document.getElementById("start-screen");
const subjectScreen=document.getElementById("subject-screen");
const questionScreen=document.getElementById("question-screen");
const resultScreen=document.getElementById("result-screen");

const startBtn=document.getElementById("start-btn")
const nextBtn=document.getElementById("next-btn");
const restartBtn=document.getElementById("restart-btn");

const questionCountE1=document.getElementById("question-count");
const questionTextE1=document.getElementById("question-text");
const optionContainer=document.getElementById("option-container");
const progressfill=document.getElementById("progress-fill");

//RESULT PAGE
const resultEmoji=document.getElementById("result-emoji");
const resultTitle=document.getElementById("result-title");
const resultScore=document.getElementById("result-score");
const resultMessage=document.getElementById("result-msg");

//          subject page added 
const gkCard=document.getElementById("gk-card");
const htmlCard=document.getElementById("html-card");
const cssCard=document.getElementById("css-card");
const javascriptCard=document.getElementById("javascript-card");


function showScreen(screenToShow){
    startScreen.classList.add("hidden");
    subjectScreen.classList.add("hidden");
    questionScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    screenToShow.classList.remove("hidden");
}

//select subject
function startQuiz(questionSet){
    activeQuestions=questionSet;
    currentQuestionIndex=0;
    score=0;
    showScreen(questionScreen);
    loadQuestion();
}

//HOW WE ARE GOING TO LOAD QUESTION ON THE SCREEN-2
function loadQuestion(){
    const currentQuestion=activeQuestions[currentQuestionIndex];
    const questionNumber=currentQuestionIndex+1;
    const totalQuestions=activeQuestions.length;

const progressPercent = (questionNumber/totalQuestions)*100 //formula
progressfill.style.width=progressPercent + "%";

//UPDATE THE QUESTION COUNT
questionCountE1.textContent=`Question ${questionNumber} of ${totalQuestions}`;

//Update the question text
questionTextE1.textContent=currentQuestion.question;
optionContainer.innerHTML="";

//Create button to answer each question
currentQuestion.options.forEach(function(optionText,index){
    const button=document.createElement("button");
    button.textContent=optionText;
    button.classList.add("option-btn");

    button.addEventListener("click",function(){
        checkAnswer(index);
    });

    optionContainer.appendChild(button);
});
nextBtn.classList.add("hidden");
startTimer();
}

//Check value of the option is either correct or incorrect
function checkAnswer(selectedindex){
    clearInterval(timer);
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const correctIndex=currentQuestion.correct;

    const allOptions=document.querySelectorAll(".option-btn");

    allOptions.forEach(function(btn){
        btn.disabled=true;
    });

    if(selectedindex === correctIndex){
        allOptions[selectedindex].classList.add("correct");
        score=score+1;
    }
    else{
        allOptions[selectedindex].classList.add("wrong");
        allOptions[correctIndex].classList.add("correct");
    }
    nextBtn.classList.remove("hidden");
}

function showResult(){
    showScreen(resultScreen)

    const total=activeQuestions.length;
    resultScore.textContent=`You scored ${score} out of ${total}`;

    if(score === total){
        resultEmoji.textContent="💯";
        resultTitle.textContent="Perfect";
        resultMessage.textContent="You have scored a perfect score!";
    } 
    else if(score>= (0.75*total)){
        resultEmoji.textContent="👍🏽";
        resultTitle.textContent="Good job";
        resultMessage.textContent="Great! Keep it up";
    }
    else if(score>=0.5*total){
        resultEmoji.textContent="☺️";
        resultTitle.textContent="Good Effort";
        resultMessage.textContent="God but revise your concepts again";
    }
    else{
        resultEmoji.textContent="😢";
        resultTitle.textContent="Keep Learning";
        resultMessage.textContent="You need to focus";
    }
}

function restartQuiz(){
    currentQuestionIndex = 0;
    score=0;
    showScreen(startScreen);
}

//ADD EVENTS TO EACH ELEMENT 
startBtn.addEventListener("click",function(){
    showScreen(subjectScreen);
});

gkCard.addEventListener("click",function(){
    startQuiz(gkquestions);
});

htmlCard.addEventListener("click",function(){
    startQuiz(htmlquestions);
});

cssCard.addEventListener("click",function(){
    startQuiz(cssquestions);
});

javascriptCard.addEventListener("click",function(){
    startQuiz(javascriptquestions);
});

nextBtn.addEventListener("click",function(){
    currentQuestionIndex=currentQuestionIndex+1;
    
    if(currentQuestionIndex<activeQuestions.length){
        loadQuestion()
    }
    else{
        showResult();
    }
});

restartBtn.addEventListener("click",function(){
    restartQuiz();
});

function startTimer() {
    clearInterval(timer); // Reset any existing interval
    timeLeft = 15;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestionIndex++;

            if(currentQuestionIndex < activeQuestions.length){ // Fixed variable name here
                loadQuestion();
            } else {
                showResult();
            }
        }
    }, 1000);
}

