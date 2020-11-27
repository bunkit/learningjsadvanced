const template = ({ Title: title, Poster: image, Year: year, imdbID: id }, idx) => {
    let img = image !== 'N/A'
        ? `<img src="${image}" class="card-img-top" alt="${title}">`
        : `<img src="//placehold.it/202x318?text=N/A" class="card-img-top" alt="${title}">`;
    let breakpoints1 = (idx + 1) % 6 === 0 || idx === 0
        ? `<div class="card-deck">`
        : '';
    let breakpoints2 = (idx + 1) % 5 === 0
        ? `</div>`
        : '';
    return (
        `${breakpoints1}
            <div class="card mb-4 indek-${idx + 1}">
                ${img}
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
                    <a href="#" class="btn btn-primary btn-get-id" data-imdb=${id} data-toggle="modal" data-target="#movieDetailModal">Show Detail</a>
                </div>
            </div>
            ${breakpoints2}`
    )
}
const templateDetail = (data) => {
    let images = data.Poster !== 'N/A'
        ? `<img class="card-img" src="${data.Poster}" alt="${data.Title}">`
        : `<img class="card-img" src="//placehold.it/202x318?text=N/A" alt="${data.Title}">`
    return (
        `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card bg-dark text-white">
                            ${images}
                        </div>
                        <div class="text-center">
                            <h6 class="mt-2">
                                <span class="small">${data.Runtime} <br/> ${data.Genre}</span>
                            </h6>
                        </div>
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h3>${data.Title} (${data.Year})</h3>
                            </li>
                            <li class="list-group-item"><strong>Director :</strong> <br /> ${data.Director}</li>
                            <li class="list-group-item"><strong>Cast :</strong> <br /> ${data.Actors}</li>
                            <li class="list-group-item"><strong>Writer :</strong> <br /> ${data.Writer}</li>
                            <li class="list-group-item"><strong>Plot :</strong> <br /> ${data.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
    )
}
const spinner = (state, parent = '.spinner') => {
    const fragment = `<div class="d-flex justify-content-center">
                        <div class="spinner-grow text-dark" style="width: 5rem; height: 5rem;" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>`
    let output = state === true ? fragment : '';
    document.querySelector(parent).innerHTML = output;
}
const getMovies = ((keyword, param = 's') => {
    return fetch(`http://www.omdbapi.com/?apikey=50eeb9b2&` + param + `=` + keyword)
        .then(data => data.json())
        .then(response => response)
        .catch(e => {
            return e
        })
})
const onClickDetail = () => {
    document.querySelectorAll('.btn-get-id').forEach(item => {
        item.addEventListener('click', async function () {
            let modalBody = document.querySelector('.modal-body')
            modalBody.innerHTML = ' ';
            spinner(true, '.spinnerModal')
            let id = this.dataset.imdb;
            const movie = await getMovies(id, 'i')
            const movieDetail = templateDetail(movie)
            modalBody.innerHTML = movieDetail
            spinner(false, '.spinnerModal')
        })
    })
}

const updateUi = (promise) => {
    spinner(false)
    if (promise.Response === 'False')
        return false
    const data = promise.Search
    const movieList = data.map((item, idx) => template(item, idx)).join('');
    document.querySelector('.list-data').innerHTML = movieList;
}

const inputSearch = document.querySelector('.searchMovie')
let interval = 0;
const onChangeSearch = inputSearch.addEventListener('keyup', async function () {
    clearTimeout(interval)
    let keyword = this.value;
    interval = setTimeout(async () => {
        spinner(true);
        const movies = await getMovies(keyword, 's')
        updateUi(movies)
        onClickDetail()
    }, 500)

})

const tryPromise = (time) => {
    return new Promise((res, rej) => {
        if (time <= 90000) {
            setTimeout(() => {
                res('Complete')
            }, time)
        } else {
            rej('To loong')
        }
    })
}

const tryAsync = async () => {
    try {
        const test = await tryPromise(8000)
        console.log(test)
    } catch (err) {
        console.error(err)
    } finally {
        console.log('tesst')
    }
}

tryAsync()
