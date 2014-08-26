/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/


function play() {

  // CONDITIONAL STATEMENTS
  document.write("<br/><br/>LESS THAN, GREATER THAN AND LOGICAL OPERATORS<br/><br/>");

  var temperature=12;

  if(temperature<18) {
    document.write("1. Brrrr, it's cold<br/>");
  }
  
  temperature=32;
  if(temperature>=26) {
    document.write("2. It's getting pretty hot<br/>");
  }  

  // Less than and greater than
  var temperature=15;

  if(temperature<18) {
    document.write("3. Brrrr, it's cold<br/>");
  }
  if(temperature>=18 && temperature<28) {
    document.write("3. It's really rather pleasant<br/>");
  }
  if(temperature<18 || temperature>=28) {
    document.write("3. It's not entirely pleasant<br/>");
  }
  if(temperature>=28) {
    document.write("3. It's hot<br/>");
  }  

  // Parentheses
  var temperature=34;

  if( (temperature>32 && temperature<38) || (temperature<=0 && temperature>-20) ) {
    document.write("4. Uncomfortable temperature<br/>");
  }  
  if( (temperature>=38) || temperature<=-20 ) {
    document.write("4. It's horrible!!!<br/>");
  }  

  var temperature=10;

  if( temperature>32 && temperature<38 ||  temperature>-20 && temperature<=0 ) {
    document.write("4. Uncomfortable temperature<br/>");
  }
  
}






