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
-- Table structure for table `wp_wc_orders`
--

DROP TABLE IF EXISTS `wp_wc_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_wc_orders` (
  `id` bigint unsigned NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `currency` varchar(10) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `tax_amount` decimal(26,8) DEFAULT NULL,
  `total_amount` decimal(26,8) DEFAULT NULL,
  `customer_id` bigint unsigned DEFAULT NULL,
  `billing_email` varchar(320) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `date_created_gmt` datetime DEFAULT NULL,
  `date_updated_gmt` datetime DEFAULT NULL,
  `parent_order_id` bigint unsigned DEFAULT NULL,
  `payment_method` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `payment_method_title` text COLLATE utf8mb4_unicode_520_ci,
  `transaction_id` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `ip_address` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_520_ci,
  `customer_note` text COLLATE utf8mb4_unicode_520_ci,
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `date_created` (`date_created_gmt`),
  KEY `customer_id_billing_email` (`customer_id`,`billing_email`(171)),
  KEY `billing_email` (`billing_email`(191)),
  KEY `type_status_date` (`type`,`status`,`date_created_gmt`),
  KEY `parent_order_id` (`parent_order_id`),
  KEY `date_updated` (`date_updated_gmt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_wc_orders`
--

LOCK TABLES `wp_wc_orders` WRITE;
/*!40000 ALTER TABLE `wp_wc_orders` DISABLE KEYS */;
INSERT INTO `wp_wc_orders` VALUES (206606,'wc-completed','EUR','shop_order',0.00000000,30.00000000,2,'correo@correo.es','2025-01-16 12:34:03','2025-01-16 12:56:37',0,'','','','','',''),(206607,'wc-completed','EUR','shop_order',0.00000000,30.00000000,2,'correo@correo.es','2025-01-16 12:34:06','2025-01-16 17:15:00',0,'','','','','',''),(206609,'wc-completed','EUR','shop_order',0.00000000,140.00000000,2,'correo@correo.es','2025-01-16 17:05:17','2025-01-16 17:06:04',0,'','','','','',''),(206611,'wc-completed','EUR','shop_order',0.00000000,140.00000000,2,'correo@correo.es','2025-01-16 17:16:00','2025-01-16 17:16:29',0,'','','','','',''),(206612,'wc-completed','EUR','shop_order',0.00000000,30.00000000,2,'correo@correo.es','2025-01-16 17:46:46','2025-01-16 17:47:19',0,'','','','','',''),(206613,'wc-completed','EUR','shop_order',0.00000000,30.00000000,2,'correo@correo.es','2025-01-16 17:48:00','2025-01-16 17:48:01',0,'','','','','',''),(206616,'wc-completed','EUR','shop_order',0.00000000,270.00000000,2,'correo@correo.es','2025-01-17 09:40:04','2025-01-17 09:40:06',0,'','','','','','');
/*!40000 ALTER TABLE `wp_wc_orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-21 17:13:35
