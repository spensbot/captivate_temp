import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import App from './App'
import * as themes from './theme'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { setDmx, setMidi } from './redux/connectionsSlice'
import {} from './redux/midiSlice'
import {
  realtimeStore,
  realtimeContext,
  update as updateRealtimeStore,
} from './redux/realtimeStore'
import { ipc_setup } from './ipcHandler'

const theme = themes.dark()

const ipc_callbacks = ipc_setup({
  on_dmx_connection_update: (payload) => {
    store.dispatch(
      setDmx({ isConnected: !!payload, path: payload || undefined })
    )
  },
  on_midi_connection_update: (payload) => {
    store.dispatch(
      setMidi({ isConnected: payload.length > 0, path: payload[0] })
    )
  },
  on_midi_message: (message) => {
    console.log(`Midi Message ${message}`)
  },
  on_time_state: (realtimeState) => {
    realtimeStore.dispatch(updateRealtimeStore(realtimeState))
  },
})

ipc_callbacks.send_control_state(store.getState())

store.subscribe(() => ipc_callbacks.send_control_state(store.getState()))

render(
  <Provider store={store}>
    <Provider store={realtimeStore} context={realtimeContext}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </Provider>,
  document.getElementById('root')
)
