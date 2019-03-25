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
        if (this.rabat >= 1) 
        {
            return 20 - this.rabat;
        }
        return 20
    }
    
}