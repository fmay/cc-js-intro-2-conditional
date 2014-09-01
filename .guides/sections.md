---
title: CONDITIONAL LOGIC
files: []
editable: true
layout: ""

---
Conditional logic is a mainstay of any programming language. It concerns itself with constructs like this 

*"If it is less than 18 degrees or greater than 28 degrees and I am not on vacation, then switch on the heating or the aircon."*

Let's dive right in and see how it works.
---
title: Conditional Statements
files: []
editable: false
layout: ""

---
>Select 'Basics' from the ![](.guides/img/rocket.png) Rocket menu at the top to load some code.

A conditional statement simply tests whether something is true or false and can then execute on more statements if it is true and a different set of statements if false.

Here is how we write this in Javascript

```
var isCold=true;

if(isCold===true) {
  document.write("Brrrr, it's cold<br/>");
}
```
However, you can actually leave out the `===true` part, in which case Javacript will assume this is a test for 'true', so

```
var isCold=true;

if(isCold) {
  document.write("Brrrr, it's cold<br/>");
}
```

##The '===' is really important
It is very important to use `===` when testing whether the left operator is equal to the right operator. If you used just `=` you would assign the right operator to the left one.

This is a very common cause of errors for beginners, so if you see unexpected behavior, then you check you have written this correctly.

---
title: "The Not operator \"!\""
files: []
editable: false
layout: ""

---
The not operator is the opposite of the === operator.

```
var isCold=false;

if(isCold!==true) {
  document.write("It's not cold<br/>");
}
```

Note that we have to use two equal signs in the operator, not one.

We can also write this in shorthand as follows 

```
var isCold=false;

if(!isCold) {
  document.write("It's not cold<br/>");
}
```
---
title: Else
files: []
editable: false
layout: ""

---
The next thing you should now about is the `else` statement. This is best explained by looking at the following code

```
var isCold=true;

if(isCold) {
  document.write("Brrrr, it's cold<br/>");
}
else {
  document.write("No, it's not cold<br/>");
}
```

What happens here is that if the `if()` condition it *not* met, then it will instead execute all the code within the `else{}` block.

> Make sure you have examined and played around with the 'Basics' code from the Rocket menu before moving on.
---
title: Testing for less than and greater than
files: []
editable: false
layout: ""

---
> Select 'Less & Greater' from the ![](.guides/img/rocket.png) Rocket menu at the top to load some code.

As well as testing simple boolean variables, another very common thing is to test for greater than or less than.

- "Less than" : `if(x<100)` 
- "Less than or equal to" : `if(x<=100)` 
- "Greater than " : `if(x>100)` 
- "Greater than or equal to" : `if(x>=100)` 

And here is a good example 

```
var temperature=12;

if(temperature<18) {
  document.write("Brrrr, it's cold<br/>");
}
if(temperature>=26) {
  document.write("It's getting pretty hot<br/>");
}
```
---
title: Logical Operators
files: []
editable: false
layout: ""

---
Sticking to our temperature theme, what happens if we want to deal with Cold, Pleasant and Hot situations?

Here's the english language approach

```
If it's less than 18 degrees, then it's cold
If it's 18 degrees or more **AND** (`&&`) less than 28 degrees then it's pleasant
Another way of saying this is if its less than 18 degrees **OR** (`||`) it's 28 degrees or more then it's not pleasant
If it's 28 degrees of more, then it's hot
```

This is written as 

```
var temperature=15;

if(temperature<18) {
  document.write("Brrrr, it's cold<br/>");
}
if(temperature>=18 && temperature<28) {
  document.write("It's really rather pleasant<br/>");
}
if(temperature<18 || temperature>=28) {
  document.write("It's not entirely pleasant<br/>");
}
if(temperature>=28) {
  document.write("It's hot<br/>");
}
```

Notice that for a temperature of 15, you will get 2 lines written to the preview window. Figure out which ones.

##ANDing (&&) more formally
When two things are ANDed together, then *both* must be true in order for the result to be true.

- `true && true` yields `true`
- `true && false` yields `false`
- `false && true` yields false
- `false && false` yields false

Javascript `if` conditional statements reduce all expressions on this basis, so it takes a statement like this, which tests for a hot summer's day 

```
var temperature= 32;
var isSummer=true;
if(isSummer && temperature>28)
```

to

```
if( true && true)
```

which is true (`true && true` yields true), so the `if` block will execute.


##ORing (||) more formally
When two things are ORed together, then *either* can be true in order for the result to be true.

- `true || true` yields `true`
- `true || false` yields `true`
- `false || true` yields true
- `false || false` yields false

The same principle applies for the OR, so this test for unpleasant weather

```
var temperature= 32;
if(temperature<16 || temperature>28)
```

is reduced by Javascript to

```
if( false || true)
```

which is true (`false || true` is true).


---
title: Using parentheses in logical expressions
files: []
editable: false
layout: ""

---
There are situations where it is very important or even esential to use parentheses in your logical expressions.

1. Use them to make your code readable. 
1. Many epressions will only evaluate correctly if you use parentheses to clearly express your condition.

Look at the following example which says "it is  'uncomfortable' if the temperature is either between a) 33 and 37 degrees or b) below freezing and above -20". 

