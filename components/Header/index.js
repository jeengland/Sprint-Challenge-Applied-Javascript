// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// Header component function
function Header() {
    // Create elements
    outer = document.createElement('div');
    date = document.createElement('span');
    title = document.createElement('h1');
    temp = document.createElement('span');
    // Add classes
    outer.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    // Add contents
    date.textContent = 'SMARCH 28, 2019'
    title.textContent = 'Lambda Times'
    temp.textContent = '98°'
    // Append elements
    outer.append(date, title, temp);
    // Return whole element
    return outer;
}

// Append header to appropriate place in page;
header = document.querySelector('.header-container');
header.append(Header());