class ninja {
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

const ninja1 = new ninja("Hyabusa");
//console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
