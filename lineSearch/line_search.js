const array = [1,4,5,8,5,1,2,7,5,2,11]

const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === item) {
      return i
    }
  }
    return null
}


console.log(linearSearch(array,1))
console.log(linearSearch(array,4))
console.log(linearSearch(array,5))

