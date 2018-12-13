(function rem (window, document) {
  const doc = document.documentElement

  function calcRem () {
    const rem = doc.clientWidth / 10
    doc.style.fontSize = `${rem}px`
  }

  calcRem()

  window.addEventListener('resize', calcRem)
  window.addEventListener('pageshow', calcRem)
})(window, document)
