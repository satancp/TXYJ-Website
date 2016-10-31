/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/honors', require('./api/honor'));
  app.use('/api/projects', require('./api/project'));
  app.use('/api/news', require('./api/new'));
  app.use('/api/permissions', require('./api/permission'));
  app.use('/api/items', require('./api/item'));
  app.use('/api/staffs', require('./api/staff'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
}
