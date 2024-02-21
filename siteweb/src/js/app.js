import 'bootstrap';

function dynamicInsert() {  //Inserts data into cards from db.json
    fetch('http://localhost:3000/blogs')
      .then(response => response.json())
      .then(json => {
        // Shuffle the array of blogs
        const blogs = json;
  
        // Populate the card elements with shuffled blog data
        blogs.forEach((blog, index) => {
          const card = document.getElementById(`card${index}`);
          card.querySelector('.card-title').innerHTML = blog.title;
          card.querySelector('.card-text').innerHTML = blog.content;
          card.querySelector('.card-img-top').setAttribute('src', blog.imgLink);
          card.querySelector('.btn').innerHTML = "Visit " + blog.title;
        });
      })
      .catch(err => console.log(err));
  }
  dynamicInsert();

const cards = document.querySelectorAll(".card-box"); //Hover Animation

cards.forEach(card => {
  card.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.05)"; // Increase the size by 10%
  });

  card.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)"; // Restore the original size
  });
});