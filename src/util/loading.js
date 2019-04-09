const destory = () => {
  const body = document.querySelector('body')
  const shadow = document.querySelector('.loading-shadow')
  body.removeChild(shadow)
}

const init = () => {
  // body 添加 shadow 子节点
  const body = document.querySelector('body')
  const shadow = document.createElement('div')
  const shadowStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    textAlign: 'center',
    paddingTop: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 10000
  }
  Object.assign(shadow.style, shadowStyle)
  shadow.classList.add('loading-shadow')
  shadow.innerHTML = '加载中…'
  body.appendChild(shadow)
}

const loading = {
  show: init,
  hide: destory
}

export default loading
