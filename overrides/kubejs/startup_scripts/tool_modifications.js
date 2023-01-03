ItemEvents.modification(event => {
  event.modify('create_sa:brass_pickaxe', item => {
    item.tier = tierOptions => {
      tierOptions.level = 4
    }
  })
  
  event.modify('create_sa:brass_axe', item => {
    item.tier = tierOptions => {
      tierOptions.level = 4
    }
  })

  event.modify('create_sa:brass_shovel', item => {
    item.tier = tierOptions => {
      tierOptions.level = 4
    }
  })

  event.modify('create_sa:brass_hoe', item => {
    item.tier = tierOptions => {
      tierOptions.level = 4
    }
  })

  event.modify('create_sa:brass_sword', item => {
    item.tier = tierOptions => {
      tierOptions.level = 4
      tierOptions.attackDamageBonus = 5
    }
  })
})