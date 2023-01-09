ServerEvents.tags('item', event => {
  event.remove('curios:belt', 'toms_storage:ts.adv_wireless_terminal')
  event.add('curios:charm', 'toms_storage:ts.adv_wireless_terminal')
})