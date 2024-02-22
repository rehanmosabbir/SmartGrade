import SearchBox from "./SearchBox";
import StudentPerClass from "./StudentPerClass";

export default function StudentsOfTheYearTable() {
  const studentOfTheYearData = [
    {
      class: "One",
      studentsOfTheYearInfo: [
        {
          id: 1,
          name: "Mosabbir",
          scores: "A+",
          percentage: "98%",
        },
        {
          id: 2,
          name: "Mosaddek",
          scores: "A-",
          percentage: "60%",
        },
      ],
    },
    {
      class: "Two",
      studentsOfTheYearInfo: [
        {
          id: 3,
          name: "Mozahid",
          scores: "B",
          percentage: "50%",
        },
        {
          id: 4,
          name: "Rezwana",
          scores: "A-",
          percentage: "60%",
        },
      ],
    },
  ];
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>

          <SearchBox />
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              {studentOfTheYearData.map((studentPerClass) => (
                <StudentPerClass
                  key={studentPerClass.class}
                  studentPerClass={studentPerClass}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
