const serieSchema = require ('../models/series');
const seriesService = require('../services/seriesService');

const seriesList = async (req, res) =>{
    try {
        const { serieId } = req.body;
        const result = await seriesService.seriesList();
        res.status(201).send(result);
      } catch (error) {
        res.status(500).send("Se produjo un error al traer la lista de series");
      }
}

const createSerie = async (req, res) =>{
    try{
        const {title, description, url, category} = req.body;
        if(!title){
            return res.status(500) .send("El campo Title es requerido");
        }
        if(!description){
            return res.status(500) .send("El campo description es requerido");
        }
        if(!url){
            return  res.status(500) .send("El campo url es requerido");
        }
        else if(!category){
            return res.status(500) .send("El campo category es requerido");
        }
        const result = await seriesService.createSerie(title, description, url, category);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(500).send("Se produjo un error al crear la serie.");
      }
}

const serieById = async (req, res) =>{
    try {
        const { id } = req.body;
        const result = await seriesService.serieById(id);
        res.status(201).send(result);
      } catch (error) {
        res.status(500).send("Se produjo un error al traer la serie.");
      }

    /*const {id} = req.params;
    serieSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send("Se produjo un error al traer la serie."))*/
}

const updpateSerieById = async (req, res) =>{
    try{
        const {id, title, description, url, category} = req.body;
        if(!id){
            return res.status(500) .send("El campo id es requerido");
        }
        if(!title){
            return res.status(500) .send("El campo Title es requerido");
        }
        if(!description){
            return res.status(500) .send("El campo description es requerido");
        }
        if(!url){
            return  res.status(500) .send("El campo url es requerido");
        }
        else if(!category){
            return res.status(500) .send("El campo category es requerido");
        }
        const result = await seriesService.updpateSerieById(id, title, description, url, category);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(500).send("Se produjo un error al crear la serie.");
      }
}

const deleteSerieById = async (req, res) =>{
    try {
        const { id } = req.body;
        const result = await seriesService.deleteSerieById(id);
        res.status(201).send(result);
      } catch (error) {
        res.status(500).send("Se produjo un error al traer la lista de series");
      }
    
    
    /*const {id} = req.params;
    serieSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send("Se produjo un error al traer la serie."))*/
}


module.exports = {
    seriesList,
    createSerie,
    serieById,
    updpateSerieById,
    deleteSerieById,
}