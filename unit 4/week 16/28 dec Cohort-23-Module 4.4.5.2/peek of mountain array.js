/*
Sample Input 1 

2
3
10 20 11
5
1 3 6 5 4

Sample Output 1

1
2
--------------------------------------------------------------------
ex => 1 3 6 5 4

|
|               6   <------------ peek
|           3       5
|       1               4
|=====================================

ex =>  1,2,3,4,5,6,5,4,3,0
|
|
|                           6  <---------------- peek
|                       5       5
|                   4               4
|               3                       3
|           2                               0
|       1
|======================================================
*/

const findPeek = (arr,n) => {
    let low = 0;
    let high = n-1;
    while( low < high ){
         let mid = low + Math.floor( (high - low ) / 2 );
         if( arr[mid] > arr[mid+1] ){
             high = mid ;
         }
         else {
             low = mid + 1;
         }
    }
    return high
}
