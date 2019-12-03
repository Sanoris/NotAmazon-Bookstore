-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dbmsproj
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `Address` varchar(255) NOT NULL,
  `Contact_ID` bigint(20) NOT NULL,
  PRIMARY KEY (`Address`,`Contact_ID`),
  KEY `Contact_ID` (`Contact_ID`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`Contact_ID`) REFERENCES `contact_details` (`Contact_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES ('4572 Haul Road',219755),('3493 Masonic Hill Road',229202),('624 Collins Street',265568),('3493 Masonic Hill Road',270139),('502 Langtown Road',279384),('1663 Conaway Street',351505),('3210 Maple Street',390657),('4934 Oakdale Avenue',568103),('502 Langtown Road',599996),('123',609315),('1839 Spring Street',863438),('86 Bubby Drive',966922),('3939 Timber Oak Drive',992090);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `Author_ID` bigint(20) NOT NULL,
  `Contact_ID` bigint(20) NOT NULL,
  `DoB` varchar(50) NOT NULL,
  `Gender` varchar(1) DEFAULT NULL,
  `Last` varchar(25) DEFAULT NULL,
  `First` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`Author_ID`),
  KEY `Contact_ID` (`Contact_ID`),
  CONSTRAINT `author_ibfk_1` FOREIGN KEY (`Contact_ID`) REFERENCES `contact_details` (`Contact_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (143263,390657,'11/17/81','F','Mary','Gonzalez'),(272624,863438,'11/17/80','F','Mallory','Castillo'),(308147,219755,'07/13/92','M','Donovan','Duncan'),(416458,265568,'07/19/85','F','Dolores','Patel'),(457123,270139,'06/14/73','F','Alicia','Ruiz'),(477440,568103,'10/31/81','F','Alix','Gordon'),(513450,279384,'12/01/81','M','Jaxon','Russell'),(628737,351505,'05/29/90','F','Eleanor','Olson'),(650938,229202,'02/26/54','M','Joe','West'),(731660,599996,'12/27/83','F','Karen','Ellis'),(818989,966922,'06/21/84','M','Duke','Grant');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `ISBN` bigint(20) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Pub_Date` varchar(15) DEFAULT NULL,
  `Price` double DEFAULT NULL,
  `Item_Num` bigint(20) NOT NULL,
  `Avg_Rating` decimal(10,2) DEFAULT NULL,
  `Filename` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ISBN`),
  KEY `Item_Num` (`Item_Num`),
  CONSTRAINT `Item_Num` FOREIGN KEY (`Item_Num`) REFERENCES `items` (`Item_Num`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1256177194,'Hitchhikers Guide to BSing College','12/12/09',208.51,3087934231,4.00,'https://i.imgur.com/KWtTfCI.jpg'),(1874983876,'Damn That Must Suck...Feelsbadman','06/27/98',485.5,4057605789,2.00,'https://i.imgur.com/WfeWjTS.jpg'),(3450237097,'I Can\'t Think Of Other Book Titles Help Me','07/21/12',339.94,5766502456,1.00,'https://i.imgur.com/nSLqgup.jpg'),(4725986103,'What is Considered Bonus Points and Other Stuff to Make Me Pass This Class','05/16/13',385.58,6275179829,1.00,'https://i.imgur.com/7Xwg3kf.jpg'),(4827009352,'Guide to Making Titles Because I Got None','03/23/04',981.37,4093866179,2.00,'https://i.imgur.com/6AWk10r.jpg'),(5308275872,'!@#$%^ $#@$ $#%#$% !@!# $%^&$&%$ !@#!@','04/06/18',362.85,9892677000,4.00,'https://i.imgur.com/IhX5cHl.jpg'),(6428239261,'So How\'s Your Day?','08/17/01',693.6,6443255953,3.00,'https://i.imgur.com/mHdKEs7.jpg'),(6476539375,'Nope But I Also Don\'t Care','12/31/12',330.83,6071330408,4.00,'https://i.imgur.com/itNWJUS.jpg'),(6498743378,'Yeah...Why Do I Have To Do This?','02/19/15',512.8,8859785776,0.00,'https://i.imgur.com/XDfeQix.jpg'),(7074225098,'How Can I Pass DBMS?','01/25/07',125.1,4182003314,4.00,'https://i.imgur.com/BXWHtW4.jpg'),(7354357364,'I Don\'t Even Know What You\'re Saying Anymore','10/13/15',343.99,5785973791,2.00,'https://i.imgur.com/OooNES6.jpg'),(7946326112,'Pretty Terrible How About Yours?','06/30/16',640.02,6933813897,1.00,'https://i.imgur.com/CfOSKiR.jpg'),(8039206068,'Well I Gotta Present This Database Project So It\'s Pretty Bad','12/08/99',386.91,8653363619,2.00,'https://i.imgur.com/C16CmOw.jpg'),(8045486815,'Do You Realize How Much I Hate You?','11/03/19',767.42,8678111669,4.00,'https://i.imgur.com/LxqaorX.jpg'),(9739301605,'I Don\'t Know But At Least I Don\'t Have To','12/07/18',886.61,7878710940,3.00,'https://i.imgur.com/AjLOKXl.jpg');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books_cat`
--

DROP TABLE IF EXISTS `books_cat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books_cat` (
  `ISBN` bigint(20) NOT NULL,
  `Cat_Code` bigint(20) NOT NULL,
  PRIMARY KEY (`ISBN`,`Cat_Code`),
  KEY `Cat_Code` (`Cat_Code`),
  CONSTRAINT `books_cat_ibfk_1` FOREIGN KEY (`ISBN`) REFERENCES `books` (`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `books_cat_ibfk_2` FOREIGN KEY (`Cat_Code`) REFERENCES `categories` (`Cat_Code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_cat`
--

LOCK TABLES `books_cat` WRITE;
/*!40000 ALTER TABLE `books_cat` DISABLE KEYS */;
INSERT INTO `books_cat` VALUES (4725986103,1375700406),(6498743378,1375700406),(9739301605,1375700406),(1874983876,1397279423),(7354357364,1397279423),(8039206068,2493035332),(8045486815,2493035332),(6476539375,3446909799),(3450237097,4498769093),(7946326112,4498769093),(1256177194,5054437242),(6428239261,5054437242),(7074225098,5611248335),(4827009352,7659550490),(5308275872,8050736988);
/*!40000 ALTER TABLE `books_cat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `Cat_Code` bigint(20) NOT NULL,
  `Cat_Desc` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Cat_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1375700406,'Spooky Wooky'),(1397279423,'I give up. This one has no category description'),(2493035332,'Do not read...boring as hell'),(3446909799,'Ew'),(4498769093,'Why are you even reading this sh**'),(5054437242,'Very Bloody Wowe'),(5611248335,'Information about things that no one cares about'),(7659550490,'Mystery I guess?'),(8050736988,'I\'m running out of categories');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_details`
--

DROP TABLE IF EXISTS `contact_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_details` (
  `Contact_ID` bigint(20) NOT NULL,
  `Cust_ID` varchar(255) NOT NULL,
  PRIMARY KEY (`Contact_ID`),
  KEY `Cust_ID_idx` (`Cust_ID`),
  CONSTRAINT `Cust_ID123asagfa` FOREIGN KEY (`Cust_ID`) REFERENCES `customers` (`Cust_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_details`
--

LOCK TABLES `contact_details` WRITE;
/*!40000 ALTER TABLE `contact_details` DISABLE KEYS */;
INSERT INTO `contact_details` VALUES (609315,'abcd'),(568103,'epsteindidntkillhimself@gmail.com'),(599996,'HowManyUniqueEmailsAreThere@counter.com'),(351505,'ILiveOutsideInTheDumpster@poor.com'),(966922,'KneesWeakArmsSpaghetti@momsspaghetti.com'),(863438,'MakeMeSpaghetti@hesnotready.com'),(992090,'ManEveryoneSaysThat@nooneeveryone.com'),(219755,'ManImSoTiredMakingTheseEmails@wtfisthis.com'),(270139,'VomitOnHisSweaterSpaghetti@momsspaghetti.com'),(390657,'WhereCanIGetSomeMoneyMan@poorlyfe.relatable'),(279384,'YoStopCuttingMeO@hahaloser.com'),(265568,'YourOtherProjectPartners'),(229202,'YRURUNNING@2fas.com');
/*!40000 ALTER TABLE `contact_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `Cust_ID` varchar(255) NOT NULL,
  `First` varchar(25) DEFAULT NULL,
  `Last` varchar(25) DEFAULT NULL,
  `Password` varchar(255) NOT NULL,
  `Type` varchar(45) NOT NULL,
  PRIMARY KEY (`Cust_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('abcd','ace','guy','abcd','cust'),('admin','admin','admin','admin','admin'),('asd@gmail.com','sadaq','qweqwe','111','cust'),('epsteindidntkillhimself@gmail.com','Peter','Porter','12512','cust'),('HowManyUniqueEmailsAreThere@counter.com','Nelson','Dixon','1234','cust'),('ILiveOutsideInTheDumpster@poor.com','Nathan','Chavez','11dsdg','cust'),('KneesWeakArmsSpaghetti@momsspaghetti.com','Edward','Flores','asgasd','cust'),('MakeMeSpaghetti@hesnotready.com','Phyllis','Phillips','asgas','cust'),('ManEveryoneSaysThat@nooneeveryone.com','Rose','Hall','cvndgf','cust'),('ManImSoTiredMakingTheseEmails@wtfisthis.com','Ian','Miller','dfhwr','cust'),('VomitOnHisSweaterSpaghetti@momsspaghetti.com','Beverley','Shaw','hsdfhb','cust'),('WhereCanIGetSomeMoneyMan@poorlyfe.relatable','Barbara','Knight','wehwr','cust'),('YoStopCuttingMeO@hahaloser.com','Ted','Jenkins','werdf','cust'),('YourOtherProjectPartners','Amy','Holmes','wevsdg','cust'),('YRURUNNING@2fas.com','Dennis','Alexander','asfhhrw','cust');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email`
--

DROP TABLE IF EXISTS `email`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `email` (
  `Email` varchar(255) NOT NULL,
  `Contact_ID` bigint(20) NOT NULL,
  PRIMARY KEY (`Email`,`Contact_ID`),
  KEY `Contact_ID` (`Contact_ID`),
  CONSTRAINT `email_ibfk_1` FOREIGN KEY (`Contact_ID`) REFERENCES `contact_details` (`Contact_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email`
--

LOCK TABLES `email` WRITE;
/*!40000 ALTER TABLE `email` DISABLE KEYS */;
INSERT INTO `email` VALUES ('WhereCanIGetSomeMoneyMan@poorlyfe.relatable',219755),('WhatTheHellIsThisEmail@jpeg.com',229202),('YRURUNNING@2fas.com',265568),('WhatTheHellIsThisEmail@jpeg.com',270139),('ILiveOutsideInTheDumpster@poor.com',279384),('KneesWeakArmsSpaghetti@momsspaghetti',351505),('YoStopCuttingMeO@hahaloser.com',390657),('ManEveryoneSaysThat@nooneeveryone.com',568103),('ILiveOutsideInTheDumpster@poor.com',599996),('123@123.123',609315),('VomitOnHisSweaterSpaghetti@momsspaghetti.com',863438),('MakeMeSpaghetti@hesnotready.com',966922),('ManImSoTiredMakingTheseEmails@wtfisthis.com',992090);
/*!40000 ALTER TABLE `email` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `Item_Num` bigint(20) NOT NULL,
  `Item_Price` double DEFAULT NULL,
  PRIMARY KEY (`Item_Num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (123,123),(999,9.99),(1234,1234),(3087934231,208.51),(4057605789,485.5),(4093866179,981.37),(4182003314,125.1),(5766502456,339.94),(5785973791,343.99),(6071330408,330.83),(6275179829,385.58),(6443255953,693.6),(6933813897,640.02),(7878710940,886.61),(8653363619,386.91),(8678111669,767.42),(8859785776,512.8),(9892677000,362.85);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `Ord_ID` bigint(20) NOT NULL,
  `Cust_ID` varchar(255) NOT NULL,
  `Ord_Date` varchar(15) NOT NULL,
  `Item_Num` bigint(20) NOT NULL,
  `Total` double DEFAULT NULL,
  PRIMARY KEY (`Ord_ID`,`Cust_ID`,`Item_Num`),
  KEY `Item_Num` (`Item_Num`),
  KEY `Cust_ID_idx` (`Cust_ID`),
  KEY `Cust_ID` (`Cust_ID`) /*!80000 INVISIBLE */,
  KEY `Cust_ID_2` (`Cust_ID`) /*!80000 INVISIBLE */,
  CONSTRAINT `cxzbxbc` FOREIGN KEY (`Cust_ID`) REFERENCES `customers` (`Cust_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`Item_Num`) REFERENCES `items` (`Item_Num`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1500203,'ManImSoTiredMakingTheseEmails@wtfisthis.com','11/17/19',9892677000,421),(2936125,'YRURUNNING@2fas.com','11/18/19',6443255953,326),(2957515,'VomitOnHisSweaterSpaghetti@momsspaghetti.com','11/14/19',8859785776,165),(3008229,'abcd','12/2/2019',3087934231,208.51),(3067220,'ILiveOutsideInTheDumpster@poor.com','11/15/19',4057605789,227),(3215051,'HowManyUniqueEmailsAreThere@counter.com','11/11/19',4093866179,262),(4504490,'HowManyUniqueEmailsAreThere@counter.com','11/15/19',4182003314,347),(4550430,'YoStopCuttingMeO@hahaloser.com','11/06/19',3087934231,124),(4612926,'YoStopCuttingMeO@hahaloser.com','11/22/19',8678111669,777),(4825869,'MakeMeSpaghetti@hesnotready.com','11/18/19',7878710940,666),(4951174,'MakeMeSpaghetti@hesnotready.com','11/21/19',6071330408,888),(6984086,'YourOtherProjectPartners','11/13/19',5785973791,123),(7044013,'WhereCanIGetSomeMoneyMan@poorlyfe.relatable','11/12/19',5766502456,321),(7713179,'asd@gmail.com','11/27/2019',3087934231,444),(8361190,'ManImSoTiredMakingTheseEmails@wtfisthis.com','11/19/19',6275179829,333),(8797595,'ManEveryoneSaysThat@nooneeveryone.com','11/16/19',8653363619,111),(9917055,'epsteindidntkillhimself@gmail.com','11/23/19',6933813897,555);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone`
--

DROP TABLE IF EXISTS `phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phone` (
  `Phone` bigint(20) NOT NULL,
  `Contact_ID` bigint(20) NOT NULL,
  PRIMARY KEY (`Phone`,`Contact_ID`),
  KEY `Contact_ID` (`Contact_ID`),
  CONSTRAINT `phone_ibfk_1` FOREIGN KEY (`Contact_ID`) REFERENCES `contact_details` (`Contact_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone`
--

LOCK TABLES `phone` WRITE;
/*!40000 ALTER TABLE `phone` DISABLE KEYS */;
INSERT INTO `phone` VALUES (8208035727,219755),(9760175061,229202),(5600480226,265568),(9760175061,270139),(6356563637,279384),(4872685318,351505),(5188425173,390657),(8208035727,568103),(6356563637,599996),(1111111111,609315),(7437380040,863438),(3755338747,966922),(4180679736,992090);
/*!40000 ALTER TABLE `phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `representative`
--

DROP TABLE IF EXISTS `representative`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `representative` (
  `ID` bigint(20) NOT NULL,
  `First` varchar(25) NOT NULL,
  `Last` varchar(25) NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Cell_Num` bigint(20) DEFAULT NULL,
  `Work_Num` bigint(20) DEFAULT NULL,
  `Name` varchar(50) NOT NULL,
  PRIMARY KEY (`Name`,`ID`),
  CONSTRAINT `representative_ibfk_1` FOREIGN KEY (`Name`) REFERENCES `supplier` (`Name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `representative`
--

LOCK TABLES `representative` WRITE;
/*!40000 ALTER TABLE `representative` DISABLE KEYS */;
INSERT INTO `representative` VALUES (3546188,'Carroll','Cox','WoweSuchRep@doge.com',9290509703,9294572169,'3Poor5Me Inc.'),(1902767,'Larry','Scott','LarryIScamForALivingScott@scammer.com',4247290690,4244897654,'Definitely Not A Scam Co.'),(2391888,'Norine','Campbell','NorineCampbel@wowusingsuchauniquenamearentya.com',4081472739,4087436512,'Despacito Famerino Inc.'),(6587488,'Arthur','Allen','GenericEmailGenerator@generator.com',6739072944,6734187593,'Gib Mony Nao Ples 2 Por Inc.'),(5363005,'Esther','Jenkins','HowDoITypeInMyEmail.googlesearchbar.com',4824314426,4824157364,'HackerMang 2077 Co.'),(4954837,'Mallory','Johnson','DontLookAtMyBrowsingHistory@lackofprivacy.com',2932826008,2932826008,'Look For Another Supplier Inc.'),(1102766,'Jane','Hunt','IGuessImStuckWithThisEmail@notascam.com',7544245720,7544712485,'Ples Gib Mony Co.'),(9603858,'Anton','Flores','IKnowWhereYouLive@gps.com',9180428281,9180428281,'Scammy McScamFace Inc.'),(4057160,'Regan','Hudson','MegaPooperScooper@trashcan.outside',3265884800,3268761954,'Super Poor Almost Bankrupt Co.'),(3653042,'Don','Chapman','XxXSuperScammerXxX@idontknow.com',3157230122,3157230122,'This Is Literally A Meme Company Co.'),(3301182,'Kenley','Fox','WhyAreYouAtMyHouse@defnotacreep.com',3728760740,3724876234,'Underpaid Workers 24/7/365 Co.'),(9664245,'Gertrude','Robertson','YoCanIChangeThisEmail@googlesearchbar.com',7764919122,7764919122,'We Don\'t Supply Books FFS Inc.'),(2494192,'Diana','Hayes','PoopyDumbDumbHead@doodoo.com',8503252284,8503252284,'We Hack People\'s Accounts For A Living Inc.'),(3526317,'Randall','Russell','MasterHackerMang@loser4ever.com',9817626852,9817626852,'We Steal Money From People Inc.'),(5076033,'Beatrix','Richards','WhatAMeme@qwiuehjhsadkd.com',6724040384,6724040384,'Y U DO DIS Co.');
/*!40000 ALTER TABLE `representative` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `ISBN` bigint(20) NOT NULL,
  `Cust_ID` varchar(255) NOT NULL,
  `Review` varchar(2000) DEFAULT NULL,
  `Rating` int(11) NOT NULL,
  PRIMARY KEY (`ISBN`,`Cust_ID`),
  KEY `cust_id1234_idx` (`Cust_ID`),
  KEY `cust_id1234_id` (`Cust_ID`),
  CONSTRAINT `;bkjn` FOREIGN KEY (`Cust_ID`) REFERENCES `customers` (`Cust_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ISBN` FOREIGN KEY (`ISBN`) REFERENCES `books` (`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1256177194,'asd@gmail.com','',3),(1256177194,'epsteindidntkillhimself@gmail.com','abc',4),(1256177194,'YourOtherProjectPartners','Wow, this guide sure is useful! I won\'t learn anything in college! And I\'ll make sure to never help on projects!',5),(1874983876,'epsteindidntkillhimself@gmail.com','WTF is this book it\'s so garbage',2),(3450237097,'epsteindidntkillhimself@gmail.com','So yeah can you give us a good grade? Please?',1),(4725986103,'epsteindidntkillhimself@gmail.com','',1),(4827009352,'epsteindidntkillhimself@gmail.com','Yeah, this book helped me get like 100 extra credit points',2),(5308275872,'epsteindidntkillhimself@gmail.com','Why do I keep getting books that have nothing in them?',4),(6428239261,'epsteindidntkillhimself@gmail.com','Wow very disappointed...The book only has the title, no pages...',3),(6476539375,'epsteindidntkillhimself@gmail.com','Such a great title and the pages are so easy to read!! Just kidding this book sucks',4),(6498743378,'epsteindidntkillhimself@gmail.com','I can like so like totally like relate to like this title',0),(7074225098,'epsteindidntkillhimself@gmail.com','10/10 would BS college again',4),(7354357364,'epsteindidntkillhimself@gmail.com','Great Title! BECAUSE THAT\'S THE ONLY THING GOOD ABOUT THIS BOOK',2),(7946326112,'epsteindidntkillhimself@gmail.com','Is it possible to get even more made than I am now?',1),(8039206068,'epsteindidntkillhimself@gmail.com','',2),(8045486815,'epsteindidntkillhimself@gmail.com','Can there be an even better title?',4),(9739301605,'epsteindidntkillhimself@gmail.com','Pretty much the majority of us amiright?',3);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipment`
--

DROP TABLE IF EXISTS `shipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipment` (
  `Ship_ID` bigint(20) NOT NULL,
  `Ship_Date` varchar(10) NOT NULL,
  `Ord_ID` bigint(20) NOT NULL,
  PRIMARY KEY (`Ship_ID`,`Ord_ID`),
  KEY `Ord_ID` (`Ord_ID`),
  CONSTRAINT `shipment_ibfk_1` FOREIGN KEY (`Ord_ID`) REFERENCES `orders` (`Ord_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipment`
--

LOCK TABLES `shipment` WRITE;
/*!40000 ALTER TABLE `shipment` DISABLE KEYS */;
INSERT INTO `shipment` VALUES (16227971,'11/29/19',9917055),(20426809,'12/01/19',3067220),(22049418,'12/10/19',1500203),(41129364,'11/31/19',7044013),(48999611,'11/29/19',4825869),(65496410,'11/31/19',4550430),(69821095,'12/03/19',2957515),(72241870,'11/28/19',8361190),(77361262,'12/05/19',4951174),(81019147,'12/02/19',6984086),(81471388,'11/30/19',2936125),(85324875,'11/31/19',3215051),(90668479,'11/28/19',4504490),(93255061,'11/27/19',4612926),(97127645,'11/29/19',8797595);
/*!40000 ALTER TABLE `shipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `Name` varchar(50) NOT NULL,
  `ISBN` bigint(20) NOT NULL,
  PRIMARY KEY (`Name`),
  KEY `ISBN` (`ISBN`),
  CONSTRAINT `supplier_ibfk_1` FOREIGN KEY (`ISBN`) REFERENCES `books` (`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES ('Definitely Not A Scam Co.',1256177194),('HackerMang 2077 Co.',1874983876),('3Poor5Me Inc.',3450237097),('Ples Gib Mony Co.',4725986103),('This Is Literally A Meme Company Co.',4827009352),('Super Poor Almost Bankrupt Co.',5308275872),('We Hack People\'s Accounts For A Living Inc.',6428239261),('Despacito Famerino Inc.',6476539375),('We Don\'t Supply Books FFS Inc.',6498743378),('We Steal Money From People Inc.',7074225098),('Underpaid Workers 24/7/365 Co.',7354357364),('Scammy McScamFace Inc.',7946326112),('Gib Mony Nao Ples 2 Por Inc.',8039206068),('Y U DO DIS Co.',8045486815),('Look For Another Supplier Inc.',9739301605);
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `writes`
--

DROP TABLE IF EXISTS `writes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `writes` (
  `Author_ID` bigint(20) NOT NULL,
  `ISBN` bigint(20) NOT NULL,
  PRIMARY KEY (`Author_ID`,`ISBN`),
  KEY `ISBN` (`ISBN`),
  CONSTRAINT `writes_ibfk_1` FOREIGN KEY (`Author_ID`) REFERENCES `author` (`Author_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `writes_ibfk_2` FOREIGN KEY (`ISBN`) REFERENCES `books` (`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `writes`
--

LOCK TABLES `writes` WRITE;
/*!40000 ALTER TABLE `writes` DISABLE KEYS */;
INSERT INTO `writes` VALUES (628737,1874983876),(143263,3450237097),(308147,4725986103),(818989,5308275872),(650938,6428239261),(272624,6476539375),(457123,6498743378),(731660,7074225098),(416458,7354357364),(477440,7946326112),(513450,8045486815);
/*!40000 ALTER TABLE `writes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-02 15:21:12
