import mongoose from 'mongoose';
import config from '../config/config';

export default (async () => {
  await mongoose.connect(config.mongooseConnection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  console.log('Connected to mongodb');
})();
