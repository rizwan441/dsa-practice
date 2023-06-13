const MaxPairwise = (arr) => {
    let istG = arr[0];
    let secG = arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > istG) {
            istG = arr[i];
            secG = istG
            
        }
        
        
        
    }
//    for (let i = 1; i < arr.length-1; i++) {
//        if (arr[i] < istG && arr[i] >secG) {
           
//            secG = arr[i];

           
        
//        }

    
//    }
    return secG*istG;



    
}

console.log(MaxPairwise([10,10, 8, 9, 7]))
    ///////////








    //////////// corner cases

