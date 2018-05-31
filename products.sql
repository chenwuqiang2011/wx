/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : meixi

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-31 01:22:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `ID` int(10) unsigned NOT NULL COMMENT 'ID',
  `name` varchar(255) NOT NULL COMMENT '菜名',
  `description` varchar(255) DEFAULT NULL COMMENT '描述',
  `category` varchar(255) NOT NULL COMMENT '菜系',
  `nowPrice` varchar(255) NOT NULL COMMENT '现价',
  `oldPrice` varchar(255) DEFAULT NULL COMMENT '原价',
  `discount` varchar(255) DEFAULT NULL COMMENT '折扣',
  `time` varchar(255) NOT NULL COMMENT '制作时间',
  `sales` varchar(255) DEFAULT NULL COMMENT '销售量',
  `isNew` varchar(255) DEFAULT NULL COMMENT '是否新品',
  `isFamous` varchar(255) DEFAULT NULL COMMENT '是否招牌菜',
  `imgurl` varchar(255) NOT NULL COMMENT '图片路径',
  `remain` varchar(255) DEFAULT NULL COMMENT '剩余数量',
  `limit1` varchar(255) DEFAULT NULL COMMENT '限购1份',
  `isSellOut` varchar(255) DEFAULT NULL COMMENT '是否售完',
  `pass100` varchar(255) DEFAULT NULL COMMENT '超过100元减10元',
  `pass200` varchar(255) DEFAULT NULL COMMENT '超过200,减30',
  `promotion` varchar(255) DEFAULT NULL COMMENT '促销价（8折）',
  `createdTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `modifiteTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', '英特尔（Intel）i7-8700K', '英特尔（Intel） i7 8700K 酷睿六核 盒装CPU处理器', 'cpu', '2438.00', '2545.00', '8', '5', '20', 'N', 'N', 'cpu/intel-i7-8700K.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 21:32:59', '2018-05-30 21:32:59');
