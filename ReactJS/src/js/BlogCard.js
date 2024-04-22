
function BlogCard({ blog }) {
  return (
    <div key={blog.id} className="card-box col-lg-4 col-md-6 col-12 pt-5 d-flex flex-column align-items-center">
      <div id={`card${blog.id}`} className="card text-white bg-secondary shadow-lg" style={{ width: "18rem" }}>
        <img className="card-img-top border-bottom border-5 border-info" width="286" height="202" src={blog.imgLink} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="date_p">{blog.pubDate}</p>
          <p className="card-text">{blog.content}</p>
          <p className="auteur">--{blog.auteur}</p>
          <a href={`blog.html?id=${blog.id}`} className="btn btn-info">Visiter {blog.title}</a>
        </div>
      </div>
    </div>
  );
}