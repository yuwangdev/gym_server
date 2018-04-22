
import * as Collections from 'typescript-collections';
let Pro = require('es6-promise').Promise;

let dict = new Collections.Dictionary<number, string>();
dict.setValue(1, "a");
console.log(dict.size());
console.log(dict.getValue(1));

let a = "a.b.c";
let res = a.split(".");
console.log(res);


new Pro(resolve => {
    setTimeout(() => {
        resolve('resolved');
    }, 2000);
});

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     var result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
// }

// asyncCall();



