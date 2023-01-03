ServerEvents.recipes(event => {
  event.remove({
    input: 'alloyed:steel_ingot',
    type: 'smithing'
  })
  event.remove({
    input: 'alloyed:steel_ingot',
    type: 'create:mechanical_crafting'
  })

  event.shaped(
    'alloyed:steel_pickaxe',
    [
      'III',
      ' S ',
      ' S '
    ],
    {
      I: 'alloyed:steel_ingot',
      S: 'create_sa:zinc_handle'
    }
  ).id('aspirations:steel_pickaxe')

  event.shaped(
    'alloyed:steel_axe',
    [
      'II',
      'IS',
      ' S'
    ],
    {
      I: 'alloyed:steel_ingot',
      S: 'create_sa:zinc_handle'
    }
  ).id('aspirations:steel_axe')

  event.shaped(
    'alloyed:steel_shovel',
    [
      'I',
      'S',
      'S'
    ],
    {
      I: 'alloyed:steel_ingot',
      S: 'create_sa:zinc_handle'
    }
  ).id('aspirations:steel_shovel')

  event.shaped(
    'alloyed:steel_hoe',
    [
      'II',
      ' S',
      ' S'
    ],
    {
      I: 'alloyed:steel_ingot',
      S: 'create_sa:zinc_handle'
    }
  ).id('aspirations:steel_hoe')

  event.shaped(
    'alloyed:steel_sword',
    [
      'I',
      'I',
      'S'
    ],
    {
      I: 'alloyed:steel_ingot',
      S: 'create_sa:zinc_handle'
    }
  ).id('aspirations:steel_sword')

  event.shaped(
    'alloyed:steel_knife',
    [
      ' I',
      'S '
    ],
    {
      I: 'alloyed:steel_ingot',
      S: 'create_sa:zinc_handle'
    }
  ).id('aspirations:steel_knife')

  event.shaped(
    'alloyed:steel_shears',
    [
      ' I',
      'I '
    ],
    {
      I: 'alloyed:steel_ingot'
    }
  ).id('aspirations:steel_shears')

  event.shaped(
    'alloyed:steel_fishing_rod',
    [
      '  I',
      ' IS',
      'I S'
    ],
    {
      I: 'alloyed:steel_ingot',
      S: 'minecraft:string'
    }
  ).id('aspirations:steel_fishing_rod')

  event.shaped(
    'alloyed:steel_helmet',
    [
      'III',
      'I I'
    ],
    {
      I: 'alloyed:steel_ingot'
    }
  ).id('aspirations:steel_helmet')

  event.shaped(
    'alloyed:steel_chestplate',
    [
      'I I',
      'III',
      'III'
    ],
    {
      I: 'alloyed:steel_ingot'
    }
  ).id('aspirations:steel_chestplate')

  event.shaped(
    'alloyed:steel_leggings',
    [
      'III',
      'I I',
      'I I'
    ],
    {
      I: 'alloyed:steel_ingot'
    }
  ).id('aspirations:steel_leggings')

  event.shaped(
    'alloyed:steel_boots',
    [
      'I I',
      'I I'
    ],
    {
      I: 'alloyed:steel_ingot'
    }
  ).id('aspirations:steel_boots')
})