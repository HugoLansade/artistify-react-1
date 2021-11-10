const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    style: {
      type: Schema.Types.ObjectId,
      ref: "Styles"
    },
    picture: {
      type: String,
      default:
        "https://s1.qwant.com/thumbr/0x380/3/e/38241f096fcbc253212fd57ad2acbab0a7fdf0eab51d8e9790ab3f01027e75/default.jpeg?u=https%3A%2F%2Flargeasse.fr%2Fwp-content%2Fuploads%2F2015%2F05%2Fdefault.jpeg&q=0&b=1&p=0&a=1"
    },
    description: String,
    isBand: Boolean,
    rates: [
      {
        rate: Number,
        author: {
          type: Schema.Types.ObjectId,
          ref: "Users"
        },
        date: {
          type: Date,
          default: Date.now()
        }
      }
    ]
  },
  { timestamps: true }
);

const artistModel = mongoose.model("Artists", artistSchema);

module.exports = artistModel;
