const remove = (index, text) => {
  text.remove(index)
  return index - 1
}

const keyContains = (string, component) => {
  let key = component?.contents?.key
  return key != null && key.contains(string)
}

ItemEvents.tooltip(tooltip => {
  tooltip.addAdvanced(Ingredient.all, (s, a, text) => {
    let isStatSection = false

    for (let i = 0; i < text.size(); i++) {
      let component = text.get(i)

      if (keyContains("item.modifiers", component)) {
        isStatSection = true
        i = remove(i, text)
        i = remove(i, text)
        continue
      }

      if (isStatSection) {
        if (keyContains("attribute", component)) {
          i = remove(i, text)
          continue
        }

        for (let c of component.getSiblings()) {
          if (keyContains("attribute", c)) {
            i = remove(i, text)
          }
        }
      }
    }
  })
})