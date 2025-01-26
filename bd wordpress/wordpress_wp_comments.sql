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
-- Table structure for table `wp_comments`
--

DROP TABLE IF EXISTS `wp_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_comments` (
  `comment_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `comment_post_ID` bigint unsigned NOT NULL DEFAULT '0',
  `comment_author` tinytext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `comment_author_email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_author_url` varchar(200) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_author_IP` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_content` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `comment_karma` int NOT NULL DEFAULT '0',
  `comment_approved` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '1',
  `comment_agent` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_type` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'comment',
  `comment_parent` bigint unsigned NOT NULL DEFAULT '0',
  `user_id` bigint unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`comment_ID`),
  KEY `comment_post_ID` (`comment_post_ID`),
  KEY `comment_approved_date_gmt` (`comment_approved`,`comment_date_gmt`),
  KEY `comment_date_gmt` (`comment_date_gmt`),
  KEY `comment_parent` (`comment_parent`),
  KEY `comment_author_email` (`comment_author_email`(10)),
  KEY `woo_idx_comment_type` (`comment_type`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_comments`
--

LOCK TABLES `wp_comments` WRITE;
/*!40000 ALTER TABLE `wp_comments` DISABLE KEYS */;
INSERT INTO `wp_comments` VALUES (1,1,'Un comentarista de WordPress','wapuu@wordpress.example','https://es.wordpress.org/','','2024-12-19 17:38:28','2024-12-19 16:38:28','Hola, esto es un comentario.\nPara empezar a moderar, editar y borrar comentarios, por favor, visita en el escritorio la pantalla de comentarios.\nLos avatares de los comentaristas provienen de <a href=\"https://es.gravatar.com/\">Gravatar</a>.',0,'1','','comment',0,0),(2,103,'WooCommerce','','','','2024-12-19 19:20:23','2024-12-19 18:20:23','El estado del pedido cambió de Pendiente de pago a Completado.',0,'1','WooCommerce','order_note',0,0),(3,104,'WooCommerce','','','','2024-12-19 19:22:40','2024-12-19 18:22:40','El estado del pedido cambió de Pendiente de pago a Completado.',0,'1','WooCommerce','order_note',0,0),(4,149,'WooCommerce','','','','2024-12-26 10:38:07','2024-12-26 09:38:07','El estado del pedido cambió de Pendiente de pago a Completado.',0,'1','WooCommerce','order_note',0,0),(5,180,'WooCommerce','','','','2025-01-02 17:54:41','2025-01-02 16:54:41','El estado del pedido cambió de Pendiente de pago a Procesando.',0,'1','WooCommerce','order_note',0,0),(6,180,'admin','davorsg@gmail.com','','','2025-01-04 12:10:05','2025-01-04 11:10:05','El estado del pedido cambió de Procesando a Completado.',0,'1','WooCommerce','order_note',0,0),(7,206606,'WooCommerce','','','','2025-01-16 13:34:04','2025-01-16 12:34:04','El estado del pedido cambió de Pendiente de pago a Procesando.',0,'1','WooCommerce','order_note',0,0),(8,206607,'WooCommerce','','','','2025-01-16 13:34:06','2025-01-16 12:34:06','El estado del pedido cambió de Pendiente de pago a Procesando.',0,'1','WooCommerce','order_note',0,0),(9,206606,'admin','davorsg@gmail.com','','','2025-01-16 13:56:22','2025-01-16 12:56:22','Consulta realizada',0,'1','WooCommerce','order_note',0,0),(10,206606,'admin','davorsg@gmail.com','','','2025-01-16 13:56:37','2025-01-16 12:56:37','El estado del pedido cambió de Procesando a Completado.',0,'1','WooCommerce','order_note',0,0),(11,206609,'WooCommerce','','','','2025-01-16 18:05:17','2025-01-16 17:05:17','El estado del pedido cambió de Pendiente de pago a Procesando.',0,'1','WooCommerce','order_note',0,0),(12,206609,'admin','davorsg@gmail.com','','','2025-01-16 18:06:05','2025-01-16 17:06:05','El estado del pedido cambió de Procesando a Completado.',0,'1','WooCommerce','order_note',0,0),(13,206607,'admin','davorsg@gmail.com','','','2025-01-16 18:15:01','2025-01-16 17:15:01','El estado del pedido cambió de Procesando a Completado.',0,'1','WooCommerce','order_note',0,0),(14,206611,'WooCommerce','','','','2025-01-16 18:16:01','2025-01-16 17:16:01','El estado del pedido cambió de Pendiente de pago a Procesando.',0,'1','WooCommerce','order_note',0,0),(15,206611,'admin','davorsg@gmail.com','','','2025-01-16 18:16:30','2025-01-16 17:16:30','El estado del pedido cambió de Procesando a Completado.',0,'1','WooCommerce','order_note',0,0),(16,206612,'WooCommerce','','','','2025-01-16 18:46:46','2025-01-16 17:46:46','El estado del pedido cambió de Pendiente de pago a Procesando.',0,'1','WooCommerce','order_note',0,0),(17,206612,'admin','davorsg@gmail.com','','','2025-01-16 18:47:19','2025-01-16 17:47:19','El estado del pedido cambió de Procesando a Completado.',0,'1','WooCommerce','order_note',0,0),(18,206613,'WooCommerce','','','','2025-01-16 18:48:01','2025-01-16 17:48:01','El estado del pedido cambió de Pendiente de pago a Completado.',0,'1','WooCommerce','order_note',0,0),(19,206616,'WooCommerce','','','','2025-01-17 10:40:05','2025-01-17 09:40:05','El estado del pedido cambió de Pendiente de pago a Completado.',0,'1','WooCommerce','order_note',0,0);
/*!40000 ALTER TABLE `wp_comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-21 17:13:43
