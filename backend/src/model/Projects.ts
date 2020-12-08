import { model, Schema, Model, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  techStack: string;
  features: string;
}

const projectSchema: Schema = new Schema(
  {
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
