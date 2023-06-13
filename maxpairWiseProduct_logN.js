

const MaxPairwise_naive= (a) => {
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j< a.length; j++){
            
            if (a[i] * a[j] > result) {
                 result = a[i]*a[j]
                
            }
        }  
    }
            return result;


    
}

const a = [1, 2, 4, 5,6,7,8,10]



    console.log(MaxPairwise_naive(a))

