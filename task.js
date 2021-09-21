export default (tab, url) => {
  const { ownerDocument } = tab
  const href = url.replace(new URL(url).origin, '')
  const selector = `a[role="tab"][href="${href}"]`
  const anchor = ownerDocument.querySelector(selector)
  let { parentElement } = anchor

  while (parentElement) {
    const current = parentElement.querySelector('.tab')

    if (current) {
      current.replaceWith(tab)
      break
    }

    parentElement = parentElement.parentElement
  }
}
