import { Menu, Tray } from 'electron'
import path from 'path'

const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform === 'darwin'
        ? '../../resources/macCamera@2x.png'
        : '../../resources/windowCamera.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([{ label: '退出', role: 'quit' }])
  tray.setToolTip('摄像头')
  tray.setContextMenu(contextMenu)
}

export { createTray }
