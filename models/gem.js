import mongoose from "mongoose"

const Schema = mongoose.Schema
	
const gemSchema = new Schema({
  text: String,
  done: Boolean,
})


const Gem = mongoose.model('Gem', gemSchema)

export {
  Gem
}