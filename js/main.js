var numberList = [2,3,5,6,7,8,9,10,12,13];

function isSumHasInArray(arr,num){
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            if(arr[i]+arr[j]==num){
                return true;
            }
        }
    }
    return false;
}

console.log(isSumHasInArray(numberList, prompt("Enter the number")));