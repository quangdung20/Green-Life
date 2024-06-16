// function handleClick(event, fileName) {
//     event.preventDefault();
//     loadPage( fileName);
// }
//   async function loadPage( fileName) {
//         let content;
//         const filePath = `app/products/${fileName}.html`;
//         try {
//             const response = await fetch(filePath);
//             if (response.ok) {
//                 content = await response.text();
//             } else {
//                 console.error('Could not load the page:', filePath);
//                 content = '<p>Error loading page.</p>';
//             }
//         } catch (error) {
//             console.error('Error fetching the page:', error);
//             content = '<p>Error loading page.</p>';
//         }
//         document.getElementById('main-content').innerHTML = content;
//         // updateCurrentPage(fileName);
//   }
// window.onhashchange = function() {
//     if (window.innerDocClick) {
//         window.innerDocClick = false;
//     } else {
//         if (['#shopgreen', '#about', '#blog', '#event'].includes(window.location.hash)) {
//             location.reload();
//         } 
//     }
// }
