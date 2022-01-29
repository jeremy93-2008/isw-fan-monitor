// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge } = require('electron')
const { hotReload } = require("./hot-reload")
contextBridge.exposeInMainWorld(
  "api", {
    hello: () => {
      console.log("Hola")
    }
  }
)
hotReload()