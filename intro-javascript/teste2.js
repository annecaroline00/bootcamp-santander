function substituiPares(array){
    for(let i= 0; i < array.length; i ++) {
        if(array[i] == 0){
            console.log("Já é zero!")
        } else if (array [i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        } 
    }

    return array
}


let arr = [1, 2, 3, 4, 6, 8, 9, 223, 243243,1212, 12]

substituiPares(arr)