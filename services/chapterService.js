const Chapter = require("../models/chapters");
const Serie = require("../models/series");

const createChapter = async (title, description, url, serieId) => {
  try {
    const serieFound = await Serie.findById(serieId);
    if (!serieFound) {
      return;
    }
    const newChapter = new Chapter({ title, description, url, serieId });
    await newChapter.save();
    serieFound.chapters.push(newChapter._id);
    await serieFound.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const chapterList = async (serieId) => {
  try {
    const newChapter = await Chapter.find({ serieId: serieId });
    return newChapter;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateChapter = async (id, title, description, url) => {
  try {
    await Chapter.updateOne({ _id: id }, { $set: { title, description, url } });
    return "El capitulo fue actualizado con exito";
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteChapter = async (id) =>{
  try {
    await Chapter.deleteOne({_id:id});
    return "El capitulo fue eliminado con exito";
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  createChapter,
  chapterList,
  updateChapter,
  deleteChapter
};
