function BlogList() {

const cards = document.querySelectorAll(".card-box"); //Hover Animation

$(document).on('mouseenter', '.card', function() {
  this.style.transform = "scale(1.05)"; // Increase the size by 10%
  $(this).addClass('hover-effect');
});

$(document).on('mouseleave', '.card', function() {
  this.style.transform = "scale(1)"; // Restore the original size
  $(this).removeClass('hover-effect');
});

const [blogs, setBlogs] = React.useState([]);
  
    React.useEffect(() => {
      fetch('http://localhost:3000/blogs')
        .then(response => response.json())
        .then(json => {
          setBlogs(json);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return (
      <div id="cards" className="row">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    );

    
  }