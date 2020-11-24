const template = ({ Title: title, Poster: image, Year: year, imdbID: id }) => {
    return (
        `<div class="col-md-4 my-3">
            <div class="card">
                <img src="${image}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${year}</h6>
                    <a href="#" class="btn btn-primary btn-get-id" data-imdb=${id} data-toggle="modal" data-target="#movieDetailModal">Show Detail</a>
                </div>
            </div>
        </div>`
    )
}
const templateDetail = (data) => {
    return (
        `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card bg-dark text-white">
                            <img class="card-img"
                                src="${data.Poster}"
                                alt="Title">
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
                            <li class="list-group-item"><strong>Plot :</strong> <br /> ${data.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
    )
}

$.ajax({
    url: "http://www.omdbapi.com/?apikey=50eeb9b2&s=harry",
    success: function (response) {
        const data = response.Search
        const movieList = data.map(item => template(item)).join('');
        document.querySelector('.list-data').innerHTML = movieList
        $('.btn-get-id').on('click', function (e) {

            let id = $(this).data('imdb');
            $.ajax({
                url: "http://www.omdbapi.com/?apikey=50eeb9b2&i=" + id,
                success: function (res) {
                    const movieDetail = templateDetail(res)
                    $('.modal-body').html(movieDetail)
                },
                error: (e) => {
                    console.log(e.responseText)
                }
            });
        });
    },
    error: (e) => {
        console.log(e.responseText)
    }
});


