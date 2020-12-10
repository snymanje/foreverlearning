import { model, Schema, Model, Document } from 'mongoose';
import User from '../model/User';

export interface IProject extends Document {
  user: Schema.Types.ObjectId | string;
  title: string;
  techStack: string;
  features: string;
}

const projectSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: User
    },
    title: {
      type: String,
      required: [true, 'Please enter a title']
    },
    techStack: {
      type: String,
      required: [true, 'Please enter a technology stack']
    },
    features: {
      type: String,
      required: [true, 'Please enter some features']
    }
  },
  { timestamps: true }
);

projectSchema.set('toJSON', {
  virtuals: true,
  versionKey: false
  /* transform: function (_, ret) {
    // remove these props when object is serialized
    //delete ret.title;
  } */
});

// Model names always start with capital letter
const Project: Model<IProject> = model('Project', projectSchema);

export default Project;
