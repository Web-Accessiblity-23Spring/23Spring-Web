const aplus = document.getElementsByClassName('font-increase-button');
const aminus = document.getElementsByClassName('font-decrease-button');
const dropdown = document.getElementsByClassName('dropdown');

const docEl = document.getElementsByTagName('html')[0];
const facEls = document.querySelectorAll('.dropdown-toggle')
const anchors = document.querySelectorAll('a[href^="#"]');
const arr = [0, 1, 2];
/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

    for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);

/* Exercise 2 - Accessible font size */
for (const item of aplus) {
    // console.log(iterator, 'element');
    item.addEventListener('click', () => {
        console.log('123123');
        if (!docEl.style.fontSize) {
            docEl.style.fontSize = '17px';
        } else {
            docEl.style.fontSize = parseFloat(docEl.style.fontSize) + 1 + 'px';
        }
    })
}
for (const item of aminus) {
    // console.log(iterator, 'element');
    item.addEventListener('click', () => {
        console.log('123123');
        if (!docEl.style.fontSize) {
            docEl.style.fontSize = '17px';
        } else {
            docEl.style.fontSize = parseFloat(docEl.style.fontSize) - 1 + 'px';
        }
    })
}

/* Exercise 3 - Drop-down menu */
for (let i = 0; i < facEls.length; i++) {
    facEls[i].addEventListener('click', (e) => {
        // console.log(facEls[i], 'facEl');
        // console.log(facEls[i].nextElementSibling, 'facEl.nextElementSibling');
        if (facEls[i].nextElementSibling.style.display === 'none') {
            facEls[i].nextElementSibling.style.display = 'block';
            facEls[i].setAttribute('aria-expanded', 'true');
            arr.filter(item => item !== i).forEach(element => {
                facEls[element].nextElementSibling.style.display = 'none';
                facEls[element].setAttribute('aria-expanded', 'false');
            });
        } else {
            facEls[i].nextElementSibling.style.display = 'none';
            facEls[i].setAttribute('aria-expanded', 'false');
        }
        // e.preventDefault();
    }, false);
}

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