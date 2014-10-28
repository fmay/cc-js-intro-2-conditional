/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // ELSE IF STATEMENTS
  document.write("ELSE IF AND NESTED IFS<br/><br/>");

 
  
  document.write("ELSE IF<br/><br/>");
  // Else If
  var temperature=14;

  if(temperature===0) {
    document.write("It's literally freezing<br/>");
  }
  else if(temperature>0 && temperature<=10) {
    document.write("It's very cold indeed<br/>");
  }
  else if(temperature>10 && temperature<=17) {
    document.write("It's 'parky' as they say in England<br/>");
  }
  else if(temperature>17 && temperature<=22 ) {
    document.write("It's pleasant<br/>");
  }
  else if(temperature>22 && temperature<=28) {
    document.write("It's just perfect!<br/>");    
  }
  else {
    document.write("It's too hot<br/>");    
  }

	
  document.write("<br/><br/>NESTED IF<br/><br/>");
    
  // Nested if
  var temperature=14;

  if(temperature<18) {
    // This block deals with all temperatures colder than 18
    if(temperature===0) {
      document.write("It's literally freezing<br/>");
    }
    else if(temperature>0 && temperature<=10) {
      document.write("It's very cold indeed<br/>");
    }
    else if(temperature>10) {
      document.write("It's 'parky' as they say in England<br/>");
    }
  }
  else {
    // This block deals with all temperatures of 18 and above
    if(temperature<=22) {
      document.write("It's pleasant<br/>");
    }
    else if(temperature>22 && temperature<=28) {
      document.write("It's just perfect!<br/>");    
    }
    else {
      document.write("It's too hot<br/>");    
    }
  }  
  
}






