export default () => {
    console.log('Scope: where to look for things');

    console.log('Remember, JS has function scope only');
    console.log(`
        Compilation: (yes, JS is technically compiled)
        - pass over code: 1. tokenises and all that jazz
                          2. finds variable and fn declarations and puts them into
                             their appropriate scope slots
        - second pass through: code is executed
    `);

    console.log(`
        Variable declaration consists of two operations:
        1. declaration op: var foo
        2. execution/initialisation op: foo = 'bar'
        Both happen in two in different compliation phases
        (and actually are dealt with by different engines).
    `);

    console.log(`
        var foo = 'bar';
        function bar() {
            var foo = 'baz';
        }
        function baz(foo) {
            foo = 'bam';
            bam = 'yay';
        }
    `);
    console.log(`
        1: Find declarations
            - var dec for identifier 'foo'
            - what scope? in global
            - register the 'foo' indentifier into current scope (which happens to be global)
            - fn for identifier 'bar'
            - note: like a JIT compiler, we don't compile the contents of the fn,
              we'll compile it when we need to. Consider, CPP compliers know everything about fns inputs and outputs
              at compliation, they have enough info and time. Lets say it does compile..
            - var dec for identifier 'foo'
            - what scope? in 'bar' (fn)
            - register the 'foo' indentifier into current scope (fn)
            - register the 'bar' indentifier into current scope (global)
            - fn for identifier 'baz'
            - var dec for identifier 'foo' (named parameter)
            - what scope? in 'baz' (fn)
            - register the 'foo' indentifier into current scope (fn)
            - register the 'baz' indentifier into current scope (global)
    `);
    console.log(`
        2: Exection/Initialisation:
            - we remove all vars/lets/consts and 'execute' the code.
            - LHS: 'foo' (target), RHS: 'bar' (source)
            - when I have an LHS: scope manager, does foo exist? Is it in our current scope? Can I have its ref?
            -- RHS gets assigned to LHS
            - the fn bar gets executed
            - LHS: 'foo', RHS: 'baz'
            - scope manager, does foo exist? Is it in our current scope? Can I have its ref?
            - the fn baz gets executed
            - LHS: 'foo' (named param)
            - scope manager, does foo exist? Is it in our current scope? Can I have its ref?
            - LHS: 'foo' , RHS: 'bam'
            - scope manager, does foo exist? Is it in our current scope? Can I have its ref?
            -- RHS gets assigned to LHS
            - LHS: 'bam' , RHS: 'yay'
            - scope manager, does bam exist? Is it in our current scope? Nope
            - scope manager, does bam exist? Is it in our next (global) scope? Nope, so LET ME CREATE IT FOR YOU.
              (Because we're not in strict mode and we could not find an LHS reference.
               This is not the case for undeclared RHS references.
               So note, undeclared !== undefined.
               Undefined is more like uninitialised.)
    `);
};

console.log(`
    var foo = 'bar';
    function bar() {
        var foo = 'baz';

        function baz(foo) {
            foo = 'bam';
            bam = 'yay';
        }
        baz();
    }
    bar();
    foo;
    bam;
    baz();
`);
console.log(`
    1. Find declarations:
     - 'foo' (var) and 'bar' (fn) registered in global scope
     - 'foo' (var) and 'baz' (fn) registered in 'bar' scope
     - 'foo' (var) registered in 'baz' scope
    2. Execute:
     - LHS 'foo' assinged to RHS in global scope
     - (L:13) RHS: indentifier 'bar'
     - scope manager, does bar exist in our current (global) scope? Can I have it? (get back a fn obj)
     - We call bar:
     -- scope manager, does foo exist in our bar scope? Can I have it?
     -- LHS: 'foo' assigned to RHS: 'baz'
     -- (L:10) RHS: indentifier 'baz'
     -- scope manager, does bar exist in our bar scope? Can I have it? (get back a fn obj)
     -- We call baz:
     --- scope manager, does foo exist in our baz scope? Can I have it?
     --- LHS: 'foo' assigned to RHS: 'bam'
     --- scope manager, does bam exist in our baz scope? No - go fish, in bar, no, in global, no. LET ME MAKE THAT 4 U!
     --- LHS: 'bam' (global) assigned to RHS: 'yay'
     - (L:14) RHS: indentifier 'foo'; finds gloal ref foo; returns 'bar'
     - (L:15) RHS: indentifier 'bam'; finds gloal ref bam; returns 'yay'
     - (L:16) RHS: indentifier 'baz'
     - scope manager, does baz exist in our current (global) scope? Nope. THROW REFERENCE ERROR!
       (This is because it is an undeclared RHS reference)
`);

console.log(`
    var foo = function bar() {
        var foo = 'baz';

        function baz(foo) {
            foo = bar;
            foo;       // function...
        }
        baz();
    };
    foo();
    bar();
`);
console.log(`
    NOTE:
     - function declarations: the 'function' keyword is the very first word in the statement.
     - function expressions: the 'function' keyword is NOT the first word in the statement.
     L1:
     - this named fn expression creates function 'foo' in the global scope.
     - 'bar' is only available in the enclosing scope (its own scope).
    Named function expressions are awesome because:
     - it allows us reference ourselves within our own scope (and pollute the outter lexical scope)
     - unnamed fn expressions (anonymous) will not show up in stack traces
     - named fns serves as documentation
`);

