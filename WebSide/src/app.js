const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const { sequelize } = require('./models'); // Importar modelos y conexión

// Configuración
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: true })); // Parsear body de formularios
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'))); // Archivos estáticos
app.use(session({
    secret: 'trailhead_secret_key', // En prod usar variable de entorno
    resave: false,
    saveUninitialized: false
}));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Rutas
const mainRoutes = require('./routes/mainRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/', mainRoutes);
app.use('/', authRoutes);
app.use('/dashboard', dashboardRoutes);

// Sincronización DB y Arranque
sequelize.sync({ force: false }) // force: false para no borrar datos
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar la base de datos:', err);
    });
