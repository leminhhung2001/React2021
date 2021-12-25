import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Chung ta khong thuoc ve nhau",
      duration: "4:05",
    },
    {
      title: "Chung ta cua hien tai",
      duration: "4:05",
    },
    {
      title: "Noi nay co anh",
      duration: "4:05",
    },
    {
      title: "Am tham ben em",
      duration: "4:05",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;

    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
