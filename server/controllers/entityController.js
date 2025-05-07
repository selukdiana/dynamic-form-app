const Entity = require('../models/entityModel')

exports.getAll = async (req, res) => {
  const data = await Entity.findAll()
  res.json(data)
}

exports.createOne = async (req, res) => {
  const data = req.body;
  await Entity.create({
    ...data
  })
  res.status(200).send()
}

exports.updateOne = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  let entity = await Entity.findOne({
    where: {
      id
    }
  })
  await entity.update({ ...data })
  await entity.save()
  res.status(200).send()
}