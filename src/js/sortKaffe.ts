import { kaffe } from "./Kaffe";

export class sortKaffe extends kaffe implements Imælk
{
    constructor(rabat?:number) 
    {
        super(rabat)
    }

    MIMælk(): number 
    {
        return null;
    }

    Pris(): number 
    {
        return 20 - this.rabat;
    }
    
}