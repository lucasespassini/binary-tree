import { Node } from "./Node";

export class BinarySearchTree {
  root: Node;
  length: number;

  constructor(rootValue: number) {
    this.root = new Node(rootValue, null, null);
    this.length = 1;
  }

  add(value: number, node: Node = this.root): void {
    const newNode = new Node(value, null, null);

    if (value > node.value) {
      if (node.right) return this.add(value, node.right);
      node.right = newNode;
      this.length += 1;
    } else {
      if (node.left) return this.add(value, node.left);
      node.left = newNode;
      this.length += 1;
    }
  }

  containsElement(value: number, node: Node | null = this.root): boolean {
    if (!node) return false;
    if (value === node.value) return true;

    return this.containsElement(
      value,
      value > node.value ? node.right : node.left
    );
  }

  log(node = this.root) {
    const left = node.left?.value || "null";
    const right = node.right?.value || "null";

    console.log(left + ` <- [${node.value}] -> ` + right);

    if (node.left != null) this.log(node.left);
    if (node.right != null) this.log(node.right);
  }
}
