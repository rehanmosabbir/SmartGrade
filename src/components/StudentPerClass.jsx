import StudentInfo from "./StudentInfo";

/* eslint-disable react/prop-types */
export default function StudentPerClass({ studentPerClass }) {
  console.log(studentPerClass);
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class {studentPerClass.class}
        </td>
      </tr>
      {studentPerClass.studentsOfTheYearInfo.map((student) => (
        <StudentInfo key={student.id} student={student} />
      ))}
    </>
  );
}
