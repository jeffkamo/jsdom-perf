const jsdom = require('jsdom')
const {JSDOM} = jsdom

const dom = new JSDOM(
    `<html>
        <head>
            <script type="text/javascript" src="file:///Users/Atsushi/Mobify/_lab/jsdom-perf/13.2\ small/big.js"></script>
            <script type="text/javascript">
                var start = Date.now()
                doTheThing(document)
                var end = Date.now() - start
                console.log(end)
            </script>
        </head>
        <body>
            <div id="target"></div>
        </body>
    </html>`,
    {
        contentType: 'text/html',
        pretendToBeVisual: true,
        runScripts: 'dangerously',
        resources: 'usable',
        strictSSL: true,
        url: 'http://localhost'
    }
)
