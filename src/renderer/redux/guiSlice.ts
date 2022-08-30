import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SaveInfo } from '../../shared/save'
import {
  MidiConnections,
  DmxConnections,
  initDmxConnections,
  initMidiConnections,
} from '../../shared/connection'

export type Page = 'Universe' | 'Modulation' | 'Video' | 'Share' | 'Mixer'

export interface GuiState {
  activePage: Page
  blackout: boolean
  connectionMenu: boolean
  midi: MidiConnections
  dmx: DmxConnections
  saving: boolean
  loading: SaveInfo | null
  newProjectDialog: boolean
  ledFxURLDialog: boolean
  ledFxURL: string | null
}

export function initGuiState(): GuiState {
  return {
    activePage: 'Universe',
    blackout: false,
    connectionMenu: false,
    midi: initMidiConnections(),
    dmx: initDmxConnections(),
    saving: false,
    loading: null,
    newProjectDialog: false,
    ledFxURLDialog: false,
    ledFxURL: null,
  }
}

export const guiSlice = createSlice({
  name: 'gui',
  initialState: initGuiState(),
  reducers: {
    setActivePage: (state, { payload }: PayloadAction<Page>) => {
      state.activePage = payload
    },
    setBlackout: (state, { payload }: PayloadAction<boolean>) => {
      state.blackout = payload
    },
    setConnectionsMenu: (state, { payload }: PayloadAction<boolean>) => {
      state.connectionMenu = payload
    },
    setMidi: (state, { payload }: PayloadAction<MidiConnections>) => {
      state.midi = payload
    },
    setDmx: (state, { payload }: PayloadAction<DmxConnections>) => {
      state.dmx = payload
    },
    setSaving: (state, { payload }: PayloadAction<boolean>) => {
      state.saving = payload
    },
    setLoading: (state, { payload }: PayloadAction<SaveInfo | null>) => {
      state.loading = payload
    },
    setNewProjectDialog: (state, { payload }: PayloadAction<boolean>) => {
      state.newProjectDialog = payload
    },
    setLedFxURLDialog: (state, { payload }: PayloadAction<boolean>) => {
      state.ledFxURLDialog = payload
    },
    setLedFxURL: (state, { payload }: PayloadAction<string>) => {
      state.ledFxURL = payload
    },
  },
})

export const {
  setActivePage,
  setBlackout,
  setConnectionsMenu,
  setMidi,
  setDmx,
  setSaving,
  setLoading,
  setNewProjectDialog,
  setLedFxURLDialog,
  setLedFxURL,
} = guiSlice.actions

export default guiSlice.reducer
