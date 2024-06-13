// singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nisarg",
    "full name": "Nisarg Patel",
    [mySym]: "mykey1",
    age: 26,
    location: "Daman",
    email: "nisarg@goggle.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "nisargpatel3032@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "patelnisarg3032@gmail.com"

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


