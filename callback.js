// const template = ({ Title: title, Poster: image, Year: year, imdbID: id }) => {
//     return (
//         `<div class="col-md-4 my-3">
//             <div class="card">
//                 <img src="${image}" class="card-img-top" alt="${title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${title}</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
//                     <a href="#" class="btn btn-primary btn-get-id" data-imdb=${id} data-toggle="modal" data-target="#movieDetailModal">Show Detail</a>
//                 </div>
//             </div>
//         </div>`
//     )
// }
// const templateDetail = (data) => {
//     return (
//         `<div class="container-fluid">
//                 <div class="row">
//                     <div class="col-md-3">
//                         <div class="card bg-dark text-white">
//                             <img class="card-img"
//                                 src="${data.Poster}"
//                                 alt="Title">
//                         </div>
//                         <div class="text-center">
//                             <h6 class="mt-2">
//                                 <span class="small">${data.Runtime} <br/> ${data.Genre}</span>
//                             </h6>
//                         </div>
//                     </div>
//                     <div class="col-md">
//                         <ul class="list-group">
//                             <li class="list-group-item">
//                                 <h3>${data.Title} (${data.Year})</h3>
//                             </li>
//                             <li class="list-group-item"><strong>Director :</strong> <br /> ${data.Director}</li>
//                             <li class="list-group-item"><strong>Cast :</strong> <br /> ${data.Actors}</li>
//                             <li class="list-group-item"><strong>Writer :</strong> <br /> ${data.Writer}</li>
//                             <li class="list-group-item"><strong>Plot :</strong> <br /> ${data.Plot}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>`
//     )
// }

// const spinner = (state, parent = '.spinner') => {
//     const fragment = `<div class="d-flex justify-content-center">
//                         <div class="spinner-grow text-dark" style="width: 5rem; height: 5rem;" role="status">
//                             <span class="sr-only">Loading...</span>
//                         </div>
//                     </div>`
//     let output = state === true ? fragment : '';
//     $(parent).html(output);

// }

// const search = (keyword, param = 's') => {
//     $.ajax({
//         url: `http://www.omdbapi.com/?apikey=50eeb9b2&` + param + `=` + keyword,
//         success: function (response) {
//             spinner(false)
//             const data = response.Search
//             const movieList = data.map(item => template(item)).join('');
//             document.querySelector('.list-data').innerHTML = movieList
//             $('.btn-get-id').on('click', function (e) {
//                 $('.modal-body').html(' ')
//                 spinner(true, '.spinnerModal')
//                 let id = $(this).data('imdb');
//                 $.ajax({
//                     url: "http://www.omdbapi.com/?apikey=50eeb9b2&i=" + id,
//                     success: function (res) {
//                         spinner(false, '.spinnerModal')
//                         const movieDetail = templateDetail(res)
//                         $('.modal-body').html(movieDetail)
//                     },
//                     error: (e) => {
//                         console.log(e.responseText)
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText)
//         }
//     });
// }


// $('.searchMovie').change(function (e) {
//     e.preventDefault();
//     let keyword = $(this).val();
//     spinner(true);
//     search(keyword, 's')
// });

const run = true;
const product = new Promise((resolve, reject) => {
    if (run) {
        setTimeout(() => {
            resolve([{
                name: 'Macbook pro 2022',
                price: 'Rp 32.000.000',
                spec: {
                    ram: '32GB',
                    size: '20 inch',
                    chipset: 'Apple M2'
                }
            }])
        }, 1000)
    }
    else {
        setTimeout(() => {
            reject([{
                status: 'Not Run',
            }])
        }, 100)
    }
})
const productDetail = new Promise((resolve, reject) => {
    if (run) {
        setTimeout(() => {
            resolve([{
                name: 'Macbook pro 2022',
                price: 'Rp 32.000.000',
                desc: "Nostrud dolor sit ullamco ipsum tempor. Lorem excepteur sit labore amet ad elit Lorem aliquip amet consequat cillum eiusmod voluptate adipisicing. Culpa reprehenderit deserunt adipisicing sint officia Lorem proident consequat fugiat reprehenderit nostrud aute culpa elit. Magna eiusmod adipisicing ipsum laboris deserunt. Nostrud velit ea sunt non minim esse labore dolor ut sit culpa nulla occaecat. Do ea ut id sit dolore ad occaecat deserunt ea tempor. Aliqua voluptate magna voluptate magna consequat consequat proident reprehenderit minim. Adipisicing sunt sit incididunt ut ullamco duis veniam Lorem ad. Lorem irure ullamco consequat ea ut voluptate anim elit sint ea consequat incididunt. Id fugiat esse exercitation minim sunt mollit exercitation ad ipsum aliqua aliqua fugiat nostrud pariatur. Nisi nisi labore laborum consequat excepteur dolore minim consequat aliqua commodo adipisicing sint irure Lorem. Eiusmod incididunt id deserunt ut duis id. Labore commodo nisi et minim fugiat sunt est adipisicing in deserunt cupidatat mollit minim. Cillum non labore officia veniam occaecat voluptate aliqua.",
                spec: {
                    ram: '32GB',
                    size: '20 inch',
                    chipset: 'Apple M2'
                }
            }])
        }, 1000)
    }
    else {
        setTimeout(() => {
            reject([{
                status: 'Not Run',
            }])
        }, 100)
    }
})


// product
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

Promise.all([product, productDetail])
    .then(res => {
        const [prod, detail] = res
        console.log(prod)
        console.log(detail)
    })
