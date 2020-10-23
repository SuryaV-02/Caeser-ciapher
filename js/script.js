new ClipboardJS('#clipboard');
var width =screen.width;
if(width >450){
	document.getElementById("whatsapp").src ="data/download.png";
	document.getElementById("whatsapp").setAttribute("onclick","download()");

}
console.log(width);
function calculate(){
	var result="";
	var data = document.getElementById('str').value;
	for(var i=0;i<data.length;++i){
		result =result +" "+ binary(data.charCodeAt(i)+16);
	}
	console.log(result);
	document.getElementById('output').innerHTML = result;
}
function binary(n){
	var r =0;
	var result ="";
	var reverse ="";
	while(n>=2){
		r=Math.floor(n%2);
		n=Math.floor(n/2);
		result =result + r.toString();
	}
	result+=n.toString();
	while(result.length<8)
		result+="0";
	for(var i=result.length-1;i>=0;--i){
		reverse+=result.charAt(i);
	}
	return reverse;
}
function copy(){
	console.log("COPYING");
	var text = document.getElementById('output');
	console.log(text);
	text.select();
	text.setSelectionRange(0,99999);
	document.execCommand("copy");
	alert("Copied : "+text.value);
}
function shareNow(){
	var data =document.getElementById('output').innerHTML;
	data = "whatsapp://send?text="+data;
	var share_button =document.getElementById('share-button');
	share_button.setAttribute("href",data);
	console.log("Share success");
	console.log(share_button.href);
}

function decode(){
	console.log("DECODE CALLED");
	var data = (document.getElementById('str').value).split(" ");
	var arr=[];
	var char="";
	for(let i=0;i<data.length;++i){
		char =(parseInt(data[i],2)-16).toString();
		arr.push(String.fromCharCode(char));
	}
	console.log(arr.join(''));			
	document.getElementById('output').innerHTML = arr.join('');
	alert("Debug works");
}

function download() {
    var a = document.body.appendChild(
    document.createElement("a")
    );
   a.download = "data.txt";
   a.href = "data:text/html," + "Proteced by 'https://suryav-02.github.io/Caeser-ciapher/' :-\n" +document.getElementById("output").innerHTML;
   a.click(); //Trigger a click on the element
   // str = str.replace(/.?\x08/, "");  to remove backspace, add these lines!!
   window.close();
}

function sendFeedback(){
	var ele = document.getElementById('formContainer');
	if(ele.style.display == "initial"){
		ele.style.display = "none";
	}
	else{
		ele.style.display = "initial";
	}
}

function submitFeedback(){
	var ID="";
	var name = document.getElementById('fname').value;
	// var emailID = document.getElementById('email').value;
	var description = document.getElementById('description').value;
	// var password = document.getElementById('Password').value;
	for(let i=1;i<=5;++i){
		let id ="r"+i.toString();
		if(document.getElementById(id).checked==true){
			ID = id[1];
			break;
		}
	}
	mailSender(name,ID,description);
}
function mailSender(name,rating,description){
	var sub = "subject=" + "Review of your github site -reg";
	var bdy = "&body=Hello, this is "+name+". I found the following suggestions might make your site better. "+description;
	var total = "mailto:suryaedu71@gmail.com?"+sub+bdy;
	window.open(total);
	alert("Thank you very much for your feedback!");
	// window.open('mailto:suryaedu71@gmail.com?subject=subject&body=body');
}


function test(){
	alert("Sent");
}