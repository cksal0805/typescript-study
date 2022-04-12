class Stack<T> {
  private data: [] = [];

  contructor() {}

  push(item: <T>): void {
    this.data.push(item);
  }

  pop(): <T> {
    return this.data.pop();
  }
}