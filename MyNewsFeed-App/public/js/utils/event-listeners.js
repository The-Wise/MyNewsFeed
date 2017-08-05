/* globals $, Materialize */

$( document ).ready(function() {
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('select').material_select();
    $('.dropdown-button').dropdown();
    $('.btn-save-article').on('click', (event) => {
        saveArticle(event);
    });
    $('.btn-follow').on('click', (event) => {
        followFeed(event);
    });
    $('.btn-delete-article').on('click', (event) => {
        removeArticle(event);
    });
    $('.btn-unfollow').on('click', (event) => {
        unfollowFeed(event);
    });
    if ($('.error-message')) {
        const message = $('.error-message').text();
        Materialize.toast(message, 2000, 'red');
    }
    if ($('.success-message')) {
        const message = $('.success-message').text();
        Materialize.toast(message, 2000, 'green');
    }
    });


function saveArticle(event) {
    const data = {};
        data.username = event.target.getAttribute('data-username');
        data.articleTitle = event.target.getAttribute('data-title');
        data.articleUrl = event.target.getAttribute('data-url');
        data.imageUrl = event.target.getAttribute('data-image');
        const url = '/' + data.username + '/addarticle';
        $.ajax({
            url,
            method: 'PUT',
            data,
            success: () => Materialize.toast('Article saved', 2000, 'green'),
            error: () => Materialize.toast('Article already saved', 2000, 'yellow'),
        });
}

function followFeed(event) {
    const data = {};
        data.username = event.target.getAttribute('data-username');
        data.feedName = event.target.getAttribute('data-name');
        data.feedUrl = event.target.getAttribute('data-url');
        data.imageUrl = event.target.getAttribute('data-image');
        const url = '/' + data.username + '/followfeed';
        $.ajax({
            url,
            method: 'PUT',
            data,
            success: () => Materialize.toast('Success, feed saved!', 2000, 'green'),
            error: () => Materialize.toast('You already follow this feed', 2000, 'yellow'),
        });
}

function removeArticle(event) {
    const data = {};
        data.username = event.target.getAttribute('data-username');
        data.articleTitle = event.target.getAttribute('data-title');
        const url = '/' + data.username + '/myfeeds/removearticle';
        $.ajax({
            url,
            method: 'PUT',
            data,
            success: () => {
                Materialize.toast('Article removed', 2000, 'green');
                location.reload(true);
            },
            error: () => Materialize.toast('No such article', 2000, 'yellow'),
        });
}

function unfollowFeed(event) {
    const data = {};
        data.username = event.target.getAttribute('data-username');
        data.feedName = event.target.getAttribute('data-name');
        const url = '/' + data.username + '/myfeeds/unfollowfeed';
        $.ajax({
            url,
            method: 'PUT',
            data,
            success: () => {
                Materialize.toast('Success, feed unfollowed!', 2000, 'green');
                location.reload(true);
            },
            error: () => Materialize.toast('No such feed', 2000, 'yellow'),
        });
}
