import mongoose from 'mongoose'

const testSchema = new mongoose.Schema({
  testText: { type: String, required: true }
})

testSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.id
    return json
  }
})

export default mongoose.model('Test', testSchema)
