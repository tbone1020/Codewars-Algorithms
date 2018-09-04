// Since "initialStr" and "reversedStr" values won't change, we assign them as const.
const initialStr = 'My name is Trent and I am a Front-end Engineer';
const reversedStr = initialStr =>{
    let spStr = initialStr.split(' ');
    
    // Loop through each word in the spStr array
    for(let i = 0; i < spStr.length;i++){
        
        // No need to reverse a single character word.
        if(spStr[i].length > 1) {
            
            let temp = ''; // For holding reversed word
            let currentWord = spStr[i].split(''); // split the current word
            
            // From the end to the beginning 
            // add each letter to the temp string
            for(let x = currentWord.length - 1; x >= 0; x--)
                temp += currentWord[x];
            
            // Assign the reversed 
            // word to it's array index 
            spStr[i] = temp;
        }
    }
    
    // Return the joined spStr array to 
  // form the final reversed string 
    return spStr.join(' ');
}

document.getElementById('initial-string').innerHTML = initialStr;
document.getElementById('reversed-string').innerHTML = reversedStr(initialStr);
