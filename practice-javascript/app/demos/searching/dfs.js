import dfs from '../../searching/dfs';

export default () => {
    console.log('Depth-first graph search: O(|V|^2)');

    console.log('TODO: Note sudo-code and steps here!');

    const g = [[1, 0, 0, 0, 1, 0],
               [1, 1, 1, 0, 1, 0],
               [0, 1, 0, 1, 0, 0],
               [1, 0, 1, 0, 1, 1],
               [0, 1, 0, 1, 0, 0],
               [0, 0, 0, 1, 0, 0]];
    console.log('Depth-first graph search:', g, 1, 5, ': ', dfs(g, 1, 5));
};
