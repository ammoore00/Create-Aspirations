ServerEvents.recipes(event => {

    //------ Advanced Processing ------//

    event.remove({id: 'create:splashing/crushed_iron_ore'})
    event.remove({id: 'create:splashing/crushed_copper_ore'})
    event.remove({id: 'create:splashing/crushed_gold_ore'})
    event.remove({id: 'create:splashing/crushed_zinc_ore'})

    // Iron

    event.custom({
        type: 'create:splashing',
        ingredients: [
            Ingredient.of('create:crushed_iron_ore').toJson()
        ],
        results: [
            Item.of('kubejs:refined_iron_ore', 9).toJson(),
            Item.of('kubejs:refined_iron_ore', 3).withChance(0.5).toJson(),
            Item.of('minecraft:redstone').withChance(0.75).toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:splashing/crushed_iron_ore')

    // Copper

    event.custom({
        type: 'create:splashing',
        ingredients: [
            Ingredient.of('create:crushed_copper_ore').toJson()
        ],
        results: [
            Item.of('kubejs:refined_copper_ore', 9).toJson(),
            Item.of('kubejs:refined_copper_ore', 3).withChance(0.5).toJson(),
            Item.of('minecraft:clay').withChance(0.5).toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:splashing/crushed_copper_ore')

    // Gold

    event.custom({
        type: 'create:splashing',
        ingredients: [
            Ingredient.of('create:crushed_gold_ore').toJson()
        ],
        results: [
            Item.of('kubejs:refined_gold_ore', 9).toJson(),
            Item.of('kubejs:refined_gold_ore', 3).withChance(0.5).toJson(),
            Item.of('minecraft:quartz').withChance(0.5).toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:splashing/crushed_gold_ore')

    // Zinc

    event.custom({
        type: 'create:splashing',
        ingredients: [
            Ingredient.of('create:crushed_zinc_ore').toJson()
        ],
        results: [
            Item.of('kubejs:refined_zinc_ore', 9).toJson(),
            Item.of('kubejs:refined_zinc_ore', 3).withChance(0.5).toJson(),
            Item.of('minecraft:gunpowder').withChance(0.25).toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:splashing/crushed_zinc_ore')

    // Coal

    event.custom({
        type: 'create:splashing',
        ingredients: [
            Ingredient.of('kubejs:crushed_coal').toJson()
        ],
        results: [
            Item.of('kubejs:refined_coal_dust', 9).toJson(),
            Item.of('kubejs:refined_coal_dust', 3).withChance(0.5).toJson(),
            Item.of('supplementaries:ash').withChance(0.25).toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:splashing/crushed_coal')

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Ingredient.of('kubejs:refined_coal_dust').toJson(),
            Ingredient.of('kubejs:refined_coal_dust').toJson(),
            Ingredient.of('kubejs:refined_coal_dust').toJson(),
            Ingredient.of('kubejs:refined_coal_dust').toJson(),
            Ingredient.of('kubejs:refined_coal_dust').toJson(),
            Ingredient.of('kubejs:refined_coal_dust').toJson(),
            Ingredient.of('kubejs:refined_coal_dust').toJson(),
            Ingredient.of('kubejs:refined_coal_dust').toJson(),
            Ingredient.of('kubejs:refined_coal_dust').toJson()
        ],
        results: [
            Item.of('kubejs:coke').toJson()
        ]
    })
    .id('aspirations:compacting/coke')

    // Diamond

    event.custom({
        type: 'create:sandpaper_polishing',
        ingredients: [
            Ingredient.of('kubejs:raw_diamond').toJson()
        ],
        results: [
            Item.of('minecraft:diamond').toJson()
        ]
    })
    .id('aspirations:polishing/diamond')

    // Other

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:end_stone').toJson()
        ],
        results: [
            Item.of('kubejs:ender_slag').toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/end_stone')
})