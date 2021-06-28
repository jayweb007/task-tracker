import { FaTimes } from "react-icons/fa";
import firebase from "../firebase";

const Task = ({ task }) => {
  // when the app loads, we need to get data from firebase server
  const ref = firebase.firestore().collection("tasks");

  // DELETE TASK
  const deleteTask = () => {
    ref
      .doc(task.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });

    // setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = () => {
    ref
      .doc(task.id)
      .set({ ...task, reminder: !task.reminder })
      .catch((err) => {
        console.error(err);
      });
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, reminder: !task.reminder } : task
    //   )
    // );
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={toggleReminder}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={deleteTask}
          // onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day} ⏰ </p>
    </div>
  );
};

export default Task;
