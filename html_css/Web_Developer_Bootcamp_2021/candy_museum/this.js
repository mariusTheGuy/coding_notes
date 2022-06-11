const person = {
  name: "Clara",
  lastname: "Sanchez",
  fullname: function () {
    console.log(`${this.name} ${this.lastname}`);
  },
  fullname_arrow: () => {
    // Arrow function:
    // 'this' will get its value, in this case from 'Window' object,
    // where the function was created
    console.log(this);
    // undefined
    console.log(`${this.name} ${this.lastname}`);
  },
  shoutname: function () {
    //   this is like typing window.setTimeout(...)
    setTimeout(function () {
      console.log(this);
      //   so that is why this statement fails:
      //   Uncaught TypeError: this.fullname is not a function
      this.fullname();
    }, 2000);
  },
  shoutname_arrow: function () {
    setTimeout(() => {
      // Arrow function:
      // 'this' will get its value, in this case from 'person' object,
      // where the function was created
      console.log(this);
      this.fullname();
    }, 2000);
  },
};
