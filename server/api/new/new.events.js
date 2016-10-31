/**
 * New model events
 */

'use strict';

import {EventEmitter} from 'events';
import New from './new.model';
var NewEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
NewEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  New.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    NewEvents.emit(event + ':' + doc._id, doc);
    NewEvents.emit(event, doc);
  };
}

export default NewEvents;
