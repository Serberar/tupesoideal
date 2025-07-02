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
-- Table structure for table `wp_wc_order_operational_data`
--

DROP TABLE IF EXISTS `wp_wc_order_operational_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_wc_order_operational_data` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned DEFAULT NULL,
  `created_via` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `woocommerce_version` varchar(20) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `prices_include_tax` tinyint(1) DEFAULT NULL,
  `coupon_usages_are_counted` tinyint(1) DEFAULT NULL,
  `download_permission_granted` tinyint(1) DEFAULT NULL,
  `cart_hash` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `new_order_email_sent` tinyint(1) DEFAULT NULL,
  `order_key` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `order_stock_reduced` tinyint(1) DEFAULT NULL,
  `date_paid_gmt` datetime DEFAULT NULL,
  `date_completed_gmt` datetime DEFAULT NULL,
  `shipping_tax_amount` decimal(26,8) DEFAULT NULL,
  `shipping_total_amount` decimal(26,8) DEFAULT NULL,
  `discount_tax_amount` decimal(26,8) DEFAULT NULL,
  `discount_total_amount` decimal(26,8) DEFAULT NULL,
  `recorded_sales` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_id` (`order_id`),
  KEY `order_key` (`order_key`)
) ENGINE=InnoDB AUTO_INCREMENT=213 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_wc_order_operational_data`
--

LOCK TABLES `wp_wc_order_operational_data` WRITE;
/*!40000 ALTER TABLE `wp_wc_order_operational_data` DISABLE KEYS */;
INSERT INTO `wp_wc_order_operational_data` VALUES (46,206606,'rest-api','9.5.2',0,1,1,'',1,'wc_order_YTifHncJGwq1j',1,'2025-01-16 12:34:04','2025-01-16 12:56:37',0.00000000,0.00000000,0.00000000,0.00000000,1),(55,206607,'rest-api','9.5.2',0,1,1,'',1,'wc_order_gwrPR0OAi7IbO',1,'2025-01-16 12:34:06','2025-01-16 17:15:00',0.00000000,0.00000000,0.00000000,0.00000000,1),(65,206609,'rest-api','9.5.2',0,1,1,'',1,'wc_order_JMmLfzunLMHXa',1,'2025-01-16 17:05:17','2025-01-16 17:06:04',0.00000000,0.00000000,0.00000000,0.00000000,1),(76,206611,'rest-api','9.5.2',0,1,1,'',1,'wc_order_tzrHDW6P6nZvL',1,'2025-01-16 17:16:00','2025-01-16 17:16:29',0.00000000,0.00000000,0.00000000,0.00000000,1),(86,206612,'rest-api','9.5.2',0,1,1,'',1,'wc_order_ruNvF2R6qDjqQ',1,'2025-01-16 17:46:46','2025-01-16 17:47:19',0.00000000,0.00000000,0.00000000,0.00000000,1),(96,206613,'rest-api','9.5.2',0,1,1,'',1,'wc_order_Qxe5S3E8OtcVp',1,'2025-01-16 17:48:00','2025-01-16 17:48:00',0.00000000,0.00000000,0.00000000,0.00000000,1),(105,206616,'rest-api','9.5.2',0,1,1,'',1,'wc_order_XX3apOCtMQxkh',1,'2025-01-17 09:40:04','2025-01-17 09:40:04',0.00000000,0.00000000,0.00000000,0.00000000,1),(114,206627,'rest-api','9.6.0',0,1,1,'',1,'wc_order_ZZRqlGgvaYTlf',1,'2025-01-30 20:30:01','2025-01-30 20:30:01',0.00000000,0.00000000,0.00000000,0.00000000,1),(123,206630,'rest-api','9.6.0',0,1,1,'',1,'wc_order_haPzgLimjyutv',1,'2025-02-01 18:12:39','2025-02-01 18:12:39',0.00000000,0.00000000,0.00000000,0.00000000,1),(132,206633,'rest-api','9.6.0',0,1,1,'',1,'wc_order_VyCzcBVxDHjXG',1,'2025-02-02 12:57:33','2025-02-02 12:57:33',0.00000000,0.00000000,0.00000000,0.00000000,1),(150,206639,'rest-api','9.6.0',0,1,1,'',1,'wc_order_sqY0HAbBFDduX',1,'2025-02-02 13:29:12','2025-02-02 13:29:12',0.00000000,0.00000000,0.00000000,0.00000000,1),(159,206640,'rest-api','9.6.0',0,1,1,'',1,'wc_order_UNKYnURPfL1Rq',1,'2025-02-02 14:06:03','2025-02-02 14:06:03',0.00000000,0.00000000,0.00000000,0.00000000,1),(168,206642,'rest-api','9.6.0',0,1,1,'',1,'wc_order_YFTpYexce7Whk',1,'2025-02-02 14:31:06','2025-02-02 14:31:06',0.00000000,0.00000000,0.00000000,0.00000000,1),(177,206644,'rest-api','9.6.0',0,1,1,'',1,'wc_order_0saruwO5u9FRn',1,'2025-02-02 14:47:03','2025-02-02 14:47:03',0.00000000,0.00000000,0.00000000,0.00000000,1),(186,206650,'rest-api','9.6.0',0,1,1,'',1,'wc_order_1oDK7kbnnBh5a',1,'2025-02-02 15:01:00','2025-02-02 15:01:00',0.00000000,0.00000000,0.00000000,0.00000000,1),(195,206651,'rest-api','9.6.0',0,1,1,'',1,'wc_order_zg0l6T7Tqmxfr',1,'2025-02-02 15:03:32','2025-02-02 15:03:32',0.00000000,0.00000000,0.00000000,0.00000000,1),(204,206652,'rest-api','9.6.0',0,1,1,'',1,'wc_order_6PHHBHgep69eG',1,'2025-02-02 15:08:15','2025-02-02 15:08:15',0.00000000,0.00000000,0.00000000,0.00000000,1);
/*!40000 ALTER TABLE `wp_wc_order_operational_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-19 17:40:15
