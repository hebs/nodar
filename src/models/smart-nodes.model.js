// smartNode-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const smartNodes = new Schema({
    address: {
      type: String,
      required: true,
      unique: true
    },
    label: {
      type: String,
      required: true,
    },
    owner_id: {
      type: Schema.ObjectId,
      ref: 'users',
      required: true
    },

  }, {
    timestamps: true,
    // Force this model to retuen JSON instead of a mongoos document
    // this is so that we can add fields to the DB results that are
    // not on this schema, which is the content from smart cash api
    lean: true
  });

  return mongooseClient.model('smartNodes', smartNodes);
};
