// ==============================
// === CALLBACKS === PROMISES ===
// ==============================
// CALLBACK ie 1.
/* const delayedChangeColor = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    //   with this truthy trick are avoid null values
    //   only if a function is passed it will try to execute it
    doNext && doNext();
  }, delay);
};

delayedChangeColor("lime", 1000, () => {
  delayedChangeColor("pink", 1000, () => {
    delayedChangeColor("purple", 1000);
  });
});
*/

// CALLBACK ie 2. ==========
/* const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 2500) + 500;
  setTimeout(() => {
    if (delay > 2000) {
      failure("Connection timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

fakeRequestCallback(
  "books.com/page1",
  function (response) {
    console.log("It Worked!");
    console.log(response);
    fakeRequestCallback(
      "books.com/page2",
      function (response) {
        console.log("It Worked again!");
        console.log(response);
        // ... CALLBACK HELL!!!
      },
      function (err) {
        console.log("Error (2nd req): ", err);
      }
    );
  },
  function (err) {
    console.log("Error: ", err);
  }
);
*/

/*
PROMISE
- is an object representing the eventual completion
or failure of an Asynchronous operation
- is a returned object to which you attach callbacks, instead
of passing callbacks into a function
*/
// PROMISE ie.1, STILL A LOT OF NESTING TOO!!!
// 3 possible states: 'pending' 'resolve or fulfilled' 'reject'
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 3500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Connection timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};
/*
let request = fakeRequestPromise("books.com.page1"); // this gives me an object
console.log(request);
// Promise {<pending>}
//      [[Prototype]]: Promise
//      [[PromiseState]]: "pending"
//      [[PromiseResult]]: undefined
// one two thre seconds later ...
//      [[Prototype]]: Promise
//      [[PromiseState]]: "fulfilled"
//      [[PromiseResult]]: "Here is your fake data from
// or
//      [[Prototype]]: Promise
//      [[PromiseState]]: "rejected"
//      [[PromiseResult]]: "Connection timeout :(
//      Uncaught (in promise) Connection timeout :(

// 'then': to run code if this is resolved or rejected
request
  // case promise resolved
  .then(() => {
    console.log("resolved 1!");
    fakeRequestPromise("books.com.page2")
      .then(() => {
        console.log("resolved 2!");
        fakeRequestPromise("books.com.page3")
          .then(() => {
            console.log("resolved 3!");
          })
          .catch(() => {
            console.log("rejected 3.");
          });
      })
      .catch(() => {
        console.log("rejected 2.");
      });
  })
  //   case promise rejected
  .catch(() => {
    console.log("rejected 1.");
  });
*/

// PROMISE ie.2 THE INPROVEMENT IS HERE!!!,
// WE RETURN THE PROMISE FROM WHITIN A CALLBACK
// INSTEAD OF NESTING IT, ONE ONLY CATCH IS REQUIRED
/*
fakeRequestPromise("books.com.page1")
  .then((data) => {
    console.log("resolved (page1)!");
    console.log(data);
    return fakeRequestPromise("books.com.page2");
  })
  .then((data) => {
    console.log("resolved (page2)!");
    console.log(data);
    return fakeRequestPromise("books.com.page3");
  })
  .then((data) => {
    console.log("resolved (page3)!");
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected!");
    console.log(err);
  });
*/

//   PROMISE ie3, Rewritting the delayedChangeColor that uses callbacks

const delayedChangeColor = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
      // no reason to add 'reject' because we only want to resolve in this case
    }, delay);
  });
};

// delayedChangeColor("gray", 1000)
//   // implicit return
//   .then(() => delayedChangeColor("black", 1000))
//   .then(() => delayedChangeColor("yellow", 1000));

/*
ASYNC FUNCTIONS
- build on top of PROMISES, cleaner syntax
- They always return a promise
- If it returns a value: 		the promise will be resolved
- If it throws an exception: 	the promise will be rejected
*/
// 'async' keyword makes this function to return a promise
// async function hello() {
//   // returns a promise              Promise {<fulfilled>: undefined}
// }

// async function sing() {
//   return "LALALA LALA"; //          Promise {<fulfilled>: 'any value'}
// }
// sing().then((data) => {
//   console.log(`PROMISED resolved with: ${data}`);
// });

// // if I throw an error or something goes wrong along the way,
// // the promise is rejected
// async function someError() {
//   throw "Error created!";
//   return "LALALA LALA"; //          Promise {<fulfilled>: 'any value'}
// }

// // someError();
// // Promise {<rejected>: 'Error created!'}
// // callbackHell.js:185 Uncaught (in promise) Error created!
// someError()
//   .then((data) => {
//     console.log(`PROMISED resolved with: ${data}`);
//   })
//   .catch((err) => {
//     console.log(`PROMISED rejected: ${err}`);
//   });
/*
const login = async (user, pw) => {
  console.log("Log in...");
  if (!user || !pw) throw "Missing credentials!";
  return "Welcome!";
};
login("just_user")
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(`Err: ${msg}`);
  });
*/

// ASYNC AND AWAIT
/*
const rainbow = async () => {
  await delayedChangeColor("Cornsilk", 1000);
  console.log("let's see");
  await delayedChangeColor("BlanchedAlmond", 1000);
  console.log("hey!, it really waits till the promise is fullfilled");
  await delayedChangeColor("Sandybrown", 1000);
  await delayedChangeColor("Chocolate", 1000);
};
rainbow();
*/
// SUPER IMPORTANT!!!!
// within the ASYNC function,
// the code execution await till the promise is fullfilled
// BUT
// outside the function call, the code, if any, continue its execution
// console.log("You are going to see this before rainbow gets executed....");

// so what we can do for instance is to make other async functions await
/*
const rainbow = async () => {
  await delayedChangeColor("Cornsilk", 1000);
  await delayedChangeColor("BlanchedAlmond", 1000);
  await delayedChangeColor("Sandybrown", 1000);
  await delayedChangeColor("Chocolate", 1000);
  return "All Done!"; // this will return a promise, 'rainbow'
};
rainbow().then((msg) => console.log(`${msg}: rainbow promise was fullfilled`));
*/
// ASYNC AWAIT: CATCH ERRORS
const makeTwoRequests = async () => {
  try {
    let req1 = await fakeRequestPromise("/page1");
    console.log(req1);
    let req2 = await fakeRequestPromise("/page2");
    console.log(req2);
  } catch (e) {
    console.log("Caught it!");
    console.log("Error: ", e);
  }
};
makeTwoRequests();
