/**
 * Honor model events
 */

'use strict';

import {EventEmitter} from 'events';
import Honor from './honor.model';
var HonorEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
HonorEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Honor.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    HonorEvents.emit(event + ':' + doc._id, doc);
    HonorEvents.emit(event, doc);
  };
}

export default HonorEvents;
