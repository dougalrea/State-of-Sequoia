import Test from '../models/test.js'

async function testIndex(_req, res, next) {
  try {
    const tests = await Test.find()
    return res.status(200).json(tests)
  } catch (err) {
    next(err)
  }
}

async function testCreate(req, res, next) {
  try {
    console.log(req.body)
    const newTest = await Test.create(req.body)
    await newTest.save()
    return res.status(201).json(newTest)
  } catch (err) {
    next(err)
  }
}

export default {
  create: testCreate,
  index: testIndex
}