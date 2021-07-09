import Vue from "vue"
import moment from "moment"

if (!Vue.humanDate) {
    Vue.humanDate = true
    Vue.mixin({
        methods: {

        },
    })
}