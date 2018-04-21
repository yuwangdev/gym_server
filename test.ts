
import * as Collections from 'typescript-collections';

let dict = new Collections.Dictionary<number, string>();
dict.setValue(1, "a");
console.log(dict.size());
console.log(dict.getValue(1));

let a = "a.b.c";
let res = a.split(".");
console.log(res);

let displayDate = new Date().toLocaleDateString();
let displayTime = new Date().toLocaleTimeString();
console.log(displayDate)