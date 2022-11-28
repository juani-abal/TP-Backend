const express = require('express');
const routes = express.Router();

const { userController, seriesController, chaptersController} = require('../controllers');

//Routes for Users
routes.post("/login",userController.login) ;
routes.post("/register", userController.register);
routes.post("/hi", userController.sayHi);

//Routes for series
routes.get("/series", seriesController.seriesList);
routes.get("/series/find", seriesController.serieById);
routes.post("/series", seriesController.createSerie);
routes.put("/series", seriesController.updpateSerieById);
routes.delete("/series", seriesController.deleteSerieById);

//Routes for chapters
routes.post("/chapters", chaptersController.createChapter);
routes.get("/chapters", chaptersController.chaptersList);
routes.put("/chapters", chaptersController.updateChapter);
routes.delete("/chapters", chaptersController.deleteChapter);



module.exports = routes;