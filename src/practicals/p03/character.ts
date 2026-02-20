export class Character {
    protected health = 100;
    protected name: string;
    damage:number

    constructor(name:string,damage:number){
        this.name = name
        this.damage = damage
    }
    getName(){
        return this.name
    }
    getHealth(){
        this.health
    }
    receiveDamage(damage: number){
        this.health = this.health - damage
    }
}
