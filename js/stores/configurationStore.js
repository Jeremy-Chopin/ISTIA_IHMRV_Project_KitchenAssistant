import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ConfigurationStore extends EventEmitter {
    constructor() {
        super();

        // Registers action handler with the Dispatcher.
        Dispatcher.register(this._registerToActions.bind(this));
    }

    // Switches over the action's type when an action is dispatched.
	_registerToActions(action) {
		switch(action.actionType) {
			case ActionTypes.ADD_NEW_DRINK:
				this._addNewPrices(action.payload);
			break;
		}
    }
    
    // Adds a new item to the list and emits a CHANGED event. 
	_addNewDrink(drink) {
		drink.id = _drinkState.length;
		_drinkState.push(drink);
		this.emit(CHANGE);
    }
    
    // Returns the current store's state.
	getAllDrinks() {
		return _drinkState;
    }
    
    // Hooks a React component's callback to the CHANGE event.
	addChangeListener(callback) {
		this.on(CHANGE, callback);
	}

	// Removes the listener from the CHANGED event.
	removeChangeListener(callback) {
		this.removeListener(CHANGE, callback);
    }
    
    // Switches over the action's type when an action is dispatched.
	_registerToActions(action) {
		switch(action.actionType) {
			case ActionTypes.ADD_NEW_PRICES:
				this._addNewPrices(action.payload);
			break;
		}
    }
    
    // Adds a new item to the list and emits a CHANGED event. 
	_addNewPrices(drink) {
		drink.id = _drinkState.length;
		_drinkState.push(drink);
		this.emit(CHANGE);
    }
    
    // Returns the current store's state.
	getLastPrices() {
		return pricesState;
    }
    
    getLastNPrices(limit) {
        return pricesState
    }
}
export default new ConfigurationStore();