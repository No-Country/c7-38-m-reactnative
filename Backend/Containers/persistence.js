const mongoose = require("mongoose");

class DBClass {
  constructor(collectionName, docSchema) {
    this.collection = mongoose.model(collectionName, docSchema);
  }
  async getAll() {
    try {
      const all = await this.collection.find().lean();
      return all;
    } catch (error) {
      console.error(err);
    }
  }

  async getById(id) {
    try {
      const one = await this.collection.findById(id).lean();
      return one;
    } catch (error) {
        console.error(error);
    }
  }

  async getByUser(data){
    try {
      const one = await this.collection.find({email:data.email}).lean();
     
      return one[0];
    } catch (error) {
        console.error(error);
    }
  }

  async countAll() {
    try {
      const all = await this.collection.find().count();
      return all;
    } catch (error) {
        console.error(error);
    }
  }
  async create(doc) {
    try {
      const one = await this.collection.create(doc);
      return one
    } catch (error) {
        console.error(error);
    }
  }
  async deleteById(id) {
    try {
      const one = await this.collection.findById(id).deleteOne();
    } catch (error) {
        console.error(error);
    }
  }

  async deleteAll() {
    try {
      const all = await this.collection.deleteMany();
    } catch (error) {
        console.error(error);
    }
  }
  async updateById(id, doc) {
    try {
      const one = await this.collection.findByIdAndUpdate(id, doc);
    } catch (error) {
        console.error(error);
    }
  }
  async getByEmail(data){
    try {
      const one = await this.collection.find({email:data}).lean();
     
      return one[0];
    } catch (error) {
        console.error(error);
    }
  }
}

module.exports = DBClass;