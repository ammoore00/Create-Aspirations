ServerEvents.recipes(event => {
  event.remove({id: 'create:crafting/kinetics/steam_engine'})
    
  event.shaped(
    'create:steam_engine',
    [
      'E',
      'A',
      'C'
    ],
    {
      E: 'create_sa:steam_engine',
      A: 'create:andesite_alloy',
      C: 'minecraft:copper_block'
    }
  ).id('aspirations:crafting/steam_engine')

  event.remove({id: 'create:crafting/kinetics/mechanical_crafter'})

  event.shaped(
    '12x create:mechanical_crafter',
    [
      'CEC',
      'EME',
      'CEC'
    ],
    {
      C: '#forge/cogwheels',
      E: 'create:electron_tube',
      M: 'create_sa:steam_engine'
    }
  )

  event.remove({id: 'createaddition:mechanical_crafting/electric_motor'})
  event.remove({id: 'createaddition:mechanical_crafting/alternator'})
  event.remove({id: 'createaddition:mechanical_crafting/accumulator'})
  event.remove({id: 'createaddition:mechanical_crafting/tesla_coil'})

  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      '  A  ',
      ' SCS ',
      'SCMCS',
      ' SPS '
    ],
    key: {
      A: Item.of('create:andesite_alloy').toJson(),
      S: Item.of('alloyed:bronze_sheet').toJson(),
      C: Item.of('createaddition:copper_spool').toJson(),
      M: Item.of('create_things_and_misc:vibration_mechanism').toJson(),
      P: Item.of('createaddition:capacitor').toJson()
    },
    result: Item.of('createaddition:electric_motor').toJson()
  }).id('aspirations:electric_motor')

  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      '  A  ',
      ' SCS ',
      'SCMCS',
      ' SPS '
    ],
    key: {
      A: Item.of('create:andesite_alloy').toJson(),
      S: Item.of('alloyed:steel_sheet').toJson(),
      C: Item.of('createaddition:copper_spool').toJson(),
      M: Item.of('create_things_and_misc:vibration_mechanism').toJson(),
      P: Item.of('createaddition:capacitor').toJson()
    },
    result: Item.of('createaddition:alternator').toJson()
  }).id('aspirations:alternator')

  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      ' N N ',
      'SPGPS',
      'SPBPS',
      'SPGPS'
    ],
    key: {
      N: Item.of('createaddition:connector').toJson(),
      S: Item.of('alloyed:bronze_sheet').toJson(),
      P: Item.of('createaddition:capacitor').toJson(),
      G: Item.of('createaddition:gold_spool').toJson(),
      B: Item.of('create:brass_casing').toJson()
    },
    result: Item.of('createaddition:accumulator').toJson()
  }).id('aspirations:accumulator')

  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      'CCC',
      ' A ',
      'PBP',
      'SMS'
    ],
    key: {
      C: Item.of('createaddition:copper_spool').toJson(),
      A: Item.of('create:andesite_alloy').toJson(),
      P: Item.of('createaddition:capacitor').toJson(),
      B: Item.of('create:brass_casing').toJson(),
      S: Item.of('alloyed:steel_sheet').toJson(),
      M: Item.of('create_things_and_misc:vibration_mechanism').toJson()
    },
    result: Item.of('createaddition:tesla_coil').toJson()
  }).id('aspirations:tesla_coil')

  event.replaceInput({id: 'create_enchantment_industry:crafting/printer'}, 'minecraft:dried_kelp', 'create_sa:hydraulic_engine')
  event.replaceInput({id: 'create:crafting/kinetics/hose_pulley'}, 'minecraft:dried_kelp_block', 'create_sa:hydraulic_engine')
})