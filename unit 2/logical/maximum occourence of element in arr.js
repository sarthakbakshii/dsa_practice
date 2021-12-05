function maximumOccuringElement(A,N){
    let data ={};
    for(i=0;i<N.length;i++){
        if(data[N[i]] == undefined)
                data[N[i]] =1;
        else
            data[N[i]] = data[N[i]] + 1
    }

    max = 0;
    for (const key in data) {
        if(data[key]>max)
            max=data[key];
        
    }
    console.log(max)
}
maximumOccuringElement(5,[0,2,0,6,9])