import { useEffect, useState } from "react";

import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [editingId, setEditingId] = useState(null);

  const loadStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSubmit = async () => {
    const student = {
      name,
      email,
      course,
    };

    try {
      if (editingId) {
        await updateStudent(editingId, student);
      } else {
        await addStudent(student);
      }

      clearForm();
      loadStudents();
    } catch (error) {
      console.error(error);
    }
  };

  const editStudent = (student) => {
    setEditingId(student.id);
    setName(student.name);
    setEmail(student.email);
    setCourse(student.course);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  const clearForm = () => {
    setEditingId(null);
    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-blue-600 mb-10">
          Student Management System'
        </h1>

        <StudentForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          course={course}
          setCourse={setCourse}
          editingId={editingId}
          handleSubmit={handleSubmit}
          clearForm={clearForm}
        />

        <StudentTable
          students={students}
          editStudent={editStudent}
          deleteStudent={handleDelete}
        />

      </div>
    </div>
  );
}

export default App;