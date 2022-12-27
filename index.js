"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var prod = process.env.NODE_ENV === "production";
app.set("port", prod ? process.env.PORT : 3065);
app.get("/", function (req, res) { });
app.listen(app.get("port"), function () { });
