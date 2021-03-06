import * as types from './types'

export default {
  [types.SET_PLAY_LIST](state, playList) {
    state.playList = playList
  },
  [types.SET_PLAY_INDEX](state, index) {
    state.playIndex = index
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.playMode = mode
  },
  [types.SET_PLAY_SCREEN](state, bool) {
    state.playScreen = bool
  },
  [types.SET_NOMINAL_LIST](state, list) {
    state.nominalList = list
  },
  [types.SET_PLAYING](state, bool) {
    state.playing = bool
  },
  [types.SET_SEARCH_HISTORY](state, list) {
    state.searchHistory = list
  },
  [types.SET_PLAY_LIST_CHECKING](state, bool) {
    state.playListChecking = bool
  },
  [types.SET_COLLECT_HISTORY](state, list) {
    state.collectHistory = list
  },
  [types.SET_PLAY_HISTORY](state, list) {
    state.playHistory = list
  }
}
