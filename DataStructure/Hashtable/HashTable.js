class HashTable {
  constructor(size = 50) {
    this.table = new Array(size);
    this.size = size;
  }

  // Now create a function that convert keys into a hash code
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  // Insert key-value pair into the hash table
  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    // lets check if the key is presnet or not then update it
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] === value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  // lets retrieve the value from hash table by key
  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (const [storedKey, storedValue] of this.table[index]) {
      if (storedKey === key) {
        return storedValue;
      }
    }
    return undefined;
  }
  // Remove key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return false;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }
  // Display the hash table (for debugging purposes)
  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(([key, value]) => `[${key}: ${value}]`);
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

// Example usage
const ht = new HashTable();
ht.set("name", "John");
ht.set("age", 30);
ht.set("occupation", "Developer");
console.log(ht.get("name")); // Output: John
console.log(ht.get("age")); // Output: 30
ht.remove("name");
console.log(ht.get("name")); // Output: undefined
ht.display();
