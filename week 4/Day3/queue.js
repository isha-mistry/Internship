function queue(){
    collection = [];

    this.print = function(){
        console.log(collection);
    };

    this.enqueue = function(element){
        collection.push(element);
    };

    this.dequeue = function(){
        return collection.shift();
    };

    this.front = function(){
        return collection[0];
    };

    this.size = function(){
        return collection.length;
    };

    this.isEmpty = function(){
        return (collection.length === 0)
    };
}

var q = new queue();

console.log(q.enqueue("a"));
console.log(q.enqueue("b"));
console.log(q.enqueue("c"));
console.log(q.enqueue("d"));
console.log(q.print());
console.log(q.dequeue());
console.log(q.front());
console.log(q.print());