$(document).ready(function () {

    //Open and close the accordion sections
    $('.accordion').on('click', function(){
        $(this).toggleClass("activeFAQ");

        if($(this).next().css('max-height') != "0px") {
            $(this).next().css({'max-height': "0px"});
        } else {
            height = $(this).next().prop("scrollHeight") + "px";
            $(this).next().css({'max-height': height});
        }  
    });

    var emailModal = document.querySelector(".emailModal");
    
    //displays the modal window
	$('#openModal').on('click', function(){
		$('#registeremailModal').show();
	});

    //if the email is empty or invalid, prevent the form from submitting and display a error message
    $("form").submit(function(e){
        e.preventDefault();

        email = $('#email').val();

        if(email == ""){
            alert("Email address is required!");
        } else if(!validateEmail(email)){
            alert("Invalid email address submitted!");
        } else {
            $('#openModal').hide();
            $('#openModalDiv').append('<h3 style="color: #2195ae">Email Submitted!</h3>');
            emailModal.style.display = "none";
        }
    });

    function validateEmail(email) {
        var regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        return regex.test(email);
    }

    //closes the modal window and clears the email field
	$('.closeModal').on('click', function() {
	  emailModal.style.display = "none";
      $('#email').val("");
	});

});