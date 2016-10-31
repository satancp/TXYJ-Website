'use strict';

import mongoose from 'mongoose';

var PermissionSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Permission', PermissionSchema);
