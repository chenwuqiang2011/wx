﻿var express = require("express");

//引入index汇总
var router = require("./router/index.js");
console.log(999)
var app=router.register(express);
 app.listen(443);