interface Ientry {
    id: any,
    name: string,
    css: string[],
    js: string[]
}

class MicroApp {
    public communication:Communication
    constructor(){
        this.communication=new Communication()
    }
    getContainer(selector: string, cb: Function) {
        const el = document.querySelector(selector)
        if (el) {
            cb(el, this)
        } else {
            throw new Error('cannot find element with ' + selector)
        }
    }
    protected entries: Ientry[] = []
    setAppEntries(entries: Ientry[]) {
        this.entries = this.entries.concat(entries)
    }
    registerApp() {
        this.entries.forEach((entry) => {
            ;['js', 'css'].forEach(fileType => {
                entry[fileType].forEach((filePath) => {
                    switch (fileType) {
                        case 'js':
                            const script = document.createElement('script')
                            script.src = filePath
                            document.body.appendChild(script)
                            break
                        case 'css':
                            const link = document.createElement('link')
                            link.type = 'stylesheet'
                            link.href = filePath
                            document.body.appendChild(link)
                            break
                    }
                })
            })
        })
    }
}

// interface Iwindow extends Window{
//     microApp: MicroApp
// }

const microApp = new MicroApp()
