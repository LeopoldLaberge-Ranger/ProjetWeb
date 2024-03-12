import 'bootstrap';

function dynamicInsert() {  //Inserts data into cards from db.json
    fetch('http://localhost:3000/blogs')
      .then(response => response.json())
      .then(json => {
        // Shuffle the array of blogs
        const blogs = json;
  
        // Populate the card elements with shuffled blog data
        blogs.forEach((blog, index) => {
          let cardHTML =
          `<div class="card-box col-lg-4 col-md-6 col-12 pt-5 d-flex flex-column align-items-center">
            <div id="card${index}" class="card text-white bg-secondary shadow-lg" style="width: 18rem;">
            <img class="card-img-top border-bottom border-5 border-info" width="286" height="202" src="${blog.imgLink}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${blog.title}</h5>
              <p class="date_p">${blog.pubDate}</p>
              <p class="card-text">${blog.content}</p>
              <p class="auteur">--${blog.auteur}</p>
              <a href="blog.html?id=${blog.id}" class="btn btn-info">Visiter ${blog.title}</a>
            </div>
            </div>
          </div>`
          $("#cards").append(cardHTML);
        });
      })
      .catch(err => console.log(err));
  }
dynamicInsert();


const cards = document.querySelectorAll(".card-box"); //Hover Animation

$(document).on('mouseenter', '.card', function() {
  this.style.transform = "scale(1.05)"; // Increase the size by 10%
  $(this).addClass('hover-effect');
});

$(document).on('mouseleave', '.card', function() {
  this.style.transform = "scale(1)"; // Restore the original size
  $(this).removeClass('hover-effect');
});