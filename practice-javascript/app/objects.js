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
    `);
    console.log(`
        var arr = [];
        function foo() {};
        var obj2 = {
            c: true
        };
        var myObject = {
            a: 2,
            b: ob2,  // reference, not a copy!
            c: arr,  // another reference!
            d: foo
        };
        arr.push(obj2, obj);
    `);
    console.log(`
        - shallow: 'a' is copy of the value 2, but 'b', 'c' and 'd' are just the same references as in the original object.
        - deep: duplicates 'a', 'b', 'c' and 'd', but 'c' has reference to 'obj2' and 'obj' in it.
        -- should they be duplicated or reference-preserved (circular reference -> infinite circular duplication)?
        --- should we detect a circular ref and just break the circular traversal (leaving the deep element not fully duplicated)?
        --- should we error?
        --- something in between?
        - One solution (for JSON-safe objs) is to serialise an obj as a JSON string and then re-parse it to an obj.
    `, JSON.parse(JSON.stringify(obj2)));
    console.log(`
        - shallow copying is more much more straight-forward and has more easily agreeable sematics.
        -- ES6 has now defined Object.assign that takes a target obj, and one or more sources, and it
           iterates over all the enumerable, owned keys (immediately present) on the source object(s) and them
           (via assignment) to the target.
    `, Object.assign({}, obj2, obj3));

    console.log(`
        Property Descriptors:
        - Pre ES5 there was no direct way to introspect or draw distinctions between the characteristics of obj properties,
          such as whether the prop was read-only or not.
        - Props can now be described in terms of a Property Descriptor (value, writable, enumerable, configuarable)
        -- we can fetch the descriptor with Object.getOwnPropertyDescriptor
    `, Object.getOwnPropertyDescriptor(obj, 'a'));
    console.log(`
        - We can use Object.defineProperty to add a new or modify an existing one (if its configuarable) with the desired
          characteristics.
    `, Object.defineProperty(obj, 'b', {value:3, writable:true, configurable:true, enumerable:true}));
    console.log(`
        -  'writable' determines whether we can change the value of the prop
        -- attempting to modify the value will silently fail. In strict mode it TypeError will be thrown.
    `, Object.defineProperty(obj, 'c', {value:'c', writable:false, configurable:true, enumerable:true}), obj.c);
    console.log(`
        - 'configurable' determines whether we can subsequently call 'defineProperty' on the prop again.
        -- subsequently 'defineProperty' calls will throw TypeErrors.
        -- NOTE: this prevents 'delete'-ing the prop from the object.
        -- NOTE: as you would expect, this cannot be undone.
        - 'enumerable' determines whether a prop will be enumerated by certain object-prop enumerations (like for-in).
    `);

    console.log(`
        (Shallow) Object Immutability:
        - Constant props: we can simply use defineProperty to set a non-writable and non-configurable prop.
        - Preventing the adding of props: Object.preventExtensions will forbid additional props being added to the given object.
        -- attempting to add additional props will silently fail. In strict mode it TypeError will be thrown.
    `, Object.preventExtensions(obj));
    console.log(`
        - (Shallow) constant obj: Object.freeze will set 'configurable' and 'writable' to false for all of the objs props.
        -- this will ensure immutability on the obj's direct properties. We would need to recursively call this to deeply
           freeze the obj.
    `, Object.freeze(obj));

    console.log(`
        GET:
         - 'get()': when using the dot notation to access a property a 'get' operation is actually performed.
         - the default built-in 'get' will:
         -- first inspect for the requested name, and if it finds it, it will return its value.
         -- if it doesn't, it will traverse the object's prototype chain (if it has one).
         -- if this is unsuccessful the value will be returned as 'undefined'.
    `, obj.lololol);
    console.log(`
        SET:
        - 'set()': there is also a default 'set' operation perfomed when attempting to set property values.
        - the default built-in 'set' will:
        -- if the prop is already present, check is the property an accessor descriptor, if so call the setter, if any.
        -- is the prop a data descriptor with a false 'writable', if so throw in strict mode, if fail silently.
        -- otherwise, set the value to the existing prop.
        -- if the prop is not yet present, set it on the prototype-chain.
    `);

    const obj4 = {
        get a() {
            return 3;
        },
        set a(val) {
            this._a_ = this._a_ * val;
        },
        b: undefined,
        c: null
    };
    obj4.a = 2;
    console.log(`
        Custom GET/SET:
        - ES5 introduced a means to override the default get/set operations on a per-prop basis.
        - When you define a prop to have a getter and/or setter its definition becomes an 'accessor descriptor'
          rather than a 'data descriptor'. Meaning the 'value' and 'writable' characteristics of the descriptor
          are ignored in favour of the 'get'/'set' fns.
    `, obj4.a);

    console.log(`
        Property Existence:
        - We can ask an object if it has a prop without calling the 'get' operation.
        -- the 'in' operator allows us check if the prop is present in the object or at any
           higher-level in its prototype-chain.
    `, ('a' in obj4), ('b' in obj4), ('c' in obj4), ('d' in obj4));
    console.log(`
        -- 'hasOwnProperty' will allow us check if a prop is on the object or not (and it will not check the
           prototype-chain)
    `, obj4.hasOwnProperty('a'), obj4.hasOwnProperty('b'), obj4.hasOwnProperty('c'), obj4.hasOwnProperty('d'));

};
