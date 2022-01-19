import { useRealtimeSelector } from '../redux/realtimeStore'
import { useActiveScene } from '../redux/store'
import Cursor from '../base/Cursor'

export default function XYCursor() {
  const outputParams = useRealtimeSelector((state) => state.outputParams)
  const xOut = outputParams.x
  const yOut = outputParams.y

  const baseParams = useActiveScene((activeScene) => activeScene.baseParams)
  const x = baseParams.x
  const y = baseParams.y

  return <Cursor x={xOut} y={yOut} color="#fff" withHorizontal withVertical />
}
