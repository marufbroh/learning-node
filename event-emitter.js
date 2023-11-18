const EventEmitter = require("events");
const myEmitter = new EventEmitter();


myEmitter.on("birthday", () => {
    console.log(`happy birthday to you`);
})

myEmitter.on("birthday", () => {
    console.log(`I will send a gift`);
})

myEmitter.emit("birthday")

