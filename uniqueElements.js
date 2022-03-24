function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result    
}

function uniqueSet (arr) {
  return new Set(arr)
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  //console.log(unique(strings))
  console.log(uniqueSet(strings))