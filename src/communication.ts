interface IlistenerMap {
    [key: string]: Function[]
}

class Communication {
    listenerMap: IlistenerMap = {}
    publish(key, ...args) {
        if (this.listenerMap[key]) {
            this.listenerMap[key].forEach(listener => listener(...args))
        }
        // document.documentElement.dispatchEvent(new CustomEvent(key, { detail: args }))
    }
    subscribe(key, listener) {
        function _listener(e) {
            listener(...e.detail)
        }
        if (this.listenerMap[key]) {
            this.listenerMap[key].push(_listener)
        } else {
            this.listenerMap[key] = [_listener]
        }
        return function remove(){
            const findIdx=this.listenerMap[key].indexOf(_listener)
            this.listener[key].findIdx
        }
        // document.documentElement.addEventListener(key, _listener)
        // return function remove() {
        //     document.documentElement.removeEventListener(key, _listener)
        // }
    }
}