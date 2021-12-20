const str = "masaischool";


const count = (str, c = 0) => {
    if( c == str.length){
         console.log(c);
          return;
    }

    count(str,c+1)
}

count(str)