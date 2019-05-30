    var bt1 = document.getElementById('bt1');
 	var podText1 = document.getElementById('podText1');
 	bt1.onclick = changeIcon;
 	function changeIcon(){
        bt1.classList.toggle("changeIcon");
        podText1.classList.toggle("showText");
        };

    var bt2 = document.getElementById('bt2');
 	var podText2 = document.getElementById('podText2');
 	bt2.onclick = changeIcon2;
 	function changeIcon2(){
        bt2.classList.toggle("changeIcon");
        podText2.classList.toggle("showText");
        };

    var bt3 = document.getElementById('bt3');
 	var podText3 = document.getElementById('podText3');
 	bt3.onclick = changeIcon3;
 	function changeIcon3(){
        bt3.classList.toggle("changeIcon");
        podText3.classList.toggle("showText");
          };    

        var bt4 = document.getElementById('bt4');
 	    var podText4 = document.getElementById('podText4');
 	    bt4.onclick = changeIcon4;
 	    function changeIcon4(){
          bt4.classList.toggle("changeIcon");
          podText4.classList.toggle("showText");
          };   


var humburger = document.getElementById("show-menu");
var hideMenu = document.getElementById("hide");
humburger.addEventListener('click', function(){
	hideMenu.classList.toggle('showText2');
});

humburger.addEventListener('click', function(){
	humburger.classList.toggle('hideImage');
});



var inpName = document.querySelector('input[name=name]');
var inpEmail = document.querySelector('input[name=email]');
var inpPhone = document.querySelector('input[name=phone]');
var inpEnvato = document.querySelector('input[name=envato]');



var submit = document.querySelector('.submit').onclick = function(){
	var params = 'name=' + inpName.value + '&' + 'email=' + inpEmail.value + '&' + 'phone=' + inpPhone.
	value + '&' + 'envato=' + inpEnvato.value; 
	ajaxPost(params);
}

function ajaxPost(params){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
					alert("Спасибо за подписку");
				}
	}


xhr.open('POST', 'Forms.php');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send(params);
	}







	
	






         
 	
    

