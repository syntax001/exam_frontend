import { useState, useEffect } from "react"

const CreateAssistant= () => {
    const URL = "http://localhost:8080/Currency_Backend/";
    const [name, setName] = useState("");
    const [language, setLanguage] = useState("");
    const [experience, setExperience] = useState("");
    const [wage, setWage] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch(URL + "assistant/", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            language: language,
            experience: experience,
            wage: wage
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setName("");
          setLanguage("");
          setExperience("");
          setWage("");
        } 
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={language}
            placeholder="Language"
            onChange={(e) => setLanguage(e.target.value)}
          />
          <input
            type="text"
            value={experience}
            placeholder="Experience"
            onChange={(e) => setExperience(e.target.value)}
          />
            <input
            type="text"
            value={wage}
            placeholder="Wage"
            onChange={(e) => setWage(e.target.value)}
          />
  
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
  
  export default CreateAssistant;