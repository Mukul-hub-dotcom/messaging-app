const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  isDev,
  cors: {
    origin: ['http://13.201.38.154:3000'],
  },
  db: {
    uri: process.env.MONGO_URI,
    name: 'lechat',
  },
};
