const Chapter = require("../models/chapters");
const Serie = require("../models/series");

const seriesList = async (req, res) => {
  try {
    const series = await Serie.find();
    return series;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createSerie = async (title, description, url, category) => {
  try {
    const newSerie = new Serie({ title, description, url, category });
    newSerie.save();
    return newSerie;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const serieById = async (id) => {
  try {
    const serieFound = Serie.findById(id);
    return serieFound;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updpateSerieById = async (id, title, description, url, category) => {
  try {
    const serieUpdated = Serie.updateOne(
      { _id: id },
      { $set: { title, description, url, category } }
    );
    return serieUpdated;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteSerieById = async (id) => {
  try {
    await Serie.deleteOne({ _id: id });
    return "La serie se elimino correctamente.";
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  seriesList,
  createSerie,
  serieById,
  updpateSerieById,
  deleteSerieById,
};
