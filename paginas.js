const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    window.location.href = "index.html";
};

function redirecionarParaPagina(pagina) {
    window.location.href = pagina;
}

function nextQuestion(e) {

    clearTimeout(temporizador); 

    if (e.target.getAttribute("data-correct") === "true") {
        g_iCount ++;
        questionsCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        // Reinicia a cor do progresso da barra
        document.getElementById('progresso-da-barra').style.backgroundColor = "#4CAF50";
        loadQuestion();
        // Reinicia o temporizador para a próxima pergunta
        g_iCount = 180;
        contagem();
    } else {
        finish();
        clearProgressBar()
    }
}

function organs() {
    console.log("questionsCorrect:", questionsCorrect);
    var el1 = document.getElementById("i01");
    var el2 = document.getElementById("i02");
    var el3 = document.getElementById("i03");
    var el4 = document.getElementById("i04");
    var el5 = document.getElementById("i05");
    var el6 = document.getElementById("i06");
    var el7 = document.getElementById("i07");
    var el8 = document.getElementById("i08");
    var el9 = document.getElementById("i09");
    var el10 = document.getElementById("i10");
    var el11 = document.getElementById("i11");
    var el12 = document.getElementById("i12");
    var el13 = document.getElementById("i13");
    var el14 = document.getElementById("i14");
    var el15 = document.getElementById("i15");

    switch(true) {
        case (questionsCorrect === 1):
            el1.style.visibility = "visible";
            break;
        case (questionsCorrect === 2):
            el2.style.visibility = "visible";
            break;
        case (questionsCorrect === 3):
            el3.style.visibility = "visible";
            break;
        case (questionsCorrect === 4):
            el4.style.visibility = "visible";
            break;
        case (questionsCorrect === 5):
            el5.style.visibility = "visible";
            break;
        case (questionsCorrect === 6):
            el6.style.visibility = "visible";
            break;
        case (questionsCorrect === 7):
            el7.style.visibility = "visible";
            break;
        case (questionsCorrect === 8):
            el8.style.visibility = "visible";
            break;
        case (questionsCorrect === 9):
            el9.style.visibility = "visible";
            break;
        case (questionsCorrect === 10):
            el10.style.visibility = "visible";
            break;
        case (questionsCorrect === 11):
            el11.style.visibility = "visible";
            break;
        case (questionsCorrect === 12):
            el12.style.visibility = "visible";
            break;
        case (questionsCorrect === 13):
            el13.style.visibility = "visible";
            break;
        case (questionsCorrect === 14):
            el14.style.visibility = "visible";
            break;
        case (questionsCorrect === 15):
            el15.style.visibility = "visible";
            break;
    }
}

function clearProgressBar() {
    const prg = document.getElementById('progresso-da-barra');
    prg.style.width = '0%'; // Define a largura da barra como zero para limpar a barra de progresso // Oculta a barra de progresso
}

function finish() {
    textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

const backgroundMusic = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');
const speakerIcon = document.getElementById('speaker-icon');

muteButton.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        speakerIcon.src = "audio/volume.svg";
        speakerIcon.alt = "Desmutado";
    } else {
        backgroundMusic.pause();
        speakerIcon.src = "audio/mute.svg";
        speakerIcon.alt = "Mutado";
    }
});


var g_iCount = 180;
var temporizador;

function contagem() {
    var prg = document.getElementById('progresso-da-barra');

    if (g_iCount >= 1) {

        var tempo_restante = (g_iCount / 180) * 100;

        prg.style.width = tempo_restante + '%';

        if (g_iCount <= 60 && g_iCount > 10) {
            prg.style.backgroundColor = "#f8ca3f";
        } else if (g_iCount <= 10) {
            prg.style.backgroundColor = "#d75151";
        }

        g_iCount--;

        temporizador = setTimeout(contagem, 1000);
    } else {
        nextQuestion({ target: { getAttribute: () => false } });
    }
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");
        organs();
        div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}">
                ${answer.option ? answer.option : 'Texto de opção não definido'}
            </button>
        `;
        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();
contagem();