console.log(`
    var foo;
    try {
        foo.length;
    }
    catch (err) {
        console.log(err); // TypeError from 'foo.length'
    }
    console.log(err); // ReferenceError becuase 'err' its not available
`);
console.log(`
    - NOTE: the 'function' is NOT the ONLY atomic unit of scope in JS.
    -- as of ES3 it was specificed that the catch clause was block scoped.
    -- meaning, vars declared in a catch clauses are only available inside the clause.
    - NOTE: IE6 does NOT follow this spec, all other engines do.
`);

console.log(`
    - JS has a Lexical Scoping model.
    -- Comes from: the lexing parsing stage in the complier.
    -- Essentially means: compile-time scope. Hence, the complier decides your scope at compile time
       in a nested fashion.
    --- we seen that this happens as we recursively find declarations within scope blocks (fns and catches)
`);

console.log('Cheating Lexical Scope:');
console.log(`
    - Evil EVAL
    -- it allows add declarations at runtime.
    -- NOTE: inherently slows down code. Engine registered eval is being used.
             It cannot optimise the lookups of the fn scope and global scope as it must assume
             the worst-case scenario and invalidate the caching of those lookups.
`);
console.log(`
    var bar = 'bar';
    function foo(str) {
        eval(str); // cheating
        console.log(bar); // 42
    }
    foo("var bar = 42;");
`);
console.log(`
    - With keyword
    -- helps one shorthand referencing an obj when accessing its props.
    -- treats the 'with' block as a lexical scope (hence accidental globals can occur)
    -- NOTE: complier will also deoptimise due to the use of the this kw
    -- NOTE: 'with' is not available in strict mode
`);
console.log(`
    var obj = {a:2, b:3, c:4};
    obj.a = obj.b + obj.c;
    obj.c = obj.b - obj.a;
    with (obj) {
        a = b + c;
        c = b - a;
        d = 3; // ? Go fish and find it (or create it)!
    }
    obj.d; // undefined
    d; // 3 -- whep!
`);

console.log('IIFE Pattern:');
console.log(`
    - An Immediately Invoked Function Expression is a fn that runs as soon as it is defined.
    - Fn expression gets compiled; Scope manager refers to it
      (ie. the fn enclosed in parens) as an immediate RHS value (just like 'foo';)
    - Note: although its not idiomatic, you should probably name these fns to help with debugging.
`);
console.log(`
    var foo = 'foo';
    (function(bar){
        var foo = bar;
        console.log(foo); // 'foo2'
    })('foo2'); // donkey-ball approach (more Lisp-y)
    console.log(foo); // 'foo'
    (function(bar){
        var foo = bar;
        console.log(foo); // 'foo2'
    }('foo2')); // Doug Crock approach
`);

console.log('Block scope:');
console.log(`
    - 'let' ('var's cousin) implicitly hijacks the scope of our current block, and adds the variable to that
      block rather than the enclosing function.
    - Allows us more closely follow the Principle of Least Disclosure.
    - Allows for better garbage collection.
    - Disadvantages:
    -- all 'let' declarations must really go at the top of their blocks.
    -- adds a mental overhead when refactoring (ie moving 'let' declarations around).
    - 'let' blocks allow create explicit scope blocks. This did not make it in ES6.
       We instead can just wrap codes in curly brackets (yes, this works).

`);
console.log(`
    var bar = 'bar';
    for(let i=0; i<bar.length; i++) {
        console.log(bar.charAt(i));
    }
    console.log(i); // ReferenceError
`);
console.log(`
    if(bar){
        let baz = bar;
        if(baz) {
            let bam = baz;
        }
        console.log(bam); // ReferenceError
    }
    console.log(baz); // ReferenceError
`);
console.log(`
    let (baz = 'baz') {
        console.log(baz); // 'baz'
    }
    console.log(baz); // ReferenceError
    {
      baz = 'baz'
      console.log(baz); // 'baz'
    }
    console.log(baz); // ReferenceError
`);

console.log('Hoisting:');
console.log(`
    a; // ?
    b; // ?
    var a = b;
    var b = 2;
    b; // 2
    a; // ?
`);
console.log(`
    - Remember: the runtime does not just execute statements line-by-line.
    - First, it will compile the code. Finding the declarations first.
      (and they conceptually get hoisted to the top of the scope)
    - Note: function declarations get moved before variable declarations.
    - Note: hoisting has to happen to support recursion!
    - Note: 'lets' do not hoist.
`);
console.log(`
    var a;
    var b;
    a; // undefined
    b; // undefined
    a = b;
    b = 2;
    b; // 2
    a;  // undefined
`);
console.log(`
    foo(); // 'foo'
    var foo = 2;
    function foo(){
        console.log('bar');
    }
    function foo(){
        console.log('foo');
    }
`);
console.log(`
    a(1); // 39
    function a(foo){
        if(foo > 20) return foo;
        return b(foo+2);
    }
    function b(foo){
        return c(foo) + 1;
    }
    function c(foo){
        return a(foo*2);
    }
`);
