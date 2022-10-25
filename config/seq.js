const { HostNotFoundError } = require('sequelize')
const Sequileze = require('sequelize')
//objeto de conexion :
const sequileze = new Sequileze(
    'devscamps-2465880',
    'root',
    '',
{
    host : 'localhost',
    dialect:'mysql',
    port:'3307'
}
)
module.exports = sequileze