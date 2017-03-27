const defaultState = {
    'names': []
};

const Store = Redux.createStore(reducer, defaultState , makeDebugToolParams());

function reducer(state, action) {
    switch (action.type) {
        case 'NAMES':
            const patch = {'names': action.payload};

            state = Object.assign({}, state, patch);

            return state;

        default:
            return state;
    }
}

Store.subscribe(onStateUpdate);

function setNames(names) {
    return {
        type: 'NAMES',
        payload: names
    }
}

//////////////////////////////////// helpers ///////////////////////////////////////
let container = document.getElementById('names');

// this code updates your components in your application
function onStateUpdate() {
    const state = Store.getState();

    // clear the container
    container.innerHTML = '';

    if (state.names) {
        state.names.forEach(addListItem);
    }
}

function addListItem(text) {
    const item = document.createElement('li');

    item.textContent = text;

    container.appendChild(item);
}

/**
 * Only needed for use with the chrome extension redux debug tools
 */
function makeDebugToolParams() {
    return Redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
}
