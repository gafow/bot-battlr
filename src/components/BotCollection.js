function BotCollection({ data, addBot, discharge }) {
    return (
      <div className="bot_collection">
        {data.map((bot, index) => (
          <div onClick={() => addBot(bot)} className="bot_card">
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
            <button
            className="delete_btn"
              onClick={(e) => {
                e.stopPropagation();
                discharge(bot.id);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default BotCollection;
  