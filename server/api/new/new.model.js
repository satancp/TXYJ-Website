'use strict';

import mongoose from 'mongoose';

var NewSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('New', NewSchema);
