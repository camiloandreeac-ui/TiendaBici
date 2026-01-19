const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING
    },
    image_url: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'products',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

module.exports = Product;
