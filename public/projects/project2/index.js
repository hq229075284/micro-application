// window.microApp.getContainer('#app3',($container)=>{
//     $container.innerHTML='456'
// })
window.microApp.getContainer('#app2', ($container, $microApp) => {
    $container.innerHTML = '789'
    $microApp.communication.subscribe('a1', (...args) => {
        console.log(args)
        debugger
    })
})