-- 1. Crear Base de Datos
CREATE DATABASE IF NOT EXISTS trailhead_db;
USE trailhead_db;

-- 2. Crear Tabla de Usuarios (Con Roles)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('administrador', 'gerente', 'vendedor', 'cliente') DEFAULT 'cliente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Crear Tabla de Productos
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50),
    image_url VARCHAR(255),
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Crear Tabla de Ordenes (Ventas)
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT, -- Vendedor que la creó o Cliente que compró
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'completada', -- pendiente, pagada, cancelada
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 5. Detalle de Ordenes
CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    price_at_moment DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- 6. Datos de Prueba (Seed) - USERS
INSERT INTO users (name, email, password, role) VALUES 
('Admin User', 'admin@trailhead.com', 'admin123', 'administrador'),
('Gerente General', 'gerente@trailhead.com', 'gerente123', 'gerente'),
('Vendedor Tienda', 'vendedor@trailhead.com', 'vendedor123', 'vendedor'),
('Cliente Demo', 'cliente@email.com', 'cliente123', 'cliente');

-- 7. Datos de Prueba - PRODUCTOS
INSERT INTO products (name, description, price, category, image_url, stock) VALUES 
('Stumpjumper EVO', 'La bicicleta de trail definitiva.', 4500000, 'Bicicletas', '/images/products/bike_evo.jpg', 5),
('Epic World Cup', 'Carreras XC.', 8200000, 'Bicicletas', '/images/products/bike_epic.jpg', 3),
('Casco Fox Speedframe', 'Protección MIPS.', 180000, 'Indumentaria', '/images/products/helmet_fox.jpg', 15),
('Horquilla FOX 38 Factory', 'Suspensión enduro.', 1200000, 'Componentes', '/images/products/fork_fox.jpg', 8);