INSERT INTO `products` VALUES ('2', '英特尔（Intel） i7 8700', '英特尔（Intel） i7 8700 酷睿六核 盒装CPU处理器', 'cpu', '2258.00', '2364.00', '9', '5', '54', 'N', 'N', 'cpu/intel-i7-8700.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 21:33:07', '2018-05-30 21:33:07');
INSERT INTO `products` VALUES ('3', '英特尔（Intel） i5 8600K', '英特尔（Intel） i5 8600K 酷睿六核 盒装CPU处理器', 'cpu', '1729.00', '1799.00', '5', '5', '44', 'N', 'N', 'cpu/intel-i5-8600K.jpg', '100', 'Y', 'N', 'Y', 'Y', '', '2018-05-30 21:59:31', '2018-05-30 21:59:31');
INSERT INTO `products` VALUES ('4', '英特尔（Intel） i5 8600', '英特尔（Intel） i5 8600 酷睿六核 盒装CPU处理器', 'cpu', '1539.00', '1599.00', '9', '5', '21', 'N', 'N', 'cpu/intel-i5-8600.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 21:59:32', '2018-05-30 21:59:32');
INSERT INTO `products` VALUES ('5', '英特尔（Intel） i3 8350K', '英特尔（Intel） i3 8350K 酷睿四核 盒装CPU处理器', 'cpu', '1169.00', '1199.00', '7', '5', '22', 'N', 'N', 'cpu/intel-i3-8350K.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 21:59:32', '2018-05-30 21:59:32');
INSERT INTO `products` VALUES ('6', '英特尔（Intel） i3 8100', '英特尔（Intel） i3 8100 酷睿四核 盒装CPU处理器', 'cpu', '829.00', '849.00', '9', '5', '23', 'N', 'N', 'cpu/intel-i3-8100.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 21:59:33', '2018-05-30 21:59:33');
INSERT INTO `products` VALUES ('7', '英特尔（Intel）G5500 ', '英特尔（Intel）G5500 奔腾双核 盒装CPU处理器', 'cpu', '629.00', '649.00', '9', '5', '24', 'N', 'N', 'cpu/intel-g5500.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 21:59:33', '2018-05-30 21:59:33');
INSERT INTO `products` VALUES ('8', '英特尔（Intel）G5400', '英特尔（Intel）G5400 奔腾双核 盒装CPU处理器', 'cpu', '599.00', '629.00', '8', '5', '25', 'N', 'N', 'cpu/intel-g5400.jpg', '100', 'Y', 'N', '', 'Y', '', '2018-05-30 21:59:34', '2018-05-30 21:59:34');
INSERT INTO `products` VALUES ('9', '英特尔（Intel）G4900', '英特尔（Intel）G4900 赛扬双核 盒装CPU处理器', 'cpu', '369.00', '399.00', '8', '5', '26', 'N', 'N', 'cpu/intel-g5400.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 21:59:34', '2018-05-30 21:59:34');
INSERT INTO `products` VALUES ('10', '英特尔（Intel） i7 7700K', '英特尔（Intel） i7 7700K 酷睿四核 盒装CPU处理器', 'cpu', '2299.00', '2349.00', '9', '5', '27', 'Y', 'N', 'cpu/intel-i7-7700K.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 21:59:34', '2018-05-30 21:59:34');
INSERT INTO `products` VALUES ('11', '英特尔（Intel） i7 7700', '英特尔（Intel） i7 7700 酷睿四核 盒装CPU处理器', 'cpu', '2199.00', '2249.00', '3', '5', '28', 'N', 'N', 'cpu/intel-i7-7700.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 21:59:35', '2018-05-30 21:59:35');
INSERT INTO `products` VALUES ('12', '英特尔（Intel） i5 7600K', '英特尔（Intel） i5 7600K 酷睿四核 盒装CPU处理器', 'cpu', '1599.00', '1699.00', '4', '5', '29', 'N', 'N', 'cpu/intel-i5-7600K.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 21:59:35', '2018-05-30 21:59:35');
INSERT INTO `products` VALUES ('13', '英特尔（Intel） i5 7600', '英特尔（Intel） i5 7600 酷睿四核 盒装CPU处理器', 'cpu', '1499.00', '1599.00', '4', '6', '30', 'N', 'N', 'cpu/intel-i5-7600.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 21:59:36', '2018-05-30 21:59:36');
INSERT INTO `products` VALUES ('14', '英特尔（Intel） i3 7100', '英特尔（Intel） i3 7100 酷睿双核 盒装CPU处理器', 'cpu', '799.00', '829.00', '5', '5', '31', 'N', 'N', 'cpu/intel-i3-7100.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 21:59:36', '2018-05-30 21:59:36');
INSERT INTO `products` VALUES ('15', '英特尔（Intel）奔腾双核G4600', '英特尔（Intel）奔腾双核G4600 盒装CPU处理器', 'cpu', '559.00', '579.00', '5', '5', '32', 'N', 'N', 'cpu/intel-g4600.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 21:59:37', '2018-05-30 21:59:37');
INSERT INTO `products` VALUES ('16', 'AMD 锐龙 7 2700X', 'AMD 锐龙 7 2700X 处理器 8核16线程 AM4 接口 3.7GHz 盒装CPU处理器', 'cpu', '2399.00', '2499.00', '4', '5', '33', 'N', 'N', 'cpu/amd-2700X.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-31 00:53:42', '2018-05-31 00:53:42');
INSERT INTO `products` VALUES ('17', 'AMD 锐龙 7 2700', 'AMD 锐龙 7 2700 处理器 8核16线程 AM4 接口 3.2GHz 盒装CPU处理器', 'cpu', '2199.00', '2299.00', '4', '5', '34', 'N', 'N', 'cpu/amd-2700.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:54:33', '2018-05-31 00:54:33');
INSERT INTO `products` VALUES ('18', 'AMD Threadripper （线程撕裂者）1950X', '锐龙 AMD Threadripper （线程撕裂者）1950X 处理器16核32线程 SocketTR4接口 3.4GHz 盒装CPU处理器', 'cpu', '6499.00', '6699.00', '4', '5', '35', 'N', 'Y', 'cpu/amd-1950X.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 21:59:38', '2018-05-30 21:59:38');
INSERT INTO `products` VALUES ('19', 'AMD APU A6-7400K', 'AMD APU A6-7400K 双核 CPU R5核显 FM2+ 3.5G 盒装处理器', 'cpu', '239.001', '259.00', '5', '5', '36', 'N', 'Y', 'cpu/amd-a6-7400K.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 21:59:39', '2018-05-30 21:59:39');
INSERT INTO `products` VALUES ('20', 'AMD APU系列 A8-7650K', 'AMD APU系列 A8-7650K 四核 R7核显 FM2+接口 盒装CPU处理器', 'cpu', '369.00', '399.00', '4', '6', '37', 'N', 'Y', 'cpu/amd-a8-7650K.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 21:59:42', '2018-05-30 21:59:42');
INSERT INTO `products` VALUES ('21', 'AMD 盒装处理器APU A10-7860K', 'AMD 盒装处理器APU A10-7860K CPU 四核R7核显 FM2+接口 65W', 'cpu', '559.00', '589.00', '8', '7', '38', 'N', 'Y', 'cpu/amd-a10-7860K.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 21:59:44', '2018-05-30 21:59:44');
INSERT INTO `products` VALUES ('22', 'AMD FX系列 FX-8300', 'AMD FX系列 FX-8300 八核 CPU 盒装处理器 AM3+接口 自带幽灵风扇', 'cpu', '569.00', '599.00', '4', '8', '39', 'N', 'Y', 'cpu/amd-fx-8300.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 21:59:46', '2018-05-30 21:59:46');
INSERT INTO `products` VALUES ('23', '金士顿(Kingston)骇客神条 Fury系列 DDR4 2400 16G', '金士顿(Kingston)骇客神条 Fury系列 DDR4 2400 16G 台式机内存', '内存', '1499.00', '1599.00', '4', '8', '40', 'Y', 'Y', 'memory/ddr4-2400-16g.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 23:02:32', '2018-05-30 23:02:32');
INSERT INTO `products` VALUES ('24', '芝奇(G.SKILL) DDR4 16G(8Gx2)套装', '芝奇(G.SKILL)幻光戟系列 DDR4 3200频率 16G(8Gx2)套装 台式机内存 RGB灯条(C16)', '内存', '1399.00', '1499.00', '6', '8', '41', 'N', 'Y', 'memory/ddr4-3200-16g.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 23:02:33', '2018-05-30 23:02:33');
INSERT INTO `products` VALUES ('25', '金士顿(Kingston)DDR4 2400 8G', '金士顿(Kingston)DDR4 2400 8G 台式机内存', '内存', '599.00', '629.00', '6', '8', '42', 'Y', 'N', 'memory/ddr4-2400-8g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:02:34', '2018-05-30 23:02:34');
INSERT INTO `products` VALUES ('26', '金士顿(Kingston)DDR3 1600 8GB', '金士顿(Kingston)DDR3 1600 8GB 台式机内存', '内存', '469.00', '499.00', '6', '8', '43', 'Y', 'N', 'memory/ddr3-1600-8g.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 23:02:34', '2018-05-30 23:02:34');
INSERT INTO `products` VALUES ('27', '芝奇(G.Skill) Ripjaws 4系列 DDR4 8G ', '芝奇(G.Skill) Ripjaws 4系列 DDR4 2400频率 8G 台式机内存 (宾利黑)', '内存', '569.00', '599.00', '8', '8', '44', 'Y', 'N', 'memory/gs-ddr4-2400-8g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:02:35', '2018-05-30 23:02:35');
INSERT INTO `products` VALUES ('28', '金士顿(Kingston)低电压版 DDR3 1600 8GB', '金士顿(Kingston)低电压版 DDR3 1600 8GB 笔记本内存', '内存', '469.00', '499.00', '8', '8', '45', 'Y', 'N', 'memory/nb-ddr3-1600-8g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:02:35', '2018-05-30 23:02:35');
INSERT INTO `products` VALUES ('29', '金士顿(Kingston)骇客神条 Fury系列 DDR4 2400 16G(8GBx2)', '金士顿(Kingston)骇客神条 Fury系列 DDR4 2400 16G(8GBx2) 台式机内存', '内存', '1299.00', '1399.00', '8', '8', '46', 'Y', 'Y', 'memory/ks-ddr4-2400-16g.jpg', '100', 'Y', 'N', '', 'N', 'Y', '2018-05-30 23:02:35', '2018-05-30 23:02:35');
INSERT INTO `products` VALUES ('30', '美商海盗船(USCORSAIR) 复仇者LPX DDR4 2400 8GB', '美商海盗船(USCORSAIR) 复仇者LPX DDR4 2400 8GB 台式机内存', '内存', '629.00', '659.00', '8', '8', '47', 'Y', 'Y', 'memory/us-ddr4-2400-8g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:02:36', '2018-05-30 23:02:36');
INSERT INTO `products` VALUES ('31', '金士顿(Kingston)骇客神条 Fury系列 DDR3 1600 8GB', '金士顿(Kingston)骇客神条 Fury系列 DDR3 1600 8GB台式机内存(HX316C10F/8)蓝色', '内存', '469.00', '509.00', '7', '8', '48', 'Y', 'N', 'memory/fu-ddr3-1600-8g.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 23:02:36', '2018-05-30 23:02:36');
INSERT INTO `products` VALUES ('32', '十铨(Team) 火神系列 DDR4 2400 8G', '十铨(Team) 火神系列 DDR4 2400 8G 红色 台式机内存', '内存', '539.00', '579.00', '8', '8', '49', 'Y', 'N', 'memory/te-ddr4-2400-8g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:02:37', '2018-05-30 23:02:37');
INSERT INTO `products` VALUES ('33', '威刚(ADATA)龙耀系列 DDR4 3200频 16G', '威刚(ADATA) XPG-龙耀系列 DDR4 3200频 16G(8Gx2)套装 台式机内存(RGB灯条)', '内存', '1199.00', '1299.00', '8', '8', '50', 'Y', 'N', 'memory/ad-ddr4-3200-16g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:02:37', '2018-05-30 23:02:37');
INSERT INTO `products` VALUES ('34', '威刚(ADATA) XPG-威龙系列 DDR4 3200频 8GB', '威刚(ADATA) XPG-威龙系列 DDR4 3200频 8GB 台式机内存(金色)', '内存', '569.00', '599.00', '7', '8', '51', 'Y', 'N', 'memory/ad-ddr4-3200-8g.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 23:02:37', '2018-05-30 23:02:37');
INSERT INTO `products` VALUES ('35', '光威(Gloway) 悍将 DDR4 4GB 2133频', '光威(Gloway) 悍将 DDR4 4GB 2133频 台式机内存', '内存', '339.00', '369.00', '6', '8', '52', 'Y', 'N', 'memory/ddr3-2133-4g.jpg', '100', 'Y', 'N', '', 'N', 'Y', '2018-05-30 23:02:38', '2018-05-30 23:02:38');
INSERT INTO `products` VALUES ('36', '金士顿(Kingston)笔记本内存 DDR4 2400 8GB', '金士顿(Kingston)骇客神条 Impact系列 DDR4 2400 8GB笔记本内存', '内存', '759.00', '799.00', '7', '8', '53', 'Y', 'N', 'memory/nb-ddr4-2400-8g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:02:38', '2018-05-30 23:02:38');
INSERT INTO `products` VALUES ('37', ' 威刚（ADATA）DDR3 1600 8G', ' 威刚（ADATA） 万紫千红DDR3 1600兼容1333 2G/4G/8G台式机内存条 8G 1600 万紫千红', '内存', '369.00', '389.00', '7', '8', '54', 'N', 'N', 'memory/ddr3-1333-8g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:02:39', '2018-05-30 23:02:39');
INSERT INTO `products` VALUES ('38', 'CRUCIAL 英睿达镁光DDR4 2400 8G', 'CRUCIAL 英睿达镁光 铂胜运动LT系列DDR4 2400 8G台式机内存', '内存', '499.00', '549.00', '7', '8', '55', 'Y', 'N', 'memory/cr-ddr4-2400-8g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:02:39', '2018-05-30 23:02:39');
INSERT INTO `products` VALUES ('39', '宇瞻（Apacer） 黑豹玩家系列 DDR4 2666 16G(8G*2)', '宇瞻（Apacer） 黑豹玩家系列 RGB灯条 DDR4 台式机内存 金色 2666 16G(8G*2)', '内存', '1299.00', '1399.00', '8', '8', '56', 'N', 'N', 'memory/ddr4-2666-16g.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 23:02:40', '2018-05-30 23:02:40');
INSERT INTO `products` VALUES ('40', '阿斯加特(Asgard) 洛极系列 DDR4 16G', '阿斯加特(Asgard) 洛极系列 DDR4 16G 2400频率 台式机内存', '内存', '929.00', '999.00', '8', '8', '57', 'Y', 'N', 'memory/as-ddr4-2400-16g.jpg', '100', 'Y', 'N', '', 'Y', '', '2018-05-30 23:02:44', '2018-05-30 23:02:44');
INSERT INTO `products` VALUES ('41', '西部数据(WD)蓝盘 2TB', '西部数据(WD)蓝盘 2TB SATA6Gb/s 64M 台式机硬盘(WD20EZRZ)', '硬盘', '329.00', '369.00', '8', '8', '58', 'N', 'Y', 'hd/wd-2tb.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:32:42', '2018-05-30 23:32:42');
INSERT INTO `products` VALUES ('42', '希捷（酷鱼1TB）', '希捷&INTEL高性能存储解决解决方案（酷鱼1T+Optane 傲腾16G内存）\r\n京 东 价', '硬盘', '359.00', '388.00', '8', '8', '59', 'Y', 'N', 'hd/st-1tb.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 23:32:47', '2018-05-30 23:32:47');
INSERT INTO `products` VALUES ('43', '希捷(SEAGATE)酷鱼系列 4TB', '希捷(SEAGATE)酷鱼系列 4TB 5400转256M SATA6Gb/s 台式机机械硬盘(ST4000DM004)', '硬盘', '629.00', '669.00', '8', '8', '60', 'N', 'N', 'hd/st-4tb.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 23:32:48', '2018-05-30 23:32:48');
INSERT INTO `products` VALUES ('44', '西部数据(WD)红盘 4TB', '西部数据(WD)红盘 4TB SATA6Gb/s 64M 网络储存(NAS)硬盘(WD40EFRX)', '硬盘', '939.00', '999.00', '8', '8', '61', 'Y', 'N', 'hd/wd-4tb.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:32:48', '2018-05-30 23:32:48');
INSERT INTO `products` VALUES ('45', '西部数据(WD)红盘 8TB ', '西部数据(WD)红盘 8TB SATA6Gb/s 128M 网络储存(NAS)硬盘(WD80EFZX)', '硬盘', '2199.00', '2299.00', '8', '8', '62', 'N', 'N', 'hd/wd-8tb.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:32:49', '2018-05-30 23:32:49');
INSERT INTO `products` VALUES ('46', '西部数据(WD)紫盘 4TB', '西部数据(WD)紫盘 4TB SATA6Gb/s 64M 监控硬盘(WD40EJRX)', '硬盘', '839.00', '899.00', '8', '8', '63', 'Y', 'N', 'hd/z-wd-4tb.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:32:55', '2018-05-30 23:32:55');
INSERT INTO `products` VALUES ('47', '东芝(TOSHIBA)P300系列 3TB', '东芝(TOSHIBA)P300系列 3TB 7200转64M SATA3 台式机硬盘(HDWD130)', '硬盘', '489.00', '519.00', '8', '8', '64', 'N', 'N', 'hd/toshiba-3tb.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 23:32:55', '2018-05-30 23:32:55');
INSERT INTO `products` VALUES ('48', '西部数据(WD)黑盘 1TB 笔记本硬盘', '西部数据(WD)黑盘 1TB SATA6Gb/s 7200转32M 笔记本硬盘(WD10JPLX)', '硬盘', '449.00', '499.00', '8', '8', '65', 'Y', 'N', 'hd/nb-wd-1tb.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:32:56', '2018-05-30 23:32:56');
INSERT INTO `products` VALUES ('49', '西部数据(WD)蓝盘 500G', '西部数据(WD)蓝盘 500G SATA6Gb/s 5400转16M 笔记本硬盘(WD5000LPCX)', '硬盘', '249.00', '269.00', '8', '8', '66', 'N', 'N', 'hd/wd-500g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:32:57', '2018-05-30 23:32:57');
INSERT INTO `products` VALUES ('50', '三星(SAMSUNG) 860 EVO 250G SATA3 固态硬盘', '三星(SAMSUNG) 860 EVO 250G SATA3 固态硬盘（MZ-76E250B）', '硬盘', '489.00', '519.00', '8', '8', '67', 'Y', 'Y', 'hd/sam-250g.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-31 01:19:15', '2018-05-31 01:19:15');
INSERT INTO `products` VALUES ('51', '金士顿(Kingston)A400系列 240G SATA3 固态硬盘', '金士顿(Kingston)A400系列 240G SATA3 固态硬盘', '硬盘', '369.00', '399.00', '8', '8', '68', 'N', 'Y', 'hd/ks-240g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:32:58', '2018-05-30 23:32:58');
INSERT INTO `products` VALUES ('52', '闪迪(SanDisk) 加强版 240G 固态硬盘', '闪迪(SanDisk) 加强版 240G 固态硬盘', '硬盘', '369.00', '399.00', '8', '8', '69', 'Y', 'Y', 'hd/san-240g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:32:58', '2018-05-30 23:32:58');
INSERT INTO `products` VALUES ('53', '东芝(TOSHIBA)固态硬盘 240GB', '东芝(TOSHIBA) TR200系列 240GB SATA3 固态硬盘', '硬盘', '369.00', '399.00', '8', '8', '70', 'N', 'Y', 'hd/toshiba-240g.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 23:32:59', '2018-05-30 23:32:59');
INSERT INTO `products` VALUES ('54', '联想（Lenovo)SL700 120G', '联想（Lenovo)SL700 120G SATA3 闪电鲨系列SSD固态硬盘', '硬盘', '209.00', '219.00', '8', '8', '71', 'Y', 'Y', 'hd/len-120g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:33:00', '2018-05-30 23:33:00');
INSERT INTO `products` VALUES ('55', '英特尔（Intel）545S系列 256G', '英特尔（Intel）545S系列 256G SATA 固态硬盘', '硬盘', '509.00', '549.00', '8', '8', '72', 'Y', 'N', 'hd/intel-256g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:33:01', '2018-05-30 23:33:01');
INSERT INTO `products` VALUES ('57', '三星(SAMSUNG) 960 EVO 500G', '三星(SAMSUNG) 960 EVO 500G M.2 NVMe 固态硬盘', '硬盘', '1299.00', '1399.00', '8', '8', '74', 'N', 'N', 'hd/sam-500g.jpg', '100', 'Y', 'N', '', 'Y', '', '2018-05-30 23:33:02', '2018-05-30 23:33:02');
INSERT INTO `products` VALUES ('58', 'HP 250G固态硬盘', 'HP EX900系列 250G M.2 NVMe 固态硬盘', '硬盘', '469.00', '499.00', '8', '8', '75', 'N', 'N', 'hd/hp250g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:33:03', '2018-05-30 23:33:03');
INSERT INTO `products` VALUES ('59', '联想（Lenovo）SL700 128G', '联想（Lenovo）SL700 128G M.2 2242 固态宝系列 SSD固态硬盘', '硬盘', '299.00', '329.00', '8', '8', '76', 'N', 'N', 'hd/len-128g.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:33:04', '2018-05-30 23:33:04');
INSERT INTO `products` VALUES ('60', '建兴(LITEON) T10 120G', '建兴(LITEON) 睿速系列 T10 120G M.2 NVMe固态硬盘 红色版（带散热片）', '硬盘', '369.00', '399.00', '8', '8', '77', 'N', 'N', 'hd/li-120g.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 23:33:06', '2018-05-30 23:33:06');
INSERT INTO `products` VALUES ('61', '华硕 AsUS B360M-PLUS', '华硕 ASUS TUF B360M-PLUS GAMING 电竞特工 主板 吃鸡 国民电竞游戏主板（Intel B360/LGA 1151）', '主板', '719.00', '799.00', '8', '8', '78', 'N', 'N', 'mainboard/asus-b360.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:41:46', '2018-05-30 23:41:46');
INSERT INTO `products` VALUES ('62', '华硕（ASUS） Z370-A', '华硕（ASUS）PRIME Z370-A 主板(Intel Z370/LGA 1151)+英特尔 i7 8700 板U套装/主板+CPU套装', '主板', '3599.00', '3699.00', '8', '8', '79', 'N', 'N', 'mainboard/asus-z370.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:41:47', '2018-05-30 23:41:47');
INSERT INTO `products` VALUES ('63', '技嘉（GIGABYTE）Z370', '技嘉（GIGABYTE）Z370 AORUS Ultra Gaming 主板 (Intel Z370/LGA 1151)', '主板', '1099.00', '1199.00', '8', '8', '80', 'N', 'N', 'mainboard/giga-z370.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 23:41:48', '2018-05-30 23:41:48');
INSERT INTO `products` VALUES ('64', '微星（MSI）B350M', '微星（MSI）B350M MORTAR迫击炮主板+锐龙 AMD Ryzen 5 1600 CPU 板U套装/主板+CPU套装', '主板', '1659.00', '1719.00', '8', '8', '81', 'N', 'N', 'mainboard/msi-b350m.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:41:49', '2018-05-30 23:41:49');
INSERT INTO `products` VALUES ('65', '微星（MSI）Z370', '微星（MSI）Z370 TOMAHAWK战斧导弹 主板（Intel Z370/LGA 1151）', '主板', '999.00', '1099.00', '8', '8', '82', 'N', 'N', 'mainboard/msi-z370.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:41:49', '2018-05-30 23:41:49');
INSERT INTO `products` VALUES ('66', '华硕（ASUS）H110M-A', '华硕（ASUS）H110M-A M.2 主板 ( Intel H110/LGA 1151 )', '主板', '419.00', '459.00', '8', '8', '83', 'N', 'N', 'mainboard/asus-h110.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:41:50', '2018-05-30 23:41:50');
INSERT INTO `products` VALUES ('67', '微星（MSI）Z370 GAMING PRO', '微星（MSI）Z370 GAMING PRO CARBON AC暗黑WIFI 主板（Intel Z370/LGA 1151）', '主板', '1499.00', '1599.00', '8', '8', '84', 'N', 'N', 'mainboard/msi-z370p.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 23:41:51', '2018-05-30 23:41:51');
INSERT INTO `products` VALUES ('68', '微星（MSI）B360 GAMING', '微星（MSI）B360 GAMING ARCTIC极地板主板（Intel B360/LGA 1151）', '主板', '799.00', '899.00', '8', '8', '85', 'N', 'N', 'mainboard/msi-b360.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:41:51', '2018-05-30 23:41:51');
INSERT INTO `products` VALUES ('69', '技嘉（GIGABYTE）AB350M-Gaming3', '技嘉（GIGABYTE）AB350M-Gaming 3 主板 (AMD B350/Socket AM4)', '主板', '529.00', '599.00', '8', '8', '86', 'N', 'N', 'mainboard/giga-b350.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:41:52', '2018-05-30 23:41:52');
INSERT INTO `products` VALUES ('70', '技嘉（GIGABYTE）H81M-DS2主板', '技嘉（GIGABYTE）H81M-DS2主板 (Intel H81/LGA 1150)', '主板', '329.00', '379.00', '8', '8', '87', 'N', 'N', 'mainboard/giga-h81.jpg', '100', 'Y', 'N', '', 'N', 'Y', '2018-05-30 23:41:54', '2018-05-30 23:41:54');
INSERT INTO `products` VALUES ('71', '华硕（ASUS）DUAL-GeForce GTX1060-O6G', '华硕（ASUS）DUAL-GeForce GTX1060-O6G 1569-1809MHz 6G/8GHz GDDR5 雪豹系列游戏“吃鸡”显卡', '显卡', '2399.00', '2499.00', '8', '8', '88', 'N', 'N', 'gpu/asus-gtx1060.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:57:28', '2018-05-30 23:57:28');
INSERT INTO `products` VALUES ('72', '七彩虹(Colorful)iGame GTX1060', '七彩虹(Colorful)iGame1060烈焰战神S-6GD5 Top GTX1060 1594-1809MHz/8008MHz6G192bit吃鸡显卡', '显卡', '2059.00', '2259.00', '8', '8', '89', 'N', 'N', 'gpu/col-gts1060.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:57:29', '2018-05-30 23:57:29');
INSERT INTO `products` VALUES ('73', '微星（MSI）GTX 1080 Ti', '微星（MSI）GTX 1080 Ti GAMING X TRIO 1683-1569MHz 352BIT 11GB GDDR5X PCI-E 3.0 微星飓龙 吃鸡显卡', '显卡', '7299.00', '7499.00', '8', '8', '90', 'N', 'N', 'gpu/msi-1080ti.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:57:30', '2018-05-30 23:57:30');
INSERT INTO `products` VALUES ('74', '微星（MSI）GeForce GTX 1060', '微星（MSI）GeForce GTX 1060 GAMING X 6G 1594-1809MHZ GDDR5 192BIT PCI-E 3.0 旗舰红龙 吃鸡显卡', '显卡', '2499.00', '2599.00', '8', '8', '91', 'N', 'N', 'gpu/msi-1060.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-30 23:57:30', '2018-05-30 23:57:30');
INSERT INTO `products` VALUES ('75', '英伟达（NVIDIA）TITAN V 显卡', '英伟达（NVIDIA）TITAN V 显卡', '显卡', '22399.00', '22999.00', '8', '8', '92', 'N', 'N', 'gpu/tian-v.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:57:31', '2018-05-30 23:57:31');
INSERT INTO `products` VALUES ('76', '索泰（ZOTAC）GeForce GTX1060', '索泰（ZOTAC）GeForce GTX1060 X-GAMING OC吃鸡显卡/游戏电竞台式机独立显卡 6GD5/1569-1784/8008MHz', '显卡', '2249.00', '2349.00', '8', '8', '93', 'N', 'N', 'gpu/zotac-gtx1060.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:57:31', '2018-05-30 23:57:31');
INSERT INTO `products` VALUES ('77', '影驰（Galaxy）GTX 1060 GAMER', '影驰（Galaxy）GTX 1060 GAMER 1556(1771)MHz/8GHz 6G/192Bit D5 PCI-E吃鸡显卡', '显卡', '2219.00', '2279.00', '8', '8', '94', 'N', 'N', 'gpu/gal-gtx1060.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:57:32', '2018-05-30 23:57:32');
INSERT INTO `products` VALUES ('78', '技嘉(GIGABYTE)GeForce GTX 1050', '技嘉(GIGABYTE)GeForce GTX 1050 OC 1379-1493MHz/7008MHz 2G/128bit游戏显卡', '显卡', '899.00', '949.00', '8', '8', '95', 'Y', 'N', 'gpu/giga-gtx1050.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:57:32', '2018-05-30 23:57:32');
INSERT INTO `products` VALUES ('79', '铭影GTX750Ti 4G显卡', '铭影GTX750Ti 4G显卡吃鸡游戏显卡 台式机独立电脑显卡非gtx1050 2g电脑显卡独显', '显卡', '699.00', '728.00', '8', '8', '96', 'Y', 'N', 'gpu/gtx-750.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-30 23:57:33', '2018-05-30 23:57:33');
INSERT INTO `products` VALUES ('80', '华硕（ASUS） PH-GT1030-O2G', '华硕（ASUS） PH-GT1030-O2G 专业游戏独立设计显卡 台式机用', '显卡', '659.00', '699.00', '8', '8', '97', 'Y', 'N', 'gpu/asus-gt1030.jpg', '100', '', 'N', '', 'Y', '', '2018-05-30 23:57:34', '2018-05-30 23:57:34');
INSERT INTO `products` VALUES ('81', '戴尔（DELL） U2417H 23.8英寸', '戴尔（DELL） U2417H 23.8英寸四边微边框旋转升降IPS屏 出厂色彩校准 99%sRGB 电脑吃鸡显示器', '显示器', '1399.00', '1499.00', '8', '8', '98', 'Y', 'N', 'monitor/dell-23.8.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:10:51', '2018-05-31 00:10:51');
INSERT INTO `products` VALUES ('82', '三星（SAMSUNG）C27F390FHC 27英寸', '三星（SAMSUNG）C27F390FHC 27英寸 1800R曲率 广视角低蓝光 曲面电脑液晶显示器（HDMI）', '显示器', '1299.00', '1349.00', '8', '8', '99', 'Y', 'N', 'monitor/sam-27.jpg', '100', 'Y', 'N', '', 'N', 'Y', '2018-05-31 00:10:53', '2018-05-31 00:10:53');
INSERT INTO `products` VALUES ('83', ' AOC I2490VXH/BS 23.8英寸', 'AOC I2490VXH/BS 23.8英寸 1.5mm窄边框 AH-IPS硬屏 低蓝光爱眼不闪屏 24 电脑显示器（HDMI版）', '显示器', '799.00', '849.00', '8', '8', '100', 'Y', 'N', 'monitor/aoc-23.8.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:10:54', '2018-05-31 00:10:54');
INSERT INTO `products` VALUES ('84', '戴尔（DELL）U2518DR 25英寸', '戴尔（DELL）U2518DR 25英寸2K分辨率四边微边框旋转升降IPS屏 HDR 爱眼护眼滤蓝光吃鸡显示器（带HDMI线）', '显示器', '2199.00', '2299.00', '8', '8', '101', 'Y', 'N', 'monitor/dell-25.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-31 00:10:55', '2018-05-31 00:10:55');
INSERT INTO `products` VALUES ('85', 'AOC E2252SWDN 21.5英寸', 'AOC E2252SWDN 21.5英寸LED背光宽屏液晶电脑显示器', '显示器', '569.00', '599.00', '8', '8', '102', 'Y', 'N', 'monitor/aoc-21.5.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:11:00', '2018-05-31 00:11:00');
INSERT INTO `products` VALUES ('86', '戴尔（DELL） SE2416H 23.8英寸', '戴尔（DELL） SE2416H 23.8英寸微边框 HDMI高清接口 广视角IPS屏 电脑显示器', '显示器', '869.00', '899.00', '8', '8', '103', 'Y', 'N', 'monitor/dell-se23.8.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:11:00', '2018-05-31 00:11:00');
INSERT INTO `products` VALUES ('87', '飞利浦（PHILIPS）27英寸', '飞利浦（PHILIPS）27英寸 二代曲面1800R 全金属底座 炫彩MVA屏 纤薄机身 电脑液晶显示器 278E8QDSW', '显示器', '999.00', '1099.00', '8', '8', '104', 'Y', 'N', 'monitor/phi-27.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:11:01', '2018-05-31 00:11:01');
INSERT INTO `products` VALUES ('88', 'AOC Q2790PQ 27英寸 2K', 'AOC Q2790PQ 27英寸 2K IPS广视角 112%NTSC广色域 商用办公 节能 低蓝光不闪 旋转升降液晶显示器', '显示器', '1899.00', '1999.00', '8', '8', '105', 'Y', 'N', 'monitor/aoc-27.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-31 00:11:02', '2018-05-31 00:11:02');
INSERT INTO `products` VALUES ('89', 'TCL T32M6C 31.5英寸', 'TCL T32M6C 31.5英寸1800R曲面抗蓝光不闪高清显示器', '显示器', '999.00', '1079.00', '8', '8', '106', 'Y', 'N', 'monitor/tcl-31.5.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:11:03', '2018-05-31 00:11:03');
INSERT INTO `products` VALUES ('90', '飞利浦（PHILIPS）31.5英寸 2K ', '飞利浦（PHILIPS）31.5英寸 2K QHD高分辨率 低蓝不闪屏 FreeSync技术 电竞模式 电脑液晶显示器327E8FJSW', '显示器', '1299.00', '1349.00', '8', '8', '107', 'Y', 'Y', 'monitor/phi-31.5.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:11:04', '2018-05-31 00:11:04');
INSERT INTO `products` VALUES ('91', '长城（GreatWall）额定500W', '长城（GreatWall）额定500W HOPE-6000DS 电源 （70cm超长背板走线/三年质保/台系电容/12cm静音风扇/宽幅）', '电源', '259.00', '279.00', '8', '8', '108', 'Y', 'N', 'power/gw-500w.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-31 00:20:52', '2018-05-31 00:20:52');
INSERT INTO `products` VALUES ('93', '安钛克(Antec) VP500P 额定500W电源', '安钛克(Antec) VP500P 额定500W电源(主动式PFC/12CM静音风扇/两年质保/台式电脑主机电源/36万好评VP系列)', '电源', '269.00', '299.00', '8', '8', '110', 'Y', 'N', 'power/antec-500w.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:20:53', '2018-05-31 00:20:53');
INSERT INTO `products` VALUES ('94', '酷冷至尊（CoolerMaster）额定450W ', '酷冷至尊（CoolerMaster）额定450W GX450游戏电脑电源（80PLUS铜牌/全日系电容/五年质保/台式机电源）', '电源', '259.00', '299.00', '8', '8', '111', 'Y', 'N', 'power/col-500w.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-31 00:20:53', '2018-05-31 00:20:53');
INSERT INTO `products` VALUES ('95', ' 航嘉（Huntkey）额定500W', '航嘉（Huntkey）额定500W JUMPER500电源（80PLUS白牌/单路40A/主动PFC/双管正激/全电压/背部走线）', '电源', '279.00', '299.00', '8', '8', '112', 'Y', 'N', 'power/huntkey-500w.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:20:54', '2018-05-31 00:20:54');
INSERT INTO `products` VALUES ('96', '先马（SAMA）金牌500W ', '先马（SAMA）金牌500W 额定功率500W(全电压金牌/LLC谐振电路/固态电容/Puer Power)', '电源', '259.00', '289.00', '8', '8', '113', 'Y', 'N', 'power/sama-500w.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:20:54', '2018-05-31 00:20:54');
INSERT INTO `products` VALUES ('97', '美商海盗船（USCorsair）额定650W', '美商海盗船（USCorsair）额定650W RM650x 电源（80PLUS金牌/全模组/静音低载风扇停转/十年质保）', '电源', '829.00', '869.00', '8', '8', '114', 'Y', 'N', 'power/us-650w.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-31 00:20:55', '2018-05-31 00:20:55');
INSERT INTO `products` VALUES ('99', '金河田（Golden field）额定400W', '金河田（Golden field）额定400W 龙霸400台式电脑主机电源(ATX静音游戏/双倍铜强散热/PC电脑配件机箱电源)', '电源', '139.00', '159.00', '8', '8', '116', 'N', 'N', 'power/golden-400w.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:20:55', '2018-05-31 00:20:55');
INSERT INTO `products` VALUES ('100', '鑫谷（Segotep）额定500W', '鑫谷（Segotep）额定500W GP600P白金版电源（白金牌认证/宽幅输入/DC-DC低压电路/智能温控风扇）', '电源', '289.00', '319.00', '8', '8', '117', 'N', 'N', 'power/seg-500w.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:20:55', '2018-05-31 00:20:55');
INSERT INTO `products` VALUES ('101', '航嘉（Huntkey）额定600W', '航嘉（Huntkey）额定600W MVP600电源 (游戏专用/单路45A/半模组/14CM静音风扇/60秒延时冷却/全电压)', '电源', '359.00', '389.00', '8', '8', '118', 'N', 'N', 'power/huntkey-600w.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-31 00:20:56', '2018-05-31 00:20:56');
INSERT INTO `products` VALUES ('102', '爱国者（aigo）额定600W', '爱国者（aigo）额定600W 电竞600全模组台式电脑电源（全电压金牌/全桥谐振电路/五年换新）', '电源', '329.00', '379.00', '8', '8', '119', 'N', 'Y', 'power/aigo-600w.jpg', '100', 'Y', 'N', '', 'Y', '', '2018-05-31 00:20:56', '2018-05-31 00:20:56');
INSERT INTO `products` VALUES ('103', '酷冷至尊MasterBox Lite 5', '酷冷至尊（coolermaster）MasterBox Lite 5(睿)台式电脑主机中塔机箱(ATX主板/前镜面板/侧透/独立电源仓)', '机箱', '269.00', '299.00', '8', '8', '120', 'N', 'N', 'case/lite5.jpg', '100', '', 'N', 'Y', 'Y', '', '2018-05-31 00:28:07', '2018-05-31 00:28:07');
INSERT INTO `products` VALUES ('104', '爱国者（aigo）炫影黑专供版', '爱国者（aigo）炫影黑专供版 电脑机箱（配3把发光风扇/支持ATX主板/蜂窝玻璃面板/背线）', '机箱', '189.00', '219.00', '8', '8', '121', 'N', 'N', 'case/aigo.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:28:09', '2018-05-31 00:28:09');
INSERT INTO `products` VALUES ('105', '至睿逍客N5机箱', '至睿逍客N5机箱（ATX主板/USB3.0/支持SSD/长显卡）', '机箱', '109.00', '129.00', '8', '8', '122', 'N', 'N', 'case/n5.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-31 00:28:10', '2018-05-31 00:28:10');
INSERT INTO `products` VALUES ('108', '航嘉（Huntkey）GX500T白色机箱', '航嘉（Huntkey）GX500T白色机箱（侧透/配1把炫彩风扇/支持ATX主板/宽体游戏电脑机箱/支持长显卡/黑化背线）', '机箱', '189.00', '209.00', '8', '8', '121', 'N', 'N', 'case/gx500.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:31:52', '2018-05-31 00:31:52');
INSERT INTO `products` VALUES ('106', '追风者(PHANTEKS) 416P黑色 中塔ATX', '追风者(PHANTEKS) 416P黑色 中塔ATX侧透RGB水冷机箱(RGB呼吸灯控/配2把风扇/280水冷/防尘/背线/SSD)', '机箱', '269.00', '299.00', '8', '8', '123', 'N', 'N', 'case/416p.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:28:15', '2018-05-31 00:28:15');
INSERT INTO `products` VALUES ('107', '先马（SAMA）黑洞3 黑色', '先马（SAMA）黑洞3 黑色 全塔机箱 （支持ATX主板/静音/宽大箱体/标配3把风扇/调速器/读卡器/ATX-Ⅲ结构）\r\n', '机箱', '359.00', '399.00', '8', '8', '121', 'N', 'N', 'case/sama3.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:30:49', '2018-05-31 00:30:49');
INSERT INTO `products` VALUES ('109', '金河田（Golden field）8511B机箱', '金河田（Golden field）8511B机箱电源套装 办公游戏台式电脑主机机箱套装 ATX省师傅4000额定300W静音电源', '机箱', '199.00', '209.00', '8', '8', '121', 'N', 'N', 'case/8511b.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:32:41', '2018-05-31 00:32:41');
INSERT INTO `products` VALUES ('110', '先马（SAMA）坦克(透彻标准雪装)', '先马（SAMA）坦克(透彻标准雪装) 宽体水冷大透彻简约游戏箱/经典九孔走线/电源独立仓/磁性防尘网/高效散热', '机箱', '189.00', '219.00', '8', '8', '121', 'N', 'N', 'case/sama.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:33:18', '2018-05-31 00:33:18');
INSERT INTO `products` VALUES ('111', 'Tt（Thermaltake）Urban S31 黑色', 'Tt（Thermaltake）Urban S31 黑色 中塔机箱（新版机架设计/大侧透/双U3/背线/支持长显卡/游戏机箱）\r\n', '机箱', '269.00', '299.00', '8', '8', '121', 'N', 'N', 'case/urban.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:34:13', '2018-05-31 00:34:13');
INSERT INTO `products` VALUES ('112', '乔思伯（JONSBO）V4 黑色', '乔思伯（JONSBO）V4 黑色 MINI-MATX机箱（支持MATX主板/全铝机箱/ATX电源/120MM高内散热器/260MM长内显卡）', '机箱', '229.00', '249.00', '8', '8', '122', 'N', 'N', 'case/v4.jpg', '100', '', 'N', '', 'N', 'Y', '2018-05-31 00:34:52', '2018-05-31 00:34:52');
INSERT INTO `products` VALUES ('113', '追风者(PHANTEKS) 416P黑色 中塔ATX', '追风者(PHANTEKS) 416P黑色 中塔ATX侧透RGB水冷机箱(RGB呼吸灯控/配2把风扇/280水冷/防尘/背线/SSD)', '机箱', '269.00', '299.00', '8', '8', '123', 'N', 'N', 'case/416p.jpg', '100', '', 'N', '', 'Y', '', '2018-05-31 00:28:15', '2018-05-31 00:28:15');
SET FOREIGN_KEY_CHECKS=1;
