const main = () => {

    const baseUrl = "https://api-song-lyrics.herokuapp.com";
    
    const getHotSongs = () => {
        fetch(`${baseUrl}/hot`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.status) {
                renderSongs(responseJson.data, "Hot songs");
            } else {
                showResponseData("Connection error");
            }
        })
        .catch(error => {
            showResponseData(error);
        })
    };

    const searchSong = (query) => {
        fetch(`${baseUrl}/search?q=${query}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.status) {
                renderSongs(responseJson.data, "Search results");
            } else {
                showResponseData("Connection error");
            }
        })
        .catch(error => {
            showResponseData(error);
        })
    };

    const getLyrics = (songId) => {
        fetch(`${baseUrl}/lyrics/${songId}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.status) {
                renderLyrics(responseJson.data);
            } else {
                showResponseData("Connection error");
            }
        })
        .catch(error => {
            showResponseData(error);
        })
    };

    const renderSongs = (songs, label) => {
        const listSongElement = document.getElementById("list-song");
        const mainLabel = document.getElementById("main-label");
        mainLabel.innerHTML = `<h2>${label}</h2>`;
        listSongElement.innerHTML = "";

        songs.forEach(song => {
            listSongElement.innerHTML += `
                <div class="song">
                    <h2>${song.songTitle}</h2>
                    <hr>
                    <p>by: ${song.artist}</p>
                    <button class="view-lyrics" id="${song.songId}">View Lyrics</button>
                </div>
            `;
        });

        const viewBtn = document.querySelectorAll(".view-lyrics");
        viewBtn.forEach(btn => {
            btn.addEventListener("click", event => {
                const songId = event.target.id;
                getLyrics(songId);
            });
        });
    };

    const renderLyrics = (song) => {
        const containerElement = document.getElementById("list-song");
        const mainLabel = document.getElementById("main-label");
        mainLabel.innerHTML = `<h2>Lyrics</h2>`;

        containerElement.innerHTML = `
            <button class="back-btn"><i class="fas fa-arrow-left"></i> Hot songs</button>
            <div class="header-lyrics">
                <h1>${song.songTitle}</h1>
                <h3>by: ${song.artist}</h3>
        `;
        song.songLyricsArr.forEach(lyric => {
            containerElement.innerHTML += `
                <p class="lyrics">${lyric}</p><br>
            `;
        });

        const backBtn = document.querySelector(".back-btn");
        backBtn.addEventListener("click", () => {
            getHotSongs();
        });
    };

    const showResponseData = (message) => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        const searchInput = document.getElementById("search-input");
        const searchBtn = document.getElementById("search-btn");

        searchBtn.addEventListener("click", () => {
            const query = searchInput.value;
            if (query !== "") {
                searchSong(query);
            }
        });

        getHotSongs();
    });
};

export default main;