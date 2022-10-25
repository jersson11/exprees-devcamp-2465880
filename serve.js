const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const { response } = require('express')


//dependencias a las rutas
const bootcampRoutes = require('./routes/bootcampsRoutes')
const userRoutes = require('./routes/userRoutes')

//establecer el arcivo de configuracion 
// con variables de entorno 
dotenv.config({
    path:"./config_env/config.env"
})


//1 crear el objeto
const app = express()

app.use('/api/v1/bootcamps',bootcampRoutes)
app.use('/api/v1/users',userRoutes)

//3 ejecutar el servidor de desarrolo de express
app.listen(process.env.PORT , ()=>{
    console.log( `servidor iniciado en el puerto:${process.env.PORT}`)

})