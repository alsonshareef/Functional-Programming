/*
What is Functional Programming?
    - Writing code with functions being the main building blocks, and designing our functions to be 'pure'. This means that every function for a given input, will always spit out 1 respective output, no more. What this does is give your code a sense of predictability in that every function used to build your application/software will have an output that you know should be coming out of it, and this predictability ensures better understanding of the overall code for the current and future developers trying to familiarise themselves with the code base.

Principles that describe Functional Programming
    - Predictability:
        As mentioned before, the functional approach gives you a more certain idea of what your code does given whatever input you give. This leaves less room for doubt.

    - Safe:
        State is immutable within the pure functions, eliminating chances of errors that could come about with have a more flimsy state that isn't as easy to keep track of.

    - Transparent:
        State will be transparent meaning that instead of being hidden away inside of an object that has to be accessed, the function itself is more 'in the open' to the rest of the code, and can be manipulated with directly.

    - Modular:
        By using functions as 'build blocks', this means that these pure functions dont have to be duplicated and can be used multiple times. The way this is done is through creating high-order patterns and connections as functions in Javascript can be passed around into other functions and arrays, and can also be the return value of other functions which helps with organization and thus, is more modular.

-- Pure Functions --
    Pure functions are functions that purely depend on its arguments (domain), and always has 1 respective output, based on those arguments (range). The reason why this is pure is because there is no chance that you can get anymore than 1 type of output with the same set of arguments. This is because:
        - Pure functions do not have any side effects
        - They are not affected by global state nor mutate global state; their state is completely private.
    
    This can be referenced back to the predictability principle as this is the underlying reasoning behind why we can be confident that these functions will always give us what we want and nothing external can impact its output. 


-- Imperative style vs Declarative style --
    This differentiation is essentially the difference between writing your code in a way that is giving step by step instructions to the computer, as opposed to writing code that declares to your computer what the result is that you're looking for.
*/

    // Imperative vs Declarative Example
        
        // Imperative:
            function doubleNumbersImp(nums){
                let doubled = []
                for (let i = 0; i < nums.length; i++) {
                    doubled.push(nums[i] * 2)
                }
                return doubled
            }

            // console.log(doubleNumbersImp([1,2,3]))

        // Declarative:
            function doubleNumbersDec(nums){
                return nums.map(n => n * 2)
            }

            // console.log(doubleNumbersDec([1,2,3]))
    
    // The declarative example is not only more concise, but also less instructional/technical in its construction and gives a better idea of what the result of the code is supposed to be which makes it easier to digest and understand.

/*
-- Immutable State --
    Following the 'Safe' principle, the fundamental idea with state in the context of functional programming is to CREATE state rather than mutate existing state. This creates less conflict between different parts of the code and allows clearer and robust communication instead. Another advantage is that error handling will be easier, as the likelihood of the error coming about due to unknown state changes is almost none if the code was truly built in a functional manner.

-- OVERALL PROS AND CONS --
    Pros:
        - Safety
        - Explicit flow of data as opposed to hidden mutations of data, typically in object-orientated code.
    
    Cons:
        - More code
        - More memory useage

-- First-Class Functions --
    First-class functions are functions that can be:
        - Stored in a variable, object or array
        - Can be passed as an argument into another function
        - Can be a return value of a function
    
    These functions utilize 'Closure' to encapsulate state and create more modular function-based code.
*/

    // FCF Example:
        function createAdder(x){
            return y => x + y
        }

        let add3to = createAdder(3) // state of x = 3 is encapsulated into add3to

        // console.log(add3to(2)) // add3to remembers x = 3, and the 2 will = y
    
    

