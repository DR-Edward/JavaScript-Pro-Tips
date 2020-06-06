# Destructuring Assigment

It's pretty easy get an attribute of an object, so it's possible we did something like this. It's functional but, we can improve it.

![alt text](https://github.com/DR-Edward/JavaScript-Pro-Tips/blob/master/DestructuringAssignment/src/img/way_1.png?raw=true)

So, using ES6 destructuring, we can write exactly the same in less rows, of course we can get any attribute we want. This is the sintaxis.

![alt text](https://github.com/DR-Edward/JavaScript-Pro-Tips/blob/master/DestructuringAssignment/src/img/way_2.png?raw=true)

Even we can get an object inside of another object, but we can do it better!.

![alt text](https://github.com/DR-Edward/JavaScript-Pro-Tips/blob/master/DestructuringAssignment/src/img/way_3.png?raw=true)

We can use nested destructuring, so here we are saying 'I want to get "mother" attribute of "family"', but using nested destructuring we loose the oportunity to use `family` (if we put family in a log, it will say undefinded).
Understanding the risk, we can rewrite it in just one row.

![alt text](https://github.com/DR-Edward/JavaScript-Pro-Tips/blob/master/DestructuringAssignment/src/img/way_4.png?raw=true)

We can also set a default value. If the object has `country` attribute, the default value will be ignored.

![alt text](https://github.com/DR-Edward/JavaScript-Pro-Tips/blob/master/DestructuringAssignment/src/img/way_5.png?raw=true)

It's also permitted to rename the attribute, so in this example `age` is undefined but, we can access the age information through `yearsOld` (It also works on nested destructuring). 

![alt text](https://github.com/DR-Edward/JavaScript-Pro-Tips/blob/master/DestructuringAssignment/src/img/way_6.png?raw=true)

Something like this is a simple way to get the first element of an array and set it to a variable. But as you thought, we can improve it!. 

![alt text](https://github.com/DR-Edward/JavaScript-Pro-Tips/blob/master/DestructuringAssignment/src/img/way_7.png?raw=true)

Destructuring it's not only for objects, we can also do it to arrays. 

* As we can see in the example, `mostLiked` is getting the first element of `languages`.
* We can also ignore some / all elements just doing this `, ,`.
* And we can also get an array of all the rest of elements using the `spread operator`.

![alt text](https://github.com/DR-Edward/JavaScript-Pro-Tips/blob/master/DestructuringAssignment/src/img/way_8.png?raw=true)


## Run Code

After downloading `src / files / index.js` or cloning the repo and being in the file path, run` node index`.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

## Docs

There's a lot of things about Destructuring, you can check it out in the link below.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
