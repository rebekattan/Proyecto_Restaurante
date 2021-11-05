-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bd_restaurante
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `cod_cargo` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(60) NOT NULL,
  PRIMARY KEY (`cod_cargo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comision`
--

DROP TABLE IF EXISTS `comision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comision` (
  `cod_comision` int NOT NULL AUTO_INCREMENT,
  `comision` varchar(10) NOT NULL,
  PRIMARY KEY (`cod_comision`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comision`
--

LOCK TABLES `comision` WRITE;
/*!40000 ALTER TABLE `comision` DISABLE KEYS */;
/*!40000 ALTER TABLE `comision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comision_detalle`
--

DROP TABLE IF EXISTS `comision_detalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comision_detalle` (
  `cod_comision_detalle` int NOT NULL AUTO_INCREMENT,
  `cod_empleado` int NOT NULL,
  `cod_comision` int NOT NULL,
  PRIMARY KEY (`cod_comision_detalle`),
  KEY `fk_comision_comision_idx` (`cod_comision`),
  KEY `fk_comision_empleado_idx` (`cod_empleado`),
  CONSTRAINT `fk_comision_comision` FOREIGN KEY (`cod_comision`) REFERENCES `comision` (`cod_comision`),
  CONSTRAINT `fk_comision_empleado` FOREIGN KEY (`cod_empleado`) REFERENCES `empleado` (`cod_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comision_detalle`
--

LOCK TABLES `comision_detalle` WRITE;
/*!40000 ALTER TABLE `comision_detalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `comision_detalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `cod_empleado` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `edad` varchar(5) NOT NULL,
  `cod_genero` int NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion` varchar(75) NOT NULL,
  `cod_cargo` int NOT NULL,
  `salario` varchar(10) NOT NULL,
  PRIMARY KEY (`cod_empleado`),
  KEY `fk_empleado_genero_idx` (`cod_genero`),
  KEY `fk_empleado_cargo_idx` (`cod_cargo`),
  CONSTRAINT `fk_empleado_cargo` FOREIGN KEY (`cod_cargo`) REFERENCES `cargo` (`cod_cargo`),
  CONSTRAINT `fk_empleado_genero` FOREIGN KEY (`cod_genero`) REFERENCES `genero` (`cod_genero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado` (
  `cod_estado` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cod_estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero` (
  `cod_genero` int NOT NULL AUTO_INCREMENT,
  `nom_genero` varchar(15) NOT NULL,
  PRIMARY KEY (`cod_genero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventario`
--

DROP TABLE IF EXISTS `inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventario` (
  `cod_inventario` int NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` date NOT NULL,
  `cod_productos` int NOT NULL,
  `existencia_max` varchar(15) NOT NULL,
  `existencia_min` varchar(15) NOT NULL,
  `existencia_actual` varchar(15) NOT NULL,
  `cod_estado` int NOT NULL,
  PRIMARY KEY (`cod_inventario`),
  KEY `fk_inventario_productos_idx` (`cod_productos`),
  KEY `fk_inventario_estado_idx` (`cod_estado`),
  CONSTRAINT `fk_inventario_estado` FOREIGN KEY (`cod_estado`) REFERENCES `estado` (`cod_estado`),
  CONSTRAINT `fk_inventario_productos` FOREIGN KEY (`cod_productos`) REFERENCES `productos` (`cod_productos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `cod_marca` int NOT NULL AUTO_INCREMENT,
  `nom_marca` varchar(45) NOT NULL,
  PRIMARY KEY (`cod_marca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mesa`
--

DROP TABLE IF EXISTS `mesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mesa` (
  `cod_mesa` int NOT NULL AUTO_INCREMENT,
  `num_mesa` varchar(5) NOT NULL,
  `cod_estado` int NOT NULL,
  PRIMARY KEY (`cod_mesa`),
  KEY `fk_mesa_estado_idx` (`cod_estado`),
  CONSTRAINT `fk_mesa_estado` FOREIGN KEY (`cod_estado`) REFERENCES `estado` (`cod_estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mesa`
--

LOCK TABLES `mesa` WRITE;
/*!40000 ALTER TABLE `mesa` DISABLE KEYS */;
/*!40000 ALTER TABLE `mesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_detalle`
--

DROP TABLE IF EXISTS `pedido_detalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_detalle` (
  `cod_pedido_detalle` int NOT NULL AUTO_INCREMENT,
  `cod_pedidos` int NOT NULL,
  `cod_platillo` int NOT NULL,
  `cantidad` varchar(15) NOT NULL,
  `cod_estado` int NOT NULL,
  PRIMARY KEY (`cod_pedido_detalle`),
  KEY `fk_pedidos_pedido_idx` (`cod_pedidos`),
  KEY `fk_pedido_platillo_idx` (`cod_platillo`),
  KEY `fk_pedido_estado_idx` (`cod_estado`),
  CONSTRAINT `fk_pedido_estado` FOREIGN KEY (`cod_estado`) REFERENCES `estado` (`cod_estado`),
  CONSTRAINT `fk_pedido_platillo` FOREIGN KEY (`cod_platillo`) REFERENCES `platillo` (`cod_platillo`),
  CONSTRAINT `fk_pedidos_pedido` FOREIGN KEY (`cod_pedidos`) REFERENCES `pedidos` (`cod_pedidos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_detalle`
--

LOCK TABLES `pedido_detalle` WRITE;
/*!40000 ALTER TABLE `pedido_detalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido_detalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `cod_pedidos` int NOT NULL AUTO_INCREMENT,
  `cod_mesa` int NOT NULL,
  `fecha_pedido` date NOT NULL,
  `cod_empleado` int NOT NULL,
  `cantidad_personas` varchar(10) NOT NULL,
  `notas` varchar(75) NOT NULL,
  PRIMARY KEY (`cod_pedidos`),
  KEY `fk_pedido_emleado_idx` (`cod_empleado`),
  KEY `fk_pedido_mesa_idx` (`cod_mesa`),
  CONSTRAINT `fk_pedido_emleado` FOREIGN KEY (`cod_empleado`) REFERENCES `empleado` (`cod_empleado`),
  CONSTRAINT `fk_pedido_mesa` FOREIGN KEY (`cod_mesa`) REFERENCES `mesa` (`cod_mesa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platillo`
--

DROP TABLE IF EXISTS `platillo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `platillo` (
  `cod_platillo` int NOT NULL AUTO_INCREMENT,
  `cod_receta_catalogo` int NOT NULL,
  `raciones` varchar(10) NOT NULL,
  `precio` varchar(10) NOT NULL,
  `cod_tipo_platillo` int NOT NULL,
  `existencia` varchar(10) NOT NULL,
  PRIMARY KEY (`cod_platillo`),
  KEY `fk_platillo_tippo_idx` (`cod_tipo_platillo`),
  KEY `fk_platillo_receta_idx` (`cod_receta_catalogo`),
  CONSTRAINT `fk_platillo_receta` FOREIGN KEY (`cod_receta_catalogo`) REFERENCES `receta_catalogo` (`cod_receta_catalogo`),
  CONSTRAINT `fk_platillo_tipo` FOREIGN KEY (`cod_tipo_platillo`) REFERENCES `tipo_platillo` (`cod_tipo_platillo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platillo`
--

LOCK TABLES `platillo` WRITE;
/*!40000 ALTER TABLE `platillo` DISABLE KEYS */;
/*!40000 ALTER TABLE `platillo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `cod_productos` int NOT NULL AUTO_INCREMENT,
  `nom_producto` varchar(45) NOT NULL,
  `cod_tipo_producto` int NOT NULL,
  `cod_marca` int NOT NULL,
  `precio_unitario` varchar(10) NOT NULL,
  PRIMARY KEY (`cod_productos`),
  KEY `fk_producto_tipo_idx` (`cod_tipo_producto`),
  KEY `fk_producto_marca_idx` (`cod_marca`),
  CONSTRAINT `fk_producto_marca` FOREIGN KEY (`cod_marca`) REFERENCES `marca` (`cod_marca`),
  CONSTRAINT `fk_producto_tipo` FOREIGN KEY (`cod_tipo_producto`) REFERENCES `tipo_producto` (`cod_tipo_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta`
--

DROP TABLE IF EXISTS `receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta` (
  `cod_receta` int NOT NULL AUTO_INCREMENT,
  `cod_receta_catalogo` int NOT NULL,
  `cod_productos` int NOT NULL,
  `cantidad` varchar(10) NOT NULL,
  `cod_unidad` int NOT NULL,
  `cod_empleado` int NOT NULL,
  PRIMARY KEY (`cod_receta`),
  KEY `fk_receta_recetaCatalogo_idx` (`cod_receta_catalogo`),
  KEY `fk_receta_producto_idx` (`cod_productos`),
  KEY `fk_receta_unidad_idx` (`cod_unidad`),
  KEY `fk_receta_empleado_idx` (`cod_empleado`),
  CONSTRAINT `fk_receta_empleado` FOREIGN KEY (`cod_empleado`) REFERENCES `empleado` (`cod_empleado`),
  CONSTRAINT `fk_receta_producto` FOREIGN KEY (`cod_productos`) REFERENCES `productos` (`cod_productos`),
  CONSTRAINT `fk_receta_recetaCatalogo` FOREIGN KEY (`cod_receta_catalogo`) REFERENCES `receta_catalogo` (`cod_receta_catalogo`),
  CONSTRAINT `fk_receta_unidad` FOREIGN KEY (`cod_unidad`) REFERENCES `unidad` (`cod_unidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta`
--

LOCK TABLES `receta` WRITE;
/*!40000 ALTER TABLE `receta` DISABLE KEYS */;
/*!40000 ALTER TABLE `receta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta_catalogo`
--

DROP TABLE IF EXISTS `receta_catalogo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta_catalogo` (
  `cod_receta_catalogo` int NOT NULL AUTO_INCREMENT,
  `nom_receta` varchar(75) NOT NULL,
  `desc_receta` varchar(100) NOT NULL,
  PRIMARY KEY (`cod_receta_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta_catalogo`
--

LOCK TABLES `receta_catalogo` WRITE;
/*!40000 ALTER TABLE `receta_catalogo` DISABLE KEYS */;
INSERT INTO `receta_catalogo` VALUES (1,'tacos','tacos de carne de res');
/*!40000 ALTER TABLE `receta_catalogo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_platillo`
--

DROP TABLE IF EXISTS `tipo_platillo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_platillo` (
  `cod_tipo_platillo` int NOT NULL AUTO_INCREMENT,
  `nom_tipo_platillo` varchar(45) NOT NULL,
  PRIMARY KEY (`cod_tipo_platillo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_platillo`
--

LOCK TABLES `tipo_platillo` WRITE;
/*!40000 ALTER TABLE `tipo_platillo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_platillo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_producto`
--

DROP TABLE IF EXISTS `tipo_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_producto` (
  `cod_tipo_producto` int NOT NULL AUTO_INCREMENT,
  `nom_tipo_producto` varchar(45) NOT NULL,
  `desc_tipo_producto` varchar(45) NOT NULL,
  PRIMARY KEY (`cod_tipo_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_producto`
--

LOCK TABLES `tipo_producto` WRITE;
/*!40000 ALTER TABLE `tipo_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unidad`
--

DROP TABLE IF EXISTS `unidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unidad` (
  `cod_unidad` int NOT NULL AUTO_INCREMENT,
  `nom_unidad` varchar(45) NOT NULL,
  `abrev_unidad` varchar(45) NOT NULL,
  PRIMARY KEY (`cod_unidad`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unidad`
--

LOCK TABLES `unidad` WRITE;
/*!40000 ALTER TABLE `unidad` DISABLE KEYS */;
INSERT INTO `unidad` VALUES (1,'libra','lb'),(2,'kilogramo','kg');
/*!40000 ALTER TABLE `unidad` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-04 18:29:01
