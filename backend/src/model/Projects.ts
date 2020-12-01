import { model, Schema, Model, Document } from 'mongoose';

interface IProject extends Document {
  title: string;
}

const projectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter a title']
    }
  },
  { timestamps: true }
);

projectSchema.get('toJSON');

// Model names always start with capital letter
const Project: Model<IProject> = model('Project', projectSchema);

export default Project;
