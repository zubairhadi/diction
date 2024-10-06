import React, { useState } from "react";

const Dictionary = () => {
  const [searchWord, setSearchWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");

  const findInDictionary = () => {
    setWordMeaning("");

    const dictionary = [
      {
        word: "React",
        meaning: "A JavaScript library for building user interfaces.",
      },
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." },
    ];

    const lowerCaseSearchedWords = searchWord.toLowerCase();

    for (const entry of dictionary) {
      const lowerCaseDictionaryWords = entry.word.toLowerCase();
      if (lowerCaseSearchedWords === lowerCaseDictionaryWords) {
        setWordMeaning(entry.meaning);
        return;
      }
    }

    setWordMeaning((prevWordMeaning) => {
      if (prevWordMeaning === "") {
        return "Word not found in the dictionary.";
      }
      return prevWordMeaning;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findInDictionary();
  };

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchWord}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Definition:</h3>
      <p>{wordMeaning}</p>
    </div>
  );
};

export default Dictionary;
