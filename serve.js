const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const { response } = require('express')
const connection = require('./config/db')
const lisendpoints = require ('express-list-endpoints')

//dependencias a las rutas
const bootcampRoutes = require('./routes/bootcampsRoutes')
const userRoutes = require('./routes/userRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes')

//establecer el arcivo de configuracion 
// con variables de entorno 
dotenv.config({
    path:"./config_env/config.env"
})

connection()

//1 crear el objeto
const app = express()
app.use(express.json())

app.use('/api/v1/bootcamps',bootcampRoutes)
app.use('/api/v1/users',userRoutes)
app.use('/api/v1/courses',coursesRoutes)
app.use('/api/v1/reviews',reviewsRoutes)

console.log(lisendpoints(app))
//3 ejecutar el servidor de desarrolo de express
app.listen(process.env.PORT , ()=>{
    console.log( `servidor iniciado en el puerto:${process.env.PORT }`)

})




