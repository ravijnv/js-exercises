// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
	constructor(){
		this.events = new Map();
	}

  // Register an event handler

  on(eventName, callback) {
  	if(this.events.has(eventName)){
  		let eventsArray = this.events.get(eventName);
  		eventsArray.push(callback);
  		this.events.set(eventName,eventsArray);
  		
  	}
  	else{
  		this.events.set(eventName,[callback])

  	}
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
  	let eventsArray = this.events.get(eventName);
  	for(let i = 0; i < eventsArray.length; i++){
  		eventsArray[i]();
  	}
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
  	this.events.get(eventName).length = 0;
  }
}

module.exports = Events;
