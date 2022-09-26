import { mongoose } from 'mongoose'
import { mongodb } from '../Key/key/mongodb'

mongoose.connect(mongodb.Uri, {
  useNewUrlParser: true
}).then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err))