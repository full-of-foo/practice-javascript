import arraysDemo from './arrays';
import enumerableDemo from './enumerable';
import cardGameDemo from './cardGame';
import scopeDemo from './scope';
import mathDemo from './math';
import objectsDemo from './objects';
import ooDemo from './oo';
import sortingDemos from './sorting';
import searchingDemos from './searching';
import problemDemos from './problems';

export default () => {
    console.log('Arrays Demo:');
    arraysDemo();

    console.log('Enumerable Demo:');
    enumerableDemo();

    console.log('Card Game Demo:');
    cardGameDemo();

    console.log('Scope Demo:');
    scopeDemo();

    console.log('Math Demo:');
    mathDemo();

    console.log('Objects Demo:');
    objectsDemo();

    console.log('OO Demo:');
    ooDemo();

    console.log('Sorting Demo:');
    sortingDemos();

    console.log('Searching Demo:');
    searchingDemos();

    console.log('Problem Demos:');
    problemDemos();
};
