const fs = require("fs")
const path = require("path")

const lastModifiedTimes = {}

module.exports = {
    hotReload: () => {
        const files = fs.readdirSync(__dirname, { encoding: "utf-8" })
        files.forEach(file => {
            const stats = fs.statSync(path.join(__dirname, file))
            lastModifiedTimes[file] = stats.mtimeMs
            fs.watch(path.join(__dirname, file), (eventType) => {
                if(eventType !== "change") return
                const newStats = fs.statSync(path.join(__dirname, file))
                if(lastModifiedTimes[file] < newStats.mtimeMs) {
                    console.log("Detectado cambio refrescando...")
                    location.reload()
                }
            })
        })
    }
}