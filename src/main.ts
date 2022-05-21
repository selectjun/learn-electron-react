const { app, BrowserWindow } = require("electron");

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

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());
