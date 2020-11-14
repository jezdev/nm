	
	function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	};	
	
  function validateEmail(form1){      
       var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       return emailPattern.test(form1); 
   }
   function chkform(form1)
   {
	   	if(document.form1.name.value==""||document.form1.name.value=="Name")
		{
			alert("Please Enter Your Name");
			document.form1.name.focus();
			return false;
		}
		
		if(document.form1.email.value==""||document.form1.email.value=="Email")
		{
			alert("Please Enter Your Email Address");
			document.form1.email.focus();
			return false;
		}
		if(!validateEmail(document.form1.email.value))
		{
			alert("Please enter a valid email address");
			document.form1.email.focus();
			return false;
		}
		if(document.form1.phone.value==""||document.form1.phone.value=="Phone")
		{
			alert("Please Enter Your Phone Number");
			document.form1.phone.focus();
			return false;
		}

    return true;
   }
