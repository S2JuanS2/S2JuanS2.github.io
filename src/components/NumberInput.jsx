import React, { useEffect, useState } from "react";

function NumberInput({ value = 0, onChange, options }) {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value ?? 0);
  }, [value]);

  const handleChange = (newValue) => {
    setCount(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col w-32">
      {options.map((option, index) => (
        <label key={index} className="cursor-pointer">
          <input
            type="radio"
            name="number-input"
            value={index}
            checked={count === index}
            onChange={() => handleChange(index)}
            className="hidden"
          />
          <div
            className={`${
                index === 0 ? "pb-3 rounded-sm"
              : count === index ? "bg-blue-800" : "bg-gray-700"
            } text-white text-sm p-2 pb-3 h-8 flex items-center justify-center rounded-lg font-bold border-2 border-gray-800 hover:border-gray-400 transition-colors duration-300`}
          >
            {option}
          </div>
        </label>
      ))}
    </div>
  );
}

export default NumberInput;
