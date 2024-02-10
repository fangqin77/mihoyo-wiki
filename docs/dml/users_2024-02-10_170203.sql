/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
DROP TABLE IF EXISTS users_account;
CREATE TABLE `users_account` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `username` varchar(255) DEFAULT NULL COMMENT 'User Name',
  `passwd` varchar(255) DEFAULT NULL COMMENT 'Password',
  `phone` varchar(255) DEFAULT NULL COMMENT 'Phone',
  `email` varchar(255) DEFAULT NULL COMMENT 'Email',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO users_account(id,username,passwd,phone,email) VALUES('1','\'fangqin\'','\'123456\'','\'18133940001\'','\'123@qq.com\''),('2','\'fangzhi\'','\'321456\'','\'18133336666\'','\'543@qq.com\''),('3','\'wumengqi\'','\'44444\'','\'12312312312\'','\'nnnn@qq.com\'');