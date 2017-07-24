/* globals $ */

$( document ).ready(function() {
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('select').material_select();
    $('.btn-save-article').on('click', (event) => {
        const data = {};
        // console.log(event.target);
        data.username = event.target.getAttribute('data-username');
        data.articleTitle = event.target.getAttribute('data-title');
        data.articleUrl = event.target.getAttribute('data-url');
        const url = '/' + data.username + '/addarticle';
        $.post(url, data);
    });
});
