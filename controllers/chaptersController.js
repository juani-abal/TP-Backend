const chapterService = require("../services/chapterService");
const Serie = require("../models/series");
const Chapter = require("../models/chapters");

const createChapter = async (req, res) => {
  try {
    const { title, description, url, serieId } = req.body;
    if (!title) {
      return res.status(500).send("El campo Title es requerido");
    }
    if (!description) {
      return res.status(500).send("El campo description es requerido");
    }
    if (!url) {
      return res.status(500).send("El campo url es requerido");
    } else if (!serieId) {
      return res.status(500).send("El campo category es requerido");
    }
    const result = await chapterService.createChapter(
      title,
      description,
      url,
      serieId
    );
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send("Se produjo un error al crear el capitulo ");
  }
};
const chaptersList = async (req, res) => {
  try {
    const { serieId } = req.body;
    const result = await chapterService.chapterList(serieId, res);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send("Se produjo un error al traer los capitulos ");
  }
};

const updateChapter = async (req, res) => {
  try {
    const { id, title, description, url } = req.body;
    if (!title) {
      return res.status(500).send("El campo Title es requerido");
    }
    if (!description) {
      return res.status(500).send("El campo description es requerido");
    }
    else if (!url) {
      return res.status(500).send("El campo url es requerido");
    }
    const result = await chapterService.updateChapter(
      id,
      title,
      description,
      url
    );
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send("Se produjo un error al actualizar el capitulo ");
  }
};

const deleteChapter = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await chapterService.deleteChapter(id);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send("Se produjo un error al eliminar el capitulo ");
  }
};

module.exports = {
  createChapter,
  chaptersList,
  updateChapter,
  deleteChapter,
};
