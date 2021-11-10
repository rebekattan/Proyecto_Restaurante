-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-11-2021 a las 16:18:53
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdrestaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `cod_cargo` int(11) NOT NULL,
  `cargo` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`cod_cargo`, `cargo`) VALUES
(1, 'Chef'),
(2, 'Camarero'),
(3, 'Cajero'),
(4, 'Contador'),
(5, 'Auxiliar de Cocina');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comision`
--

CREATE TABLE `comision` (
  `cod_comision` int(11) NOT NULL,
  `comision` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comision`
--

INSERT INTO `comision` (`cod_comision`, `comision`) VALUES
(1, '0.1'),
(2, '0.2'),
(3, '0.3'),
(4, '0.4'),
(5, '0.5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comision_detalle`
--

CREATE TABLE `comision_detalle` (
  `cod_comision_detalle` int(11) NOT NULL,
  `cod_empleado` int(11) NOT NULL,
  `cod_comision` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `cod_empleado` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `edad` varchar(5) NOT NULL,
  `cod_genero` int(11) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion` varchar(75) NOT NULL,
  `cod_cargo` int(11) NOT NULL,
  `salario` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `cod_estado` int(11) NOT NULL,
  `estado` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`cod_estado`, `estado`) VALUES
(1, 'Completado'),
(2, 'Pendiente'),
(3, 'Disponible'),
(4, 'Ocupada'),
(5, 'Entregado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `cod_genero` int(11) NOT NULL,
  `nom_genero` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`cod_genero`, `nom_genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino'),
(3, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `cod_inventario` int(11) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `cod_productos` int(11) NOT NULL,
  `existencia_max` varchar(15) NOT NULL,
  `existencia_min` varchar(15) NOT NULL,
  `existencia_actual` varchar(15) NOT NULL,
  `cod_estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `cod_marca` int(11) NOT NULL,
  `nom_marca` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`cod_marca`, `nom_marca`) VALUES
(1, 'Mazola'),
(2, 'PAM'),
(3, 'Bonella'),
(4, 'Selectos'),
(5, 'Dorado'),
(6, 'Orisol'),
(7, 'Olitalia'),
(8, 'Sasson'),
(9, 'Wesson'),
(10, 'San Pedro'),
(11, 'San Francisco'),
(12, 'Omoa'),
(13, 'Cinco Estrellas'),
(14, 'Codipa'),
(15, 'Del Cañal'),
(16, 'Splenda'),
(17, 'La Chula'),
(18, 'Ducal'),
(19, 'Naturas'),
(20, 'Goya'),
(21, 'La Sirena'),
(22, 'La Fina'),
(23, 'Australian'),
(24, 'EconoMilk'),
(25, 'Silk'),
(26, 'Hershey'),
(27, 'Dos Pinos'),
(28, 'Sula'),
(29, 'Delactomy'),
(30, 'McCormick'),
(31, 'Badia'),
(32, 'Maggi'),
(33, 'La Canasta'),
(34, 'Continental'),
(35, 'Continental'),
(36, 'Toledo'),
(37, 'Kreef'),
(38, 'Vitta'),
(39, 'Fud');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesa`
--

CREATE TABLE `mesa` (
  `cod_mesa` int(11) NOT NULL,
  `num_mesa` varchar(5) NOT NULL,
  `cod_estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `cod_pedidos` int(11) NOT NULL,
  `cod_mesa` int(11) NOT NULL,
  `fecha_pedido` date NOT NULL,
  `cod_empleado` int(11) NOT NULL,
  `cantidad_personas` varchar(10) NOT NULL,
  `notas` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_detalle`
--

CREATE TABLE `pedido_detalle` (
  `cod_pedido_detalle` int(11) NOT NULL,
  `cod_pedidos` int(11) NOT NULL,
  `cod_platillo` int(11) NOT NULL,
  `cantidad` varchar(15) NOT NULL,
  `cod_estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platillo`
--

CREATE TABLE `platillo` (
  `cod_platillo` int(11) NOT NULL,
  `cod_receta_catalogo` int(11) NOT NULL,
  `raciones` varchar(10) NOT NULL,
  `precio` varchar(10) NOT NULL,
  `cod_tipo_platillo` int(11) NOT NULL,
  `existencia` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `cod_productos` int(11) NOT NULL,
  `nom_producto` varchar(45) NOT NULL,
  `cod_tipo_producto` int(11) NOT NULL,
  `cod_marca` int(11) NOT NULL,
  `precio_unitario` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `receta`
--

CREATE TABLE `receta` (
  `cod_receta` int(11) NOT NULL,
  `cod_receta_catalogo` int(11) NOT NULL,
  `cod_productos` int(11) NOT NULL,
  `cantidad` varchar(10) NOT NULL,
  `cod_unidad` int(11) NOT NULL,
  `cod_empleado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `receta_catalogo`
--

CREATE TABLE `receta_catalogo` (
  `cod_receta_catalogo` int(11) NOT NULL,
  `nom_receta` varchar(75) NOT NULL,
  `desc_receta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `receta_catalogo`
--

INSERT INTO `receta_catalogo` (`cod_receta_catalogo`, `nom_receta`, `desc_receta`) VALUES
(1, 'Raviolis Rellenos', 'Preparar la pasta de ravioli es más sencillo de lo que piensas, siguiendo nuestra receta y con un po'),
(2, 'Carne con tomate a la andaluza', 'Con una base de cerdo o ternera, y con mucho tomate, esta elaboración puede ser consumida a base de '),
(3, 'Pasta con Camarones a la Graten', 'Es importante que la pasta contenga líquido, una salsa no espesa para poder tener una buena cocción '),
(4, 'Ceviche de Pescado y Berro', 'Si se desea se puede preparar el ceviche de camarón o calamar en lugar de pescado.'),
(5, 'Estofado de Chorizo', 'La calidad del chorizo es pieza clave del éxito de esta receta, debes conseguir además chorizos con '),
(6, 'Pizza al Pesto', 'No sobre procesar la salsa pesto ya que se puede formar una masa demasiado ligera para la pizza que,'),
(7, 'Pollo al Olivo', 'Para sellar las carnes y el pollo es necesario someter a fuego alto para que se forme una capa dorad'),
(8, 'Ensalada de Pasta', 'Preparar la ensalada después, agregar un chorrito de aceite de oliva a la pasta para evitar que se p'),
(9, 'Ensalada a la Putanesca', 'Si no se tiene un mortero, colocar todo dentro de una bolsa plástica en una tabla y presionar poco a'),
(10, 'Crocantes de Pollo y Salsa de Pimiento', 'Si la licuadora no procesa cantidades pequeñas, se puede picar con cuchillo lo más pequeño que se pu'),
(11, 'Ensalada Mexicana', 'Se puede escurrir y enjuagar los frijoles, luego volver a escurrir, siempre recordar no hacerlo más '),
(12, 'Sopa de Patas Salvadoreña', 'La tripa no se agrega desde un inicio ya que por lo pesado de ella se va al fondo de la olla y se pe'),
(13, 'Cerdo con Salsa de Chocolate Picante', 'Tener cuidado con el espesado de la salsa ya que si se espesa demasiado será difícil de manejarla co'),
(14, 'Tarta Canadiense de Manzana', 'Para cubrir la tarta se puede mezclar bien en una cacerola a fuego medio, 1/2 taza de azúcar morena '),
(15, 'Lasaña de Guisqüil', 'Te ayudamos a comer mejor, con más variedad y sabor, con recetas que son buenas para ti, tu familia ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_platillo`
--

CREATE TABLE `tipo_platillo` (
  `cod_tipo_platillo` int(11) NOT NULL,
  `nom_tipo_platillo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_platillo`
--

INSERT INTO `tipo_platillo` (`cod_tipo_platillo`, `nom_tipo_platillo`) VALUES
(1, 'Sopa'),
(2, 'Postre'),
(3, 'Ensalada'),
(4, 'Entrada'),
(5, 'Principal'),
(6, 'Bebidas'),
(7, 'Típico'),
(8, 'Vegetariano'),
(9, 'Comida Mexicana'),
(10, 'Comida China'),
(11, 'Comida Italiana'),
(12, 'Comida Italiana'),
(13, 'Comida Italiana'),
(14, 'Comida Americana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_producto`
--

CREATE TABLE `tipo_producto` (
  `cod_tipo_producto` int(11) NOT NULL,
  `nom_tipo_producto` varchar(45) NOT NULL,
  `desc_tipo_producto` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_producto`
--

INSERT INTO `tipo_producto` (`cod_tipo_producto`, `nom_tipo_producto`, `desc_tipo_producto`) VALUES
(1, 'Aceites y Grasas', 'El grupo de aceites y grasas incluye alimento'),
(2, 'Cereales', 'Los cereales contienen almidón, lípidos, celu'),
(3, 'Granos Básicos', 'aquellos alimentos imprescindibles en la diet'),
(4, 'Harinas', 'olvo fino que se obtiene del cereal molido y '),
(5, 'Condimentos, Consomés y Caldos', 'ngrediente o mezcla añadida a la comida para '),
(6, 'Lácteos', ' todos aquellos productos obtenidos a partir '),
(7, 'Embutidos', 'producto elaborado con carne de animales de a'),
(8, 'Carnes', 'La carne en definición amplia, es el tejido a'),
(9, 'Mariscos y Pescados', 'El marisco hace referencia a todos los animal'),
(10, 'Aves', 'Las aves son animales vertebrados, de sangre '),
(11, 'Frutas', 'Las frutas pertenecen al grupo 5 de la rueda '),
(12, 'Verduras', 'Las verduras son hortalizas cuyo color predom'),
(13, 'Salsas, Aderezos y Vinagres', 'El vinagre contiene una concentración que va ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad`
--

CREATE TABLE `unidad` (
  `cod_unidad` int(11) NOT NULL,
  `nom_unidad` varchar(45) NOT NULL,
  `abrev_unidad` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `unidad`
--

INSERT INTO `unidad` (`cod_unidad`, `nom_unidad`, `abrev_unidad`) VALUES
(1, 'Onza', 'Oz'),
(2, 'Taza', 'Tz.'),
(3, 'Cucharada', 'Cda.'),
(4, 'Libra', 'Lb.'),
(5, 'Gramo', 'Gr.'),
(6, 'Mililitro', 'Ml'),
(7, 'Centimetros Cúbicos', 'c.c.'),
(8, 'Kilogramo', 'Kg.'),
(9, 'Cucharadita', 'cdita.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`cod_cargo`);

--
-- Indices de la tabla `comision`
--
ALTER TABLE `comision`
  ADD PRIMARY KEY (`cod_comision`);

--
-- Indices de la tabla `comision_detalle`
--
ALTER TABLE `comision_detalle`
  ADD PRIMARY KEY (`cod_comision_detalle`),
  ADD KEY `fk_comision_comision_idx` (`cod_comision`),
  ADD KEY `fk_comision_empleado_idx` (`cod_empleado`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`cod_empleado`),
  ADD KEY `fk_empleado_genero_idx` (`cod_genero`),
  ADD KEY `fk_empleado_cargo_idx` (`cod_cargo`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`cod_estado`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`cod_genero`);

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`cod_inventario`),
  ADD KEY `fk_inventario_productos_idx` (`cod_productos`),
  ADD KEY `fk_inventario_estado_idx` (`cod_estado`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`cod_marca`);

--
-- Indices de la tabla `mesa`
--
ALTER TABLE `mesa`
  ADD PRIMARY KEY (`cod_mesa`),
  ADD KEY `fk_mesa_estado_idx` (`cod_estado`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`cod_pedidos`),
  ADD KEY `fk_pedido_emleado_idx` (`cod_empleado`),
  ADD KEY `fk_pedido_mesa_idx` (`cod_mesa`);

--
-- Indices de la tabla `pedido_detalle`
--
ALTER TABLE `pedido_detalle`
  ADD PRIMARY KEY (`cod_pedido_detalle`),
  ADD KEY `fk_pedidos_pedido_idx` (`cod_pedidos`),
  ADD KEY `fk_pedido_platillo_idx` (`cod_platillo`),
  ADD KEY `fk_pedido_estado_idx` (`cod_estado`);

--
-- Indices de la tabla `platillo`
--
ALTER TABLE `platillo`
  ADD PRIMARY KEY (`cod_platillo`),
  ADD KEY `fk_platillo_tippo_idx` (`cod_tipo_platillo`),
  ADD KEY `fk_platillo_receta_idx` (`cod_receta_catalogo`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`cod_productos`),
  ADD KEY `fk_producto_tipo_idx` (`cod_tipo_producto`),
  ADD KEY `fk_producto_marca_idx` (`cod_marca`);

--
-- Indices de la tabla `receta`
--
ALTER TABLE `receta`
  ADD PRIMARY KEY (`cod_receta`),
  ADD KEY `fk_receta_recetaCatalogo_idx` (`cod_receta_catalogo`),
  ADD KEY `fk_receta_producto_idx` (`cod_productos`),
  ADD KEY `fk_receta_unidad_idx` (`cod_unidad`),
  ADD KEY `fk_receta_empleado_idx` (`cod_empleado`);

--
-- Indices de la tabla `receta_catalogo`
--
ALTER TABLE `receta_catalogo`
  ADD PRIMARY KEY (`cod_receta_catalogo`);

--
-- Indices de la tabla `tipo_platillo`
--
ALTER TABLE `tipo_platillo`
  ADD PRIMARY KEY (`cod_tipo_platillo`);

--
-- Indices de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  ADD PRIMARY KEY (`cod_tipo_producto`);

--
-- Indices de la tabla `unidad`
--
ALTER TABLE `unidad`
  ADD PRIMARY KEY (`cod_unidad`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cargo`
--
ALTER TABLE `cargo`
  MODIFY `cod_cargo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `comision`
--
ALTER TABLE `comision`
  MODIFY `cod_comision` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `comision_detalle`
--
ALTER TABLE `comision_detalle`
  MODIFY `cod_comision_detalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `cod_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `cod_estado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `cod_genero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `inventario`
--
ALTER TABLE `inventario`
  MODIFY `cod_inventario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `cod_marca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `mesa`
--
ALTER TABLE `mesa`
  MODIFY `cod_mesa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `cod_pedidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedido_detalle`
--
ALTER TABLE `pedido_detalle`
  MODIFY `cod_pedido_detalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `platillo`
--
ALTER TABLE `platillo`
  MODIFY `cod_platillo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `cod_productos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `receta`
--
ALTER TABLE `receta`
  MODIFY `cod_receta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `receta_catalogo`
--
ALTER TABLE `receta_catalogo`
  MODIFY `cod_receta_catalogo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `tipo_platillo`
--
ALTER TABLE `tipo_platillo`
  MODIFY `cod_tipo_platillo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  MODIFY `cod_tipo_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `unidad`
--
ALTER TABLE `unidad`
  MODIFY `cod_unidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comision_detalle`
--
ALTER TABLE `comision_detalle`
  ADD CONSTRAINT `fk_comision_comision` FOREIGN KEY (`cod_comision`) REFERENCES `comision` (`cod_comision`),
  ADD CONSTRAINT `fk_comision_empleado` FOREIGN KEY (`cod_empleado`) REFERENCES `empleado` (`cod_empleado`);

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `fk_empleado_cargo` FOREIGN KEY (`cod_cargo`) REFERENCES `cargo` (`cod_cargo`),
  ADD CONSTRAINT `fk_empleado_genero` FOREIGN KEY (`cod_genero`) REFERENCES `genero` (`cod_genero`);

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `fk_inventario_estado` FOREIGN KEY (`cod_estado`) REFERENCES `estado` (`cod_estado`),
  ADD CONSTRAINT `fk_inventario_productos` FOREIGN KEY (`cod_productos`) REFERENCES `productos` (`cod_productos`);

--
-- Filtros para la tabla `mesa`
--
ALTER TABLE `mesa`
  ADD CONSTRAINT `fk_mesa_estado` FOREIGN KEY (`cod_estado`) REFERENCES `estado` (`cod_estado`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `fk_pedido_emleado` FOREIGN KEY (`cod_empleado`) REFERENCES `empleado` (`cod_empleado`),
  ADD CONSTRAINT `fk_pedido_mesa` FOREIGN KEY (`cod_mesa`) REFERENCES `mesa` (`cod_mesa`);

--
-- Filtros para la tabla `pedido_detalle`
--
ALTER TABLE `pedido_detalle`
  ADD CONSTRAINT `fk_pedido_estado` FOREIGN KEY (`cod_estado`) REFERENCES `estado` (`cod_estado`),
  ADD CONSTRAINT `fk_pedido_platillo` FOREIGN KEY (`cod_platillo`) REFERENCES `platillo` (`cod_platillo`),
  ADD CONSTRAINT `fk_pedidos_pedido` FOREIGN KEY (`cod_pedidos`) REFERENCES `pedidos` (`cod_pedidos`);

--
-- Filtros para la tabla `platillo`
--
ALTER TABLE `platillo`
  ADD CONSTRAINT `fk_platillo_receta` FOREIGN KEY (`cod_receta_catalogo`) REFERENCES `receta_catalogo` (`cod_receta_catalogo`),
  ADD CONSTRAINT `fk_platillo_tipo` FOREIGN KEY (`cod_tipo_platillo`) REFERENCES `tipo_platillo` (`cod_tipo_platillo`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_producto_marca` FOREIGN KEY (`cod_marca`) REFERENCES `marca` (`cod_marca`),
  ADD CONSTRAINT `fk_producto_tipo` FOREIGN KEY (`cod_tipo_producto`) REFERENCES `tipo_producto` (`cod_tipo_producto`);

--
-- Filtros para la tabla `receta`
--
ALTER TABLE `receta`
  ADD CONSTRAINT `fk_receta_empleado` FOREIGN KEY (`cod_empleado`) REFERENCES `empleado` (`cod_empleado`),
  ADD CONSTRAINT `fk_receta_producto` FOREIGN KEY (`cod_productos`) REFERENCES `productos` (`cod_productos`),
  ADD CONSTRAINT `fk_receta_recetaCatalogo` FOREIGN KEY (`cod_receta_catalogo`) REFERENCES `receta_catalogo` (`cod_receta_catalogo`),
  ADD CONSTRAINT `fk_receta_unidad` FOREIGN KEY (`cod_unidad`) REFERENCES `unidad` (`cod_unidad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
