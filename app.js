import Vue from "Vue";

window.Vue = require("vue");

Vue.component("first-app", require("./components/first.vue").default);

const app = new Vue({
  el: "#app",
});
