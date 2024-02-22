import 'bootstrap';


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
function dynamicInsert() {  //Inserts data into cards from db.json
    fetch(`http://localhost:3000/blogs/${urlParams.get('id')}`)
      .then(response => response.json())
      .then(json => {
      $(`#blog_title`).text("Exemple " + json.title);
      $('#blog_img').attr('src',json.imgLink);
      $('#article_title').text(json.title);
      $('#article_date').text(json.pubDate);
      $('#article_content').text(json.content);
      })
      .catch(err => console.log(err));
  }
dynamicInsert();