import { cortado } from "./cortado";
import { latte } from "./Latte";
import { sortKaffe } from "./sortKaffe";
import { kaffe} from "./kaffe";

//her laver jeg min liste af type array
let liste:kaffe[] = new Array<kaffe>();

//Bruger 
liste.push(new cortado());





let c:cortado = new cortado();
let l:latte = new latte();
let s:sortKaffe = new sortKaffe(4);
let sUdenRabat:sortKaffe = new sortKaffe();


console.log(c.Styrke(), c.Pris(), c.MIMælk());
console.log(l.Styrke(), l.Pris(), l.MIMælk());
console.log(s.Styrke(), s.Pris(), s.MIMælk());
console.log(sUdenRabat.Styrke(), sUdenRabat.Pris(), sUdenRabat.MIMælk());

console.log("1")


let sort = JSON.stringify(s.Styrke)
console.log(sort)


var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console