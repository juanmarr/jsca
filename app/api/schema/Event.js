import mongoose, { SchemaType } from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

const eventSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  img: {
    data: Buffer,
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true
  },
  attendees: [
    {
      user: {
        type: SchemaTypes.ObjectId,
        ref: "User",
      },
    },
  ],
});

const Event = mongoose.models.event || mongoose.model('event', eventSchema)

export default Event;
