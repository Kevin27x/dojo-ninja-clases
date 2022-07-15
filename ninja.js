//Primera parte
class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    };

    sayName(){
        console.log(`Mi nombre es: ${this.nombre}`);
    };
    showStats(){
        console.log(`
            Nombre: ${this.nombre},
            Fuerza: ${this.fuerza},
            Velocidad: ${this.velocidad},
            Salud: ${this.salud}
        `);
    };
    drinkSake(){
        this.salud += 10;
    };
};

const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
ninja1.showStats();

console.log("----------------------------");
//Segunda parte
class Sensei extends Ninja {
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;   
    };
    speakWisdom() {
        this.drinkSake();
        console.log("Aprender programación debes");
    };
};

const sensei1 = new Sensei("Sensei1");

sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();
