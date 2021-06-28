import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import firebase from "./firebase";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // when the app loads, we need to get data from firebase server
  const ref = firebase.firestore().collection("tasks");
  const id = firebase.firestore().collection("tasks").doc().id; //using firebase id as unique id
  //getting date&time from firebase
  const t = firebase.firestore.Timestamp.fromDate(new Date());
  const time = t.toDate();

  function getTasks() {
    ref.orderBy("time", "desc").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTasks(items);
    });
  }

  useEffect(() => {
    getTasks();
  }, []);

  // Add Task
  const addTask = (task) => {
    ref
      //.doc()
      .doc(task.id)
      .set(task)
      .catch((err) => {
        console.error(err);
      });
    //const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // // DELETE TASK
  // const deleteTask = (del) => {
  //   ref
  //     .doc(del.id)
  //     .delete()
  //     .catch((err) => {
  //       console.error(err);
  //     });

  //   // setTasks(tasks.filter((task) => task.id !== id));
  // };

  // // Toggle Reminder
  // const toggleReminder = (task) => {
  //   ref
  //     .doc(task.id)
  //     .set({ ...task, reminder: !task.reminder })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  //   // setTasks(
  //   //   tasks.map((task) =>
  //   //     task.id === id ? { ...task, reminder: !task.reminder } : task
  //   //   )
  //   // );
  // };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} id={id} time={time} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} /> : "No Task to Show"}
      <Footer />
    </div>
  );
};

export default App;
