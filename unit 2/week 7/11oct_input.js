
    const answer = (n,m,ar) =>{
    let count = 0;
    for(i=0;i<n;i++){
        for(j=(i+1);j<n;j++){
            if(ar[i]*ar[j] == m){
                count++;
                //console.log(ar[i], ar[j])
            }
            
        }
    }
    console.log(count)
    // return count
    
}

//-------------------------------------------------
let input = [ '2', '3 0', '1 3 2', '5 4', '3 2 2 1 5' ]
    console.log(input);

    let test = input[0];

    let arrval = [];
    let ar = []
    for(i=1;i<input.length;i++){
        if(i%2==0) ar.push(input[i]);
        else arrval.push(input[i])
    }
    console.log(test)
    console.log(arrval);
    console.log(ar);

    for(let i=0;i<test;i++){
         [n,m] = arrval[i].split(" ").map(Number);
        arra = ar[i].split(" ").map(Number);
        console.log(n,m,arra);
        answer(n,m,arra)
    }

    





//------------------------------------



