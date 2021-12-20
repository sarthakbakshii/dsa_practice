  
  function fab(input){
      if(input == 1 || input == 0) return input;
      return fab(input-1) + fab(input-2)
  }
  console.log(fab(input))