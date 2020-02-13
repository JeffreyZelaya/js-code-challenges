const arrForSum = (arr) => {let sum = 0; for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
    console.log(sum)
  }
  
  arrForSum([1,2,3,4])
  
  
  const arrWhileSum = (arr) => {let sum = 0; let i = 0; while ( i < arr.length) {
    sum += arr[i];  i++;
  }
    console.log(sum)
  }
  
  arrWhileSum([1,2,3,4,5])
  
  
  const arrDoWhileSum = (arr) => {let sum = 0; let i = 0; do {sum += arr[i]; i++
  } while ( i < arr.length) {
    console.log(sum)
  }
  }
  
  arrDoWhileSum([1,2,3,4,5,6])