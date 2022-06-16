import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length() {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let tail = this.head;
    while (tail.next) {
      length++;
      tail = tail.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let tail: Node | null = this.head;
    let counter = 0;

    while (tail.next && counter != index) {
      counter++;
      tail = tail.next;
    }

    return tail;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let tail: Node | null = this.head;

    while (tail) {
      console.log(tail.data);
      tail = tail.next;
    }
  }
}
