function getMin() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < arguments[0]) {
          arguments[0] = arguments[i]
        }
    }
    console.log(arguments.length)
    return arguments[0];
  }
  console.log(getMin(-1235, -6, -1, -3, 1, -7, -1234))