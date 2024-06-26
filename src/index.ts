import { BinarySearchTree } from "./BinarySearchTree";

const binarySearchTree = new BinarySearchTree(50);

binarySearchTree.add(5);
binarySearchTree.add(80);
binarySearchTree.add(77);
binarySearchTree.add(10);
binarySearchTree.add(32);
binarySearchTree.add(21);
binarySearchTree.add(17);
binarySearchTree.add(35);

const value = 32;
const valueFound = binarySearchTree.containsElement(value);

console.log(`Valor ${value} ${valueFound ? "encontrado!" : "não encontrado!"}`);
console.log(`Quantidade: ${binarySearchTree.length}`);
binarySearchTree.log();
