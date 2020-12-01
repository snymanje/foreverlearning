import { model, Schema, Model, Document } from 'mongoose';

interface ITutorial extends Document {
  title: string;
}

const tutorialSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter a title']
    }
  },
  { timestamps: true }
);

tutorialSchema.get('toJSON');

// Model names always start with capital letter
const Tutorial: Model<ITutorial> = model('Tutorial', tutorialSchema);

export default Tutorial;
