import { useEffect, useState } from "react";
import getFetchData from "../helpers/getFetchData";

function App() {
  const [characterList, setCharacterList] = useState([])
  useEffect(() => {
    const getAllCharacter = async () => {
      const data = await getFetchData();
      setCharacterList(data);
    }
    getAllCharacter();
  }, [])
  console.log(characterList);
  
  return (
    <div className="App">
      Holamundo!
    </div>
  );
}

export default App;
