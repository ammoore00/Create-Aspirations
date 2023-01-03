ServerEvents.recipes(event => {
  event.remove({id: 'minecraft:diamond_pickaxe'})
  event.remove({id: 'minecraft:diamond_axe'})
  event.remove({id: 'minecraft:diamond_shovel'})
  event.remove({id: 'minecraft:diamond_hoe'})
  event.remove({id: 'minecraft:diamond_sword'})
  event.remove({id: 'farmersdelight:diamond_knife'})
  event.remove({id: 'forbidden_arcanus:diamond_blacksmith_gavel'})

  event.smithing(
    'minecraft:diamond_pickaxe',
    'alloyed:steel_pickaxe',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_pickaxe')

  event.smithing(
    'minecraft:diamond_axe',
    'alloyed:steel_axe',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_axe')

  event.smithing(
    'minecraft:diamond_shovel',
    'alloyed:steel_shovel',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_shovel')

  event.smithing(
    'minecraft:diamond_hoe',
    'alloyed:steel_hoe',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_hoe')

  event.smithing(
    'minecraft:diamond_sword',
    'alloyed:steel_sword',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_sword')

  event.smithing(
    'farmersdelight:diamond_knife',
    'alloyed:steel_knife',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_knife')

  event.smithing(
    'forbidden_arcanus:diamond_blacksmith_gavel',
    'forbidden_arcanus:iron_blacksmith_gavel',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_blacksmith_gavel')

  event.shaped(
    'kubejs:diamond_chisel',
    [
      'D ',
      ' S'
    ],
    {
      D: 'minecraft:diamond',
      S: 'minecraft:stick'
    }
  ).id('aspirations:diamond_chisel')

  event.remove({ id: 'minecraft:diamond_helmet' })
  event.remove({ id: 'minecraft:diamond_chestplate' })
  event.remove({ id: 'minecraft:diamond_leggings' })
  event.remove({ id: 'minecraft:diamond_boots' })

  event.smithing(
    'minecraft:diamond_helmet',
    'alloyed:steel_helmet',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_helmet')

  event.smithing(
    'minecraft:diamond_chestplate',
    'alloyed:steel_chestplate',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_chestplate')

  event.smithing(
    'minecraft:diamond_leggings',
    'alloyed:steel_leggings',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_leggings')

  event.smithing(
    'minecraft:diamond_boots',
    'alloyed:steel_boots',
    'kubejs:diamondium_ingot'
  ).id('aspirations:diamond_boots')
})