"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
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
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        let tail = this.head;
        let counter = 0;
        while (tail.next && counter != index) {
            counter++;
            tail = tail.next;
        }
        return tail;
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    print() {
        if (!this.head) {
            return;
        }
        let tail = this.head;
        while (tail) {
            console.log(tail.data);
            tail = tail.next;
        }
    }
}
exports.LinkedList = LinkedList;
