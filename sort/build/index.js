"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedListCollection_1 = require("./LinkedListCollection");
// const numbersCollection = new NumbersCollection([10, -9, -5, 4, 0, -12]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// "Xaayb"
// const charactersCollection = new CharactersCollection("Xaayb");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
// const linkedList  = new LinkedList()
// linkedList.add(500),
// linkedList.add(-10)
// linkedList.add(-3)
// linkedList.add(4)
// const sorter = new Sorter(linkedList)
// sorter.sort()
// linkedList.print()
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, -9, -5, 4, 0, -12]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedListCollection_1.LinkedList();
linkedList.add(500),
    linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
