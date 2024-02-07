const mongoose = require('mongoose')

// mongoose.set('strictQuery', false)

// const url = process.env.MONGODB_URI

// console.log('connecting to', url)

// mongoose
//   .connect(url)
//   .then(result => {
//     console.log('connected to MongoDB Atlas')
//   })
//   .catch(error => {
//     console.log('error connecting to MongoDB Atlas: ', error.message)
//   })

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: 5,
  },
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()

    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Note', noteSchema)
