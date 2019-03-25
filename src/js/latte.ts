import { kaffe } from "./Kaffe";
import { Imælk} from "./Imælk";


export class latte extends kaffe implements Imælk 
{
    

    MIMælk(): number 
    {
        return 120;
    }

    Pris()
    {
        return 40;
    }

    
}