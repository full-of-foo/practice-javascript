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
        2. initialisation op: foo = 'bar'
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
        2: Initialisation:
            - we remove all vars/lets/consts and 'execute' the code.
            - LHS: 'foo' (target), RHS: 'bar' (source)
            - when I have an LHS: scope manager, does foo exist? Is it in our current scope? Can I have its ref?
            - the fn bar gets executed
            - LHS: 'foo', RHS: 'baz'
            - scope manager, does foo exist? Is it in our current scope? Can I have its ref?
            - the fn baz gets executed
            - LHS: 'foo' (named param)
            - scope manager, does foo exist? Is it in our current scope? Can I have its ref?
            - LHS: 'foo' , RHS: 'bam'
            - scope manager, does foo exist? Is it in our current scope? Can I have its ref?
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
    // TODO - what happens here in terms of scope and execution?
`);
