export default () => {

    const obj = new Object();
    obj.a = 1;

    console.log(`
        - Objects have both literal and construction forms.
        - Literal form is almost always favoured.
    `, {a: 1}, obj);

    console.log(`
        - Objects are a general building block for which most of the lang is built.
        - They are one of the 6 primary types in the spec (string, number, boolean, null, undefined, object).
    `, 'string', Number('number'), Boolean('true'), null, undefined, {});

    console.log(`
        - Everything in JS is NOT an object, common misconception.
        - Actually, there are a few special object sub-types (complex primitives), so these are not stictly plain-old objects.
        -- 'function' is an object sub-type with callable behavior semantics bolted on, but can stil be treated
            like an normal object.
        -- arrays are object sub-types with added structural semantics.
    `);

    console.log(`
        - Built-in objects are also object sub-types.
        - These are: String, Number, Boolean, Object, Function, Array, Date, RegExp, Error.
        - NOTE: like in other langs, they may seem like their primitive counter-parts, but there are important differences.
        -- they seem like built-in types/classes, but they are actually built-in functions.
    `, String, Number, Boolean, Object, Function, Array, Date, RegExp, Error);

    const strPrim = 'foo';
    const strObj = new String('foo');
    console.log(`
        - We can assert this by checking the instanceof str primitives vs objs
    `, strPrim instanceof String, strObj instanceof String);
    console.log(`
        - We can inspect what the object sub-type of a variable via Object.prototype.toString
    `, Object.prototype.toString.call(strPrim), Object.prototype.toString.call(strObj));

    console.log(`
        - Note: primitives are not actually objects, so, there are primitive literals and have immutable values.
        -- to perform operations on it a String object is required.
        -- the lang automatically coerces primitives to counter-part object values when necessary.
    `);

    const obj2 = {};
    obj2[true] = 'foo';
    obj2[2] = 'bar';
    obj2[obj2] = 'baz';
    console.log(`
        Properties:
        -- Access via the '.' or '[]' operators.
        -- Property names are ALWAYS strings (any unicode).
        -- Other values can be supplied as keys but will be converted to a string.
    `, obj2, obj2['true'], obj2['2'], obj2['[object Object]']);

    const obj3 = {
        [`${1+1}`]: 'foo',
        [obj2[true]]: 'bar',
    };
    console.log(`
        - Property keys call also be computed (as of ES6) using '[]' in
          object literals to wrap computed key expressions.
    `, obj3, obj3['2'], obj3['foo']);

    console.log(`
        Methods vs Properties:
        - One might assume properties that are obj/primitive values are same methods which are properties.
        - However, functions NEVER 'belong' to objects.
        -- They are not object 'methods', the are simply functions which an object refers to.
        -- The scope binding of any function is governed by the four scoping rules,
           not just if it is refered to by an object (ie. implicit binding rule)
    `);

    console.log(`
        Property Enumeration:
        - NOTE: never assume the order of object props/keys. Use Maps instead (ES5+)
        - One can use 'for-in' loops, Object.keys (ES5+) and Object.getOwnPropertyNames (ES5+)
        - When using 'for-in's, we are also enumerating actually inherited properties.
        -- thus, we has gaurd iterations with hasOwnProperty to ensure the given prop is on the target obj.
    `, Object.keys(obj2), Object.getOwnPropertyNames(obj2));
    for (const p in obj2) {
        if (!obj2.hasOwnProperty(p)) continue;
        console.log(p);
    }

    console.log(`
        Copying Objects:
        - when cloning/copying, consider shallow vs deep.
        -- Shallow will copy object references.
        -- Deep copy will create new cloned objects.
        - TODO: finish (what about fns, arrays, objs)
    `);
    console.log(`
        var obj2 = {
            c: true
        };
        var arr = [];
        function foo() {};
        var myObject = {
            a: 2,
            b: ob2,	// reference, not a copy!
            c: arr,	// another reference!
            d: foo
        };
        arr.push(obj2, obj);
`);
};
