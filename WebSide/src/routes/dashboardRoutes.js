const express = require('express');
const router = express.Router();
const { authorizeRoles } = require('../middleware/auth');

// Rutas protegidas por Roles
router.get('/admin', authorizeRoles('administrador'), (req, res) => {
    res.render('dashboard/admin', { user: req.session.user });
});

router.get('/manager', authorizeRoles('gerente'), (req, res) => {
    res.render('dashboard/manager', { user: req.session.user });
});

router.get('/sales', authorizeRoles('vendedor'), (req, res) => {
    res.render('dashboard/sales', { user: req.session.user });
});

module.exports = router;
