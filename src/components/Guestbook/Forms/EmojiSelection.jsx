export const EmojiSelection = ({ register }) => (
  <div>
    <h3>Velg emoji</h3>
    <div className="flex justify-around">
      {["🦖", "🐝", "🌶️", "🪐", "💙", "🏋🏼‍♂️", "🪩"].map((emoji) => (
        <div key={emoji} className="flex gap-1">
          <input id={`emoji-${emoji}`} type="radio" value={emoji} {...register("emoji")} />
          <label htmlFor={`emoji-${emoji}`} className="text-xl">
            {emoji}
          </label>
        </div>
      ))}
    </div>
  </div>
);
