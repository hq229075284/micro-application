var Communication = /** @class */ (function () {
    function Communication() {
        this.listenerMap = {};
    }
    Communication.prototype.publish = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // if (this.listenerMap[key]) {
        //     this.listenerMap[key].forEach(listener => listener(...args))
        // }
        document.documentElement.dispatchEvent(new CustomEvent(key, { detail: args }));
    };
    Communication.prototype.subscribe = function (key, listener) {
        // if (this.listenerMap[key]) {
        //     this.listenerMap[key].push(listener)
        // } else {
        //     this.listenerMap[key] = listener
        // }
        function _listener(e) {
            listener.apply(void 0, e.detail);
        }
        document.documentElement.addEventListener(key, _listener);
        return function remove() {
            document.documentElement.removeEventListener(key, _listener);
        };
    };
    return Communication;
}());
//# sourceMappingURL=communication.js.map