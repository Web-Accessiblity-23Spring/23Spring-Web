const aplus = document.getElementById('font-increase-button');
const aminus = document.getElementById('font-decrease-button');
const docEl = document.getElementsByTagName('html')[0];
const facEls = document.querySelectorAll('.dropdown-toggle')
const anchors = document.querySelectorAll('a[href^="#"]');

/* Exercise 2 - Accessible font size */
aplus.addEventListener('click', () => {
    if (!docEl.style.fontSize) {
        docEl.style.fontSize = '17px';
    } else {
        docEl.style.fontSize = parseFloat(docEl.style.fontSize) + 1 + 'px';
    }
})

/* Exercise 2 - Accessible font size */
aminus.addEventListener('click', () => {
    if (!docEl.style.fontSize) {
        docEl.style.fontSize = '15px';
    } else {
        docEl.style.fontSize = parseFloat(docEl.style.fontSize) - 1 + 'px';
    }
})

/* Exercise 3 - Drop-down menu */
facEls.forEach((facEl) => {
    facEl.addEventListener('click', (e) => {

        if (facEl.nextElementSibling.style.display === 'none') {
            facEl.nextElementSibling.style.display = 'block';
            facEl.setAttribute('aria-expanded', 'true');
        } else {
            facEl.nextElementSibling.style.display = 'none';
            facEl.setAttribute('aria-expanded', 'false');
        }
        e.preventDefault();
    }, false);
})


/* Exercise 3 - Menu keyboard interaction */
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        facEls.forEach((facEl) => {
            if (facEl.nextElementSibling.style.display !== 'none') {
                facEl.nextElementSibling.style.display = 'none';
                facEl.setAttribute('aria-expanded', 'false');
                facEl.focus();
            }
        })
    } else if (e.key === ' ') {
        e.preventDefault();
        if (document.activeElement.nextElementSibling) {
            if (document.activeElement.nextElementSibling.style.display === 'none') {
                document.activeElement.nextElementSibling.style.display = 'block';
                document.activeElement.setAttribute('aria-expanded', 'true');
            } else {
                document.activeElement.nextElementSibling.style.display = 'none';
                document.activeElement.setAttribute('aria-expanded', 'false');
            }
        }
    } else if (e.key === 'Tab') {
        facEls.forEach((facEl) => {
            if (facEl.nextElementSibling.style.display !== 'none') {
                facEl.nextElementSibling.style.display = 'none';
                facEl.setAttribute('aria-expanded', 'false');
            }
        })
    }
})

