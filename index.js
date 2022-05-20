// Code your solutions in this file

function writeCards(arrayOfNames, event){
    const newArray = [];
    for(let i = 0; i < arrayOfNames.length; i++){
        const message = `Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`;
        newArray[i]= message;
        console.log(message);
    }
    return newArray;
};

function countDown(int){
    while(int >= 0){
        console.log(int);
        int--;
    }
}