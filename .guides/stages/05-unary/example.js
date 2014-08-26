/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // UNARY OPERATORS
  document.write("UNARY OPERATORS<br/><br/>");

   
  var temperature=24;
  var msg="Message : ";

  document.write("Initial value : temp=" + temperature + "<br/><br/>");  
  
  temperature += 6; 
  document.write("Step 1 :   temp=" + temperature + "<br/><br/>"); 

  temperature *= 10; 
  document.write("Step 2 :   temp=" + temperature + "<br/><br/>"); 
  
  temperature /= 5; 
  document.write("Step 3 :   temp=" + temperature + "<br/><br/>"); 

  temperature++;
  document.write("Step 4 :   temp=" + temperature + "<br/><br/>"); 

  temperature--;
  document.write("Step 5 :   temp=" + temperature + "<br/><br/>"); 

	msg += "I've had enough of the temperature examples!"  
  document.write(msg + "<br/><br/>"); 
  
}






