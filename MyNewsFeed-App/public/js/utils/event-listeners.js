/* globals $ */

$( document ).ready(function() {
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('select').material_select();
    $('.btn-save-article').on('click', (event) => {
        saveArticle(event);
    });
    $('.btn-follow').on('click', (event) => {
        followFeed(event);
    });
});

function saveArticle(event) {
    const data = {};
        data.username = event.target.getAttribute('data-username');
        data.articleTitle = event.target.getAttribute('data-title');
        data.articleUrl = event.target.getAttribute('data-url');
        const url = '/' + data.username + '/addarticle';
        $.post(url, data);
}

function followFeed(event) {
    const data = {};
        data.username = event.target.getAttribute('data-username');
        data.feedName = event.target.getAttribute('data-name');
        data.feedUrl = event.target.getAttribute('data-url');
        const url = '/' + data.username + '/followfeed';
        $.post(url, data);
}
