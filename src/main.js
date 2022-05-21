const { app, BrowserWindow, ipcMain } = require("electron");
const { SEND_MAIN_PING } = require("./constants");

function createWindow() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  window.loadURL("http://127.0.0.1:3000");
}

ipcMain.on(SEND_MAIN_PING, (event, arg) => {
  console.log("Main received a ping!!");
});

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());
