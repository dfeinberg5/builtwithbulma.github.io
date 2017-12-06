Vue.component('bulma-project', {
    props: ['title', 'link', 'picture'],
    template: `
    <div class="column is-3">
        <div class="card">
            <div class="card-image">
                <figure class="image is-16by9">
                    <img :src="picture" alt="Project Image" class="cover">
                </figure>
            </div>
            <div class="card-content">
                <div class="content has-text-centered">
                    <h3 class="title is-3" class="cut-text">{{title}}</h3>
                    <p class="cut-text"><slot></slot></p>
                    <a :href="link" target="_blank" class="visit-btn button is-link is-medium"> Visit </a>
                </div>
            </div>
        </div>
    </div>
    `
})

var vm = new Vue({
    el: "#project-grid"
})