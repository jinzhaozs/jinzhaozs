/*
Navicat MySQL Data Transfer

Source Server         : bendi
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : jzzs

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-04-20 17:38:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aname` varchar(255) DEFAULT NULL COMMENT '标题',
  `ashop` int(11) DEFAULT NULL COMMENT '编辑（所属公司）',
  `abstract` varchar(255) DEFAULT NULL COMMENT '摘要',
  `pic` varchar(255) DEFAULT NULL COMMENT '缩略图',
  `content` text COMMENT '内容',
  `ischeck` int(11) DEFAULT NULL COMMENT '是否审核（1：通过；2：未通过）',
  `istop` int(11) DEFAULT NULL COMMENT '置顶（1：置顶；2：未置顶）',
  `atime` datetime DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', 'ha ', '1', 'ss', 'qq', 'qq', '1', '1', '2018-04-17 14:33:39');
INSERT INTO `article` VALUES ('2', '3w', '1', '12', '20180417\\be336863e6afdd87d0ded43b2efcfa97.jpg', '', '2', '2', '2018-04-17 03:58:41');
INSERT INTO `article` VALUES ('3', '12', '51', '12', '20180419\\1f9d475eeb917fbb9acfe89ae26cf803.jpg', '111', '2', '2', '2018-04-19 02:22:23');
INSERT INTO `article` VALUES ('4', 'a', '51', '', null, '', '2', '2', '2018-04-19 02:23:36');

-- ----------------------------
-- Table structure for ceshi
-- ----------------------------
DROP TABLE IF EXISTS `ceshi`;
CREATE TABLE `ceshi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ceshi
-- ----------------------------
INSERT INTO `ceshi` VALUES ('1', 'aa', 'asdfff', '2018-04-03 11:19:28');
INSERT INTO `ceshi` VALUES ('3', 'as', 'ad', '2018-04-03 11:19:19');
INSERT INTO `ceshi` VALUES ('4', 'tw', 't4', '2018-04-03 10:59:55');

-- ----------------------------
-- Table structure for com_fuwuqy
-- ----------------------------
DROP TABLE IF EXISTS `com_fuwuqy`;
CREATE TABLE `com_fuwuqy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `qyname` varchar(255) DEFAULT NULL COMMENT '类型name名称',
  `qypaixu` int(255) DEFAULT NULL COMMENT '类型排序',
  `time` datetime DEFAULT NULL COMMENT '添加时间',
  `qycode` varchar(255) DEFAULT NULL COMMENT 'code 区域',
  PRIMARY KEY (`id`),
  UNIQUE KEY `qycode` (`qycode`) USING BTREE COMMENT 'code不为空区域'
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COMMENT='公司 - 装修那些类型的房屋';

-- ----------------------------
-- Records of com_fuwuqy
-- ----------------------------
INSERT INTO `com_fuwuqy` VALUES ('1', '朝阳区', '1', '2018-04-12 17:23:25', '100');
INSERT INTO `com_fuwuqy` VALUES ('2', '大兴区', '2', '2018-04-12 17:23:43', '101');
INSERT INTO `com_fuwuqy` VALUES ('3', '东城区', '3', '2018-04-12 17:24:05', '102');
INSERT INTO `com_fuwuqy` VALUES ('4', '房山区', '4', '2018-04-12 17:24:35', '103');
INSERT INTO `com_fuwuqy` VALUES ('5', '丰台区', '5', '2018-04-12 17:25:03', '104');
INSERT INTO `com_fuwuqy` VALUES ('6', '海淀区', '6', '2018-04-12 17:25:24', '105');
INSERT INTO `com_fuwuqy` VALUES ('7', '门头沟区', '7', '2018-04-12 17:25:59', '106');
INSERT INTO `com_fuwuqy` VALUES ('8', '平谷区', '8', '2018-04-12 17:26:22', '107');
INSERT INTO `com_fuwuqy` VALUES ('9', '石景山区', '9', '2018-04-12 17:27:00', '108');
INSERT INTO `com_fuwuqy` VALUES ('10', '顺义区', '10', '2018-04-12 17:27:35', '109');
INSERT INTO `com_fuwuqy` VALUES ('11', '通州区', '11', '2018-04-12 17:28:01', '110');
INSERT INTO `com_fuwuqy` VALUES ('12', '西城区', '12', '2018-04-12 17:28:22', '111');
INSERT INTO `com_fuwuqy` VALUES ('13', '昌平区', '13', '2018-04-12 17:28:59', '112');
INSERT INTO `com_fuwuqy` VALUES ('14', '怀柔区', '14', '2018-04-12 17:29:22', '113');
INSERT INTO `com_fuwuqy` VALUES ('15', '密云县', '15', '2018-04-12 17:29:50', '114');
INSERT INTO `com_fuwuqy` VALUES ('17', '延庆县', '0', '2018-04-13 04:53:08', '115');

-- ----------------------------
-- Table structure for com_layout
-- ----------------------------
DROP TABLE IF EXISTS `com_layout`;
CREATE TABLE `com_layout` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lname` varchar(255) DEFAULT NULL COMMENT '户型',
  `lcode` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of com_layout
-- ----------------------------
INSERT INTO `com_layout` VALUES ('1', '小户型', '100', '2018-04-16 09:29:51');
INSERT INTO `com_layout` VALUES ('2', '一室居', '101', '2018-04-16 09:30:19');
INSERT INTO `com_layout` VALUES ('3', '二室居', '102', '2018-04-16 09:30:53');
INSERT INTO `com_layout` VALUES ('4', '三室居', '103', '2018-04-16 09:31:24');
INSERT INTO `com_layout` VALUES ('5', '四居室', '104', '2018-04-16 09:53:52');
INSERT INTO `com_layout` VALUES ('6', '五居室', '105', '2018-04-16 09:54:07');
INSERT INTO `com_layout` VALUES ('7', '别墅', '106', '2018-04-16 09:54:40');
INSERT INTO `com_layout` VALUES ('8', '公寓', '107', '2018-04-16 09:54:54');
INSERT INTO `com_layout` VALUES ('9', '复式', '108', '2018-04-16 09:55:10');
INSERT INTO `com_layout` VALUES ('10', '其他', '109', '2018-04-16 10:15:19');

-- ----------------------------
-- Table structure for com_price
-- ----------------------------
DROP TABLE IF EXISTS `com_price`;
CREATE TABLE `com_price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pname` varchar(255) DEFAULT NULL COMMENT '价位',
  `pcode` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of com_price
-- ----------------------------
INSERT INTO `com_price` VALUES ('1', '3万以下', '100', '2018-04-12 14:02:19');
INSERT INTO `com_price` VALUES ('2', '3-5万', '101', '2018-04-12 14:02:59');
INSERT INTO `com_price` VALUES ('3', '5-8万', '102', '2018-04-12 14:03:35');
INSERT INTO `com_price` VALUES ('4', '8-12万', '103', '2018-04-12 14:04:02');
INSERT INTO `com_price` VALUES ('5', '12-18万', '104', '2018-04-12 03:14:04');
INSERT INTO `com_price` VALUES ('6', '18-30万', '105', '2018-04-12 05:17:24');
INSERT INTO `com_price` VALUES ('7', '30-100万', '106', '2018-04-12 05:17:55');
INSERT INTO `com_price` VALUES ('8', '100万以上', '107', '2018-04-12 05:18:09');

-- ----------------------------
-- Table structure for com_qiyecsleixing
-- ----------------------------
DROP TABLE IF EXISTS `com_qiyecsleixing`;
CREATE TABLE `com_qiyecsleixing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lxcode` varchar(255) NOT NULL COMMENT '类型code',
  `lxname` varchar(255) DEFAULT NULL COMMENT '类型name名称',
  `lxpaixu` int(255) DEFAULT NULL COMMENT '类型排序',
  `time` datetime DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `lxcode` (`lxcode`) USING BTREE COMMENT 'code不为空'
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='公司 - 装修那些类型的房屋';

-- ----------------------------
-- Records of com_qiyecsleixing
-- ----------------------------
INSERT INTO `com_qiyecsleixing` VALUES ('1', '100', '普通住宅', '1', null);
INSERT INTO `com_qiyecsleixing` VALUES ('2', '101', '小户型', '2', null);
INSERT INTO `com_qiyecsleixing` VALUES ('3', '102', '别墅', '3', null);
INSERT INTO `com_qiyecsleixing` VALUES ('4', '103', '局部装修', '4', null);
INSERT INTO `com_qiyecsleixing` VALUES ('5', '104', 'ktv', '5', null);
INSERT INTO `com_qiyecsleixing` VALUES ('6', '105', '商铺', '6', null);
INSERT INTO `com_qiyecsleixing` VALUES ('7', '106', '餐厅/酒楼', '7', null);
INSERT INTO `com_qiyecsleixing` VALUES ('8', '107', '美容/美发', '8', null);
INSERT INTO `com_qiyecsleixing` VALUES ('9', '108', '娱乐场所', '9', null);
INSERT INTO `com_qiyecsleixing` VALUES ('10', '109', '酒店', '10', null);
INSERT INTO `com_qiyecsleixing` VALUES ('11', '110', '展厅', '11', null);
INSERT INTO `com_qiyecsleixing` VALUES ('12', '111', '办公室', '12', null);
INSERT INTO `com_qiyecsleixing` VALUES ('13', '112', '厂房', '13', null);
INSERT INTO `com_qiyecsleixing` VALUES ('14', '113', '学校', '14', null);
INSERT INTO `com_qiyecsleixing` VALUES ('15', '114', '医院', '15', null);
INSERT INTO `com_qiyecsleixing` VALUES ('16', '115', '专卖店', '16', null);
INSERT INTO `com_qiyecsleixing` VALUES ('17', '116', '酒吧', '17', null);
INSERT INTO `com_qiyecsleixing` VALUES ('18', '117', '超市/商场', '18', null);
INSERT INTO `com_qiyecsleixing` VALUES ('19', '118', '其他', '19', null);
INSERT INTO `com_qiyecsleixing` VALUES ('20', '119', '平层', '20', null);
INSERT INTO `com_qiyecsleixing` VALUES ('21', '120', '阁楼', '21', null);
INSERT INTO `com_qiyecsleixing` VALUES ('22', '121', '自建房', '22', null);
INSERT INTO `com_qiyecsleixing` VALUES ('23', '122', '复式', '23', null);

-- ----------------------------
-- Table structure for com_suozaiqu
-- ----------------------------
DROP TABLE IF EXISTS `com_suozaiqu`;
CREATE TABLE `com_suozaiqu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `qyname` varchar(255) DEFAULT NULL COMMENT '类型name名称',
  `qypaixu` int(255) DEFAULT NULL COMMENT '类型排序',
  `qycode` varchar(255) NOT NULL,
  `time` datetime DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='公司 - 装修那些类型的房屋';

-- ----------------------------
-- Records of com_suozaiqu
-- ----------------------------
INSERT INTO `com_suozaiqu` VALUES ('1', '朝阳区', '1', '101', '2018-04-08 04:10:45');
INSERT INTO `com_suozaiqu` VALUES ('2', '大兴区', '4', '102', '2018-04-08 04:13:33');
INSERT INTO `com_suozaiqu` VALUES ('3', '东城区', '3', '103', '2018-04-08 04:13:45');
INSERT INTO `com_suozaiqu` VALUES ('10', '昌平区', '3', '104', '2018-04-08 04:14:00');
INSERT INTO `com_suozaiqu` VALUES ('11', '通州区', '0', '105', '2018-04-10 04:51:12');

-- ----------------------------
-- Table structure for com_zhuancfg
-- ----------------------------
DROP TABLE IF EXISTS `com_zhuancfg`;
CREATE TABLE `com_zhuancfg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `zcfgname` varchar(255) DEFAULT NULL COMMENT '类型name名称',
  `zcfgpaixu` int(255) DEFAULT NULL COMMENT '类型排序',
  `zcfgcode` varchar(255) NOT NULL,
  `time` datetime DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='公司 - 装修那些类型的房屋';

-- ----------------------------
-- Records of com_zhuancfg
-- ----------------------------
INSERT INTO `com_zhuancfg` VALUES ('1', '简约', '1', '100', '2018-04-12 17:33:36');
INSERT INTO `com_zhuancfg` VALUES ('2', '现代', '2', '101', '2018-04-12 17:33:59');
INSERT INTO `com_zhuancfg` VALUES ('3', '中式', '3', '102', '2018-04-12 17:34:16');
INSERT INTO `com_zhuancfg` VALUES ('4', '欧式', '4', '103', '2018-04-12 17:34:34');
INSERT INTO `com_zhuancfg` VALUES ('5', '美式', '5', '104', '2018-04-12 17:34:57');
INSERT INTO `com_zhuancfg` VALUES ('6', '田园', '6', '105', '2018-04-12 17:35:19');
INSERT INTO `com_zhuancfg` VALUES ('7', '新经典', '7', '106', '2018-04-12 17:35:54');
INSERT INTO `com_zhuancfg` VALUES ('8', '混搭', '8', '107', '2018-04-12 17:36:21');
INSERT INTO `com_zhuancfg` VALUES ('9', '地中海', '9', '108', '2018-04-12 17:36:44');
INSERT INTO `com_zhuancfg` VALUES ('10', '东南亚', '10', '109', '2018-04-12 17:37:12');
INSERT INTO `com_zhuancfg` VALUES ('11', '日式', '11', '110', '2018-04-12 17:37:38');
INSERT INTO `com_zhuancfg` VALUES ('12', '宜家', '12', '111', '2018-04-12 17:38:00');
INSERT INTO `com_zhuancfg` VALUES ('13', '北欧', '13', '112', '2018-04-12 17:38:22');
INSERT INTO `com_zhuancfg` VALUES ('14', '简欧', '14', '113', '2018-04-12 17:38:42');

-- ----------------------------
-- Table structure for designer
-- ----------------------------
DROP TABLE IF EXISTS `designer`;
CREATE TABLE `designer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dname` varchar(255) DEFAULT NULL COMMENT '姓名',
  `davatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `sex` varchar(2) DEFAULT NULL COMMENT '性别',
  `jobage` varchar(255) DEFAULT NULL COMMENT '从业年限',
  `province` varchar(255) DEFAULT NULL COMMENT '所在省',
  `ocity` varchar(255) DEFAULT NULL COMMENT '所在市',
  `com_dzcfg` varchar(255) DEFAULT NULL COMMENT '风格',
  `shop` int(11) DEFAULT NULL COMMENT '所属公司',
  `price_range` varchar(255) DEFAULT NULL COMMENT '设计费用区间',
  `idea` varchar(255) DEFAULT NULL COMMENT '设计理念',
  `field` int(255) DEFAULT NULL COMMENT '擅长领域',
  `school` varchar(255) DEFAULT NULL COMMENT '毕业院校',
  `experience` text COMMENT '工作经历',
  `intro` text COMMENT '个人简介',
  `prize` text COMMENT '奖项',
  `achievement` text COMMENT '业绩',
  `grade` varchar(255) DEFAULT NULL COMMENT '设计等级',
  `dtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of designer
-- ----------------------------
INSERT INTO `designer` VALUES ('1', 'cheng', '20180416\\7399d90705bb584ba08b72aa28f51023.jpg', '1', '6', null, null, '100,110,', '1', '50~100', 'wqed', '100', 'qw', 'qw', '12', 'qw', 'qw', 'qw', '2018-04-16 14:49:24');
INSERT INTO `designer` VALUES ('2', '12', null, '2', '2', null, null, '101,', '2', '100', '12', '101', 'sd ', 'wd', 'dwqe ', 'wed', 'wed', 'wed ', '2018-04-16 14:49:21');
INSERT INTO `designer` VALUES ('3', 'weww', '20180416\\01c5793b4be4d1c77de19bac072a7575.jpg', '1', '4', null, null, '100,110,', '1', '4', '4', '104', '4', '4', '4', '4', '4', 'A级信用设计师', '2018-04-16 03:45:28');
INSERT INTO `designer` VALUES ('4', 'lu', '20180416\\7939aca38e15afc9739f71bea67e6667.jpg', '1', '4', null, null, '100,110,', '1', '50~100', '11', '100', '2', '2', '2', '2', '2', 'A级信用设计师', '2018-04-16 04:53:13');
INSERT INTO `designer` VALUES ('5', '刘', '20180416\\6df45349cc66de8520cd6ea632588171.jpg', '1', '2', null, null, '101,110,', '1', '50~100', '4他', '100', 't', ' 翻滚吧', 'btgb', ' 不过', '热帖个', 'A级信用设计师', '2018-04-16 04:57:11');
INSERT INTO `designer` VALUES ('6', '阿斯蒂芬', '20180417\\f727d814d86f6d51300bdd43e82b40d6.png', '1', '2', null, null, '100,', '2', '23', '23', '116', '23', '', '', '', '', 'A级信用设计师', '2018-04-17 05:09:43');
INSERT INTO `designer` VALUES ('7', 're', '20180417\\886258bc699a8995daceebff0b0e1abc.jpg', '1', '4', null, null, '100,', '3', '4', '4', '116', '4', '4', '4', '4', '4', 'A级信用设计师', '2018-04-17 05:33:01');
INSERT INTO `designer` VALUES ('8', 'yh', '20180417\\24b0f99cec3af121e23664cff43aed76.jpg', '1', '4', null, null, '100,', '5', '44', '44', '117', '3', '3', '', '', '', 'A级信用设计师', '2018-04-17 05:34:11');
INSERT INTO `designer` VALUES ('9', 'aq', '20180417\\1ad3d2b288e2dc4dda1d44cd9ce104c6.jpg', '1', '3', null, null, ',', '16', '3', '3', '117', '', '', '', '', '', 'A级信用设计师', '2018-04-17 05:36:40');

-- ----------------------------
-- Table structure for ect_atlas
-- ----------------------------
DROP TABLE IF EXISTS `ect_atlas`;
CREATE TABLE `ect_atlas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '图册名称',
  `scz_name` varchar(255) DEFAULT NULL COMMENT '上传者名称',
  `time` datetime DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL COMMENT '第一种图片的路径',
  `hxcode` varchar(255) DEFAULT NULL COMMENT '户型code',
  `fgcode` varchar(255) DEFAULT NULL COMMENT '风格code',
  `mjcode` varchar(255) DEFAULT NULL COMMENT '面积code',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='效果图--图册信息';

-- ----------------------------
-- Records of ect_atlas
-- ----------------------------
INSERT INTO `ect_atlas` VALUES ('1', 'AA', '阿萨德', '2018-04-20 11:35:36', '20180420\\34e3bbe25f1ef919a28bc228c693771a.jpg', '100,101,', '100,101,102,', '100,102,103,');
INSERT INTO `ect_atlas` VALUES ('2', '试试', '嗯', '2018-04-20 11:36:09', '20180420\\b34dca00fe32e1af83e0a03b02815127.jpg', '100,101,', '101,102,', '101，');
INSERT INTO `ect_atlas` VALUES ('3', '问', '问', '2018-04-20 09:09:37', null, '101,102,', '101,102,', '101,102,');
INSERT INTO `ect_atlas` VALUES ('5', 'sdf', 'asd', '2018-04-20 11:08:55', null, '100,102,', '100,101,', '100,');
INSERT INTO `ect_atlas` VALUES ('6', '说说', '说说', '2018-04-20 11:51:49', '20180420\\2d623146bbbc03a93cd338688d4ede3e.jpg', '100,107,108,', '100,', '100,');
INSERT INTO `ect_atlas` VALUES ('7', '是否', '水电费', '2018-04-20 11:55:17', '20180420\\3897d939b7fa68cae1f586e5356cff66.jpg', '100,', '100,109,', '101,');
INSERT INTO `ect_atlas` VALUES ('8', '是', '让他', '2018-04-20 01:33:39', '20180420\\576df197c69151389acf7c0831f8af14.jpg', '100,108,', '102,', '104,');

-- ----------------------------
-- Table structure for ect_jubu
-- ----------------------------
DROP TABLE IF EXISTS `ect_jubu`;
CREATE TABLE `ect_jubu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ejname` varchar(255) DEFAULT NULL COMMENT '局部名称',
  `ejcode` varchar(255) DEFAULT NULL COMMENT '局部code',
  `paixu` int(255) DEFAULT NULL COMMENT '排序',
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COMMENT='效果图+局部表';

-- ----------------------------
-- Records of ect_jubu
-- ----------------------------
INSERT INTO `ect_jubu` VALUES ('1', '背景墙', '100', '1', '2018-04-19 03:15:36');
INSERT INTO `ect_jubu` VALUES ('2', '吊灯', '101', '2', '2018-04-19 15:21:12');
INSERT INTO `ect_jubu` VALUES ('3', '隔断', '102', '3', '2018-04-19 15:21:30');
INSERT INTO `ect_jubu` VALUES ('4', '窗帘', '103', '4', '2018-04-19 15:21:58');
INSERT INTO `ect_jubu` VALUES ('5', '飘窗', '104', '5', '2018-04-19 15:22:21');
INSERT INTO `ect_jubu` VALUES ('6', '榻榻米', '105', '6', '2018-04-19 15:22:43');
INSERT INTO `ect_jubu` VALUES ('7', '橱柜', '106', '7', '2018-04-19 15:23:03');
INSERT INTO `ect_jubu` VALUES ('8', '博古架', '107', '8', '2018-04-19 15:23:28');
INSERT INTO `ect_jubu` VALUES ('9', '阁楼', '108', '9', '2018-04-19 15:23:41');
INSERT INTO `ect_jubu` VALUES ('10', '隐形门', '109', '10', '2018-04-19 15:24:18');
INSERT INTO `ect_jubu` VALUES ('11', '吧台', '110', '11', '2018-04-19 15:24:45');
INSERT INTO `ect_jubu` VALUES ('12', '酒柜', '111', '12', '2018-04-19 15:25:17');
INSERT INTO `ect_jubu` VALUES ('13', '鞋柜', '112', '13', '2018-04-19 15:25:37');
INSERT INTO `ect_jubu` VALUES ('14', '衣柜', '113', '14', '2018-04-19 15:26:00');
INSERT INTO `ect_jubu` VALUES ('15', '窗户', '114', '15', '2018-04-19 15:26:37');
INSERT INTO `ect_jubu` VALUES ('16', '相片墙', '115', '16', '2018-04-19 15:27:42');
INSERT INTO `ect_jubu` VALUES ('17', '楼梯', '116', '17', '2018-04-19 15:59:09');
INSERT INTO `ect_jubu` VALUES ('18', '窗台', '117', '18', '2018-04-19 15:59:35');
INSERT INTO `ect_jubu` VALUES ('19', '罗马柱', '118', '19', '2018-04-19 16:00:14');
INSERT INTO `ect_jubu` VALUES ('20', '垭口', '119', '20', '2018-04-19 16:00:37');
INSERT INTO `ect_jubu` VALUES ('21', '壁橱', '120', '21', '2018-04-19 16:00:58');
INSERT INTO `ect_jubu` VALUES ('22', '门口/大门', '121', '22', '2018-04-19 16:01:29');
INSERT INTO `ect_jubu` VALUES ('23', '落地窗', '122', '23', '2018-04-19 16:01:54');
INSERT INTO `ect_jubu` VALUES ('24', '其他', '123', '24', '2018-04-19 16:02:14');

-- ----------------------------
-- Table structure for ect_kongjian
-- ----------------------------
DROP TABLE IF EXISTS `ect_kongjian`;
CREATE TABLE `ect_kongjian` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ekname` varchar(255) DEFAULT NULL COMMENT '空间名称',
  `ekcode` varchar(255) DEFAULT NULL COMMENT 'k空间code',
  `paixu` int(255) DEFAULT NULL COMMENT '排序',
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='效果图+空间表';

-- ----------------------------
-- Records of ect_kongjian
-- ----------------------------
INSERT INTO `ect_kongjian` VALUES ('1', '客厅', '100', '1', null);
INSERT INTO `ect_kongjian` VALUES ('2', '卧室', '101', '2', '2018-04-19 03:13:29');
INSERT INTO `ect_kongjian` VALUES ('4', '餐厅', '102', '3', '2018-04-19 03:24:35');
INSERT INTO `ect_kongjian` VALUES ('5', '厨房', '103', '4', null);
INSERT INTO `ect_kongjian` VALUES ('6', '卫生间', '104', '5', null);
INSERT INTO `ect_kongjian` VALUES ('7', '阳台', '105', '6', null);
INSERT INTO `ect_kongjian` VALUES ('8', '书房', '106', '7', null);
INSERT INTO `ect_kongjian` VALUES ('9', '玄关', '107', '8', null);
INSERT INTO `ect_kongjian` VALUES ('10', '儿童房', '108', '9', '2018-04-19 03:26:25');

-- ----------------------------
-- Table structure for ect_mianji
-- ----------------------------
DROP TABLE IF EXISTS `ect_mianji`;
CREATE TABLE `ect_mianji` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `emname` varchar(255) DEFAULT NULL COMMENT '面积名称',
  `paixu` int(255) DEFAULT NULL COMMENT '排序',
  `time` datetime DEFAULT NULL,
  `emcode` varchar(255) DEFAULT NULL COMMENT '面积code',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='效果图+面积表';

-- ----------------------------
-- Records of ect_mianji
-- ----------------------------
INSERT INTO `ect_mianji` VALUES ('1', '60㎡以下', '1', '2018-04-19 03:02:16', '100');
INSERT INTO `ect_mianji` VALUES ('2', '60-80㎡', '2', '2018-04-19 16:03:21', '101');
INSERT INTO `ect_mianji` VALUES ('3', '80-100㎡', '3', '2018-04-19 16:03:40', '102');
INSERT INTO `ect_mianji` VALUES ('4', '100-120㎡', '4', '2018-04-19 16:04:09', '103');
INSERT INTO `ect_mianji` VALUES ('5', '120-150㎡', '5', '2018-04-19 16:04:31', '104');
INSERT INTO `ect_mianji` VALUES ('6', '150㎡以上', '6', '2018-04-19 16:04:55', '105');

-- ----------------------------
-- Table structure for ect_photo
-- ----------------------------
DROP TABLE IF EXISTS `ect_photo`;
CREATE TABLE `ect_photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phname` varchar(255) DEFAULT NULL COMMENT '图片描述',
  `geshi` varchar(255) DEFAULT NULL COMMENT '格式',
  `daxiao` varchar(255) DEFAULT NULL COMMENT '大小',
  `time` datetime DEFAULT NULL,
  `shangcz` varchar(255) DEFAULT NULL COMMENT '上传者',
  `extatlas` int(11) DEFAULT NULL COMMENT '所属图册',
  `pimage` varchar(255) DEFAULT NULL COMMENT '图片路径',
  `ect_kongjian` varchar(11) DEFAULT NULL COMMENT '空间',
  `ect_jubu` varchar(11) DEFAULT NULL COMMENT '局部',
  `ect_zcfg` varchar(11) DEFAULT NULL COMMENT '风格',
  `ect_remen` varchar(11) DEFAULT NULL COMMENT '热门标签',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ect_photo
-- ----------------------------
INSERT INTO `ect_photo` VALUES ('3', '11', null, null, '2018-04-20 10:59:50', '11', '1', '20180420\\34e3bbe25f1ef919a28bc228c693771a.jpg', '105', '100,112,120', '110', '113');
INSERT INTO `ect_photo` VALUES ('4', '141', null, null, '2018-04-20 11:02:24', '4', '1', '20180420\\bda2fd821e8222884379b9b903a0236e.jpg', '101', '100,110,113', '113', '109');
INSERT INTO `ect_photo` VALUES ('10', '是', null, null, '2018-04-20 11:39:06', '啊', '5', '20180420\\c75f0e1f5c26270c8cf0746c2de8a701.jpg', '101', '100,', '112', '109');
INSERT INTO `ect_photo` VALUES ('11', '4', null, null, '2018-04-20 11:40:01', '12', '3', '20180420\\fb4e712987db8a840b43d86cea84e434.jpg', '100', '100,', '113', '111');
INSERT INTO `ect_photo` VALUES ('12', '是', null, null, '2018-04-20 11:42:21', '是', '2', '20180420\\b34dca00fe32e1af83e0a03b02815127.jpg', '101', '100,', '112', '112');
INSERT INTO `ect_photo` VALUES ('13', '啊', null, null, '2018-04-20 11:44:25', '千万', '2', '20180420\\316e4c120f0314c2a06f4cdf425eedd0.jpg', '102', '100,110,', '111', '111');
INSERT INTO `ect_photo` VALUES ('14', '啊', null, null, '2018-04-20 11:45:29', '千万', '2', '20180420\\3e0579923814a1a86f4ef2b714bbeb7b.jpg', '102', '100,110,', '111', '111');
INSERT INTO `ect_photo` VALUES ('19', '啊啊', null, null, '2018-04-20 11:52:07', '尺寸', '6', '20180420\\2d623146bbbc03a93cd338688d4ede3e.jpg', '100', '100,110,', '110', '109');
INSERT INTO `ect_photo` VALUES ('20', '水电费', null, null, '2018-04-20 11:55:32', '水电费', '7', '20180420\\3897d939b7fa68cae1f586e5356cff66.jpg', '0', '100,', '0', '0');
INSERT INTO `ect_photo` VALUES ('21', '', null, null, '2018-04-20 11:56:12', '', '7', null, '0', ',', '0', '0');
INSERT INTO `ect_photo` VALUES ('22', '是否', null, null, '2018-04-20 11:57:46', '服务', '7', '20180420\\376760a017f1df2e9665a2b08e602497.jpg', '100', '100,110,', '112', '112');
INSERT INTO `ect_photo` VALUES ('24', '阿萨德', null, null, '2018-04-20 11:58:51', '访问', '7', '20180420\\08011c3a5cba11eb3d955665719bb133.jpg', '101', '101,111,', '0', '0');
INSERT INTO `ect_photo` VALUES ('25', '', null, null, '2018-04-20 11:58:59', '', '7', null, '100', ',', '112', '112');
INSERT INTO `ect_photo` VALUES ('26', '是', null, null, '2018-04-20 01:33:56', '是', '8', '20180420\\576df197c69151389acf7c0831f8af14.jpg', '100', '101,', '112', '110');

-- ----------------------------
-- Table structure for ect_remen
-- ----------------------------
DROP TABLE IF EXISTS `ect_remen`;
CREATE TABLE `ect_remen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ername` varchar(255) DEFAULT NULL COMMENT '热门名称',
  `ercode` varchar(255) DEFAULT NULL COMMENT '热门code',
  `paixu` int(255) DEFAULT NULL COMMENT '排序',
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='效果图+空间表';

-- ----------------------------
-- Records of ect_remen
-- ----------------------------
INSERT INTO `ect_remen` VALUES ('1', '五斗柜', '100', '1', '2018-04-19 04:36:52');
INSERT INTO `ect_remen` VALUES ('2', '元宵节花朵', '101', '2', '2018-04-19 16:37:42');
INSERT INTO `ect_remen` VALUES ('3', '玻璃隔断墙', '102', '3', '2018-04-19 16:38:22');
INSERT INTO `ect_remen` VALUES ('4', '过石门', '103', '4', '2018-04-19 16:38:46');
INSERT INTO `ect_remen` VALUES ('5', 'cad平面', '104', '5', '2018-04-19 16:39:08');
INSERT INTO `ect_remen` VALUES ('6', '玻璃马赛克', '105', '6', '2018-04-19 16:39:34');
INSERT INTO `ect_remen` VALUES ('7', '洋房', '106', '7', '2018-04-19 16:39:56');
INSERT INTO `ect_remen` VALUES ('8', '玻璃移门', '107', '8', '2018-04-19 16:40:23');
INSERT INTO `ect_remen` VALUES ('9', '吸顶灯', '108', '9', '2018-04-19 16:40:48');
INSERT INTO `ect_remen` VALUES ('10', '影视墙壁纸', '109', '10', '2018-04-19 16:41:18');
INSERT INTO `ect_remen` VALUES ('11', '铝扣板', '110', '11', '2018-04-19 16:42:15');
INSERT INTO `ect_remen` VALUES ('12', '凳子', '111', '12', '2018-04-19 16:42:41');
INSERT INTO `ect_remen` VALUES ('13', '文化砖', '112', '13', '2018-04-19 16:43:04');
INSERT INTO `ect_remen` VALUES ('14', '精装房', '113', '14', '2018-04-19 16:43:39');
INSERT INTO `ect_remen` VALUES ('15', '洗脸盆', '114', '15', '2018-04-19 16:43:54');

-- ----------------------------
-- Table structure for evaluate
-- ----------------------------
DROP TABLE IF EXISTS `evaluate`;
CREATE TABLE `evaluate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pjname` varchar(255) DEFAULT NULL COMMENT '工地名称',
  `comid` int(11) DEFAULT NULL COMMENT '对应公司id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='公司评价表';

-- ----------------------------
-- Records of evaluate
-- ----------------------------
INSERT INTO `evaluate` VALUES ('1', 'bb', '1');
INSERT INTO `evaluate` VALUES ('2', 'bbg', '2');
INSERT INTO `evaluate` VALUES ('3', 'gw', '3');
INSERT INTO `evaluate` VALUES ('4', 'gw', '1');
INSERT INTO `evaluate` VALUES ('5', 'gfw', '2');

-- ----------------------------
-- Table structure for plan
-- ----------------------------
DROP TABLE IF EXISTS `plan`;
CREATE TABLE `plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL COMMENT '方案名称',
  `ftype` varchar(255) DEFAULT NULL COMMENT '类型',
  `frenyuan` varchar(255) DEFAULT NULL COMMENT '参与人员',
  `time` datetime DEFAULT NULL COMMENT '方案设计成功日期',
  `comid` int(11) DEFAULT NULL COMMENT '对应公司id',
  `fmianji` int(50) DEFAULT NULL COMMENT '房屋面积',
  `fyusuan` varchar(255) DEFAULT NULL COMMENT '装修预算',
  `fhuxing` varchar(255) DEFAULT NULL COMMENT '户型',
  `ffengge` varchar(255) DEFAULT NULL COMMENT '风格',
  `ffangshi` varchar(255) DEFAULT NULL COMMENT '装修方式',
  `fjianjie` varchar(255) DEFAULT NULL COMMENT '简介',
  `flogo` varchar(255) DEFAULT NULL COMMENT '案例logo',
  `schedule` int(11) DEFAULT NULL COMMENT '进度（1：准备开工；2：水电阶段；3：泥水阶段；4油漆阶段；5：竣工）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='方案（装修案例） 表';

-- ----------------------------
-- Records of plan
-- ----------------------------
INSERT INTO `plan` VALUES ('3', 'v', null, '5', null, '2', null, null, null, null, null, null, null, '1');
INSERT INTO `plan` VALUES ('4', 'c', null, '5', null, '2', null, null, null, null, null, null, null, '1');
INSERT INTO `plan` VALUES ('17', '五个', '115', '7', '2018-04-18 02:52:29', '1', '0', '12', '109', '113', 'q', '', '20180418\\02b3e6604b75514976a35706e6615ee2.jpg', '1');
INSERT INTO `plan` VALUES ('18', '米我国', '116', '1', '2018-04-18 02:52:56', '1', '0', '', '0', '0', '', '', '20180418\\47b8b4211f72008988ce3cd6bc512877.jpg', '1');
INSERT INTO `plan` VALUES ('19', '测', '108', '1', '2018-04-17 02:02:07', '1', '122', '12000', '108', '111', 'u', ' 67', '20180417\\780d09e76cc8ba0d6a0f7a4e3fb26c69.jpg', '1');
INSERT INTO `plan` VALUES ('20', '啊啊', '115', '4', '2018-04-17 05:34:23', '1', '123', '123', '108', '108', '123', '123', '20180417\\00c47066416a2d55baee687c6bf6fc1e.png', '5');
INSERT INTO `plan` VALUES ('21', 'ww', '102', '1', '2018-04-17 05:34:30', '1', '122', '12000', '108', '109', '11', '122', '20180417\\13bbf5d771e10327225eef9beec0cb6e.png', '5');
INSERT INTO `plan` VALUES ('22', '阿斯蒂芬', '116', '1', '2018-04-17 05:08:31', '5', '12', '123', '107', '110', '123', '123', '20180417\\06214ca8b8cc6b31d4ee040548aa07b1.png', '5');
INSERT INTO `plan` VALUES ('23', '', '117', '5', '2018-04-17 05:34:44', '1', '0', '', '0', '0', '', '', '20180417\\6f2fa8bf5de643599599c4aa3f24dd0c.png', '1');

-- ----------------------------
-- Table structure for plan_do
-- ----------------------------
DROP TABLE IF EXISTS `plan_do`;
CREATE TABLE `plan_do` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `comid` int(50) DEFAULT NULL COMMENT '对应公司id',
  `planid` int(50) DEFAULT NULL COMMENT '对应方案id',
  `logo_shufang` varchar(255) DEFAULT 'muren.png' COMMENT '书房',
  `logo_woshi` varchar(255) DEFAULT 'muren.png' COMMENT '卧室',
  `logo_ertong` varchar(255) DEFAULT 'muren.png' COMMENT '儿童间',
  `logo_weishengj` varchar(255) DEFAULT 'muren.png' COMMENT '卫生间',
  `logo_keting` varchar(255) DEFAULT 'muren.png' COMMENT '客厅',
  `logo_chufang` varchar(255) DEFAULT 'muren.png' COMMENT '厨房',
  `logo_canting` varchar(255) DEFAULT 'muren.png' COMMENT '餐厅',
  `logo_time` datetime DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plan_do
-- ----------------------------
INSERT INTO `plan_do` VALUES ('8', '1', '18', 'muren.png', 'muren.png', 'muren.png', 'muren.png', 'muren.png', 'muren.png', null, '2018-04-17 09:07:57');
INSERT INTO `plan_do` VALUES ('9', '1', '19', '20180417\\b2ba9e400754e7c3db46777b8a11acb7.png', '20180417\\4f0f2e56a395e70a93f1cb03492716f4.png', '20180417\\32814209de0879c835303abc02e63641.png', '20180417\\bfc47fb4deccaf70cb9a37e148737afe.png', '20180417\\eadaf44b80dfa5d2b6bef65a53542192.png', '20180417\\5baab5e3c07054c51e81aaefee45c9f1.png', '20180417\\70739f03b969368e42d977a6aae96508.png', '2018-04-17 02:30:08');
INSERT INTO `plan_do` VALUES ('10', '1', '20', '20180417\\0630bc12c8dc38d721e10fb4c0f6ba65.png', '20180417\\1de5926ea0f81cd5944d7f0af6491fcf.png', '20180417\\357ff42fa85a6f49fb069092bc549eaa.png', '20180417\\fc60fa2c2ce4bcb3c96abd841b54cfe6.png', '20180417\\46119666d05ed49c47689b9831571b87.png', '20180417\\16b3872f88657e856a43e023f42d71fe.png', '20180417\\a2dd2751d08d8ed87f2c2de01df7f081.png', '2018-04-17 02:32:18');
INSERT INTO `plan_do` VALUES ('11', '1', '21', '20180417\\0c0d2714852a3ef88c4e04ee744848ae.jpg', '20180417\\4b1e0b77d1029220d52d90aaa6441fea.jpg', '20180417\\7328a2ba179278dec9057806651256b8.jpg', '20180417\\06893f79461bcf1fec0cd14fab5352a3.jpg', '20180417\\4a7fd231de1c82e88953dce7a951b63d.jpg', '20180417\\29f251f7fd844aa0e9a62f150a145163.jpg', '20180417\\3d406b134345f4b8ad2f5d49bbee3d86.jpg', '2018-04-17 02:58:11');
INSERT INTO `plan_do` VALUES ('12', '5', '22', '20180417\\0bfe72b10bdcd9c8700dbda34f1ba19b.png', '20180417\\32d6c44da9e03a6e1b91d4b13e7e07de.png', 'muren.png', 'muren.png', 'muren.png', 'muren.png', 'muren.png', '2018-04-17 05:09:02');
INSERT INTO `plan_do` VALUES ('13', '1', '23', 'muren.png', 'muren.png', 'muren.png', 'muren.png', 'muren.png', 'muren.png', 'muren.png', '2018-04-17 05:29:05');

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '公司名称',
  `logo` varchar(255) DEFAULT NULL COMMENT '图片logo',
  `dizhi` varchar(255) DEFAULT NULL COMMENT '地址',
  `bl` int(2) DEFAULT '1' COMMENT '是否有营业执照（认证）1-有 2-无',
  `rz` int(11) DEFAULT '1' COMMENT '是否认证（认证）1 有 2无',
  `sum` int(11) DEFAULT '0' COMMENT '保证金',
  `dis` int(2) DEFAULT '2' COMMENT '活动 1- 有 2 -无',
  `com_price` varchar(255) DEFAULT NULL COMMENT '对应价位',
  `com_fuqy` varchar(255) DEFAULT NULL COMMENT '对应公司服务区域id',
  `com_leixing` varchar(255) DEFAULT NULL COMMENT '公司 服务类型 id',
  `com_szqy` varchar(255) DEFAULT NULL COMMENT '所在区域',
  `com_zcfg` varchar(255) DEFAULT NULL COMMENT '擅长风格',
  `time` datetime DEFAULT NULL,
  `zixurenshu` varchar(255) NOT NULL DEFAULT '100000' COMMENT '咨询人数',
  `com_slogan` varchar(255) DEFAULT NULL COMMENT '标语',
  `com_jianjie` varchar(255) NOT NULL COMMENT '公司简介',
  `com_koubei` varchar(255) DEFAULT '1000' COMMENT '口碑值',
  `com_haoping` varchar(255) DEFAULT '50.00' COMMENT '好评率',
  `com_tel` varchar(255) DEFAULT NULL COMMENT '公司电话',
  `com_paixu` varchar(255) DEFAULT '1' COMMENT '排序字段',
  `top` int(2) DEFAULT NULL COMMENT '1是审核通过2未通过',
  `zhi` int(2) DEFAULT '2' COMMENT '置顶',
  `com_fangweicishu` varchar(255) DEFAULT '500' COMMENT '访问次数',
  `code` varchar(255) DEFAULT NULL COMMENT '账号',
  `pass` varchar(255) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('1', '北京克洛尼装饰有限公司', '20180418\\1f2cbcf692af5a70ad6fde0e0f01dc86.jpg', '地址a', '1', '1', '120000', '1', '101,103,', '100,101,102,109,', '100,', '100', '100,', '2018-04-20 04:57:02', '1000', '1212', '啊啊士大夫款', '1000', '50.00', '13864358531', '1', '1', '2', '500', '123', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `shop` VALUES ('2', '北京泰峰伟业装饰设计有限公司', '20180416\\41d5f168ab77b709d38a060cc0a841c3.jpg', '地址b', '1', '1', '10000', '2', '', '100,101,', '100,101,102,103,', '102', '100,101,102,103,', '2018-04-18 01:34:59', '2000', null, '访问国外', '1000', '50.00', '13864358531', '0', '1', '2', null, '456', '456');
INSERT INTO `shop` VALUES ('3', '北京佳时特装饰工程有限公司', '20180417\\ad880b551eb75d2a76afec278c37bb6d.jpg', '地址c', '1', '1', '150000', '1', '', '100,102,', '100,101,', '100', '100,', '2018-04-17 03:51:02', '3000', null, '业主真实经历《紫竹花园装修记》已更新至10篇： 今天与克洛尼和金朝签订三方协议。支付50％托管工程款。开始抓紧空调、窗户等', '1000', '50.00', '13864358531', '1', '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('5', '中海建林（北京）装饰工程有限责任公...', '20180416\\c31460b4da2392cebc345fb16d411049.png', '请问', '0', '0', '0', '2', null, '100,101,', '101,102,', '104', '101,102,', '2018-04-16 10:16:50', '4000', null, '业主真实经历《紫竹花园装修记》已更新至10篇： 今天与克洛尼和金朝签订三方协议。支付50％托管工', '1000', '50.00', null, '1', '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('51', '北京味儿', '20180418\\83fbdf980c17e9a048eeb212c94ec680.jpg', '啊啊啊', '1', '1', '1200000', '2', '', '100,', '100,', '100', '100,', '2018-04-20 01:46:40', '100000', '', '', '1000', '50.00', '13864358531', '2', '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('52', '中海建林（北京）装饰工程有限责任公...', '20180418\\7ec2b8c7a42fd43f01dd9dd15d5b41b2.jpg', '学习', '1', '1', '1200000', '2', '101,103,', '100,', '100,', '104', '100,', '2018-04-20 02:54:26', '100000', '三傻三', '三傻三', '1000', '50.00', '13864358531', '3', '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('53', '中海建林（北京）装饰工程有限责任公...', '20180418\\22e4ef28c6b5e4192f8bfc3b320f5c33.jpg', '奥数', '1', '1', '0', '2', '', ',', ',', '104', ',', '2018-04-18 04:51:08', '100000', '', '', '1000', '50.00', '13864358531', '2', '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('54', '中海建林（北京）装饰工程有限责任公...', '20180416\\6d0b6532b1e3284bc524c6afe2d9eb23.jpg', null, '1', '1', '0', '2', '100,', '100,', '100,', '104', '100,', '2018-04-16 01:58:42', '100000', null, '', '1000', '50.00', '', '2', '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('55', '', '', '', '1', '1', '0', '2', '', '', '', '0', '', '2018-04-13 10:55:21', '100000', null, '', '1000', '50.00', null, '3', '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('56', '北京生活', '20180416\\fa1646a2d477e0cc068f2e96b45be718.jpg', '22', '1', '1', '12000', '2', '', '100,', '100,', '100', '100,', '2018-04-20 02:50:59', '100000', '', '', '1000', '50.00', '13864358531', '3', '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('57', '北京生活', '20180416\\9d21417e852a002f20154ca298c35651.jpg', null, '1', '1', '12000', '2', '', '', '', '100', '', '2018-04-16 01:33:09', '100000', null, '', '1000', '50.00', null, '1', '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('59', 'wq ', '20180418\\f33c207de91d81a51203fce7cbca3061.jpg', 'w', '1', '1', '123', '2', '', '100,108,', '100,', '100', '100,', '2018-04-18 04:51:28', '100000', '', '', '1000', '50.00', '13864356891', null, '1', '2', null, null, null);
INSERT INTO `shop` VALUES ('60', '', '', '', '1', '1', '0', '2', ',', ',', ',', '0', ',', '2018-04-13 11:04:47', '100000', null, '', '1000', '50.00', null, null, null, '2', null, null, null);
INSERT INTO `shop` VALUES ('61', '', '20180413\\976e65fe7c4749d69d54447596ef6527.jpg', '', '1', '1', '0', '2', ',', ',', ',', '0', ',', '2018-04-13 11:14:12', '100000', null, '', '1000', '50.00', null, null, null, '2', null, null, null);
INSERT INTO `shop` VALUES ('73', '牵我的手', '20180418\\6852c236dd3f677de7ba5eef35bff92a.jpg', '三大错', '1', '1', '112', '2', '', '100,', '100,', '101', '100,', '2018-04-18 04:52:21', '100000', '', '', '1000', '50.00', '13864358531', null, null, null, null, null, null);
INSERT INTO `shop` VALUES ('74', '222 ', '20180420\\07676ca165a0cc6410a682e71de08bbf.jpg', '11', '1', '2', '1200000', '2', '100,', '100,', '108,', '100', '100,110,', '2018-04-20 04:52:48', '100000', '1111', '1111', '1000', '50.00', '13864358531', '1', '2', '2', '500', '11', '6512bd43d9caa6e02c990b0a82652dca');
INSERT INTO `shop` VALUES ('76', 'qq', '20180420\\4924b75346ad985592521b86a98f3fdb.jpg', 'qq', '1', '1', '1200000', '2', '100,', '100,', '100,', '100', '100,', '2018-04-20 05:31:54', '100000', '11', '11', '1000', '50.00', '13864358531', '1', '2', '2', '500', 'qqq', '202cb962ac59075b964b07152d234b70');

-- ----------------------------
-- Table structure for shop_lbt
-- ----------------------------
DROP TABLE IF EXISTS `shop_lbt`;
CREATE TABLE `shop_lbt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_logo` varchar(255) DEFAULT NULL COMMENT '公司轮播图',
  `shop_url` varchar(255) DEFAULT NULL COMMENT '跳转地址',
  `comid` int(50) DEFAULT NULL COMMENT '对应公司id',
  `lbtname` varchar(255) DEFAULT NULL COMMENT '轮播图名称',
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop_lbt
-- ----------------------------
INSERT INTO `shop_lbt` VALUES ('2', '20180418\\ad925701ded8f0e71b1b5023abf65df5.jpg', null, '1', 'asdwer', '2018-04-18 02:39:14');
INSERT INTO `shop_lbt` VALUES ('3', '20180418\\a6030bb52bd761c5db2a12eb4468c02b.png', null, '1', 'w', '2018-04-18 02:03:22');
INSERT INTO `shop_lbt` VALUES ('7', '20180418\\0729e441a100bf1199511b9f3df3ca7d.jpg', null, '1', 'ag', '2018-04-18 02:06:54');
INSERT INTO `shop_lbt` VALUES ('8', '20180418\\ae16c9db43f12cf1391b9ab48ab213fe.jpg', null, '1', '主页', '2018-04-18 02:35:32');
INSERT INTO `shop_lbt` VALUES ('9', '20180418\\0ab92a95b2d440b8e6ef24a06090e64a.jpg', null, '51', '我', '2018-04-18 05:33:04');

-- ----------------------------
-- Table structure for struction
-- ----------------------------
DROP TABLE IF EXISTS `struction`;
CREATE TABLE `struction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gname` varchar(255) DEFAULT NULL COMMENT '工地名称',
  `comid` int(11) DEFAULT NULL COMMENT '对应公司id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='工地表';

-- ----------------------------
-- Records of struction
-- ----------------------------
INSERT INTO `struction` VALUES ('1', 'bb', '1');
INSERT INTO `struction` VALUES ('2', 'bbg', '2');
INSERT INTO `struction` VALUES ('3', 'gw', '3');
INSERT INTO `struction` VALUES ('4', 'gw', '1');
INSERT INTO `struction` VALUES ('5', 'gfw', '2');

-- ----------------------------
-- Table structure for useradmin
-- ----------------------------
DROP TABLE IF EXISTS `useradmin`;
CREATE TABLE `useradmin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usercode` varchar(255) DEFAULT NULL COMMENT '账号',
  `usersub` char(32) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='后台登陆';

-- ----------------------------
-- Records of useradmin
-- ----------------------------
INSERT INTO `useradmin` VALUES ('1', 'admin', '202cb962ac59075b964b07152d234b70');
