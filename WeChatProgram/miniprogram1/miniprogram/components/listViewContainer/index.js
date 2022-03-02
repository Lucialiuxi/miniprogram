// components/listViewContainer/index.js
Component({
    behaviors: [],
    properties: {
        list: {
            type: Array,
            value: [],
        },
    },
    methods: {
        jumpPage(e) {
            this.triggerEvent('jump', {...e});
        },
    }
})