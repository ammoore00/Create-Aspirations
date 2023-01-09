ItemEvents.modification(event => {

  // Brass

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
    }
  })

  event.modify('create_things_and_misc:brass_knife', item => {
    item.tier = tierOptions => {
      tierOptions.level = 4
    }
  })

  // Steel
  
  event.modify('alloyed:steel_pickaxe', item => {
    item.tier = tierOptions => {
      tierOptions.level = 5
    }
  })
  
  event.modify('alloyed:steel_axe', item => {
    item.tier = tierOptions => {
      tierOptions.level = 5
    }
  })

  event.modify('alloyed:steel_shovel', item => {
    item.tier = tierOptions => {
      tierOptions.level = 5
    }
  })

  event.modify('alloyed:steel_hoe', item => {
    item.tier = tierOptions => {
      tierOptions.level = 5
    }
  })

  event.modify('alloyed:steel_sword', item => {
    item.tier = tierOptions => {
      tierOptions.level = 5
    }
  })

  event.modify('alloyed:steel_knife', item => {
    item.tier = tierOptions => {
      tierOptions.level = 5
    }
  })
})