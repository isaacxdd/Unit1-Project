$(() => {
    let $title = $('#title');
    let $h1 = $('<h1>').text('Marvel');
    $title.append($h1);
    
    ///////////////////////
    
    let $navbar =$('.navbar');
    
    $navbar.append($('<ul>').text('Home'));
    $navbar.append($('<ul>').text('Facebook'));
    $navbar.append($('<ul>').text('Youtube'));
    $navbar.append($('<ul>').text('Twitter'));
    $navbar.append($('<ul>').text('About us'));
    $navbar.append($('<ul>').text('Contact us'));
     
    });
    