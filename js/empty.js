/**
 * Get the value correspondin to the query parameter
 * @param {string} name - The name of the url query parameter
 * @return {string} The value of the query paramter
 */
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    if (results == null) {
        return null;
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var title = getUrlParameter('title');
    document.getElementById('title-placeholder').innerHTML
        = title == null ? 'Not found' : title;
    document.getElementById('text-placeholder').innerHTML
        = title == null ? '' : 'This page is currently under construction.';
}, false);

// /* Exercise 3 - Menu keyboard interaction */
// window.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//         facEls.forEach((facEl) => {
//             if (facEl.nextElementSibling.style.display !== 'none') {
//                 facEl.nextElementSibling.style.display = 'none';
//                 facEl.setAttribute('aria-expanded', 'false');
//                 facEl.focus();
//             }
//         })
//     } else if (e.key === ' ') {
//         e.preventDefault();
//         if (document.activeElement.nextElementSibling) {
//             if (document.activeElement.nextElementSibling.style.display === 'none') {
//                 document.activeElement.nextElementSibling.style.display = 'block';
//                 document.activeElement.setAttribute('aria-expanded', 'true');
//             } else {
//                 document.activeElement.nextElementSibling.style.display = 'none';
//                 document.activeElement.setAttribute('aria-expanded', 'false');
//             }
//         }
//     } else if (e.key === 'Tab') {
//         facEls.forEach((facEl) => {
//             if (facEl.nextElementSibling.style.display !== 'none') {
//                 facEl.nextElementSibling.style.display = 'none';
//                 facEl.setAttribute('aria-expanded', 'false');
//             }
//         })
//     }
// })
