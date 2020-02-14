// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Store topics element
topics = document.querySelector('.topics');

// API call
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(topic => topics.append(Tabulator(topic)));
    })

// Tab component function
const Tabulator = (topic) => {
    // Create element
    const tab = document.createElement('div');
    // Assign class
    tab.classList.add('tab');
    // Add content
    tab.textContent = topic;
    tab.dataset.topic = topic.match(/([^.]+)/)[0];
    // Add event listener
    tab.addEventListener('click', (event) => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            if (card.dataset.topic === tab.dataset.topic) {
                card.style.display = 'block';
            }
            else {
                card.style.display = 'none';
            }
        })
    })
    // Return element
    return tab;
}