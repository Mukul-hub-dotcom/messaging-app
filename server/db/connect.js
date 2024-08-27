const { connect } = require('mongoose');
const { isDev, db } = require('../config');

module.exports = async () => {
  try {
    const uri = isDev ? `mongodb+srv://lechat:lechat@lechat.0y0zm.mongodb.net/${db.name}` : db.uri;
    await connect(uri);

    console.log('database connected');
  } catch (error0) {
    console.log(error0.message);
  }
};
