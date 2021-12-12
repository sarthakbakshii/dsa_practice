/*     GIVEN =>    "abc"
            
                  ""                        current empty.
         a        |        ""               take "a" or not.
    ab   |    a   |    b   |   ""           take "b" or not.
abc | ab | ac | a | bc | b | c | ""         take "c" or not.
*/

let ansArr = [];

const subSq = (str, c = 0 , ans = "") => {
    if( c == str.length ) {
        // console.log(ans);
        ansArr.push(ans);
        return;
    }
    subSq( str, c+1 , ans + str[c] )
    subSq( str, c+1 , ans )
}
subSq("abc") 

ansArr.sort();
ansArr.map( a => console.log(a) )

/*

a
ab
abc
ac
b
bc
c
*/