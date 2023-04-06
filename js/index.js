const aplus = document.getElementById('font-increase-button');
const aminus = document.getElementById('font-decrease-button');
const docEl = document.getElementsByTagName('html')[0];

aplus.addEventListener('click', () => {
    if (!docEl.style.fontSize) {
        docEl.style.fontSize = '17px';
    } else {
        docEl.style.fontSize = parseFloat(docEl.style.fontSize) + 1 + 'px';
    }
})

aminus.addEventListener('click', () => {
    if (!docEl.style.fontSize) {
        docEl.style.fontSize = '15px';
    } else {
        docEl.style.fontSize = parseFloat(docEl.style.fontSize) - 1 + 'px';
    }
})
