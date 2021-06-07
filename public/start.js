var entries = [
    {
        id:'12',
        name:'project1',
        css:[],
        js:['http://127.0.0.1:8081/public/projects/project1/index.js']
    },
    {
        id:'2',
        name:'project2',
        css:[],
        js:['http://127.0.0.1:8081/public/projects/project2/index.js']
    }
]

microApp.setAppEntries(entries)

// 创建挂载点
var app1=document.createElement('div')
app1.setAttribute('id','app1')
var app2=document.createElement('div')
app2.setAttribute('id','app2')

document.body.append(app1)
document.body.append(app2)


// 
app1.style.border='1px solid'
app2.style.border='1px solid'
app1.style.height='100px'
app2.style.height='100px'

// 注册应用资源
microApp.registerApp()