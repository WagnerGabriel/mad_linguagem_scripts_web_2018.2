import{Hero, Habilidades}from './hero-base'
//subclass - classe especialista
class Batman extends Hero implements Habilidades{

superPoder?:string
pericia?:string
poder:number

constructor(){
        super()
    }
    getFraqueza():string{
        return "Coringa"
    }
    getArqueRival():string{
        return `Coringa`
    }
    getPericia():string{
        return `A(s) pericia(s) do
        ${this.getCodenome()} é (são): ${this.pericia}`
    }

    getSuperPoder():string{
        return this.superPoder;
    }
    setSuperPoder(superPoder:string):void{
        this.superPoder = superPoder;
    }
    
    setPericia(pericia:string):void{
        this.pericia = pericia;
    }
    getPoder():number{
        return this.poder;
    }
    setPoder(poder:number):void{
        this.poder = poder;
    }
}

let homemMorcego = new Batman();
homemMorcego.setCodenome('Batman')
homemMorcego.setIdsecreta('Bruce Wayme')
homemMorcego.setSuperPoder('Camuflagem')
homemMorcego.setPericia(`ficar no claro`)


console.log(`o nome do heroi é: ${homemMorcego.getCodenome()} e sua identidade secreta é ${homemMorcego.getIdsecreta()}`)

    

    

