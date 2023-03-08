function bfs(graph, root){
    var nodeLength = {};

    for(var i = 0; i< graph.length; i++){
        nodeLength[i] = Infinity;
    }
    nodeLength[root] = 0;

    var queue = [root];
    var current;

    while(queue.length != 0){
        current = queue.shift();

        var curConnected = graph[current];
        var neighborIndex = [];
        var index = curConnected.indexOf(1);

        while(index != -1){
            neighborIndex.push(index);
            index = curConnected.indexOf(1, index + 1);
        }

        for(var j = 0;  j< neighborIndex.length; i++){
            if(nodeLength[neighborIndex[j]] == Infinity){
                nodeLength[neighborIndex[j]] = nodeLength[current] + 1;
                queue.push(neighborIndex[j]);
            }
        }
    }
    return nodeLength;
} 

var BFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
]

console.log(bfs(BFSGraph, 1));