/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // CONDITIONAL STATEMENTS
  document.write("<br/><br/>CONDITIONAL STATEMENTS<br/><br/>");

  var isCold=true;

  // Equals operator
  if(isCold===true) {
    document.write("1. Brrr, it's cold<br/>");
  }
  if(isCold) {
    document.write("2. Yes, it's cold<br/>");
  }
  

  // Not operator
  isCold=false;
  if(isCold!==true) {
	  document.write("3. It's not cold<br/>");
	}  
  if(!isCold) {
    document.write("4. No, it's not cold<br/>");
  }  

  // Trying to confuse you with two totally illogical ways to express it. If you get these then you've really grasped it
  isCold=true;
  if(!isCold===false) {
    document.write("5. Yes, it's cold (double negative)<br/>");
  }

  isCold=false;
  if(!isCold===true) {
    document.write("6. No, it's not cold (plain confusing)<br/>");
  }  

  // Adding in the Else bit
  if(isCold) {
    document.write("7. Brrrr, it's cold<br/>");
  }
  else {
    document.write("8. No, it's not cold<br/>");
  }  
  
}