We'll assume that temperatures worse than this are unbearable.

```
var temperature=34;

if( temperature>32 && temperature<38 || temperature>-20 && temperature<=0) {
	document.write("5. Uncomfortable temperature<br/>");
}  
```

In this case, we can see that the use of parentheses makes the conditions very clear to the reader. 

Javascript evaluates the contents of the brackets first, as follows

```
(true && true) || (true && false)
(true) || (false)
true
```
So, it is an uncomfortable temperature.

##Without parentheses
More important than readability, however, is that these parentheses are very much necessary. If we left them out, we would have

```
var temperature=34;

if( temperature>32 && temperature<38 || temperature>-20 && temperature<=0) {
	document.write("5. Uncomfortable temperature<br/>");
}  
```

In this case, with a temperature of 34, this expression would evaluate as 

```
if( true && true || false && false ) {
  document.write("Nasty temperature<br/>");
}
```

It should be clear to you that the logic you want to apply is simply unreadable without the parentheses and you could not easily see how Javascript would interpret this.

So - always use parentheses to correctly mirror your intended logic.

> Before moving on, make sure you have played with the 'Less & Greater' from the ![](.guides/an-img/rocket.png) Rocket menu
---
title: Else If
files: []
editable: false
layout: ""

---
> Select 'Else If' from the ![](.guides/img/rocket.png) Rocket menu at the top to load some code.

We can also write if/else statements in the following way

```
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
```

There are some important things to note here

- it will run through each test until a condition is true. At this point it will execute the statement(s) within the `{ }` block. Once it has done that it will skip past all of the remaining tests, including the last `else`.
- in the code above, it result in "It's 'parky' as they say in England"
- the final `else` `{ }` block will execute if none of the above consitions were met. So, if we set `temperature` to be anything above 28, it will display "It's too hot".

---
title: Nested If Statements
files: []
editable: false
layout: ""

---
It is possble to nest if statements like this

```
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
  if(temperature<=22 ) {
    document.write("It's pleasant<br/>");
  }
  else if(temperature>22 && temperature<=28) {
    document.write("It's just perfect!<br/>");	
  }
  else {
    document.write("It's too hot<br/>");	
  }
}
```

Stare at it for a bit and it should all make sense. You can preview this example as well.

---
title: The Conditional (ternary) Operator
files: []
editable: false
layout: ""

---
> Select 'Ternary and Switch' from the ![](.guides/img/rocket.png) Rocket menu at the top.

Here's a funny little operator, known as the 'ternary' or 'conditional' operator.

Rather than writing this ...

```
var temperature=-5;

if(isCold) {
	msg="It's freezing";
}
else {
	msg="It's not freezing";
}
document.write(msg + "<br/>");		
```

... the conditional operator gives us a shorthand alternative

```
temperature<0 ? msg="It's freezing" : msg="It's not freezing";
```

Put more formally

```
condition ? expr1 : expr2
```

Where `expr1` is executed if the condition is true, otherwse `expr2` is evaluated.

Here's another couple of examples

```
var msg = "The fee is " + (isMember ? "$2.00" : "$10.00");
var elvisLives = Math.PI > 4 ? "Yep" : "Nope";
```
---
title: The Switch Statement
files: []
editable: false
layout: ""

---
The `switch` statement is sometimes a nice, readable way of evaluating expressions. It is especially useful if you want to inspect discrete values that might otherwise be rather messy using `if` statements.

So, rather than

```
if(x===1) {
	// do something
}
else if(x===2) {
	// do something
}
else if(x===3) {
	// do something
}
else if(x===4) {
	// do something
}
else {
	// do this if nothing else matches
}
```
... you can write it like this 

```
	var weatherType=1; // Valid values are between 0 and 6
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
```

The `break` statement forces Javascript to jump to the end of the `switch` block and continue execution from there.

`default` is selected if none of the other cases match.

There are some other nice ways you can use the `switch` statement, which is more than we need go into right now. 

But if you're interested, feel free to [look it up](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).

---
title: A few more operators
files: []
editable: false
layout: ""

---
> Select 'A Few More Operators' from the ![](.guides/img/rocket.png) Rocket menu at the top.

Javascript offers several very useful assignment operators.

Here are a couple of statements that should be very clear and obvious

```
var x=10;
var string="Message : "

x = x+10;
string = string + "it's a lovely day!";
```

Using the `+=` operator, we can re-write the same code as follows

```
var x=10;
var string="Message : "

x += 10;
string += "it's a lovely day!";
```

You can also use `-`, `*`, and `/`

```
var x=24;
x-=2;		// x=x-2
x*=10; 	// x=x*10
x/=10; 	// x=x/10
```

##The '++' and '--' operators
Finally, here is another useful pair of operators. These increment or decrement the value of `x` *after* the statement where `x` appears is executed.

```
x++;		// x=x+1
x--;		// x=x-1
```

There is also a subtle variation on these, whereby the increment or decrement is done *before* the statement where `x` is found is executed. Don't worry too much about the difference until you see this in action in the 'Loops' module.

```
++x;		// x=x+1
--x;		// x=x-1
```
