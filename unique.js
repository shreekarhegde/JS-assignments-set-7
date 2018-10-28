var unique = {
    find: function(array){
        var store = [];
        array.forEach(function(element) {
            if(array.indexOf(element) == array.lastIndexOf(element)){
            store.push(element);
            }     
        });
    this.result = store;
    }
}

console.log(unique.find([1,1,2,2,3,4]));
console.log(unique);
//console.log(unique.find());
// console.log(unique.number);


// function findU(array){
//     result = [];
//     array.forEach(function(element) {
//         if(array.indexOf(element) == array.lastIndexOf(element)){
//             result.push(element);
//         }
//     })
//     return result;
// }
 