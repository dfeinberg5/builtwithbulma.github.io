'use strict';

Vue.component('bulma-project', {
    props: ['title', 'link', 'picture'],
    template: '\n    <div class="column is-3">\n        <div class="card">\n            <div class="card-image">\n                <figure class="image is-16by9">\n                    <img :src="picture" alt="Project Image" class="cover">\n                </figure>\n            </div>\n            <div class="card-content">\n                <div class="content has-text-centered">\n                    <h3 class="title is-3" class="cut-text">{{title}}</h3>\n                    <p class="cut-text"><slot></slot></p>\n                    <a :href="link" target="_blank" class="visit-btn button is-link is-medium"> Visit </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    '
});

var vm = new Vue({
    el: "#project-grid"
});
