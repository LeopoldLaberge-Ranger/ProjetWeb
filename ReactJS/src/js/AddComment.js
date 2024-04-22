const data = React.useContext(BlogDetailContext);

function AddComment() {
    $('#share').on('click', function() {
        console.log(data);
        postStyle(data); // Pass the data to the postStyle function
    });
}

function postStyle(data){
    console.log(data.title);
    fetch('http://localhost:3000/comments', {
        method: 'POST',
        body: JSON.stringify({
            "body": data.body,
            "postId": data.id
        }),
    })
    .then(response => {
        console.log(response.status);
        return response.json();
    })
    .then(json => {
        singleInsert(json);
    })
    .catch(err => console.log(err));
}