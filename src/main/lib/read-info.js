const child = require('child_process')

module.exports = {
    getProfile: function () {
        const result = child.execSync(
            'systemctl list-units --type=service --all | grep "isw"',
            { encoding: 'utf-8' }
        )
        return result.split('@')[1].split('.')[0].trim()
    },
    read: function (profile, callback) {
        const s = child.spawn('pkexec', [
            'python',
            '-u',
            __dirname + '/readEC.py',
            profile,
        ])
        s.stdout.setEncoding('utf8')
        s.stdout.on('data', function (data) {
            callback(data)
        })
        return s
    },
}
