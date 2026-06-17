function StudentForm({
  name,
  setName,
  email,
  setEmail,
  course,
  setCourse,
  editingId,
  handleSubmit,
  clearForm,
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      <h2 className="text-3xl font-semibold mb-6">
        {editingId ? "Update Student" : "Add Student"}
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Student Name"
          className="border rounded-lg p-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-lg p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          className="border rounded-lg p-3"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={handleSubmit}
          className={`text-white px-6 py-3 rounded-lg ${
            editingId
              ? "bg-green-600"
              : "bg-blue-600"
          }`}
        >
          {editingId
            ? "Update Student"
            : "Add Student"}
        </button>

        {editingId && (
          <button
            onClick={clearForm}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default StudentForm;