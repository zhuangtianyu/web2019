/**
 * @param title: 标题
 * @param message: 内容
 * @param confirm: 确认 callback
 * @param cancel: 取消 callback
 * @param close: 关闭 callback
 * @param confirmText: 确认文案
 * @param cancelText: 取消文案
 * @param cancelSupport: 是否需要取消按钮
 */

const modal = (config) => {
  const {
    title = '提示',
    message = '',
    confirm = () => {},
    cancel,
    close = () => {},
    confirmText = '确定',
    cancelText = '取消',
    cancelSupport = false
  } = config

  const create = (type = 'div') => document.createElement(type)

  const append = (parent, child, style, klass) => {
    Object.assign(child.style, style)
    child.classList.add(klass)
    parent.appendChild(child)
  }

  const destory = () => {
    const body = document.querySelector('body')
    const shadow = document.querySelector('.modal-shadow')
    body.removeChild(shadow)
  }

  const init = () => {
    // body 添加 shadow 子节点
    const body = document.querySelector('body')
    const shadow = create()
    const shadowStyle = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
    append(body, shadow, shadowStyle, 'modal-shadow')

    // shadow 添加 content
    const content = create()
    const contentStyle = {
      display: 'inline-block',
      width: '80%',
      maxWidth: '300px',
      minHeight: '100px',
      backgroundColor: '#fff',
      borderRadius: '6px',
      marginTop: '60px'
    }
    append(shadow, content, contentStyle, 'modal-content')

    // content 添加 header
    const header = create()
    const headerStyle = {
      padding: '6px',
      textAlign: 'left',
      borderBottom: '1px solid #dcdcdc'
    }
    append(content, header, headerStyle, 'modal-header')

    // header 添加 title
    const titleEl = create()
    const titleStyle = {
      display: 'inline-block',
      fontWeight: 'bold'
    }
    titleEl.innerHTML = title
    append(header, titleEl, titleStyle, 'modal-title')

    // header 添加 close
    const closeEl = create()
    const closeStyle = {
      display: 'inline-block',
      float: 'right',
      cursor: 'pointer'
    }
    closeEl.innerHTML = '✖️'
    closeEl.onclick = () => {
      close()
      destory()
    }
    append(header, closeEl, closeStyle, 'modal-close')

    // content 添加 modalBody
    const modalBody = create()
    const modalBodyStyle = {
      padding: '20px 6px',
      minHeight: '80px',
      borderBottom: '1px solid #dcdcdc'
    }
    modalBody.innerHTML = message
    append(content, modalBody, modalBodyStyle, 'modal-body')

    // content 添加 footer
    const footer = create()
    const footerStyle = {
      padding: '4px 8px 6px 0',
      textAlign: 'right'
    }
    append(content, footer, footerStyle, 'modal-footer')

    const buttonStyle = {
      display: 'inline-block',
      verticalAlign: 'top',
      padding: '0 0.6em',
      lineHeight: '1.52',
      textAlign: 'center',
      border: '1px solid #999',
      borderRadius: '0.2em',
      backgroundColor: '#fff',
      cursor: 'pointer',
      margin: '0 3px'
    }

    // footer 需要 取消 按钮
    if (cancelSupport || cancel !== undefined) {
      const cancelButton = create()
      const cancelStyle = Object.assign({}, buttonStyle, { borderColor: 'transparent' })
      cancelButton.innerHTML = cancelText
      cancelButton.onclick = () => {
        cancel()
        destory()
      }
      append(footer, cancelButton, cancelStyle, 'modal-cancel-button')
    }

    const confirmButton = create()
    const confirmStyle = Object.assign({}, buttonStyle, { borderColor: '#FF6A6A', color: '#FF6A6A' })
    confirmButton.innerHTML = confirmText
    confirmButton.onclick = () => {
      confirm()
      destory()
    }
    append(footer, confirmButton, confirmStyle, 'modal-confirm-button')
  }

  init()
}

export default modal
