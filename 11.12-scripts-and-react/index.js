const jsdom = require('jsdom')
const {JSDOM} = jsdom
const Script = require('vm').Script
const fs = require('fs')

var start = Date.now()

const scriptObject = new Script(
    fs.readFileSync('./dist/big.js', 'utf8'),
    {
        filename: 'big.js',
        displayErrors: true
    }
)

const dom = `<html>
<head></head>
<body>
    <div id="target"></div>
</body>
</html>`

const d = new JSDOM(dom, {
    contentType: 'text/html',
    pretendToBeVisual: true,
    runScripts: 'dangerously',
    resources: 'usable',
    strictSSL: true,
    url: 'http://localhost'
})

d.window.addEventListener('done', () => {
    var end = Date.now() - start
    console.log(end)
    // console.log(d.window.document.querySelector('.pw-search__input'))
})

d.runVMScript(scriptObject)
