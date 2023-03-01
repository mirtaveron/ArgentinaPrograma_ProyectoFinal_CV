
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {        
            document.getElementById('userImage').src = data.results[0].picture.medium;
            document.getElementById('userName').innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
            document.getElementById('userAge').innerHTML = data.results[0].dob.age;
            document.getElementById('userEmail').innerHTML = data.results[0].email;
            document.getElementById('userCell').innerHTML = data.results[0].cell;
            document.getElementById('userLocation').innerHTML = data.results[0].location.city + ', ' + data.results[0].location.country;
            
            var objImage = '<img  alt="User profile picture" ' + 'src="' + data.results[0].picture.large + '">';
            $('#imageModal .modal-content').html(objImage);

        }
    });

    $(document).ready(function () {
        document.getElementById('userImage').onclick = function() {     
            $('#imageModal').modal({ show:true });
        }
    })