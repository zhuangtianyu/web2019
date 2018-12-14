(function rem (window, document) {
  const doc = document.documentElement

  function calcRem () {
    const width = doc.clientWidth > 1200 ? 1200 : doc.clientWidth
    const rem = width / 10
    doc.style.fontSize = `${rem}px`
  }

  calcRem()

  window.addEventListener('resize', calcRem)
  window.addEventListener('pageshow', calcRem)
})(window, document)
