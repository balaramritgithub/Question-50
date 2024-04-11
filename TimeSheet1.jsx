import React, { useState } from 'react';
import styles from './TimeSheet.module.css'; // Import CSS module for styling

// Sample data
const initialClients = [
  { id: 1, name: 'Client A' },
  { id: 2, name: 'Client B' }
];

const initialProjects = [
  { id: 1, clientId: 1, name: 'Project 1' },
  { id: 2, clientId: 1, name: 'Project 2' },
  { id: 3, clientId: 2, name: 'Project 3' }
];

const initialTasks = [
  { id: 1, projectId: 1, name: 'Task 1' },
  { id: 2, projectId: 1, name: 'Task 2' },
  { id: 3, projectId: 2, name: 'Task 3' }
];

const roles = {
  MANAGER: 'manager',
  ADMIN: 'administrator',
  STAFF: 'staff'
};

function TimesheetApp() {
  const [clients, setClients] = useState(initialClients);
  const [projects, setProjects] = useState(initialProjects);
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className={styles.appContainer}>
      <h1>Timesheet Application</h1>
      <div className={styles.contentContainer}>
        <SignUpForm />
        <RoleActions />
        <ClientManagement clients={clients} setClients={setClients} />
        <ProjectManagement projects={projects} setProjects={setProjects} />
        <TaskManagement tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign up logic
  };

  return (
    <div className={styles.formContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value={roles.MANAGER}>Manager</option>
          <option value={roles.ADMIN}>Administrator</option>
          <option value={roles.STAFF}>Staff</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

function RoleActions() {
  return (
    <div className={styles.roleActions}>
      <h2>Role Actions</h2>
    </div>
  );
}

function ClientManagement({ clients, setClients }) {
  return (
    <div className={styles.clientManagement}>
      <h2>Client Management</h2>
    </div>
  );
}

function ProjectManagement({ projects, setProjects }) {
  return (
    <div className={styles.projectManagement}>
      <h2>Project Management</h2>
    </div>
  );
}

function TaskManagement({ tasks, setTasks }) {
  return (
    <div className={styles.taskManagement}>
      <h2>Task Management</h2>
    </div>
  );
}

export default TimesheetApp;
