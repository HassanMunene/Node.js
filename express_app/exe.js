const arr1 = [1,2,3,4,5];

const arr2 = arr1.map((element) => {
    element = element + 1;
    return element;
});

console.log(arr2);