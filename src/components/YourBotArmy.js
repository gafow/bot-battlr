function YourBotArmy({ myBots, removeBot }) {
    return (
      <div className="bot_collection">
        {myBots.map((bot, index) => (
          <div
            onClick={() => {
              removeBot(bot.id);
            }}
            className="bot_card"
          >
            <img className="avatar_image" src={bot.avatar_url} />
            <p>{bot.name}</p>
            <small>{bot.bot_class}</small>
            <br />
            <small>{bot.catchphrase}</small>
            <div className="stats">
              <div>
                <p>Armor : </p>
                <p>{bot.armor}</p>
              </div>
              <div>
                <p>Damage : </p>
                <p>{bot.damage}</p>
              </div>
              <div>
                <p>Health : </p>
                <p>{bot.health}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default YourBotArmy;
  