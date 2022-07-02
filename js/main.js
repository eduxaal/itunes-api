//imports
import { getTracks } from './services/itunes.js';

//event
document.getElementById('search-btn').addEventListener('click', () => { init(); });

//init
function init() {
    console.log("Initializing document...");
    var term = document.getElementById('searchTerm').value;
    loadTracks(term);
}

//load tracks
function loadTracks(searchTerm) {
    console.log(searchTerm);
    getTracks(searchTerm)
        .then( (response) => { showTracks(response.results); })
}

//show track
function showTracks(tracks) {
    for(var i = 0; i <= 10; i++){
        //template
        let template = document.getElementById('template-track').content;
        let fragment = document.createDocumentFragment();
        //read tracks
        tracks.forEach(track => {
            console.log(track);
            template.querySelector('#image').src = track.artworkUrl100; //image
            template.querySelector("#name").textContent = track.trackName; //track name
            template.querySelector("#album").textContent = track.collectionName; //track album
            template.querySelector("#artist").textContent = track.artistName; //track artist
            template.querySelector("#trackPrice").textContent = "$" + track.trackPrice; //track price
            let clone = document.importNode(template, true); //clone fragment
            fragment.appendChild(clone); //add clone to fragment
        });
        //add fragment to parent
        document.getElementById('template-track').appendChild(fragment);
    }
}