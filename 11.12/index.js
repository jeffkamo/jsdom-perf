const React = require('react')
const jsdom = require('jsdom')
const {JSDOM} = jsdom
const doTheThing = require("./dist/big-with-react.js").default

const dom = `<html>
<head></head>
<body>
    <div id="target"></div>
    <script type="text/javascript">
        var start = Date.now();
        var doTheThing = ${doTheThing.toString()};
        doTheThing(document);
        var end = Date.now() - start;
        console.log(end);
    </script>
</body>
</html>`

new JSDOM(dom, {
    contentType: 'text/html',
    pretendToBeVisual: true,
    runScripts: 'dangerously',
    resources: 'usable',
    strictSSL: true,
    url: 'http://localhost'
})
