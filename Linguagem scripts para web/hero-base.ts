abstract class Hero {
    //atributos
        private codenome:String;
        private idsecreta:String;
    //
        constructor(){};
        
    
    //
        getCodenome():String{
            return this.codenome;
        }
    
        setCodenome(codenome:String):void{
            this.codenome = codenome;
        }
    
        getIdsecreta():String{
            return this.idsecreta;
        }
    
        setIdsecreta(idsecreta:string):void{
            this.idsecreta = idsecreta;
        }
        get():String{
            return this.codenome;
        }
    
    
    }
    interface Habilidades{
        superPoder?:string;
        pericia?:string;
        poder:number;
        rivalVez?:string;
        
        getFraqueza():string
    }
    
    export{Hero, Habilidades}    