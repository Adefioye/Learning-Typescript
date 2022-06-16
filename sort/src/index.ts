import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListCollection";
import { Sorter } from "./Sorter";

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

const numbersCollection = new NumbersCollection([10, -9, -5, 4, 0, -12]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList  = new LinkedList()
linkedList.add(500),
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

linkedList.sort()
linkedList.print()

