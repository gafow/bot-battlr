import logo from "./logo.svg";
import "./App.css";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [myBots, setMybots] = useState([]);

  const addBot = (bot) => {
    setMybots([...myBots, bot]);
  };

  const removeBot = (id) => {
    const result = myBots.filter((bot) => bot.id !== id);
    setMybots(result);
  };

  const discharge = (id) => {
    fetch(`https://bank-of-flatiron-saver.vercel.app/bots/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  useEffect(() => {
    fetch("https://bank-of-flatiron-saver.vercel.app/bots")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <h1 className="heading">My Bot Army</h1>
      <YourBotArmy myBots={myBots} removeBot={removeBot} />
      <h1 className="heading">Bot collection</h1>
      <BotCollection data={data} addBot={addBot} discharge={discharge} />
    </div>
  );
}

export default App;
