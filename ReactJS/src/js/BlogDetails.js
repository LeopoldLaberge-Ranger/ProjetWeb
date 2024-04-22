function BlogDetails() {
    const data = React.useContext(BlogDetailContext);
  
    return (
      <div>
        {data ? (
        <div>
          <div className="p-4 p-md-5 mb-4 text-white rounded bg-secondary shadow-lg">
            <div>
              <img
                width="750"
                height="500"
                id="blog_img"
                className="img-fluid rounded border-bottom border-5 border-info"
                src={`${data.imgLink}`}
              />
            </div>
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic" id="blog_title">
                Exemple {data.title}
              </h1>
              <p className="lead my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                adipisci ipsum vero repellat distinctio corporis nostrum eos
                architecto doloremque, reiciendis repudiandae inventore nihil esse
                fugiat, explicabo, magnam maiores beatae voluptatibus!
              </p>
              <p className="lead mb-0">
                <a
                  href="https://getbootstrap.com/docs/5.0/examples/blog/#"
                  className="text-white fw-bold"
                >
                  Continue reading...
                </a>
              </p>
            </div>
          </div>
          <div className="row g-5 justify-content-center">
              <div className="col-md-8 d-flex flex-column align-items-center">
                <h3 className="pb-4 mb-4 fst-italic border-bottom"></h3>
                <article className="blog-post" id="article">
                  <h2 className="blog-post-title" id="article_title">
                    {data.title}
                  </h2>
                  <p className="blog-post-meta" id="article_date">
                    {data.pubDate} publié par {data.auteur}
                  </p>
                  <p id="article_content">
                    {data.content}
                  </p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                    ratione harum velit deserunt reprehenderit dolor voluptatum,
                    commodi, nemo ut recusandae incidunt accusantium non adipisci
                    voluptates dolorum, error eum! Quis, temporibus!
                  </p>
                  <div className="p-4 p-md-5 text-white rounded bg-secondary shadow-lg">
                    <h2>Example</h2>
                    <img
                      className="img-fluid rounded border-bottom border-5 border-info"
                      src="https://miro.medium.com/v2/resize:fit:498/1*5gJzummAqpBDGATo0fjU6Q.jpeg"
                    />
                    <p className="fst-italic">*This is a simple example</p>
                  </div>
                  <h3 className="pt-5 blog-post-title">Getting started...</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Recusandae tempore earum obcaecati eligendi blanditiis
                    explicabo, minima cupiditate totam culpa, laudantium libero
                    repudiandae quam ratione adipisci molestias debitis laboriosam.
                    Pariatur, blanditiis. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Cumque, saepe. Esse, nulla, eos eum est minus
                    ut quasi velit, autem doloremque ratione dignissimos. Alias a
                    earum voluptates modi dignissimos eius? Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Deleniti quae earum, id
                    recusandae sed optio fugit beatae officia! Illum magnam
                    asperiores repudiandae hic pariatur eveniet voluptatum veniam
                    minus sint laudantium?
                  </p>
                </article>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }