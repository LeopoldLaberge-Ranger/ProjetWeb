function Comment({ comment }) {
    const urlParams = new URLSearchParams(window.location.search)
    if(comment.postId == urlParams.get('id')){
        return (
            <div key={comment.id} className="media-block">
              <a className="media-left" href="#">
                <img width="200" height="200" className="img-circle img-sm" alt="Profile Picture" src="https://www.commerce.gov/sites/default/files/styles/full_content_image/public/2023-06/anonymous_person.png?itok=gyWhKXkO" />
              </a>
              <div className="media-body">
                <div className="mar-btm">
                  <a href="#" className="btn-link text-semibold media-heading box-inline">Anonymous</a>
                </div>
                <p>{comment.body}</p>
                <div className="pad-ver">
                  <div className="btn-group">
                    <a className="btn btn-sm btn-default btn-hover-success active" href="#"><i className="fa fa-thumbs-up"></i> You Like it</a>
                    <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down"></i></a>
                  </div>
                  <a className="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                </div>
                <hr />
              </div>
            </div>
          );
    }
}