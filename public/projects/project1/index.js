function cb($container,$microApp){
    $container.innerHTML='123'
    const button=document.createElement('button')
    button.textContent='dispath'
    button.onclick=()=>{
        $microApp.communication.publish('a1','haha')
    }
    $container.appendChild(button)
}
window.microApp.getContainer('#app1',cb)