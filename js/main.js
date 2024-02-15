// document.getElementById('get-posts').addEventListener('click', function() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(post => {
//                 document.getElementById('posts').innerHTML += `<div>${post.title}</div>`;
//             });
//         });
// });

// document.getElementById('add-user').addEventListener('click', function() {
//     fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: 'User',
//             email: 'new@user.com',
//             username: 'user',
//             address: {
//                 street: '123 Main St',
//                 suite: '42',
//                 city: 'Suntown',
//                 zipcode: '12345',
//                 geo: {
//                     lat: '1.234',
//                     lng: '2.345'
//                 },
//                 phone: '321-654-0987',
//                 website: 'http://www.example.com',
//                 company: {
//                     name: 'Example Company',
//                     catchPhrase: 'Great Company',
//                     bs: 'Best Company Ever'
//                 }
//             },
//             phone: '321-654-0987',
//             website: 'http://www.example.com',
//             company: {
//                 name: 'Example Company',
//                 catchPhrase: 'Great Company',
//                 bs: 'Best Company'
//             }
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('users').innerHTML += `<div>${data.name}</div>`;
//     });
// });

// document.getElementById('add-post').addEventListener('click', function() {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             userId: 1,
//             title: 'Post',
//             body: 'This is a post.'
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('posts').innerHTML += `<div>${data.title}</div>`;
//     });
// });

// document.getElementById('add-comment').addEventListener('click', function() {
//     fetch('https://jsonplaceholder.typicode.com/comments', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             postId: 1,
//             name: 'Commenter',
//             email: 'new@commenter.com',
//             body: 'This is a new comment.'
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('comments').innerHTML += `<div>${data.name}</div>`;
//     });
// });
