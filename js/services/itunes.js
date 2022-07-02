export async function getTracks(searchTerm) {
    //api url
    var apiUrl = 'https://itunes.apple.com/';
    //request url
    var requestUrl = apiUrl + 'search?term=' + searchTerm;
    //fetch
    return await fetch(requestUrl)
        .then( (response) => { return response.json(); })
        .catch( (response) => { console.log(response); })
}