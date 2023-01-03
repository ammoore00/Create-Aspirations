ServerEvents.recipes(event => {
    event.remove({id: 'create:mixing/brass_ingot'})
    event.remove({id: 'alloyed:mixing/bronze_ingot'})
    event.remove({id: 'alloyed:mixing/bronze_ingot_x3'})
    event.remove({id: 'alloyed:mixing/steel_ingot'})
    event.remove({id: 'forbidden_arcanus:deorum_ingot'})
    event.remove({id: 'minecraft:netherite_ingot'})

    // Brass
    
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            Ingredient.of('minecraft:copper_ingot').toJson(),
            Ingredient.of('create:zinc_ingot').toJson()
        ],
        results: [
            Fluid.of('kubejs:molten_brass', 90).toJson()
        ]
    })
    .id('aspirations:mixing/alloying/brass_from_ingots')
    
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            Fluid.of('kubejs:molten_copper', 90).toJson(),
            Fluid.of('kubejs:molten_zinc', 90).toJson()
        ],
        results: [
            Fluid.of('kubejs:molten_brass', 180).toJson()
        ]
    })
    .id('aspirations:mixing/alloying/brass')

    // Bronze
    
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            Fluid.of('kubejs:molten_copper', 270).toJson(),
            Fluid.of('kubejs:molten_zinc', 90).toJson(),
            Ingredient.of('create:cinder_flour').toJson(),
            Ingredient.of('create:cinder_flour').toJson(),
            Ingredient.of('create:cinder_flour').toJson(),
            Ingredient.of('create:cinder_flour').toJson()
        ],
        results: [
            Fluid.of('kubejs:molten_bronze', 360).toJson()
        ]
    })
    .id('aspirations:mixing/alloying/bronze')

    // Steel
    
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            Fluid.of('kubejs:molten_iron', 360).toJson(),
            Ingredient.of('kubejs:coke').toJson()
        ],
        results: [
            Fluid.of('kubejs:molten_steel', 360).toJson()
        ]
    })
    .id('aspirations:mixing/alloying/steel')

    // Deorum
    
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            Fluid.of('kubejs:molten_bronze', 90).toJson(),
            Ingredient.of('forbidden_arcanus:arcane_crystal_dust').toJson(),
            Ingredient.of('forbidden_arcanus:arcane_crystal_dust').toJson(),
            Ingredient.of('forbidden_arcanus:mundabitur_dust').toJson(),
            Ingredient.of('forbidden_arcanus:mundabitur_dust').toJson()
        ],
        results: [
            Fluid.of('kubejs:molten_deorum', 90).toJson()
        ]
    })
    .id('aspirations:mixing/alloying/deorum')

    // Netherite
    
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'superheated',
        ingredients: [
            Fluid.of('kubejs:molten_deorum', 360).toJson(),
            Ingredient.of('minecraft:netherite_scrap').toJson(),
            Ingredient.of('minecraft:netherite_scrap').toJson(),
            Ingredient.of('minecraft:netherite_scrap').toJson(),
            Ingredient.of('minecraft:netherite_scrap').toJson(),
            Ingredient.of('kubejs:ender_slag')
        ],
        results: [
            Fluid.of('kubejs:molten_netherite', 90).toJson()
        ]
    })
    .id('aspirations:mixing/alloying/netherite')
})