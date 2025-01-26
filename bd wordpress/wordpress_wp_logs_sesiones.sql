-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: wordpress
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.24.04.1

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
-- Table structure for table `wp_logs_sesiones`
--

DROP TABLE IF EXISTS `wp_logs_sesiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_logs_sesiones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `accion` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `sesiones` int NOT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `detalles` text COLLATE utf8mb4_unicode_520_ci,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `wp_logs_sesiones_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `wp_users` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_logs_sesiones`
--

LOCK TABLES `wp_logs_sesiones` WRITE;
/*!40000 ALTER TABLE `wp_logs_sesiones` DISABLE KEYS */;
INSERT INTO `wp_logs_sesiones` VALUES (1,2,'Sesiones añadidas',1,'2025-01-16 18:15:00','Pedido completado: #206607'),(2,2,'Sesiones añadidas',5,'2025-01-16 18:16:29','Pedido completado: #206611'),(3,2,'Sesiones añadidas manualmente',5,'2025-01-16 18:36:35','Bono gratuito'),(4,2,'Sesiones restadas manualmente',-1,'2025-01-16 18:37:16','Gasto una'),(5,2,'Sesiones añadidas',1,'2025-01-16 18:47:19','Pedido completado: #206612'),(6,2,'Sesiones añadidas',1,'2025-01-16 18:48:00','Pedido completado: #206613'),(7,2,'Sesiones añadidas',10,'2025-01-17 10:40:04','Pedido completado: #206616');
/*!40000 ALTER TABLE `wp_logs_sesiones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-21 17:13:36
