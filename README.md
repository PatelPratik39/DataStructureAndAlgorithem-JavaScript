# Data Structure eAnd Algorithm using Java and JavaScript


# BigO
```

    O(1) ->  Constant. No loops (one line of code)
    O(n) -> Linear. for loops, while loops through n items (loop)
    O(log n) -> Logarithmatic - usually searching algorithems have long n if they are sorted(binary Search) (Divide & Conquere)
    O(n log n) -> Log Linear - usually sorting algorithems (effectiove sorting algorithem)
    O(n^2) -> Quadratic - every elements in Collection needs to be compared to ever other elemenrt. 2 nestes loops (Double loop)
    O(2^n) -> Exponential - recursive alsorithems that solves a problem of size N. (Complex full search)
    O(n!) -> Factorial - adding loops for every element.

```

```
# BigO rules
 * Rule 1 = Worst Case -> O(1)+O(1)+O(n)+O(n)=O(2n+2)  -> O(n)
 * Rule 2 = Drop Constant => Time Complexity will be O(n)
 * Rule 3 = Different Term for inputs->  Time Complexity will be O(n) + O(m)
 * Rule 4 = Drop Non Dominants -> O(n^2)
```


# LinkedList methods :
```chatinput
    - LinkedList(int value) { ... }
    - void append(int value) { ... }
    - Node removeLast() { ... }
    - void prepend(int value) { ... }
    - boolean insert(int index, int value) { ... }
    - Node remove(int index) { ... }
```