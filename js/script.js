const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: {
        text: "",
        done: false,
      },
      toDoList: [],
    };
  },
  methods: {
    addTask: function () {
      this.toDoList.push(this.newTask);
      this.newTask = { text: "", done: false };
    },
  },
}).mount("#app");
