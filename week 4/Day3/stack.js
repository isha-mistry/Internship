// var letters = [];
// var word = "bamumab";
// var rev = "";

// for(var i=0; i<word.length; i++){
//     letters.push(word[i]);
// }

// for(var i=0; i< word.length; i++){
//     rev += letters.pop();
// }

// if(word === rev){
//     console.log("Is palindrome");
// }
// else{
//     console.log("Is not palindrome");
// }

var stack = function(){
    this.count = 0;
    this.storage = {};

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
            
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var mystack = new stack();

console.log(mystack.push("hello"));
console.log(mystack.push("good morning"));
console.log(mystack.peek());
console.log(mystack.size());
console.log(mystack.pop());
console.log(mystack.size());
console.log(mystack.push("I am Isha"));
console.log(mystack.size());
