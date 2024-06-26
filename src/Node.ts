export class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number, left: Node | null, right: Node | null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
