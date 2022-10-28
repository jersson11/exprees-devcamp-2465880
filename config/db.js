const sequileze = require('./seq')


//crear funcion asyncrona 
const connectDB =async () =>{
try{
    await sequileze.authenticate()
    console.log('conexion estbablecida exitosamente')
    //seleccionar los users
    
} catch(error){
    console.error(error)
}
}

module.exports = connectDB