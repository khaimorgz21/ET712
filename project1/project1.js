//Testing
document.getElementById('funButton').addEventListener('click', function() {
    const funArea = document.getElementById('funArea');
    funArea.textContent = 'Hooray! You clicked the button!';

    // Add a simple animation effect
    funArea.style.transition = 'all 0.5s';
    funArea.style.transition = 'scale(1.2)';

    setTimeout(() => {
       funArea.style.transform = 'scale(1)';
    }, 500);
});

const storyText = document.getElementById('storyText');
const nextButton = document.getElementById('nextButton');

const storySegments = [
    "Once upon a time, there was a land that was far away from the earth, people from jugnleland have been discovering where to find this happyland for decades...",
    "Pirates and Superhero have been looking around forever to find this secret place, until.",
    "One day, they came across a vey bright light which blinded them.",
    "They only couldnt see for a 5 seconds, but when they open their eyes they saw a big amusement park with candy popcorn shakes and all other joyful things.",
    "The place was called Funland: Where you never stop having and enjoy life to the fullest.",
    "In the end, the pirates, superhero, the children and their parents all flew to funland to watch movies play games and go on rollercoaster.",
    "Everybody lived happily ever after, THE END."
];

let currentSegment = 0;

nextButton.addEventListener('click', () => {
    currentSegment++;
    if (currentSegment < storySegments.length) {
        storyText.textContent = storySegments[currentSegment];
    } else {
        storyText.textContent = "The End!";
        nextButton.disabled = true;
    }
});

const canvas = document.getElementById('drawingCnavas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => { drawing = true; });
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener('mousemove', draw);


function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;


    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

const feedback = document.getElementById('feedback');
const buttons = document.querySelectorAll('.answerBtn');

const quizData = {
    question: "How many letters are in the Alphabet?",
    correctAnswer: "26"
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === quizData.correctAnswer) {
            feedback.textContent = "Correct! Great job!";
            feedback.style.color = 'lightgreen';
        } else {
            feedback.textContent = "Oops, thats not right. Try again!";
            feedback.style.color = 'red';
        }
    });
});

const colorButtons = document.querySelectorAll('.colorBtn');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const newColor = button.getAttribute('data-color');
        document.body.style.backgroundColor = newColor;
    });
});

const images = document.querySelectorAll('.gallery-img');
const aniamlInfo = document.getElementById('animalInfo');

images.forEach(img => {
    img.addEventListener('click', () => {
        const animal = img.getAttribute('data-animal');
        let infoText = '';
        switch(animal) {
            case 'Gorilla':
                infoText = 'Gorilas are one of the strongest animals in the jungle!';
                break;
            case 'Giraffe':
                infoText = 'Giraffes are known for having very long necks!';
                break;
            case 'Lion':
                infoText = 'Lions are the knig of the jungle!';
                break;
            case 'Tiger':
                infoText = 'Tigers are the most wild animals on the planet!';
                break;
            case 'Horse': 
                infoText = 'Horse are intelligent animals, fun fact: they dont need to lay down to sleep!';
                break;
            case 'Elephant':
                infoText = 'Elephants are the worlds largest animals and they have very big and long noses!';
                break;
               default:
                infoText = 'Click on your favorite animal!';
        }
        aniamlInfo.textContent = infoText;
    });
});