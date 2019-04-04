const jsdom = require('jsdom')
const {JSDOM} = jsdom

var start = Date.now()

const dom = `<html>
<head></head>
<body>
    <div id="target"></div>
    <script type="text/javascript" src="file:///Users/Atsushi/Mobify/_lab/jsdom-perf/11.12/dist/big-with-react.js"></script>
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
