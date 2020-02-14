/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// Carousel component function

const GoRound = () => {
  // Create elements
  const carousel = document.createElement('div'),
        lBtn = document.createElement('div'),
        mount = document.createElement('img'),
        comp = document.createElement('img'),
        tree = document.createElement('img'),
        turn = document.createElement('img'),
        rBtn = document.createElement('div');
  // Assign classes
  carousel.classList.add('carousel');
  lBtn.classList.add('left-button');
  rBtn.classList.add('right-button');
  // Add content
  lBtn.textContent = '<';
  rBtn.textContent = '>';
  mount.src = '../assets/carousel/mountains.jpeg';
  comp.src = '../assets/carousel/computer.jpeg';
  tree.src = '../assets/carousel/trees.jpeg';
  turn.src = '../assets/carousel/turntable.jpeg';
  // Append contents
  carousel.append(lBtn, mount, comp, tree, turn, rBtn);
  // Return whole element
  return carousel;
}

// Append carousel element to page
const carouselCont = document.querySelector('.carousel-container');
carouselCont.append(GoRound());

// Store buttons and images
const right = document.querySelector('.right-button'),
      left = document.querySelector('.left-button'),
      images = document.querySelectorAll('.carousel img');

// Set the first image to display inline-block
images[0].style.display = 'inline-block';
let current = 0;

// Picture cycling function
right.addEventListener('click', () => {
  // Set current image display to none
  images[current].style.display = 'none'
  // Go to the next index if not at end of list
  if (current < 3) {
    current++
  }
  // If at end of the list, go to first index
  else {
    current = 0;
  }
  // Set image at index to display inline-block
  images[current].style.display = 'inline-block';
})

left.addEventListener('click', () => {
  // Set current image display to none
  images[current].style.display = 'none'
  // Go to the previous index if not at beginning of list
  if (current > 0) {
    current--
  }
  // If at beginning of list, go to last index
  else {
    current = 3;
  }
  // Set image at index to display inline-block
  images[current].style.display = 'inline-block';
})