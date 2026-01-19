const { Sequelize } = require('sequelize');

// Configuración de la conexión a MariaDB
// Ajusta 'root' y '' si tienes contraseña en tu entorno local.
const sequelize = new Sequelize('trailhead_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // MariaDB usa el driver de MySQL
    logging: false,    // Desactivar logs SQL en consola para limpieza
});

module.exports = sequelize;
