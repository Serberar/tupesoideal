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
-- Table structure for table `wp_woocommerce_order_itemmeta`
--

DROP TABLE IF EXISTS `wp_woocommerce_order_itemmeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_woocommerce_order_itemmeta` (
  `meta_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_item_id` bigint unsigned NOT NULL,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_520_ci,
  PRIMARY KEY (`meta_id`),
  KEY `order_item_id` (`order_item_id`),
  KEY `meta_key` (`meta_key`(32))
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_woocommerce_order_itemmeta`
--

LOCK TABLES `wp_woocommerce_order_itemmeta` WRITE;
/*!40000 ALTER TABLE `wp_woocommerce_order_itemmeta` DISABLE KEYS */;
INSERT INTO `wp_woocommerce_order_itemmeta` VALUES (37,5,'_product_id','101'),(38,5,'_variation_id','0'),(39,5,'_qty','1'),(40,5,'_tax_class',''),(41,5,'_line_subtotal','30'),(42,5,'_line_subtotal_tax','0'),(43,5,'_line_total','30'),(44,5,'_line_tax','0'),(45,5,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(46,6,'_product_id','101'),(47,6,'_variation_id','0'),(48,6,'_qty','1'),(49,6,'_tax_class',''),(50,6,'_line_subtotal','30'),(51,6,'_line_subtotal_tax','0'),(52,6,'_line_total','30'),(53,6,'_line_tax','0'),(54,6,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(55,7,'_product_id','159'),(56,7,'_variation_id','0'),(57,7,'_qty','1'),(58,7,'_tax_class',''),(59,7,'_line_subtotal','140'),(60,7,'_line_subtotal_tax','0'),(61,7,'_line_total','140'),(62,7,'_line_tax','0'),(63,7,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(64,8,'_product_id','159'),(65,8,'_variation_id','0'),(66,8,'_qty','1'),(67,8,'_tax_class',''),(68,8,'_line_subtotal','140'),(69,8,'_line_subtotal_tax','0'),(70,8,'_line_total','140'),(71,8,'_line_tax','0'),(72,8,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(73,9,'_product_id','101'),(74,9,'_variation_id','0'),(75,9,'_qty','1'),(76,9,'_tax_class',''),(77,9,'_line_subtotal','30'),(78,9,'_line_subtotal_tax','0'),(79,9,'_line_total','30'),(80,9,'_line_tax','0'),(81,9,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(82,10,'_product_id','101'),(83,10,'_variation_id','0'),(84,10,'_qty','1'),(85,10,'_tax_class',''),(86,10,'_line_subtotal','30'),(87,10,'_line_subtotal_tax','0'),(88,10,'_line_total','30'),(89,10,'_line_tax','0'),(90,10,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(91,11,'_product_id','160'),(92,11,'_variation_id','0'),(93,11,'_qty','1'),(94,11,'_tax_class',''),(95,11,'_line_subtotal','270'),(96,11,'_line_subtotal_tax','0'),(97,11,'_line_total','270'),(98,11,'_line_tax','0'),(99,11,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(100,12,'_product_id','159'),(101,12,'_variation_id','0'),(102,12,'_qty','1'),(103,12,'_tax_class',''),(104,12,'_line_subtotal','140'),(105,12,'_line_subtotal_tax','0'),(106,12,'_line_total','140'),(107,12,'_line_tax','0'),(108,12,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(109,13,'_product_id','159'),(110,13,'_variation_id','0'),(111,13,'_qty','1'),(112,13,'_tax_class',''),(113,13,'_line_subtotal','140'),(114,13,'_line_subtotal_tax','0'),(115,13,'_line_total','140'),(116,13,'_line_tax','0'),(117,13,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(118,14,'_product_id','159'),(119,14,'_variation_id','0'),(120,14,'_qty','1'),(121,14,'_tax_class',''),(122,14,'_line_subtotal','140'),(123,14,'_line_subtotal_tax','0'),(124,14,'_line_total','140'),(125,14,'_line_tax','0'),(126,14,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(127,15,'_product_id','159'),(128,15,'_variation_id','0'),(129,15,'_qty','1'),(130,15,'_tax_class',''),(131,15,'_line_subtotal','140'),(132,15,'_line_subtotal_tax','0'),(133,15,'_line_total','140'),(134,15,'_line_tax','0'),(135,15,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(136,16,'_product_id','160'),(137,16,'_variation_id','0'),(138,16,'_qty','1'),(139,16,'_tax_class',''),(140,16,'_line_subtotal','270'),(141,16,'_line_subtotal_tax','0'),(142,16,'_line_total','270'),(143,16,'_line_tax','0'),(144,16,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(145,17,'_product_id','159'),(146,17,'_variation_id','0'),(147,17,'_qty','1'),(148,17,'_tax_class',''),(149,17,'_line_subtotal','140'),(150,17,'_line_subtotal_tax','0'),(151,17,'_line_total','140'),(152,17,'_line_tax','0'),(153,17,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(154,18,'_product_id','159'),(155,18,'_variation_id','0'),(156,18,'_qty','1'),(157,18,'_tax_class',''),(158,18,'_line_subtotal','140'),(159,18,'_line_subtotal_tax','0'),(160,18,'_line_total','140'),(161,18,'_line_tax','0'),(162,18,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(163,19,'_product_id','160'),(164,19,'_variation_id','0'),(165,19,'_qty','1'),(166,19,'_tax_class',''),(167,19,'_line_subtotal','270'),(168,19,'_line_subtotal_tax','0'),(169,19,'_line_total','270'),(170,19,'_line_tax','0'),(171,19,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(172,20,'_product_id','160'),(173,20,'_variation_id','0'),(174,20,'_qty','1'),(175,20,'_tax_class',''),(176,20,'_line_subtotal','270'),(177,20,'_line_subtotal_tax','0'),(178,20,'_line_total','270'),(179,20,'_line_tax','0'),(180,20,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}'),(181,21,'_product_id','159'),(182,21,'_variation_id','0'),(183,21,'_qty','1'),(184,21,'_tax_class',''),(185,21,'_line_subtotal','140'),(186,21,'_line_subtotal_tax','0'),(187,21,'_line_total','140'),(188,21,'_line_tax','0'),(189,21,'_line_tax_data','a:2:{s:5:\"total\";a:0:{}s:8:\"subtotal\";a:0:{}}');
/*!40000 ALTER TABLE `wp_woocommerce_order_itemmeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-19 17:40:16
