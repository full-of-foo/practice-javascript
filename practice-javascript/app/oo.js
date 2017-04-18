export default () => {
    console.log(`
        Class Theory:
         - When traditional classes are instantiated, a copy of behaviour from class to instance occurs.
         - Similarly, when classes are inherited, a copy of behaviour from parent to child occurs.
         - Polymorphism may seem like it implies a referential relative link from child to parent,
           but its still just the result of copy behaviour.
    `);

    console.log(`
        JS Classes (Mixins):
         - JS's object mechanism does not automatically perform copy behaviour when you 'inherit' or 'instantiate'.
         - There are NO CLASSES in JS to instantiate, ONLY OBJECTS.
         - Objects don't get copied to other objects, they get linked together (prototypes).
         - In JS we fake behaviour copying via mixins.
         - TODO - implicit vs explicit
    `);
};
