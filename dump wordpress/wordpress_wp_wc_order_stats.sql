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
-- Table structure for table `wp_wc_order_stats`
--

DROP TABLE IF EXISTS `wp_wc_order_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_wc_order_stats` (
  `order_id` bigint unsigned NOT NULL,
  `parent_id` bigint unsigned NOT NULL DEFAULT '0',
  `date_created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_created_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_paid` datetime DEFAULT '0000-00-00 00:00:00',
  `date_completed` datetime DEFAULT '0000-00-00 00:00:00',
  `num_items_sold` int NOT NULL DEFAULT '0',
  `total_sales` double NOT NULL DEFAULT '0',
  `tax_total` double NOT NULL DEFAULT '0',
  `shipping_total` double NOT NULL DEFAULT '0',
  `net_total` double NOT NULL DEFAULT '0',
  `returning_customer` tinyint(1) DEFAULT NULL,
  `status` varchar(200) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `customer_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `date_created` (`date_created`),
  KEY `customer_id` (`customer_id`),
  KEY `status` (`status`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_wc_order_stats`
--

LOCK TABLES `wp_wc_order_stats` WRITE;
/*!40000 ALTER TABLE `wp_wc_order_stats` DISABLE KEYS */;
INSERT INTO `wp_wc_order_stats` VALUES (206606,0,'2025-01-16 13:34:03','2025-01-16 12:34:03','2025-01-16 13:34:04','2025-01-16 13:56:37',1,30,0,0,30,0,'wc-completed',9),(206607,0,'2025-01-16 13:34:06','2025-01-16 12:34:06','2025-01-16 13:34:06','2025-01-16 18:15:00',1,30,0,0,30,1,'wc-completed',9),(206609,0,'2025-01-16 18:05:17','2025-01-16 17:05:17','2025-01-16 18:05:17','2025-01-16 18:06:04',1,140,0,0,140,1,'wc-completed',9),(206611,0,'2025-01-16 18:16:00','2025-01-16 17:16:00','2025-01-16 18:16:00','2025-01-16 18:16:29',1,140,0,0,140,1,'wc-completed',9),(206612,0,'2025-01-16 18:46:46','2025-01-16 17:46:46','2025-01-16 18:46:46','2025-01-16 18:47:19',1,30,0,0,30,1,'wc-completed',9),(206613,0,'2025-01-16 18:48:00','2025-01-16 17:48:00','2025-01-16 18:48:00','2025-01-16 18:48:00',1,30,0,0,30,1,'wc-completed',9),(206616,0,'2025-01-17 10:40:04','2025-01-17 09:40:04','2025-01-17 10:40:04','2025-01-17 10:40:04',1,270,0,0,270,1,'wc-completed',9),(206627,0,'2025-01-30 21:30:01','2025-01-30 20:30:01','2025-01-30 21:30:01','2025-01-30 21:30:01',1,140,0,0,140,1,'wc-completed',9),(206630,0,'2025-02-01 19:12:38','2025-02-01 18:12:38','2025-02-01 19:12:39','2025-02-01 19:12:39',1,140,0,0,140,1,'wc-completed',9),(206633,0,'2025-02-02 13:57:33','2025-02-02 12:57:33','2025-02-02 13:57:33','2025-02-02 13:57:33',1,140,0,0,140,0,'wc-completed',10),(206639,0,'2025-02-02 14:29:12','2025-02-02 13:29:12','2025-02-02 14:29:12','2025-02-02 14:29:12',1,140,0,0,140,1,'wc-completed',10),(206640,0,'2025-02-02 15:06:03','2025-02-02 14:06:03','2025-02-02 15:06:03','2025-02-02 15:06:03',1,270,0,0,270,1,'wc-completed',10),(206642,0,'2025-02-02 15:31:06','2025-02-02 14:31:06','2025-02-02 15:31:06','2025-02-02 15:31:06',1,140,0,0,140,1,'wc-completed',10),(206644,0,'2025-02-02 15:47:03','2025-02-02 14:47:03','2025-02-02 15:47:03','2025-02-02 15:47:03',1,140,0,0,140,1,'wc-completed',10),(206650,0,'2025-02-02 16:01:00','2025-02-02 15:01:00','2025-02-02 16:01:00','2025-02-02 16:01:00',1,270,0,0,270,1,'wc-completed',10),(206651,0,'2025-02-02 16:03:32','2025-02-02 15:03:32','2025-02-02 16:03:32','2025-02-02 16:03:32',1,270,0,0,270,1,'wc-completed',10),(206652,0,'2025-02-02 16:08:14','2025-02-02 15:08:14','2025-02-02 16:08:15','2025-02-02 16:08:15',1,140,0,0,140,1,'wc-completed',10);
/*!40000 ALTER TABLE `wp_wc_order_stats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-19 17:40:09
