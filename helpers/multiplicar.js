const fs = require('fs');
const colors = require('colors');

const crearTabla = async (base, listar=false, hasta=10) =>{
  
    try {

    
    
        let salida = '';
        let consola = '';

        for(i=1; i<=hasta; i++){
            
            salida +=  `${base}  x  ${i}  = ${base * i}\n`;
            consola +=  `${base} ${' x '.cyan} ${i} ${' = '.cyan} ${base * i}\n`;
        }
       
        if(listar){

            console.clear();
            console.log('=========================='.red);
            console.log('TABLA DEL',  colors.red(base));
            console.log('=========================='.red);
            console.log(consola);
        }
        fs.writeFileSync(`tabla/tabla-del-${base}.txt`, salida);
        
        return `Tabla del ${base}.txt creada`;
        
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearTabla
}
