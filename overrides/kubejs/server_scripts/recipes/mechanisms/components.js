ServerEvents.recipes(event => {
  
  // Andesite Alloy

  event.shaped(
    'create:andesite_alloy',
    [
      'NT',
      'TN'
    ],
    {
      T: 'minecraft:tuff',
      N: 'minecraft:iron_nugget'
    }
  )
  .id('aspirations:andesite_alloy_from_iron')

  event.shaped(
    'create:andesite_alloy',
    [
      'NT',
      'TN'
    ],
    {
      T: 'minecraft:tuff',
      N: 'create:zinc_nugget'
    }
  )
  .id('aspirations:andesite_alloy_from_zinc')
  
  event.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('minecraft:tuff').toJson(),
      Ingredient.of('minecraft:iron_nugget').toJson()
    ],
    results: [
      Item.of('create:andesite_alloy').toJson()
    ]
  })
  .id('aspirations:mixing/andesite_alloy_from_iron')

  event.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('minecraft:tuff').toJson(),
      Ingredient.of('create:zinc_nugget').toJson()
    ],
    results: [
      Item.of('create:andesite_alloy').toJson()
    ]
  })
  .id('aspirations:mixing/andesite_alloy_from_zinc')

  // Mechanisms

  event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
  event.remove({id: 'create_things_and_misc:vibration_mecanism_craft'})

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: Ingredient.of('#forge:plates/bronze').toJson(),
    loops: 5,
    results: [
      Item.of('create:precision_mechanism').withChance(0.8).toJson(),
      Item.of('alloyed:brass_sheet').withChance(0.07).toJson(),
      Item.of('create:cogwheel').withChance(0.07).toJson(),
      Item.of('alloyed:brass_nugget').withChance(0.03).toJson(),
      Item.of('create:shaft').withChance(0.02).toJson(),
      Item.of('alloyed:steel_nugget').withChance(0.01).toJson()
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          Ingredient.of('create:incomplete_precision_mechanism').toJson(),
          Ingredient.of('#forge:cogwheels').toJson()
        ],
        results: [
          Item.of('create:incomplete_precision_mechanism').toJson()
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          Ingredient.of('create:incomplete_precision_mechanism').toJson(),
          Ingredient.of('#forge:large_cogwheels').toJson()
        ],
        results: [
          Item.of('create:incomplete_precision_mechanism').toJson()
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          Ingredient.of('create:incomplete_precision_mechanism').toJson(),
          Ingredient.of('#forge:nuggets/steel').toJson()
        ],
        results: [
          Item.of('create:incomplete_precision_mechanism').toJson()
        ]
      }
    ],
    transitionalItem: Ingredient.of('create:incomplete_precision_mechanism').toJson()
  }).id('aspirations:precision_mechanism')

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: Ingredient.of('create_things_and_misc:rose_quartz_sheet').toJson(),
    loops: 5,
    results: [
      Item.of('create_things_and_misc:vibration_mechanism').withChance(0.8).toJson(),
      Item.of('create_things_and_misc:rose_quartz_sheet').withChance(0.07).toJson(),
      Item.of('create:cogwheel').withChance(0.07).toJson(),
      Item.of('createaddition:copper_wire').withChance(0.03).toJson(),
      Item.of('create:shaft').withChance(0.02).toJson(),
      Item.of('minecraft:amethyst_shard').withChance(0.01).toJson()
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          Ingredient.of('create_things_and_misc:incomplete_vibration_mechanism').toJson(),
          Ingredient.of('minecraft:amethyst_shard').toJson()
        ],
        results: [
          Item.of('create_things_and_misc:incomplete_vibration_mechanism').toJson()
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          Ingredient.of('create_things_and_misc:incomplete_vibration_mechanism').toJson(),
          Ingredient.of('#forge:cogwheels').toJson()
        ],
        results: [
          Item.of('create_things_and_misc:incomplete_vibration_mechanism').toJson()
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          Ingredient.of('create_things_and_misc:incomplete_vibration_mechanism').toJson(),
          Ingredient.of('createaddition:copper_spool').toJson()
        ],
        results: [
          Item.of('create_things_and_misc:incomplete_vibration_mechanism').toJson()
        ]
      }
    ],
    transitionalItem: Ingredient.of('create_things_and_misc:incomplete_vibration_mechanism').toJson()
  }).id('aspirations:conductive_mechanism')
})