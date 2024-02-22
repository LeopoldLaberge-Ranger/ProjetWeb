import 'bootstrap';


//Preview Card Code
$('#titre').on('keyup', function(){

    $('#field0').text($(this).val());
    $('#btn').text('Visiter '+$(this).val());
})

$('#auteur').on('keyup', function(){
    $('#field4').text('--'+$(this).val());
})

$('#date').on('change', function(){
    $('#field3').text($(this).val());
})

$('#img').on('keyup', function(){

    $('#field1').attr('src',$(this).val());
})

$('#contenu').on('keyup', function(){

    $('#field2').text($(this).val());
})

//Post Treatment Logic
function postStyle(){
    fetch('http://localhost:3000/blogs', {
        method: 'POST',
        body: JSON.stringify({
            "title": $('#titre').val(),
            "auteur": $('#auteur').val(),
            "pubDate": $('#date').val(),
            "content": $('#contenu').val(),
            "imgLink": $('#img').val()
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => {
        console.log(response.status);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

//JQueryUI Dialog Box
$( function() {
    $( "#dialog-confirm" ).dialog({
      autoOpen: false,
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Ajouter": function() {
          $( this ).dialog( "close" );
          postStyle();
          location.reload();
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  
    $('#btnAdd').on('click', function() {
      if (titre.value !== '' && auteur.value !== '' && date.value !== '' && contenu.value !== '' && img.value !== '') {
        $( "#dialog-confirm" ).dialog("open");
      }
    });
  });


