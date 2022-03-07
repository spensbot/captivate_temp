import HsvPad from './HsvPad'
import ParamSlider from './ParamSlider'
import XYpad from './XYpad'
import MidiOverlay_xy from '../base/MidiOverlay_xy'
import styled from 'styled-components'
import Randomizer from './Randomizer'

interface Params {
  splitIndex: number | null
}

export default function ParamsControl({ splitIndex }: Params) {
  return (
    <Root>
      <HsvPad splitIndex={splitIndex} />
      <Sp />
      <MidiOverlay_xy
        actions={[
          { type: 'setBaseParam', paramKey: 'x' },
          { type: 'setBaseParam', paramKey: 'y' },
          { type: 'setBaseParam', paramKey: 'width' },
          { type: 'setBaseParam', paramKey: 'height' },
        ]}
      >
        <XYpad splitIndex={splitIndex} />
      </MidiOverlay_xy>
      <Sp />
      <Randomizer splitIndex={splitIndex} />
      <Sp />
      <ParamSlider param={'black'} splitIndex={splitIndex} />
      <ParamSlider param={'strobe'} splitIndex={splitIndex} />
      <ParamSlider param={'epicness'} splitIndex={splitIndex} />
      <ParamSlider param={'randomize'} splitIndex={splitIndex} />
    </Root>
  )
}

const Root = styled.div`
  /* flex: 0 0 auto; */
  display: flex;
  flex-direction: row;
`

const Sp = styled.div`
  min-width: 1rem;
`
