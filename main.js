var State = {}; // <-- this is state. simple.


////////////////////////////////////////////////////////////////////////////////////////////////////

function onStateUpdate() {
    const container = document.getElementById('things');

    if (State.things) {
        State.things.forEach(addListItem);
    }
}


function addListItem(text) {
    const item = document.createElement('li');

    item.textContent = text;

    document.body.appendChild(item);
}
