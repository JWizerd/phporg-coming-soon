var cursor = document.getElementById('cursor')

function blink() {
  (cursor.innerHTML.length < 1) ? cursor.innerHTML += ' &#9608;' : cursor.innerHTML = '';
}

setInterval(function() { blink() }, 500)