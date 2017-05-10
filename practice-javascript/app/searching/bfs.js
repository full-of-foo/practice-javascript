const _buildPath = (parents, targetNode) => {
    const result = [targetNode];
    while (parents[targetNode] !== null) {
        targetNode = parents[targetNode];
        result.push(targetNode);
    }
    return result.reverse();
};

export default (graph, startNode, targetNode) => {
    const parents = [];
    const queue = [];
    const visited = [];
    let current = null;

    queue.push(startNode);
    parents[startNode] = null;
    visited[startNode] = true;
    while (queue.length) {
        current = queue.shift();
        if (current === targetNode) return _buildPath(parents, targetNode);

        for (let i = 0; i < graph.length; i += 1) {
            if (i !== current && graph[current][i] && !visited[i]) {
                parents[i] = current;
                visited[i] = true;
                queue.push(i);
            }
        }
    }
    return null;
};
