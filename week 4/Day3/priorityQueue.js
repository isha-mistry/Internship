function pQueue(){
    var collection = [];
    
    this.printCollection = function(){
        console.log("hello");
        console.log(collection);
    };

    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
        }else{
            var added = false;
            for(var i=0; i<collection.length; i++){
                if(element[1] < collection[i][1]){
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    };

    this.dequeue = function(){node 
        var value = collection.shift();
        return value[0];
    };

    this.front = function(){
        return collection[0];
    };

    this.size = function(){
        return collection.length;
    };

    this.isEmpty = function(){
        return (collection.length === 0);
    };
}

var q = new priorityQueue();
q.enqueue(['ice', 2]);
q.enqueue(['apple', 4]);
q.enqueue(['coffee', 1]);
q.enqueue(['mug', 3]);
q.printCollection;
q.dequeue;
q.front;
q.printCollection;