export default (graph, current, goal) => {
    const stack = [];
    const visited = [];
    let node = null;

    stack.push(current);
    visited[current] = true;

    while (stack.length) {
        node = stack.pop();
        if (node === goal) return true;

        for (let i = 0; i < graph[node].length; i += 1) {
            if (graph[node][i] && !visited[i]) {
                stack.push(i);
                visited[i] = true;
            }
        }
    }
    return false;
};
