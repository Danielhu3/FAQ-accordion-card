function changeState(id) {
  // get div that contains topic and text
  let contentItem = document.querySelector(`.content-item:nth-of-type(${id})`)

  // get item-topic and text
  let itemTopic = contentItem.firstElementChild
  let itemArrow = contentItem.children[1]
  let itemText = contentItem.children[2]

  itemTopic.classList.toggle('active')
  itemArrow.classList.toggle('active')
  itemText.classList.toggle('active')
}
