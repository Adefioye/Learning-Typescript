"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListCollection_1 = require("./LinkedListCollection");
const Sorter_1 = require("./Sorter");
// const numbersCollection = new NumbersCollection([10, -9, -5, 4, 0, -12]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// "Xaayb"
// const charactersCollection = new CharactersCollection("Xaayb");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
const linkedList = new LinkedListCollection_1.LinkedList();
linkedList.add(500),
    linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
