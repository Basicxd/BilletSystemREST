import { cortado } from "./cortado";
import { latte } from "./Latte";
import { sortKaffe } from "./sortKaffe";


let c:cortado = new cortado();
let l:latte = new latte();
let s:sortKaffe = new sortKaffe(4);
let sUdenRabat:sortKaffe = new sortKaffe();


console.log(c.Styrke(), c.Pris(), c.MIMælk());
console.log(l.Styrke(), l.Pris(), l.MIMælk());
console.log(s.Styrke(), s.Pris(), s.MIMælk());
console.log(sUdenRabat.Styrke(), sUdenRabat.Pris(), sUdenRabat.MIMælk());


