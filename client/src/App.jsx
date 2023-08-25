// api - https://mern-testing-api.vercel.app
import axios from "axios";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const handleUser = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://mern-testing-api.vercel.app/user",
        {
          name: name,
          age: age,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-between items-center bg-[#F1E9DB] p-6 px-12 gap-8 rounded-md shadow-md">
          <div>
            <h1 className="font-bold text-3xl text-[#716A5C]">JOIN US</h1>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl text-[#A27D3F]">Name</label>
            <input
              type="text"
              placeholder="Jhon Doe"
              className="px-2 py-1 rounded-sm text-xl foucs:outline-none outline-none text-[#716A5C]"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl text-[#A27D3F]">Age</label>
            <input
              type="text"
              placeholder="33"
              className="px-2 py-1 rounded-sm text-xl foucs:outline-none outline-none text-[#716A5C]"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              className="px-5 rounded-sm pb-1 border-2 border-[#716A5C] bg-[#716A5C] text-xl text-[#F1E9DB] hover:bg-transparent hover:text-[#716A5C] ease-in duration-300"
              onClick={handleUser}
            >
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
