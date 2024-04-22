function CommentList() {
    const [comments, setComments] = React.useState([]);
    

    React.useEffect(() => {
        fetch('http://localhost:3000/comments')
            .then(response => response.json())
            .then(json => {
                setComments(json);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div id="comments" className="row">
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      );
}