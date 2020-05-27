import { combineReducers } from 'redux'
import { songsReducer, selectedSongReducer } from './songReducer'


export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});