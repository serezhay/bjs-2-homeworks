function compareArrays(arr1, arr2) {
    const result = arr1.every( (item, index) => item === arr2[index] && arr1.length === arr2.length)
    return result
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(itemGender => itemGender.gender === gender).map(itemAge => itemAge.age).reduce((acc, item, index, arr) => {
        acc+=item ;
    if(index === arr.length - 1) {
        return acc / arr.length;
    } 
    return acc;
}, 0)
return result
}