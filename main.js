const defaultState = {
    'names': []
};

const store = Redux.createStore(reducer /*, makeDebugToolParams()*/);

function reducer(state, action) {
    if (!state) {
        state = defaultState;
    }

    switch (action.type) {
        case 'NAMES':
            state.names = action.payload;

            return state;

        default:
            return state;
    }
}

store.subscribe(onStateUpdate);

//////////////////////////////////// helpers ///////////////////////////////////////
let namesContainer = document.getElementById('namesContainer');

// this code updates your components in your application
function onStateUpdate() {
    const state = store.getState();

    // clear the container
    namesContainer.innerHTML = '';

    if (state.names) {
        state.names.forEach(addListItem);
    }
}

function addListItem(text) {
    const item = document.createElement('li');

    item.textContent = text;

    namesContainer.appendChild(item);
}

/**
 * Only needed for use with the chrome extension redux debug tools
 */
function makeDebugToolParams() {
    return Redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
}
