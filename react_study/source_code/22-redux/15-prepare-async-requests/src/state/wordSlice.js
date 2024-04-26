import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: { English: [], Spanish: [] },
  status: "idle",
  error: null,
};

export function addWordThunk(word) {
  return (dispatch, getState) => {
    const language = getState().settings.selectedLanguage;
    dispatch(addWord({ language, ...word }));
  };
}

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addWord: (state, action) => {
      const { language, word, def } = action.payload;
      state.words[language].push({
        word,
        def,
        remembered: false,
      });
    },
    toggleRemembered(state, action) {
      const { language, word } = action.payload;
      const wordToFind = state.words[language].find((w) => w.word === word);
      wordToFind.remembered = !wordToFind.remembered;
    },
  },
});

export const selectWords = (state) =>
  state.word.words[state.settings.selectedLanguage];

export const selectFilteredWords = (state) => {
  const words = selectWords(state);
  return words
    .filter((word) =>
      state.action.searchTerm
        ? word.word.startsWith(state.action.searchTerm)
        : word
    )
    .filter((word) => {
      if (state.action.filter === "remembered") return word.remembered;
      if (state.action.filter === "unremembered") return !word.remembered;
      return true;
    })
    .sort((wordA, wordB) => {
      if (state.action.sort === "asc")
        return wordA.word.localeCompare(wordB.word);
      if (state.action.sort === "desc")
        return wordB.word.localeCompare(wordA.word);
      return 0;
    });
};

export const selectRememberedWords = (state) =>
  state.word.words[state.settings.selectedLanguage].filter(
    (word) => word.remembered
  ).length;

export const selectRemainingWords = (state) =>
  state.word.words[state.settings.selectedLanguage].length -
  selectRememberedWords(state);

export const { toggleRemembered, addWord } = wordSlice.actions;
export default wordSlice.reducer;
