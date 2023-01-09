ServerEvents.recipes(event => {
  event.replaceInput({output: 'minecraft:shield'}, 'minecraft:iron_ingot', 'create:iron_sheet')
  event.replaceInput({output: 'quark:trowel'}, 'minecraft:iron_ingot', 'create:iron_sheet')
  event.replaceInput({output: 'toolbelt:belt'}, 'minecraft:iron_ingot', 'create:iron_sheet')
  event.replaceInput({output: 'toolbelt:pouch'}, 'minecraft:gold_ingot', 'create:golden_sheet')

  //event.replaceInput({id: 'minecraft:anvil'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')
  //event.replaceInput({id: 'minecraft:anvil'}, 'minecraft:iron_block', 'createdeco:cast_iron_ingot')

  event.remove({output: 'wstweaks:lava_blade'})
  event.remove({output: 'wstweaks:blaze_blade'})

  event.remove({output: 'create_sa:experience_pickaxe'})
  event.remove({output: 'create_sa:experience_axe'})
  event.remove({output: 'create_sa:experience_shovel'})
  event.remove({output: 'create_sa:experience_sword'})

  event.remove({output: 'create_sa:blazing_pickaxe'})
  event.remove({output: 'create_sa:blazing_axe'})
  event.remove({output: 'create_sa:blazing_shovel'})
  event.remove({output: 'create_sa:blazing_sword'})

  event.remove({output: 'create_sa:rose_quartz_pickaxe'})
  event.remove({output: 'create_sa:rose_quartz_axe'})
  event.remove({output: 'create_sa:rose_quartz_shovel'})
  event.remove({output: 'create_sa:rose_quartz_sword'})
  
  event.remove({output: 'create_sa:slime_helmet'})
  event.remove({output: 'create_sa:slime_boots'})
  event.remove({output: 'create_things_and_misc:sticky_boots_boots'})
  
  event.remove({output: 'create_things_and_misc:radar'})

  event.remove({id: 'aquamirae:poisoned_chakra'})
  event.remove({id: 'aquamirae:maze_rose'})

  event.remove({id: 'forbidden_arcanus:soul_extractor'})

  event.custom({
    type: 'create:mechanical_crafting',
    acceptMirrored: false,
    pattern: [
      'J   ',
      'DBBB',
      'AM  '
    ],
    key: {
      J: Item.of('forbidden_arcanus:utrem_jar').toJson(),
      D: Item.of('forbidden_arcanus:dark_matter').toJson(),
      B: Item.of('minecraft:nether_brick').toJson(),
      A: Item.of('create:andesite_alloy').toJson(),
      M: Item.of('create_sa:heat_engine').toJson()
    },
    result: Item.of('forbidden_arcanus:soul_extractor')
  })
})