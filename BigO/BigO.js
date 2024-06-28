const name = ["mowglee"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "mowglee") {
      console.log("Found Name");
    } else {
        console.log("Not Found");
    }
  }
}
findNemo(name);
