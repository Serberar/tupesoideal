-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: wordpress
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.24.04.1

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
-- Table structure for table `wp_wc_order_addresses`
--

DROP TABLE IF EXISTS `wp_wc_order_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_wc_order_addresses` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned NOT NULL,
  `address_type` varchar(20) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `first_name` text COLLATE utf8mb4_unicode_520_ci,
  `last_name` text COLLATE utf8mb4_unicode_520_ci,
  `company` text COLLATE utf8mb4_unicode_520_ci,
  `address_1` text COLLATE utf8mb4_unicode_520_ci,
  `address_2` text COLLATE utf8mb4_unicode_520_ci,
  `city` text COLLATE utf8mb4_unicode_520_ci,
  `state` text COLLATE utf8mb4_unicode_520_ci,
  `postcode` text COLLATE utf8mb4_unicode_520_ci,
  `country` text COLLATE utf8mb4_unicode_520_ci,
  `email` varchar(320) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `phone` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `address_type_order_id` (`address_type`,`order_id`),
  KEY `order_id` (`order_id`),
  KEY `email` (`email`(191)),
  KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_wc_order_addresses`
--

LOCK TABLES `wp_wc_order_addresses` WRITE;
/*!40000 ALTER TABLE `wp_wc_order_addresses` DISABLE KEYS */;
INSERT INTO `wp_wc_order_addresses` VALUES (5,206606,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'correo@correo.es',NULL),(6,206607,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'correo@correo.es',NULL),(7,206609,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'correo@correo.es',NULL),(8,206611,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'correo@correo.es',NULL),(9,206612,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'correo@correo.es',NULL),(10,206613,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'correo@correo.es',NULL),(11,206616,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'correo@correo.es',NULL),(12,206627,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL),(13,206630,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL),(14,206633,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL),(15,206639,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL),(16,206640,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL),(17,206642,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL),(18,206644,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL),(19,206650,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL),(20,206651,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL),(21,206652,'billing',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'sergioberara@gmail.com',NULL);
/*!40000 ALTER TABLE `wp_wc_order_addresses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-19 17:40:12
