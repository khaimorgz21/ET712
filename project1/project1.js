/* ──────────────────────────────────────────────────────────
   1. “Fun” button + bounce‑y message
─────────────────────────────────────────────────────────── */
document.getElementById('funButton').addEventListener('click', () => {
    const funArea = document.getElementById('funArea');
    funArea.textContent = 'Hooray! You clicked the button!';
  
    funArea.style.transition = 'transform 0.5s';
    funArea.style.transform  = 'scale(1.2)';
  
    setTimeout(() => funArea.style.transform = 'scale(1)', 500);
  });
  
  /* ──────────────────────────────────────────────────────────
     2. Click‑through micro‑story  ( **bug fixed here** )
  ─────────────────────────────────────────────────────────── */
  const storyText  = document.getElementById('storyText');
  const nextButton = document.getElementById('nextButton');
  
  const storySegments = [
    "Once upon a time, … decades…",
    "Pirates and superheroes searched forever until…",
    "A blinding light appeared.",
    "They blinked, then saw an amusement park full of candy, popcorn, shakes…",
    "It was Funland—where you never stop having fun!",
    "Pirates, superheroes, children and parents all flew in for movies, games and coasters.",
    "Everybody lived happily ever after. THE END."
  ];
  
  let currentSegment = 0;
  storyText.textContent = storySegments[0];
  
  nextButton.addEventListener('click', () => {
    currentSegment += 1;
    if (currentSegment < storySegments.length) {     // ⬅️ use currentSegment
      storyText.textContent = storySegments[currentSegment];
    } else {
      storyText.textContent = 'The End!';
      nextButton.disabled   = true;
    }
  });
  
  /* ──────────────────────────────────────────────────────────
     3. Tiny drawing pad
  ─────────────────────────────────────────────────────────── */
  const canvas = document.getElementById('drawingCanvas');   // make sure the ID matches HTML
  const ctx    = canvas.getContext('2d');
  let drawing  = false;
  
  canvas.addEventListener('mousedown', () => drawing = true);
  canvas.addEventListener('mouseup',   () => { drawing = false; ctx.beginPath(); });
  canvas.addEventListener('mousemove', draw);
  
  function draw(e) {
    if (!drawing) return;
  
    ctx.lineWidth   = 3;
    ctx.lineCap     = 'round';
    ctx.strokeStyle = '#000';
  
    const { left, top } = canvas.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
  
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
  
  /* ──────────────────────────────────────────────────────────
     4. Single‑question quiz
  ─────────────────────────────────────────────────────────── */
  const feedback      = document.getElementById('feedback');
  const answerButtons = document.querySelectorAll('.answerBtn');
  const quizData      = { correctAnswer: '26' };
  
  answerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const correct = btn.textContent.trim() === quizData.correctAnswer;
      feedback.textContent = correct
        ? 'Correct! Great job!'
        : "Oops, that's not right. Try again!";
      feedback.style.color = correct ? 'lightgreen' : 'black';
    });
  });
  
  /* ──────────────────────────────────────────────────────────
     5. Theme‑colour buttons
  ─────────────────────────────────────────────────────────── */
  document.querySelectorAll('.colorBtn').forEach(btn => {
    btn.addEventListener('click', () =>
      document.body.style.backgroundColor = btn.dataset.color);
  });
  
  /* ──────────────────────────────────────────────────────────
     6. Animal fact gallery
  ─
  ────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
  const galleryImgs = document.querySelectorAll('.gallery-img');
  const animalInfo  = document.getElementById('animalInfo');
  
  const facts = {
    Gorilla : 'Gorillas are among the strongest animals in the jungle!',
    Giraffe : 'Giraffes are famous for their very long necks!',
    Lion    : 'Lions are the kings of the jungle!',
    Tiger   : 'Tigers are among the most powerful wild cats on the planet!',
    Horse   : 'Horses can sleep standing up—no need to lie down!',
    Elephant: 'Elephants are the world’s largest land animals with very long trunks!'
  };
  galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
      const key = img.dataset.animal?.toLowerCase();
      animalInfo.textContent = facts[key] ?? 'No facts are available.';
    });
  });
});
  
 
  
  const track   = document.getElementById('track');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const slides  = [...track.children];
  const total   = slides.length;
  let index     = 0;
  
  /* helper → moves the whole row left/right */
  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
    prevBtn.enabled = (index === 0);
    nextBtn.enabled = (index === total - 1);
  }
  
  /* click handlers */
  prevBtn.addEventListener('click', () => { if (index) index--; updateSlider(); });
  nextBtn.addEventListener('click', () => { if (index < total - 1) index++; updateSlider(); });
  
  updateSlider();               
  
  