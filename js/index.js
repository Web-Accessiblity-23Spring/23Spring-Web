
// const docEl = document.getElementsByTagName('html')[0];
// const facEls = document.querySelectorAll('.dropdown-toggle')
// const anchors = document.querySelectorAll('a[href^="#"]');
// const arr = [0, 1, 2];
// console.log(arr.filter(item => item !== 1));
// console.log(facEls[0], 'facEls');
// /* Exercise 3 - Drop-down menu */
// for (let i = 0; i < facEls.length; i++) {
//     facEls[i].addEventListener('click', (e) => {
//         console.log(facEls[i], 'facEl');
//         console.log(facEls[i].nextElementSibling, 'facEl.nextElementSibling');
//         if (facEls[i].nextElementSibling.style.display === 'none') {
//             facEls[i].nextElementSibling.style.display = 'block';
//             arr.filter(item => item !== i).forEach(element => {
//                 facEls[element].nextElementSibling.style.display = 'none';
//             });
//             facEls[i].setAttribute('aria-expanded', 'true');
//         } else {
//             facEls[i].nextElementSibling.style.display = 'none';
//             facEls[i].setAttribute('aria-expanded', 'false');
//         }
//         // e.preventDefault();
//     }, false);
// }
// // facEls.forEach((facEl) => {
//     facEl.addEventListener('click', (e) => {
//         console.log(facEl, 'facEl');
//         console.log(facEl.nextElementSibling, 'facEl.nextElementSibling');
//         if (facEl.nextElementSibling.style.display === 'none') {
//             facEl.nextElementSibling.style.display = 'block';
//             facEl.setAttribute('aria-expanded', 'true');
//         } else {
//             facEl.nextElementSibling.style.display = 'none';
//             facEl.setAttribute('aria-expanded', 'false');
//         }
//         // e.preventDefault();
//     }, false);
// })


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

