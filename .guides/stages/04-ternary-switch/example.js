/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // TERNARY/CONDITIONAL AND SWITCH STATEMENTS
  document.write("TERNARY/CONDITIONAL AND SWITCH STATEMENTS<br/><br/>");

 
  // Ternary
  document.write("TERNARY/CONDITIONAL<br/><br/>");
  
  var temperature=-4;
  var msg;
  
	temperature<0 ? msg="It's freezing" : msg="It's not freezing";
  document.write("Ternary Result : " + msg + "<br/><br/>"); 
  
  
  // Switch
  
  var weatherType=3; // Valid values are between 0 and 6
  switch(weatherType) {
    case 0:
      msg = "bitterly cold";
      break;
    case 1:
      msg = "freezing";
      break;
    case 2:
      msg = "cold";
      break;
    case 3:
      msg = "pleasant";
      break;
    case 4:
      msg = "warm";
      break;
    case 5:
      msg = "hot";
      break;
    case 6:
      msg = "baking";
      break;
    default:
      msg = "invalid value";
  }  
	document.write("Switch Result : " + msg + "<br/><br/>"); 
  
}






