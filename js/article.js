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
