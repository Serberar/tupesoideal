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
-- Table structure for table `wp_wc_orders_meta`
--

DROP TABLE IF EXISTS `wp_wc_orders_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_wc_orders_meta` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned DEFAULT NULL,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `meta_value` text COLLATE utf8mb4_unicode_520_ci,
  PRIMARY KEY (`id`),
  KEY `meta_key_value` (`meta_key`(100),`meta_value`(82)),
  KEY `order_id_meta_key_meta_value` (`order_id`,`meta_key`(100),`meta_value`(82))
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_wc_orders_meta`
--

LOCK TABLES `wp_wc_orders_meta` WRITE;
/*!40000 ALTER TABLE `wp_wc_orders_meta` DISABLE KEYS */;
INSERT INTO `wp_wc_orders_meta` VALUES (19,206606,'_billing_address_index','         correo@correo.es '),(20,206606,'_shipping_address_index','         '),(21,206607,'_billing_address_index','         correo@correo.es '),(22,206607,'_shipping_address_index','         '),(23,206606,'_edit_lock','1737032219:1'),(24,206609,'_billing_address_index','         correo@correo.es '),(25,206609,'_shipping_address_index','         '),(26,206609,'_edit_lock','1737047167:1'),(27,206607,'_edit_lock','1737047702:1'),(28,206611,'_billing_address_index','         correo@correo.es '),(29,206611,'_shipping_address_index','         '),(30,206611,'_edit_lock','1737047791:1'),(31,206612,'_billing_address_index','         correo@correo.es '),(32,206612,'_shipping_address_index','         '),(33,206612,'_edit_lock','1737049641:1'),(34,206613,'_billing_address_index','         correo@correo.es '),(35,206613,'_shipping_address_index','         '),(36,206616,'_billing_address_index','         correo@correo.es '),(37,206616,'_shipping_address_index','         ');
/*!40000 ALTER TABLE `wp_wc_orders_meta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-21 17:13:37
