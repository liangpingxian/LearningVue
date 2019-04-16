list = [{ a: 2 }, { a: 2 }, { a: 4 }, { a: 2 }, { a: 3 }, { b: 2 }];

let newList = list.filter(obj => obj != { a: 2 });
console.log(newList);
