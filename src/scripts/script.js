const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((results) => displayResults(results));
}

function displayResults(results) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    results.forEach((element) => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultArtist.classList.remove('hidden');
}

searchInput.addEventListener("input", function(){
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultArtist.classList.add("hidden");
        resultPlaylist.classList.remove("hidden");
        return;
    }
    requestApi(searchTerm);
});