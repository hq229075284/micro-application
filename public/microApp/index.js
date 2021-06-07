var MicroApp = /** @class */ (function () {
    function MicroApp() {
        this.entries = [];
        this.communication = new Communication();
    }
    MicroApp.prototype.getContainer = function (selector, cb) {
        var el = document.querySelector(selector);
        if (el) {
            cb(el, this);
        }
        else {
            throw new Error('cannot find element with ' + selector);
        }
    };
    MicroApp.prototype.setAppEntries = function (entries) {
        this.entries = this.entries.concat(entries);
    };
    MicroApp.prototype.registerApp = function () {
        this.entries.forEach(function (entry) {
            ;
            ['js', 'css'].forEach(function (fileType) {
                entry[fileType].forEach(function (filePath) {
                    switch (fileType) {
                        case 'js':
                            var script = document.createElement('script');
                            script.src = filePath;
                            document.body.appendChild(script);
                            break;
                        case 'css':
                            var link = document.createElement('link');
                            link.type = 'stylesheet';
                            link.href = filePath;
                            document.body.appendChild(link);
                            break;
                    }
                });
            });
        });
    };
    return MicroApp;
}());
// interface Iwindow extends Window{
//     microApp: MicroApp
// }
var microApp = new MicroApp();
//# sourceMappingURL=index.js.map