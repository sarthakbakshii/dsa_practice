/*
max profit in Knapsack of weight k

wt[], val[], n , k 

choice diagram :
                      Item 1
                      wt[n]
                       /\
                      /  \ 
                     /    \
                    /      \
            wt[n] <= k     wt[n] > k
               /\               \
              /  \               \
             /    \               \
            /      \               \
         take     or not           do not take

base condition :   smallest valid input =>
                   k = 0  ||  n = 0
                   profit = 0
*/

const Knapsack = (wt, val , n, k) =>{
    if( n == 0 || k == 0){
        return 0
    }
    if( wt[n-1] <= k ){
        return Math.max( val[n-1] + Knapsack(wt, val, n-1, k- wt[n-1]),
                          Knapsack(wt, val, n-1, k)  )
    }
    else if( wt[n-1] > k ) {
        return  Knapsack(wt, val, n-1, k)
    }
}
