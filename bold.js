function makeBold(sentence,word1,word2,word3){
             sentence.split(' ').forEach(function(word){
                 if(word == word1){
                    word = word1.bold();
                    sentence =  sentence.replace(word1,word);
                 }else if(word == word2 ){
                     word = word2.bold();
                    sentence = sentence.replace(word2,word);
                    
                 }else if(word == word3 ){
                     word = word3.bold();
                    sentence = sentence.replace(word3,word);
                 }  
             });
             return sentence;
}
 
console.log(makeBold('xyz abc lmn','xyz','abc'));
