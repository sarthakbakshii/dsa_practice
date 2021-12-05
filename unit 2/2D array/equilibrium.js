const equilibriam = arr => {
     n =arr.length;
     for(i=0;i<n;i++){
          lsum = 0;
          for(j=0;j<i;j++) lsum += arr[j];

          rSum = 0;
          for(j = i+1 ; j<n ;j++) rSum += arr[j];

          console.log(lsum , rSum)
          if(lsum == rSum) return i;
      
     }
     return -1

}
// console.log( equilibriam([3,3,5,5,1]) )