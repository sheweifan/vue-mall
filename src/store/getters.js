export const playList = state => state.playList

export const playIndex = state => state.playIndex

export const playMode = state => state.playMode

export const playScreen = state => state.playScreen

export const nominalList = state => state.nominalList

export const playing = state => state.playing

export const playSong = state => {
  return state.playList[state.playIndex] || {}
}

