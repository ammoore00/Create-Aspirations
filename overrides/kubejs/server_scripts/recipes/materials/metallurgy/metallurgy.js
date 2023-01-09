ServerEvents.recipes(event => {
    
    // Deorum

    event.custom({
        type: 'create:pressing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:deorum_ingot').toJson()
        ],
        results: [
            Item.of('kubejs:deorum_sheet').toJson()
        ]
    })
    .id('aspirations:pressing/deorum_sheet')

    // Obsidian

    event.remove({id: 'create:sequenced_assembly/sturdy_sheet'})
    event.remove({id: 'forbidden_arcanus:obsidian_ingot'})
    event.remove({id: 'forbidden_arcanus:obsidian_ingot_from_blasting'})
    event.remove({id: 'forbidden_arcanus:obsidian_with_iron'})

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Ingredient.of('create:powdered_obsidian').toJson(),
            Fluid.of('kubejs:molten_iron', 90).toJson(),
            Fluid.of('minecraft:lava', 500).toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:obsidian_ingot').toJson()
        ]
    })
    .id('aspirations:compacting/obsidian_ingot')

    event.custom({
        type: 'create:pressing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:obsidian_ingot').toJson()
        ],
        results: [
            Item.of('create:sturdy_sheet').toJson()
        ]
    })
    .id('aspirations:pressing/sturdy_sheet')

    // Soul Steel
    event.remove({id: 'spirit:soul_engulfing/soul_steel'})
    event.remove({id: 'spirit:soul_engulfing/soul_steel_block'})

    event.custom({
        type: 'spirit:soul_engulfing',
        input: {
            ingredient: Item.of('alloyed:steel_ingot').toJson(),
            multiblock: {
                pattern: [
                    [
                        '   ',
                        ' @ ',
                        '   '
                    ],
                    [
                        ' S ',
                        'S&S',
                        ' S '
                    ]
                ],
                keys: {
                    S: {
                        block: 'spirit:soul_powder_block'
                    }
                }
            },
        },
        duration: 60,
        outputItem: 'spirit:soul_steel_ingot'
    })
})