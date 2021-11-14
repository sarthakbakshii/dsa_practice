const arrSpliter = a => a.split("-");

const dayCounter = a =>{
  const arr = arrSpliter(a);
  let days = 0;
  for(i=1;i<arr[1];i++){
        if(i== 1 || i== 3 || i== 5 || i== 7 || i== 8 || i== 10 || i== 12)
              noOfDays = 31;
        else if(i== 4 || i== 6 || i== 9 || i== 11 )
               noOfDays = 30;
        else if(i== 2)
              noOfDays = 28;
        
        days = days + noOfDays;
  }
  return (days+parseInt(arr[0]));
}

const diffrence = (a,b) =>{
  v1 = dayCounter(a);
  v2 = dayCounter(b);
  return (v2-v1-1);
}
console.log(diffrence("31-7","4-8"));
