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
-- Table structure for table `wp_usermeta`
--

DROP TABLE IF EXISTS `wp_usermeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wp_usermeta` (
  `umeta_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_520_ci,
  PRIMARY KEY (`umeta_id`),
  KEY `user_id` (`user_id`),
  KEY `meta_key` (`meta_key`(191))
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wp_usermeta`
--

LOCK TABLES `wp_usermeta` WRITE;
/*!40000 ALTER TABLE `wp_usermeta` DISABLE KEYS */;
INSERT INTO `wp_usermeta` VALUES (1,1,'nickname','admin'),(2,1,'first_name',''),(3,1,'last_name',''),(4,1,'description',''),(5,1,'rich_editing','true'),(6,1,'syntax_highlighting','true'),(7,1,'comment_shortcuts','false'),(8,1,'admin_color','fresh'),(9,1,'use_ssl','0'),(10,1,'show_admin_bar_front','true'),(11,1,'locale',''),(12,1,'wp_capabilities','a:1:{s:13:\"administrator\";b:1;}'),(13,1,'wp_user_level','10'),(14,1,'dismissed_wp_pointers',''),(15,1,'show_welcome_panel','1'),(16,1,'session_tokens','a:6:{s:64:\"8d7e3c9c302bf1c73ede8cea5420131613df3606710bdb708da15047727711b4\";a:4:{s:10:\"expiration\";i:1737125989;s:2:\"ip\";s:9:\"127.0.0.1\";s:2:\"ua\";s:78:\"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:134.0) Gecko/20100101 Firefox/134.0\";s:5:\"login\";i:1736953189;}s:64:\"b412a223da5f25df4c7852b7cc95b1bd2ad2b5eec435af75918d472a3fcb325c\";a:4:{s:10:\"expiration\";i:1737138245;s:2:\"ip\";s:9:\"127.0.0.1\";s:2:\"ua\";s:78:\"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:134.0) Gecko/20100101 Firefox/134.0\";s:5:\"login\";i:1736965445;}s:64:\"79c50ec25ee5afbab5b416cff2e56917821feeb1c0655fba8ead49503be52541\";a:4:{s:10:\"expiration\";i:1737139995;s:2:\"ip\";s:9:\"127.0.0.1\";s:2:\"ua\";s:78:\"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:134.0) Gecko/20100101 Firefox/134.0\";s:5:\"login\";i:1736967195;}s:64:\"01aac79fb5ca8e46ec573e3a3b0708ca5341077aa9b16a2887c45e5ddf0b202b\";a:4:{s:10:\"expiration\";i:1737203391;s:2:\"ip\";s:9:\"127.0.0.1\";s:2:\"ua\";s:78:\"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:134.0) Gecko/20100101 Firefox/134.0\";s:5:\"login\";i:1737030591;}s:64:\"79bad48f321b4fb552f459f7fbdc69025b7c85a7e2f9729e4a0f129915214383\";a:4:{s:10:\"expiration\";i:1737217670;s:2:\"ip\";s:9:\"127.0.0.1\";s:2:\"ua\";s:78:\"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:134.0) Gecko/20100101 Firefox/134.0\";s:5:\"login\";i:1737044870;}s:64:\"0901c844a376d2ac765eaec162df2fc51d110e14b934784527e3de1d01c7095b\";a:4:{s:10:\"expiration\";i:1737276650;s:2:\"ip\";s:9:\"127.0.0.1\";s:2:\"ua\";s:78:\"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:134.0) Gecko/20100101 Firefox/134.0\";s:5:\"login\";i:1737103850;}}'),(17,1,'wp_dashboard_quick_press_last_post_id','206603'),(18,1,'community-events-location','a:1:{s:2:\"ip\";s:9:\"127.0.0.0\";}'),(19,1,'_woocommerce_tracks_anon_id','woo:OeBjPKDYcFdHqdYLITAizIO8'),(20,1,'__cuar_session','a:1:{s:9:\"timestamp\";i:1737047002;}'),(21,1,'last_update','1734972780'),(22,1,'woocommerce_admin_task_list_tracked_started_tasks','{\"customize-store\":2,\"woocommerce-payments\":2,\"products\":1}'),(23,1,'wc_last_active','1737072000'),(24,1,'wp_persisted_preferences','a:3:{s:4:\"core\";a:1:{s:26:\"isComplementaryAreaVisible\";b:1;}s:9:\"_modified\";s:24:\"2024-12-23T16:53:00.363Z\";s:14:\"core/edit-post\";a:1:{s:12:\"welcomeGuide\";b:0;}}'),(26,1,'_woocommerce_persistent_cart_1','a:1:{s:4:\"cart\";a:0:{}}'),(27,1,'meta-box-order_product','a:3:{s:4:\"side\";s:22:\"submitdiv,postimagediv\";s:6:\"normal\";s:129:\"woocommerce-product-images,product_catdiv,tagsdiv-product_tag,woocommerce-product-data,postcustom,slugdiv,postexcerpt,commentsdiv\";s:8:\"advanced\";s:0:\"\";}'),(28,1,'wp_user-settings','libraryContent=browse'),(29,1,'wp_user-settings-time','1734630418'),(30,2,'nickname','usuario de prueba'),(31,2,'first_name','Usuario'),(32,2,'last_name','De prueba'),(33,2,'description',''),(34,2,'rich_editing','true'),(35,2,'syntax_highlighting','true'),(36,2,'comment_shortcuts','false'),(37,2,'admin_color','fresh'),(38,2,'use_ssl','0'),(39,2,'show_admin_bar_front','true'),(40,2,'locale',''),(41,2,'wp_capabilities','a:1:{s:8:\"customer\";b:1;}'),(42,2,'wp_user_level','0'),(43,2,'last_update','1737397198'),(44,2,'paying_customer','1'),(45,1,'dismissed_no_secure_connection_notice','1'),(66,2,'wc_last_active','1735948800'),(68,2,'_woocommerce_persistent_cart_1','a:1:{s:4:\"cart\";a:0:{}}'),(74,1,'nav_menu_recently_edited','16'),(75,1,'managenav-menuscolumnshidden','a:5:{i:0;s:11:\"link-target\";i:1;s:11:\"css-classes\";i:2;s:3:\"xfn\";i:3;s:11:\"description\";i:4;s:15:\"title-attribute\";}'),(76,1,'metaboxhidden_nav-menus','a:6:{i:0;s:21:\"add-post-type-product\";i:1;s:12:\"add-post_tag\";i:2;s:15:\"add-product_cat\";i:3;s:15:\"add-product_tag\";i:4;s:30:\"add-cuar_private_page_category\";i:5;s:30:\"add-cuar_private_file_category\";}'),(199,2,'billing_phone','654852963'),(200,2,'billing_address_1','calle 25'),(201,2,'billing_city','valladolid'),(202,2,'billing_state','cigales'),(203,2,'billing_postcode','47100'),(207,1,'dismissed_update_notice','1'),(208,2,'session_tokens','a:1:{s:64:\"ae490ac0c2e0897e70d113450109f4fe8103eec09a10b7aac908bdd5739de73a\";a:4:{s:10:\"expiration\";i:1736181115;s:2:\"ip\";s:9:\"127.0.0.1\";s:2:\"ua\";s:78:\"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0\";s:5:\"login\";i:1736008315;}}'),(210,2,'password_reset_token','Po1KDUgfJqATgc34bPghCtYy03Zi2MhK'),(221,1,'password_reset_token','rj9P1r0K2d3Nk2EdQ0zTH5TaBnYCUNUe'),(224,1,'closedpostboxes_cita','a:0:{}'),(225,1,'metaboxhidden_cita','a:1:{i:0;s:7:\"slugdiv\";}'),(228,2,'_citas_asignadas','a:3:{i:0;a:4:{s:16:\"intervalo_inicio\";s:5:\"10:00\";s:13:\"intervalo_fin\";s:5:\"10:30\";s:3:\"dia\";s:1:\"2\";s:10:\"usuario_id\";i:2;}i:1;a:4:{s:16:\"intervalo_inicio\";s:5:\"10:00\";s:13:\"intervalo_fin\";s:5:\"10:30\";s:3:\"dia\";s:1:\"2\";s:10:\"usuario_id\";i:2;}i:2;a:4:{s:16:\"intervalo_inicio\";s:5:\"10:00\";s:13:\"intervalo_fin\";s:5:\"10:30\";s:3:\"dia\";s:1:\"2\";s:10:\"usuario_id\";i:2;}}'),(229,1,'_citas_asignadas','a:1:{i:0;a:4:{s:16:\"intervalo_inicio\";s:5:\"10:30\";s:13:\"intervalo_fin\";s:5:\"11:00\";s:3:\"dia\";s:1:\"2\";s:10:\"usuario_id\";i:1;}}'),(246,1,'screen_layout_product','2');
/*!40000 ALTER TABLE `wp_usermeta` ENABLE KEYS */;
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
