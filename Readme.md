Qeustion: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: Defference between getElementById, getElementsByClassName and querySelector

getElementById select only one element from the document if dosen't match any element return null;

getElementsByClassName select multiple element from the document and it will be return array type object;

querySelector select multiple document but special facility it can do select using css class as like .className or #IdName (sample)



Question: How do you create and insert a new element into the DOM?

Answer: To create and insert a new element we first need to call amathod that document.createElement() then set attribute, clss, id etc and atleast we need to appear appendChild(), insertBefore() or another setup.


Question: What is Event Bubbling and how does it work?

Answer: Event Bubbling is a mechanism in the DOM and it will work For example, if you click a button inside a div, the click event will first trigger on the button, then bubble up to the parent div, and if there are higher parent elements, it will continue bubbling up.


Question: What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegration is a mechanism that add a handeler on parent and contorl thir child element it work on dinamicly.



Question: What is the difference between preventDefault() and stopPropagation() methods?

Difference between preventDefault() and stopPropagation() methods;

preventDefault() is a method that stop default action

stopPropagation is a method that stop capturing 



>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Complete<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<