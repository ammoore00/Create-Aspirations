ServerEvents.recipes(event => {

    // Iron

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('kubejs:molten_iron', 90).toJson()
        ],
        results: [
            Item.of('minecraft:iron_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/iron_casting')

    // Gold

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('kubejs:molten_gold', 90).toJson()
        ],
        results: [
            Item.of('minecraft:gold_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/gold_casting')

    // Copper

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('kubejs:molten_copper', 90).toJson()
        ],
        results: [
            Item.of('minecraft:copper_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/copper_casting')

    // Zinc

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('kubejs:molten_zinc', 90).toJson()
        ],
        results: [
            Item.of('create:zinc_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/zinc_casting')

    // Brass

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('kubejs:molten_brass', 90).toJson()
        ],
        results: [
            Item.of('create:brass_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/brass_casting')

    // Bronze

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('kubejs:molten_bronze', 90).toJson()
        ],
        results: [
            Item.of('kubejs:bronze_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/bronze_casting')

    // Steel
    
    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('kubejs:molten_steel', 90).toJson()
        ],
        results: [
            Item.of('kubejs:steel_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/steel_casting')

    // Deorum

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('kubejs:molten_deorum', 90).toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:deorum_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/deorum_casting')

    // Diamond
    
    event.custom({
        type: 'create:compacting',
        heatRequirement: 'superheated',
        ingredients: [
            Fluid.of('kubejs:molten_steel', 90).toJson(),
            Ingredient.of('createaddition:diamond_grit').toJson(),
            Ingredient.of('createaddition:diamond_grit').toJson(),
            Ingredient.of('createaddition:diamond_grit').toJson(),
            Ingredient.of('createaddition:diamond_grit').toJson()
        ],
        results: [
            Item.of('kubejs:diamondium_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/diamondium_casting')

    // Netherite

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Fluid.of('kubejs:molten_netherite', 90).toJson()
        ],
        results: [
            Item.of('minecraft:netherite_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/netherite_casting')
})