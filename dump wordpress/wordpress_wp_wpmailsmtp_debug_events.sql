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
-- Table structure for table `wp_wpmailsmtp_debug_events`
--

DROP TABLE IF EXISTS `wp_wpmailsmtp_debug_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_wpmailsmtp_debug_events` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8mb4_unicode_520_ci,
  `initiator` text COLLATE utf8mb4_unicode_520_ci,
  `event_type` tinyint unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_wpmailsmtp_debug_events`
--

LOCK TABLES `wp_wpmailsmtp_debug_events` WRITE;
/*!40000 ALTER TABLE `wp_wpmailsmtp_debug_events` DISABLE KEYS */;
INSERT INTO `wp_wpmailsmtp_debug_events` VALUES (1,'Mailer: Otro SMTP\r\nPHPMailer was able to connect to SMTP server but failed while trying to send an email.','{\"file\":\"\\/var\\/www\\/html\\/wordpress\\/wp-content\\/plugins\\/woocommerce\\/includes\\/emails\\/class-wc-email.php\",\"line\":769}',0,'2025-02-02 12:56:58'),(2,'Mailer: Otro SMTP\r\nSMTP Error: The following recipients failed: cliente@example.com: : Recipient address rejected: Domain example.com does not accept mail (nullMX)','{\"file\":\"\\/var\\/www\\/html\\/wordpress\\/wp-content\\/plugins\\/woocommerce\\/includes\\/emails\\/class-wc-email.php\",\"line\":769}',0,'2025-02-02 12:56:58'),(3,'Mailer: Otro SMTP\r\nPHPMailer was able to connect to SMTP server but failed while trying to send an email.','{\"file\":\"\\/var\\/www\\/html\\/wordpress\\/wp-content\\/plugins\\/woocommerce\\/includes\\/emails\\/class-wc-email.php\",\"line\":769}',0,'2025-02-02 13:07:29'),(4,'Mailer: Otro SMTP\r\nSMTP Error: The following recipients failed: cliente@example.com: : Recipient address rejected: Domain example.com does not accept mail (nullMX)','{\"file\":\"\\/var\\/www\\/html\\/wordpress\\/wp-content\\/plugins\\/woocommerce\\/includes\\/emails\\/class-wc-email.php\",\"line\":769}',0,'2025-02-02 13:07:29');
/*!40000 ALTER TABLE `wp_wpmailsmtp_debug_events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-19 17:40:10
