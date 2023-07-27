import NavBar from './NavBar';
import TaskBar from './TaskBar';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar/>
      <h2>Selvin Kamal Inbox</h2>
      <div>
        <TaskBar name="Please call Marvin Lawyer and let me know how you go."/>
        <TaskBar name="Please call Marvin Lawyer and let me know how you go."/>
        <TaskBar name="Please call Marvin Lawyer and let me know how you go."/>
      </div>
    </>
  );
};
