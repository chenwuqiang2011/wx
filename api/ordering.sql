/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : meixi

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-29 17:15:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ordering
-- ----------------------------
DROP TABLE IF EXISTS `ordering`;
CREATE TABLE `ordering` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `goods` varchar(8000) NOT NULL,
  `address` varchar(8000) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL,
  `paid` varchar(255) NOT NULL,
  `express` varchar(255) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `createTime` varchar(255) NOT NULL,
  `completeTime` varchar(255) NOT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ordering
-- ----------------------------
INSERT INTO `ordering` VALUES ('9', '武强-chen', '[{\"ID\":1,\"name\":\"西柚牛油果沙拉\",\"description\":\"一款西柚牛油果沙拉是女性养颜美容果，即美味又零负担哦~常吃能丰富蛋白质和维生素，提高免疫力，是家人健康养生水果~\",\"category\":\"沙拉\",\"nowPrice\":\"38.00\",\"oldPrice\":\"45.00\",\"discount\":\"8\",\"time\":\"5\",\"sales\":\"20\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"sala/Grapefruit-salad.jpg\",\"remain\":\"100\",\"limit1\":\"\",\"isSellOut\":\"N\",\"pass100\":\"\",\"pass200\":\"Y\",\"promotion\":\"\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false},{\"ID\":2,\"name\":\"牛油果蔬菜沙拉\",\"description\":\"天气越来越热，又是各种沙拉当道的季节，赏心悦目的搭配，富含丰富营养，就是这道清新的牛油果蔬菜沙拉，沙拉中更是添加了富含亚麻酸的亚麻籽油，为这道菜的营养美味加分。\",\"category\":\"沙拉\",\"nowPrice\":\"58.00\",\"oldPrice\":\"64.00\",\"discount\":\"9\",\"time\":\"5\",\"sales\":\"54\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"sala/Avocado-salad.jpg\",\"remain\":\"100\",\"limit1\":\"\",\"isSellOut\":\"N\",\"pass100\":\"\",\"pass200\":\"N\",\"promotion\":\"Y\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false},{\"ID\":3,\"name\":\"干果沙拉\",\"description\":\"简单又健康的干果沙拉，做起来一点也不费力，喜欢的亲们可以试试哦~干果除了做饼干、做蒸糕、或直接当零食，原来搭配胡萝卜和玉米做成沙拉也很好吃，嚼起来很有层次感。\",\"category\":\"沙拉\",\"nowPrice\":\"38.00\",\"oldPrice\":\"66.00\",\"discount\":\"5\",\"time\":\"5\",\"sales\":\"44\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"sala/Dried-fruit-salad.jpg\",\"remain\":\"100\",\"limit1\":\"Y\",\"isSellOut\":\"N\",\"pass100\":\"Y\",\"pass200\":\"Y\",\"promotion\":\"\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false}]', '[{\"name\":\"chen\",\"tel\":\"13511111111\",\"province\":\"山西省\",\"city\":\"太原市\",\"county\":\"市辖区\",\"detail\":\"1111\",\"post\":\"111111\",\"checked\":true}]', '134.00', '3', '微信支付', '快递 免运费', 'test', '1', '2018-05-28 4:55:15', '');
INSERT INTO `ordering` VALUES ('2', '武强-chen', '[{\"ID\":3,\"name\":\"干果沙拉\",\"description\":\"简单又健康的干果沙拉，做起来一点也不费力，喜欢的亲们可以试试哦~干果除了做饼干、做蒸糕、或直接当零食，原来搭配胡萝卜和玉米做成沙拉也很好吃，嚼起来很有层次感。\",\"category\":\"沙拉\",\"nowPrice\":\"38.00\",\"oldPrice\":\"66.00\",\"discount\":\"5\",\"time\":\"5\",\"sales\":\"44\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"sala/Dried-fruit-salad.jpg\",\"remain\":\"100\",\"limit1\":\"Y\",\"isSellOut\":\"N\",\"pass100\":\"Y\",\"pass200\":\"Y\",\"promotion\":\"\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false}]', '[{\"name\":\"陈武强\",\"tel\":\"13538966472\",\"province\":\"广东省\",\"city\":\"广州市\",\"county\":\"海珠区\",\"detail\":\"聚德西路299号\",\"post\":\"510000\",\"checked\":true}]', '38.00', '1', '微信支付', '快递 免运费', '快快快!', '4', '2018-05-28 9:28:04', '2018-05-29 12:12:02');
INSERT INTO `ordering` VALUES ('3', '武强-chen', '[{\"ID\":12,\"name\":\"薯条\",\"description\":\"以后不用特意跑去麦某劳吃薯条\",\"category\":\"小吃\",\"nowPrice\":\"21.00\",\"oldPrice\":\"48.00\",\"discount\":\"4\",\"time\":\"5\",\"sales\":\"29\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"snack/french-fries.jpg\",\"remain\":\"100\",\"limit1\":\"\",\"isSellOut\":\"N\",\"pass100\":\"Y\",\"pass200\":\"Y\",\"promotion\":\"\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false}]', '[{\"name\":\"chen\",\"tel\":\"13511111111\",\"province\":\"山西省\",\"city\":\"太原市\",\"county\":\"市辖区\",\"detail\":\"1111\",\"post\":\"111111\",\"checked\":true}]', '21.00', '1', '微信支付', '快递 免运费', '', '2', '2018-05-28 9:42:04', '');
INSERT INTO `ordering` VALUES ('4', '武强-chen', '[{\"ID\":1,\"name\":\"西柚牛油果沙拉\",\"description\":\"一款西柚牛油果沙拉是女性养颜美容果，即美味又零负担哦~常吃能丰富蛋白质和维生素，提高免疫力，是家人健康养生水果~\",\"category\":\"沙拉\",\"nowPrice\":\"38.00\",\"oldPrice\":\"45.00\",\"discount\":\"8\",\"time\":\"5\",\"sales\":\"20\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"sala/Grapefruit-salad.jpg\",\"remain\":\"100\",\"limit1\":\"\",\"isSellOut\":\"N\",\"pass100\":\"\",\"pass200\":\"Y\",\"promotion\":\"\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false}]', '[{\"name\":\"chen\",\"tel\":\"13511111111\",\"province\":\"山西省\",\"city\":\"太原市\",\"county\":\"市辖区\",\"detail\":\"1111\",\"post\":\"111111\",\"checked\":true}]', '38.00', '1', '微信支付', '快递 免运费', '', '0', '2018-05-28 9:44:43', '');
INSERT INTO `ordering` VALUES ('5', '武强-chen', '[{\"ID\":1,\"name\":\"西柚牛油果沙拉\",\"description\":\"一款西柚牛油果沙拉是女性养颜美容果，即美味又零负担哦~常吃能丰富蛋白质和维生素，提高免疫力，是家人健康养生水果~\",\"category\":\"沙拉\",\"nowPrice\":\"38.00\",\"oldPrice\":\"45.00\",\"discount\":\"8\",\"time\":\"5\",\"sales\":\"20\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"sala/Grapefruit-salad.jpg\",\"remain\":\"100\",\"limit1\":\"\",\"isSellOut\":\"N\",\"pass100\":\"\",\"pass200\":\"Y\",\"promotion\":\"\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false}]', '[{\"name\":\"chen\",\"tel\":\"13511111111\",\"province\":\"山西省\",\"city\":\"太原市\",\"county\":\"市辖区\",\"detail\":\"1111\",\"post\":\"111111\",\"checked\":true}]', '38.00', '1', '微信支付', '快递 免运费', '', '2', '2018-05-28 9:45:21', '');
INSERT INTO `ordering` VALUES ('6', '武强-chen', '[{\"ID\":2,\"name\":\"牛油果蔬菜沙拉\",\"description\":\"天气越来越热，又是各种沙拉当道的季节，赏心悦目的搭配，富含丰富营养，就是这道清新的牛油果蔬菜沙拉，沙拉中更是添加了富含亚麻酸的亚麻籽油，为这道菜的营养美味加分。\",\"category\":\"沙拉\",\"nowPrice\":\"58.00\",\"oldPrice\":\"64.00\",\"discount\":\"9\",\"time\":\"5\",\"sales\":\"54\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"sala/Avocado-salad.jpg\",\"remain\":\"100\",\"limit1\":\"\",\"isSellOut\":\"N\",\"pass100\":\"\",\"pass200\":\"N\",\"promotion\":\"Y\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false}]', '[{\"name\":\"chen\",\"tel\":\"13511111111\",\"province\":\"山西省\",\"city\":\"太原市\",\"county\":\"市辖区\",\"detail\":\"1111\",\"post\":\"111111\",\"checked\":true}]', '58.00', '1', '微信支付', '快递 免运费', '', '0', '2018-05-28 9:46:30', '');
INSERT INTO `ordering` VALUES ('7', '武强-chen', '[{\"ID\":4,\"name\":\"缤纷金枪鱼沙拉\",\"description\":\"吞拿鱼沙拉是一道口味鲜美的家常菜，主要食材是黄瓜。\",\"category\":\"沙拉\",\"nowPrice\":\"58.00\",\"oldPrice\":\"60.00\",\"discount\":\"9\",\"time\":\"5\",\"sales\":\"21\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"sala/Colorful-tuna-salad.jpg\",\"remain\":\"100\",\"limit1\":\"\",\"isSellOut\":\"N\",\"pass100\":\"\",\"pass200\":\"N\",\"promotion\":\"Y\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false}]', '[{\"name\":\"chen\",\"tel\":\"13511111111\",\"province\":\"山西省\",\"city\":\"太原市\",\"county\":\"市辖区\",\"detail\":\"1111\",\"post\":\"111111\",\"checked\":true}]', '58.00', '1', '微信支付', '快递 免运费', '', '4', '2018-05-28 9:47:16', '2018-05-29 12:14:02');
INSERT INTO `ordering` VALUES ('8', '武强-chen', '[{\"ID\":3,\"name\":\"干果沙拉\",\"description\":\"简单又健康的干果沙拉，做起来一点也不费力，喜欢的亲们可以试试哦~干果除了做饼干、做蒸糕、或直接当零食，原来搭配胡萝卜和玉米做成沙拉也很好吃，嚼起来很有层次感。\",\"category\":\"沙拉\",\"nowPrice\":\"38.00\",\"oldPrice\":\"66.00\",\"discount\":\"5\",\"time\":\"5\",\"sales\":\"44\",\"isNew\":\"N\",\"isFamous\":\"N\",\"imgurl\":\"sala/Dried-fruit-salad.jpg\",\"remain\":\"100\",\"limit1\":\"Y\",\"isSellOut\":\"N\",\"pass100\":\"Y\",\"pass200\":\"Y\",\"promotion\":\"\",\"createdTime\":\"2017-08-25T07:26:10.000Z\",\"modifiteTime\":\"2017-08-25T07:26:10.000Z\",\"qty\":1,\"isSelect\":true,\"isTouchMove\":false}]', '[{\"name\":\"chen\",\"tel\":\"13511111111\",\"province\":\"山西省\",\"city\":\"太原市\",\"county\":\"市辖区\",\"detail\":\"1111\",\"post\":\"111111\",\"checked\":true}]', '38.00', '1', '微信支付', '快递 免运费', '', '4', '2018-05-28 9:47:35', '2018-05-29 12:12:33');
SET FOREIGN_KEY_CHECKS=1;
