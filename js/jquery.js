/** sticky header **/
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if(scroll >= 10) {
		$("body").addClass("sticky");
	} else {
		$("body").removeClass("sticky");
	}
});
/** sticky header **/

/** Menu toggle **/
$(document).ready(function(){
	$('.navbar-toggler-icon').click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass('open');
	});
});
/** Menu toggle **/

/** Menu active **/
$(document).ready(function(){
	var last =window.location.href.split('/').slice(-1)[0];
		if (last.indexOf("?") > 0) {
    		last = last.substring(0, last.indexOf("?"));
		}
		var a = $('.navbar-nav a[href*="'+last+'"]');
		a.parents('li.nav-item:first').addClass('active')
		if(last==''){
			var a = $('.navbar-nav a:first');
			a.parents('li.nav-item:first').addClass('active')
		}
});
/** Menu active **/

/** contact form script **/
var is_form_valid=false;
$('form').submit(function(event) {
	if(!is_form_valid){
		event.preventDefault();
		var validation;
		var is_validation=1;
		var validation_key;
		var current_value;
		var value_input = $(this).find("input[data-validation]");
		
		value_input.each(function(){

			current_element = $(this);
			validation = $(this).attr('data-validation');
			validation_key = validation.split(' ');
			current_value = $(this).val();
			current_element.parent().find('.error').text('');
			$(validation_key).each(function(index,value){
				if(value=='required'){
					if(current_value  == '')  {
						current_element.parent().find('.error').text("This is required field");
						is_validation=0;
					}
				}
				if(value=='email'){
						if(!IsEmail(current_value) && current_element.parent().find('.error').text()=='')  {
							current_element.parent().find('.error').text("Please enter a valid e-mail");
							is_validation=0;
						}
				}
			
				if(value=='number'){
					if(!phone_validate(current_value) && current_element.parent().find('.error').text()=='')  {
						current_element.parent().find('.error').text("Please enter a valid number");
						is_validation=0;
					}else if(current_value.length < 10  && current_element.parent().find('.error').text()=='')  {
							   
							current_element.parent().find('.error').text("Please enter minimum 10 numbers");
							is_validation=0;
							}
						
				}
			});
			
		});

		 if(    is_validation==1) {
			is_form_valid = true;
			$('form').find("button[type='submit']").prop('disabled',true);
			$('#submit-data').html('Sending......<img class="ccf-item-loader loader" src="./images/contact-loader.svg">');
			
			$('form').submit();    
			
		}else{
			return false;
		}
	}

});
  
function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(email)) {
		return false;
	}else{
		return true;
	}
}

function phone_validate(textphone) { 
	var regexPattern=new RegExp(/^[0-9-+]+$/);  
	return regexPattern.test(textphone); 
} 
/** contact form script **/