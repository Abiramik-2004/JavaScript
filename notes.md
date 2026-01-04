<!-- What is JavaScript -->
    # JavaScript is a high-level, versatile, and dynamic programming language primarily.
    # Used for creating, interactive and dynamic content on website.
    # It enables web developers to add functionallity, interactively, and behaviour to the webpage.

<!-- Characteristics of JavaScript -->
    # High-level language
    # Interpreted language
    # Single Threaded
    # Loosely typed
    # Dynamic Language
    # Synchronous language

<!-- How to declare any variable -->
They are three ways to declare any variable
  1.let
  2.const
  3.var
 <!-- Let vs var -->

* In let keyword redeclaration is not possible.
* In var keyword redeclaration is  possible.

<!-- const -->

* It is used to take constant value.
* We can't perform redeclaration and reinitialization.
* Here the declaration and intialization in the same line.
<!-- Data types -->
    
    <!-- !In js we have to types of data types -->
        1.Primitive data types
        2.Non primitive data 
<!-- 1.primitive data types -->
         1.Number
         2.Boolean
         3.Undefined
         4.Bigint
         5.String
<!-- difference between null and undefined -->
    -> undefined means variable declared but not initialized.null means variable is initiallized with null.
    -> typeof udefined is =>undefined
    -> typeof null is object
    
<!-- 2. Non-Primitive dataype -->
    # Array
    # Object
    # Function

<!-- typeof -->
    typeof operator is used to show the datatype of the variable
<!-- how js file will run in browser -->

<!-- parser -->
    It checks for syntax and semantics. it breaking the code into tokens in order to understand their meanings and these tokens get converted into Abstract Syntax tree(AST).

<!-- Abstract Syntax Tree -->
    # it is a heirarchical tree like structure of program representation which allows interpreter  to understand the program.
    # This AST is initially goes to the interpreter.

<!-- Interpreter -->
    It lets the AST to get converted into bytecode.

<!-- Profiler -->
    it will check for the repeating code that can be optimized. As soon as, it gets the repeating code, it  basically moves the code into compiler.

<!-- Compiler -->
    It produced the most optimized code.

<!-- browser  js Engine -->

    Chrome ==> v8 engine
    edge   ==> Chakra
    firefox==> Spider monkey

<!-- function -->
    * function is a set of code, used for doing some particular task.
    * It is used for code reusability.
    * Whenever we are creating function, if we want to execute, we have to call the function.

<!-- types of function -->
    1.<!--! Named Function -->
        the function having some name, is called named function.
        <!-- ? syntax -->
            function function_name(){
                code......
            }
            //? count the digit of the numbers
let count=function(a){
    let i=1;
    while(a>=10){
        a=a/10
        i++
    }
    console.log(i);
    
}
count(10)
    2.<!-- ! Anonymous function -->
        the function that does not have any name, is called as anonymous function.
        <!-- ? syntax -->
            function(){

            }
<!-- Lexical Scopping -->
    # In nested function inner function can access all the properties of the outer function but the outer function can not access the properties of inner function ,this is called lexial scopping
<!-- higher order function -->
    Function that takes another function as parameter, is called higher order function.
 
 <!-- CallBack Function -->
    The function that is  send to the higher order function as an argument is called a Callback function.

<!-- String -->
    <!--? Method of String -->
        1. ToUpperCase():
            this method id used to convert one string into uppercase and it will return on new String original string it will not change
        2.toLowerCase():
            this method id used to convert one string into uppercase and it will return on new String original string it will not change
        3. trim():
            It is used to remove the space from both the sides of the String
        4.indexOf():
            # this method is used to return the index of the given character
            # it will tae the last appearance of the given character
        5. lastIndexOf():
            this method is used to return the index of the given character
        6.charAt(): 
            this method is used to know the character, present in the given position.
        7.includes():
            * it is used to know the given String is present or not
            * if it present it will return true else it will return false
<!-- Array in JavaScript   -->
    <!--? To declare an array in js -->
        let arr=[30,"html",true, undefined];
    <!--? how to find the length of the array -->
        console.log(arr.length);
    <!--? Methods in Array -->
        <!-- ! 1.  push() -->
            This method is used to add any element in an array
            It will returns length of an array
        <!--! pop() -->
            It is used to remove the last element from the Array
            it will returns the removed element
        <!--! 3.unshift -->
            this methods will add the elemnt at the start of an array
            It will return the length of the modified array length
        <!--! 4. shift() -->
            This methods will remove the first element present in an Array
            It will returns the value of an removed element
        <!--! 5. indexOf -->
            it is used to know the index of an array present in Array
            if the element is not pesent it will return -1
        <!-- ! 6.concat -->
            It is used to combine two or more arrays and it will return one new Array
        <!-- ! 7.includes -->
            It return true if the element present in array else it will return false
        <!-- ! 8. Map -->
            * It is a higher order function and it will returns the a new Array.
            * It will takes the three parameter.
            * It is used to traverse the array, if we want to perform any operation in all the element in a array we should use map method.
                syntax: arr.map((ele, index, array)=>{

                })
Loops in Javascript:
---------------------
    for-in loop:
        # for in loop is used to traverse and it willreturn the index.
    
