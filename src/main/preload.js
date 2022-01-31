// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge } = require('electron')
const { hotReload } = require('./hot-reload')
const MSIInfo = require('./lib/read-info')

contextBridge.exposeInMainWorld('api', {
    hello: () => {
        console.log('Hola')
    },
    getMSIInfo: () => {
        MSIInfo.read(MSIInfo.getProfile(), (data) => {
            document.getElementById('MSIInfo').value = data.split('\n')[0]
        })
    },
})
hotReload()
