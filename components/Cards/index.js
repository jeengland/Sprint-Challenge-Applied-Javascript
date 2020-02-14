// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Store cards container
const cards = document.querySelector('.cards-container')

// API call
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(result => {
        const subjects = Object.keys(result.data.articles);
        subjects.forEach((subject) => result.data.articles[subject].map(article => cards.append(Articulator(article, subject))));
    });

// Article component function
const Articulator = (props, type) => {
    // Create elements
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgCont = document.createElement('div'),
          img = document.createElement('img'),
          attr = document.createElement('span');
    // Add data attribute
    card.dataset.topic = type;
    // Add classnames
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');
    // Add contents
    headline.textContent = props.headline;
    img.src = props.authorPhoto;
    attr.textContent = `By ${props.authorName}`;
    // Append elements
    imgCont.append(img);
    author.append(imgCont, attr);
    card.append(headline, author);
    // Return whole element
    return card
}