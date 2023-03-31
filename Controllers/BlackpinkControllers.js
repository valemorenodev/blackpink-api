/* eslint-disable no-undef */
const Pinks = require("../Models/BlackpinkModels")

exports.getPinks = async (req, res) => {
  try {
    const result = await Pinks.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.getPinks = async (req, res) => {
  try {
    const result = await Pinks.findById(req.params.id); //va un id guardado como parametro
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No existe este personaje' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.postNewPinks = async (req, res) => {
  try {
    const result = await Pinks.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.editPinks = async (req, res) => {
  try {
    const result = await Pinks.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No existe este personaje' });

    }
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

exports.deletePinks = async (req, res) => {
  try {
    const result = await Pinks.findOneAndDelete({ _id: req.params.id });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No existe este personaje ' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

exports.postNewPinks = async (req, res) => {
  try {
    const result = await Pinks.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};