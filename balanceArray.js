function balance(array){
    if(array.length % 2 == 0){
       var sum1 = 0,sum2 = 0,store;
        for(var i = 0; i < array.length / 2; i++ ){
            sum1 = sum1 + array[i];
          
        }  console.log(sum1);
             for(var j = array.length/2; j < array.length; j++){
                sum2 = sum2 + array[j];
                
             }console.log(sum2);
             if(sum1 > sum2){
                store = sum1 - sum2;
                console.log(store);
                array[array.length/2] = store + array[array.length/2];
                console.log(array[(array.length)/2]);
             }
             else{
                 store = sum2 - sum1;
                 console.log(store);
                 array[i-1] = store + array[i-1];
                 console.log(array[i]);
             }

            }
            return array;
        }
console.log(balance([10,1,3,21,2,1]));