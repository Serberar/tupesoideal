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
-- Table structure for table `wp_term_relationships`
--

DROP TABLE IF EXISTS `wp_term_relationships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_term_relationships` (
  `object_id` bigint unsigned NOT NULL DEFAULT '0',
  `term_taxonomy_id` bigint unsigned NOT NULL DEFAULT '0',
  `term_order` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`object_id`,`term_taxonomy_id`),
  KEY `term_taxonomy_id` (`term_taxonomy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_term_relationships`
--

LOCK TABLES `wp_term_relationships` WRITE;
/*!40000 ALTER TABLE `wp_term_relationships` DISABLE KEYS */;
INSERT INTO `wp_term_relationships` VALUES (1,1,0),(27,16,0),(28,16,0),(29,16,0),(30,16,0),(31,16,0),(32,16,0),(33,16,0),(34,16,0),(35,16,0),(81,17,0),(82,18,0),(96,17,0),(96,19,0),(97,17,0),(98,17,0),(98,20,0),(101,2,0),(101,15,0),(101,29,0),(105,18,0),(113,1,0),(118,1,0),(122,1,0),(131,1,0),(134,18,0),(139,1,0),(150,18,0),(151,18,0),(153,22,0),(156,23,0),(159,2,0),(159,15,0),(159,30,0),(160,2,0),(160,15,0),(160,31,0),(166,24,0),(167,18,0),(168,18,0),(170,25,0),(172,24,0),(173,23,0),(174,25,0),(175,18,0),(176,18,0),(177,18,0),(178,18,0),(179,18,0),(181,18,0),(182,18,0),(185,24,0),(186,26,0),(187,24,0),(188,23,0),(189,25,0),(190,18,0),(192,24,0),(193,23,0),(194,25,0),(195,26,0),(196,24,0),(197,26,0),(198,24,0),(199,25,0),(200,26,0),(201,24,0),(202,25,0),(203,26,0),(204,24,0),(206,27,0),(207,18,0),(209,26,0),(210,24,0),(211,25,0),(212,18,0),(213,18,0),(214,18,0),(215,18,0),(216,18,0),(217,18,0),(206591,18,0),(206592,18,0),(206593,18,0),(206594,18,0),(206595,18,0),(206596,18,0),(206597,18,0),(206598,18,0),(206599,18,0),(206600,18,0),(206601,18,0),(206602,18,0),(206604,18,0),(206605,18,0),(206608,18,0),(206615,18,0),(206617,18,0),(206618,18,0),(206619,18,0),(206620,18,0),(206621,18,0),(206622,18,0),(206623,18,0),(206624,18,0),(206625,18,0),(206626,23,0),(206628,18,0),(206629,18,0),(206631,18,0),(206635,22,0),(206641,18,0),(206647,24,0),(206648,23,0),(206649,25,0);
/*!40000 ALTER TABLE `wp_term_relationships` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-19 17:40:13
