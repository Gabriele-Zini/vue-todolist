const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: {
        text: "",
        done: false,
        visible: false,
      },
      toDoList: [],
    };
  },
  methods: {
    addTask: function () {
      this.visible = false;
      if (this.newTask.text.trim() !== "") {
        this.toDoList.push(this.newTask);
      } else {
        this.visible = true;
      }
      this.newTask = { text: "", done: false };
    },
    clearTask: function (index) {
      console.log("delete")
      this.toDoList.splice(index, 1);
    },
    doneTask(index) {
      console.log("toggle")
      this.toDoList[index].done = !this.toDoList[index].done;
    },
  },
}).mount("#app");
