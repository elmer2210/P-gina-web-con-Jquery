function cargaSendMail(){

 
    var filter= /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var s_email = $('#c_mail').val();
    var s_name = $('#c_name').val();    

    if (filter.test(s_email)){
    sendMail = "true";
    
    $('#c_mail').css("border-color","");   	
    } else{
    $('#c_mail').after("<span id='c_error_mail' class='c_error'>Ingrese e-mail valido.</span>");
    $(".c_error").css("color","Red");
    $('#c_mail').css("border-color","Red");   
    sendMail = "false";
    }
    if (s_name.length == 0 ){
    $('#c_name').after( "<span id='c_error_name' class='c_error'>Ingrese su nombre.</span>" );
    $(".c_error").css("color","Red");
    $('#c_name').css("border-color","Red");  	
    var sendMail = "false";
    } else{
    $('#c_name').css("border-color","");
    }	
    


 
}