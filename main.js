const Store = Redux.createStore(reducer);

function reducer(state, action) {
    if (!state) {
        state = {
            'things': []
        };

        return state;
    }

    if (action.payload.things) {
        state.things = action.payload.things;
    }

    return state;
}

Store.subscribe(onStateUpdate);


//////////////////////////////////// helpers ///////////////////////////////////////

// this code updates your components in your application
function onStateUpdate() {
    const state = Store.getState();

    if (state.things) {
        state.things.forEach(addListItem);
    }
}

function addListItem(text) {
    const container = document.getElementById('things');
    const item = document.createElement('li');

    item.textContent = text;

    container.appendChild(item);
}
