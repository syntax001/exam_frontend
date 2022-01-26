import { useState, useEffect } from "react"

const AllAssistants = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const URL = "http://localhost:8080/Currency_Backend/";

  useEffect(() => {
        fetch(URL + "assistant/all")
            .then (response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch( error => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
  }, [])

  return (data)
}

export default AllAssistants