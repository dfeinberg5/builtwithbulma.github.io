Vue.component('bulma-project', {
    props: ['title', 'link', 'picture'],
    template: `
    <div class="column is-3">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img :src="picture" alt="Project Image" class="cover">
                </figure>
            </div>
            <div class="card-content">
                <div class="content has-text-centered">
                    <h3 class="title is-3">{{title}}</h3>
                    <a :href="link" target="_blank" class="button is-link">Checkout {{title}}</a>
                </div>
            </div>
        </div>
    </div>
    `
})

var vm = new Vue({
    el: "#project-grid"
})