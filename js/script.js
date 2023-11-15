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
    clearTask: function (index) {
      this.toDoList.splice(index, 1);
    },
    doneTask(index) {
      this.toDoList[index].done = !this.toDoList[index].done
    },
  },
}).mount("#app");
