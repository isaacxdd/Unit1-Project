$(() => {
    let $title = $('#title');
    let $h1 = $('<h1>').text('Marvel');
    $title.append($h1);
    
///////////////////////////////////
    
    let $navbar =$('.navbar');
    
    $navbar.append($('<ul>').text('Home'));
    $navbar.append($('<ul>').text('Facebook'));
    $navbar.append($('<ul>').text('Youtube'));
    $navbar.append($('<ul>').text('Twitter'));
    $navbar.append($('<ul>').text('About us'));
    $navbar.append($('<ul>').text('Contact us'));
     
    });
    

/////////////////////////////////

const $searchForm = $("form");

$searchForm.on("submit", event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const anime = formData.get("anime");

    const url = `https://gateway.marvel.com/v1/public/characters?name=${anime}&ts=1&&apikey=a459e244b568f5a455ec8c997cd28970&hash=6368c925608e3f9b51a06abc10dcb485`
    console.log(url);  
 
    ////////////////////////////////////////////////////////////////////////

    const $screen = $(".screen");
    const $result = $(".result");

    //empty out the input field
    $('[name="anime"]')[0].value = "";

    // empty out previous result and add in a loading indicator
    $screen.empty();
    $result.html(`<div>Loading...</div>`)

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $screen.html(
                `<img src=${data.data.results[0].thumbnail.path + "." + "jpg"}>`
            );
            $result.html(`
                <div>
                    <b>name:&nbsp;</b> ${data.data.results[0].name}
                </div>

                <div>
                    <b>id:&nbsp;</b> ${data.data.results[0].id}
                </div>

                <div>
                    <b>description:&nbsp;</b> ${data.data.results[0].description}
                </div>
            `)
        })
        .catch(() => {
            $result.html(`<div> there was an error...</div>`)
        });
});