let ansArr = []
function gper(arr,current = 0){
    if(current==arr.length){
        // console.log(arr.join(' '));
        // ------------------------------------------------------------
                temp = arr.join(' ');
                ansArr.push(temp);
        // ------------------------------------------------------------
        return;
    }
    for(var i=current;i<arr.length;i++){
        swap(arr,i,current);
        gper(arr,current+1);
        swap(arr,i,current);
    }
}
function swap(arr,i,j){
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function runProgram(input) {
  a = input.split("\n");
  let arr = a[1].split(" ");
  gper(arr);
  
  ansArr.sort();
  ansArr.map( a => console.log(a) )
}