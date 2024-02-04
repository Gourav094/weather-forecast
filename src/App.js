import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import UserContext from "./components/UserContext";

function App() {
  const [search,setSearch] = useState('delhi')
 
  const handleSubmit = (value) => {
    setSearch(value)
  }
  return (
    <UserContext.Provider value={{searchQuery:search,handleSubmit}}>
    <div className="bg-neutral-800 min-w-fit min-h-screen">
      <Header/>
      <Body/>
    </div>
    </UserContext.Provider>
  );
}

export default App;