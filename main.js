Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.is_active }">
                        <a :href="tab.href" 
                            v-text="tab.title"
                            @click="selectTab(tab)"
                        ></a>
                    </li>
                </ul>
            </div>
            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return {
            tabs: []
        }
    },

    mounted() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => tab.is_active = tab.title == selectedTab.title);
        }
    }
});

Vue.component('tab', {
    props: {
        title: {
            required: true
        },
        selected: {
            default: false
        }
    },

    template: `
        <div v-if="is_active">
            <slot></slot>
        </div>
    `,

    computed: {
        href() {
            return '#' + this.title.toLowerCase().replace(/ /g, '-');
        }
    },

    data() {
        return {
            is_active: false
        };
    },

    mounted() {
        this.is_active = this.selected;
    }
});

var app = new Vue({
    el: '#root',

    mounted() {

    }
});