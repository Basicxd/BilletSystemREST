import axios, {AxiosResponse, AxiosError} from "../../node_modules/axios/index";
import {IBillet} from "../js/ICoin";

const uri:string = "https://localhost:44325/api/[";

let divElement:HTMLDivElement = <HTMLDivElement> document.getElementById("content")

let buttonForAllCoins: HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllCoins")
buttonForAllCoins.addEventListener("click", getAllCoin)


function CreateLiElement(tekst:string, classAttribut:string, id: number) : HTMLLIElement{
    
    let newLiElement = document.createElement('li');
    let newText = document.createTextNode(tekst)
    
    newLiElement.setAttribute('class',classAttribut);
    newLiElement.setAttribute('id',id.toString());
    
    newLiElement.appendChild(newText);

    return newLiElement;
}

function getAllCoin():void {

    let showtime : HTMLSelectElement = <HTMLSelectElement> document.getElementById("gettingdone");
    let oneCoinValue : string = showtime.value;
    let newUri = uri + showtime.value;

    // Get  typen icoin array
    axios.get<IBillet[]>(uri)
    // Wrap icoin array indtil et reponse 
    .then(function (response:AxiosResponse<IBillet[]>):void{

        let olElement : HTMLOListElement = document.createElement('ol');

        let x:number = 0;
        // Den tager AxiosResponse data ind i foreach
        response.data.forEach((coin : ICoin) => {
            x++;
            if(coin == null)
              {
                  olElement.appendChild(CreateLiElement("NULL element","error",x));
              }
            else
              {
                let tekst : string =  "Id: "+coin.id+" Genstand: " + coin.genstand + "Bud: " +coin.bud + "Navn: " +coin.navn;
                olElement.appendChild(CreateLiElement(tekst,"r1",coin.id));
              }
            });
        if (divElement.firstChild)
          divElement.removeChild(divElement.firstElementChild);
        
        divElement.appendChild(olElement);
    }
    )
    .catch(function (error:AxiosError):void{
            divElement.innerHTML= error.message;        
    })
}

function oneCoin():void {

    let showOneCoin : HTMLInputElement = <HTMLInputElement> document.getElementById("getOneCoin");
    let oneCoinValue : string = showOneCoin.value;
    let newUri = uri + showOneCoin.value;

    axios.get<ICoin>(newUri)
    .then(function (response:AxiosResponse<ICoin>):void{


        let coin : ICoin = <ICoin>response.data;
        let result : string = "<ol>";

        if (response.data == null)
        {
            result += "<li> NULL element</li>"
        }

        else;
        { 
            result += "<li> <b>id</b>: "+ coin.id  + " <i>Genstand</i> :" + coin.genstand + " <i>Bud</i> :" + coin.bud + "<i> Navn</i> : " + coin.navn +"</li>"        
        }

       

        result += "</ol>";

        divElement.innerHTML = result;

    }
    )
    .catch(function (error:AxiosError):void{
            divElement.innerHTML= error.message;        
    })
}

function addCoin():void{
 
    // let idelement: HTMLInputElement = <HTMLInputElement>document.getElementById("addId");
    let genstandelement: HTMLInputElement = <HTMLInputElement>document.getElementById("addGenstand");
    let budelenemt: HTMLInputElement = <HTMLInputElement>document.getElementById("addBud");
    let navnelenemt: HTMLInputElement = <HTMLInputElement>document.getElementById("addNavn");

    
    // let myID: number = +idelement.value;
    let myGenstand:string = genstandelement.value;
    let myBud : number = +budelenemt.value;
    let myNavn : string = navnelenemt.value;


    axios.post<ICoin>(uri,{Genstand:myGenstand, Bud:myBud, Navn:myNavn})
    .then((response:AxiosResponse) => {console.log("response " +response.status + " " +response.statusText )})
    .catch((error:AxiosError) => {console.log(error);} )
}