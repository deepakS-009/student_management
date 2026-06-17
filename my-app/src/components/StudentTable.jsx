function StudentTable({
  students,
  editStudent,
  deleteStudent,
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-3xl font-semibold mb-6">
        Student List
      </h2>

      <table className="w-full">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-4">ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Course</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="p-4">{student.id}</td>
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.email}</td>
              <td className="p-4">{student.course}</td>

              <td className="p-4">
                <button
                  onClick={() =>
                    editStudent(student)
                  }
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteStudent(student.id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;