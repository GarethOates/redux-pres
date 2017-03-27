const defaultState = {
    'names': [],
    'count': 0
};

const Store = Redux.createStore(reducer, makeDebugToolParams());

function reducer(state, action) {
    if (!state) {
        state = defaultState;
    }

    switch (action.type) {
        case 'NAMES':
            const patch = {
                'names': action.payload,
                // computed value
                'count': Array.isArray(action.payload) ? action.payload.length : 0
            };

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
const
    namesContainer = document.getElementById('namesContainer'),
    nameCountContainer = document.getElementById('name-count');

// this code updates your components in your application
function onStateUpdate() {
    const state = Store.getState();

    // clear the namesContainer
    namesContainer.innerHTML = '';

    if (state.names) {
        state.names.forEach(addListItem);
    }

    nameCountContainer.textContent = state.count;
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
