import { app, BrowserWindow, ipcMain, Menu, MenuItemConstructorOptions } from 'electron'

//右键退出
ipcMain.on('quit', () => {
  const template = [
    {
      label: '退出',
      click: () => {
        app.quit()
      }
    }
  ] as MenuItemConstructorOptions[]

  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})

//拖拽
ipcMain.handle('drag', (event, opt: { x: number; y: number }) => {
  const win = BrowserWindow.fromWebContents(event.sender)!
  const [x, y] = win.getPosition()
  win.setPosition(x + opt.x, y + opt.y)
})
