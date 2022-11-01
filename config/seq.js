const { HostNotFoundError } = require('sequelize')
const Sequileze = require('sequelize')
const dotenv = require ('dotenv')
dotenv.config({
    path:'./config_env/config.env'
})

//definir un objeto de conexion
const sequelize = new Sequileze(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    dialect: process.env.DB_MOTOR,
    port :process.env.DB_PORT
    }
)
//objeto de conexion :
const sequileze = new Sequileze(
    'deevscamps-2465880',
    'root',
    '',
{
    host : 'localhost',
    dialect:'mysql',
    port:'3307'
}
)
module.exports = sequileze