import binarySearchDemo from './binarySearch';
import bfsDemo from './bfs';
import dfsDemo from './dfs';

export default () => {
    console.log('Binary Search Demo:');
    binarySearchDemo();

    console.log('Breath-first Search Demo:');
    bfsDemo();

    console.log('Depth-first Search Demo:');
    dfsDemo();
};
