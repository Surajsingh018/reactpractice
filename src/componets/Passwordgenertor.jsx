import { useState, useCallback, useEffect, useRef, use } from "react";

const Passwordgenertor = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //ref hooks
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 101);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, number, character, generatePassword]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 bg-gray-500  text-orange-500"
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow overflow-hidden mb-4 rounded-lg ">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3 bg-white "
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 text-white py-1 px-3"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              Checked={number}
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label className="text-white">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              Checked={character}
              onChange={(e) => setCharacter(e.target.checked)}
            />
            <label className="text-white">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Passwordgenertor;
