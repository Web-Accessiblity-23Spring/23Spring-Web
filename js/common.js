const aplus = document.getElementsByClassName('font-increase-button');
const aminus = document.getElementsByClassName('font-decrease-button');

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