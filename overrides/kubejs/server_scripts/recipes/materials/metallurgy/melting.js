ServerEvents.recipes(event => {
    let melting = (input, output, outputCount, label) => {
        event.custom({
            type: 'create:mixing',
            heatRequirement: 'heated',
            ingredients: [
                Ingredient.of(input).toJson()
            ],
            results: [
                Fluid.of('kubejs:molten_' + output, outputCount).toJson()
            ]
        })
        .id('aspirations:mixing/melting/' + label)
    }

    let superheatedMelting = (input, output, outputCount, label) => {
        event.custom({
            type: 'create:mixing',
            heatRequirement: 'superheated',
            ingredients: [
                Ingredient.of(input).toJson()
            ],
            results: [
                Fluid.of('kubejs:molten_' + output, outputCount).toJson()
            ]
        })
        .id('aspirations:mixing/melting/' + label)
    }

    let netheriteMelting = (input, outputCount, label) => {
        event.custom({
            type: 'create:mixing',
            heatRequirement: 'superheated',
            ingredients: [
                Ingredient.of(input).toJson()
            ],
            results: [
                Fluid.of('kubejs:molten_netherite', 90).toJson(),
                Fluid.of('kubejs:molten_steel', outputCount).toJson()
            ]
        })
        .id('aspirations:mixing/melting/' + label)
    }

    // Iron

    melting('minecraft:iron_ingot', 'iron', 90, 'iron_ingot')
    melting('minecraft:iron_nugget', 'iron', 10, 'iron_nugget')
    melting('create:iron_sheet', 'iron', 90, 'iron_sheet')
    melting('minecraft:iron_block', 'iron', 810, 'iron_block')

    melting('minecraft:raw_iron', 'iron', 90, 'raw_iron')
    melting('minecraft:raw_iron_block', 'iron', 810, 'raw_iron_block')
    melting('create:crushed_iron_ore', 'iron', 90, 'crushed_iron_ore')
    melting('kubejs:refined_iron_ore', 'iron', 10, 'refined_iron_ore')

    melting('minecraft:iron_pickaxe', 'iron', 270, 'iron_pickaxe')
    melting('minecraft:iron_axe', 'iron', 270, 'iron_axe')
    melting('minecraft:iron_shovel', 'iron', 90, 'iron_shovel')
    melting('minecraft:iron_hoe', 'iron', 180, 'iron_hoe')
    melting('minecraft:iron_sword', 'iron', 180, 'iron_sword')

    melting('forbidden_arcanus:iron_blacksmith_gavel', 'iron', 360, 'iron_blacksmith_gavel')
    melting('farmersdelight:iron_knife', 'iron', 90, 'iron_knife')
    melting('minecraft:shears', 'iron', 180, 'shears')

    melting('minecraft:iron_helmet', 'iron', 450, 'iron_helmet')
    melting('minecraft:iron_chestplate', 'iron', 720, 'iron_chestplate')
    melting('minecraft:iron_leggings', 'iron', 630, 'iron_leggings')
    melting('minecraft:iron_boots', 'iron', 360, 'iron_boots')

    // Copper

    melting('minecraft:copper_ingot', 'copper', 90, 'copper_ingot')
    melting('create:copper_nugget', 'copper', 10, 'copper_nugget')
    melting('create:copper_sheet', 'copper', 90, 'copper_sheet')
    melting('minecraft:copper_block', 'copper', 810, 'copper_block')
    
    melting('minecraft:raw_copper', 'copper', 90, 'raw_copper')
    melting('minecraft:raw_copper_block', 'copper', 810, 'raw_copper_block')
    melting('create:crushed_copper_ore', 'copper', 90, 'crushed_copper_ore')
    melting('kubejs:refined_copper_ore', 'copper', 10, 'refined_copper_ore')

    melting('create_sa:copper_pickaxe', 'copper', 270, 'copper_pickaxe')
    melting('create_sa:copper_axe', 'copper', 270, 'copper_axe')
    melting('create_sa:copper_shovel', 'copper', 90, 'copper_shovel')
    melting('create_sa:copper_hoe', 'copper', 180, 'copper_hoe')
    melting('create_sa:copper_sword', 'copper', 180, 'copper_sword')
    
    melting('create_things_and_misc:copper_knife', 'copper', 90, 'copper_knife')

    melting('create_sa:copper_helmet', 'copper', 450, 'copper_helmet')
    melting('create_sa:copper_chestplate', 'copper', 720, 'copper_chestplate')
    melting('create_sa:copper_leggings', 'copper', 630, 'copper_leggings')
    melting('create_sa:copper_boots', 'copper', 360, 'copper_boots')

    // Gold

    melting('minecraft:gold_ingot', 'gold', 90, 'gold_ingot')
    melting('minecraft:gold_nugget', 'gold', 10, 'gold_nugget')
    melting('create:golden_sheet', 'gold', 90, 'golden_sheet')
    melting('minecraft:gold_block', 'gold', 810, 'gold_block')

    melting('minecraft:raw_gold', 'gold', 90, 'raw_gold')
    melting('minecraft:raw_gold_block', 'gold', 810, 'raw_gold_block')
    melting('create:crushed_gold_ore', 'gold', 90, 'crushed_gold_ore')
    melting('kubejs:refined_gold_ore', 'gold', 10, 'refined_gold_ore')

    melting('minecraft:golden_pickaxe', 'gold', 270, 'golden_pickaxe')
    melting('minecraft:golden_axe', 'gold', 270, 'golden_axe')
    melting('minecraft:golden_shovel', 'gold', 90, 'golden_shovel')
    melting('minecraft:golden_hoe', 'gold', 180, 'golden_hoe')
    melting('minecraft:golden_sword', 'gold', 180, 'golden_sword')

    melting('forbidden_arcanus:golden_blacksmith_gavel', 'gold', 360, 'golden_blacksmith_gavel')
    melting('farmersdelight:golden_knife', 'gold', 90, 'golden_knife')

    melting('minecraft:golden_helmet', 'gold', 450, 'golden_helmet')
    melting('minecraft:golden_chestplate', 'gold', 720, 'golden_chestplate')
    melting('minecraft:golden_leggings', 'gold', 630, 'golden_leggings')
    melting('minecraft:golden_boots', 'gold', 360, 'golden_boots')

    // Zinc

    melting('create:zinc_ingot', 'zinc', 90, 'zinc_ingot')
    melting('create:zinc_nugget', 'zinc', 10, 'zinc_nugget')
    melting('create:zinc_block', 'zinc', 810, 'zinc_block')

    melting('create:raw_zinc', 'zinc', 90, 'raw_zinc')
    melting('create:raw_zinc_block', 'zinc', 810, 'raw_zinc_block')
    melting('create:crushed_zinc_ore', 'zinc', 90, 'crushed_zinc_ore')
    melting('kubejs:refined_zinc_ore', 'zinc', 10, 'refined_zinc_ore')

    melting('create_sa:zinc_pickaxe', 'zinc', 270, 'zinc_pickaxe')
    melting('create_sa:zinc_axe', 'zinc', 270, 'zinc_axe')
    melting('create_sa:zinc_shovel', 'zinc', 90, 'zinc_shovel')
    melting('create_sa:zinc_hoe', 'zinc', 180, 'zinc_hoe')
    melting('create_sa:zinc_sword', 'zinc', 180, 'zinc_sword')
    
    melting('create_things_and_misc:zinc_knife', 'zinc', 90, 'zinc_knife')

    melting('create_sa:zinc_helmet', 'zinc', 450, 'zinc_helmet')
    melting('create_sa:zinc_chestplate', 'zinc', 720, 'zinc_chestplate')
    melting('create_sa:zinc_leggings', 'zinc', 630, 'zinc_leggings')
    melting('create_sa:zinc_boots', 'zinc', 360, 'zinc_boots')

    // Brass

    melting('create:brass_ingot', 'brass', 90, 'brass_ingot')
    melting('create:brass_nugget', 'brass', 10, 'brass_nugget')
    melting('create:brass_sheet', 'brass', 90, 'brass_sheet')
    melting('create:brass_block', 'brass', 810, 'brass_block')

    melting('create_sa:brass_pickaxe', 'brass', 270, 'brass_pickaxe')
    melting('create_sa:brass_axe', 'brass', 270, 'brass_axe')
    melting('create_sa:brass_shovel', 'brass', 90, 'brass_shovel')
    melting('create_sa:brass_hoe', 'brass', 180, 'brass_hoe')
    melting('create_sa:brass_sword', 'brass', 180, 'brass_sword')
    
    melting('create_things_and_misc:brass_knife', 'brass', 90, 'brass_knife')

    melting('create_sa:brass_helmet', 'brass', 450, 'brass_helmet')
    melting('create_sa:brass_chestplate', 'brass', 720, 'brass_chestplate')
    melting('create_sa:brass_leggings', 'brass', 630, 'brass_leggings')
    melting('create_sa:brass_boots', 'brass', 360, 'brass_boots')

    // Bronze

    melting('alloyed:bronze_ingot', 'bronze', 90, 'bronze_ingot')
    melting('alloyed:bronze_nugget', 'bronze', 10, 'bronze_nugget')
    melting('alloyed:bronze_sheet', 'bronze', 90, 'bronze_sheet')
    melting('alloyed:bronze_block', 'bronze', 810, 'bronze_block')
    melting('alloyed:bronze_block', 'bronze', 810, 'exposed_bronze_block')
    melting('alloyed:bronze_block', 'bronze', 810, 'weathered_bronze_block')
    melting('alloyed:bronze_block', 'bronze', 810, 'oxidized_bronze_block')
    melting('alloyed:bronze_block', 'bronze', 810, 'waxed_bronze_block')
    melting('alloyed:bronze_block', 'bronze', 810, 'waxed_exposed_bronze_block')
    melting('alloyed:bronze_block', 'bronze', 810, 'waxed_weathered_bronze_block')
    melting('alloyed:bronze_block', 'bronze', 810, 'waxed_oxidized_bronze_block')

    // Steel

    melting('alloyed:steel_ingot', 'steel', 90, 'steel_ingot')
    melting('alloyed:steel_nugget', 'steel', 10, 'steel_nugget')
    melting('alloyed:steel_sheet', 'steel', 90, 'steel_sheet')
    melting('alloyed:steel_block', 'steel', 810, 'steel_block')

    melting('alloyed:steel_pickaxe', 'steel', 270, 'steel_pickaxe')
    melting('alloyed:steel_axe', 'steel', 270, 'steel_axe')
    melting('alloyed:steel_shovel', 'steel', 90, 'steel_shovel')
    melting('alloyed:steel_hoe', 'steel', 180, 'steel_hoe')
    melting('alloyed:steel_sword', 'steel', 180, 'steel_sword')

    melting('alloyed:steel_knife', 'steel', 90, 'steel_knife')
    melting('alloyed:steel_shears', 'steel', 180, 'steel_shears')

    melting('alloyed:steel_helmet', 'steel', 450, 'steel_helmet')
    melting('alloyed:steel_chestplate', 'steel', 720, 'steel_chestplate')
    melting('alloyed:steel_leggings', 'steel', 630, 'steel_leggings')
    melting('alloyed:steel_boots', 'steel', 360, 'steel_boots')

    // Deorum

    melting('forbidden_arcanus:deorum_ingot', 'deorum', 90, 'deorum_ingot')
    melting('forbidden_arcanus:deorum_nugget', 'deorum', 10, 'deorum_nugget')
    melting('kubejs:deorum_sheet', 'deorum', 90, 'deorum_sheet')
    melting('forbidden_arcanus:deorum_block', 'deorum', 810, 'deorum_block')

    melting('forbidden_arcanus:deorum_pickaxe', 'deorum', 270, 'deorum_pickaxe')
    melting('forbidden_arcanus:deorum_axe', 'deorum', 270, 'deorum_axe')
    melting('forbidden_arcanus:deorum_shovel', 'deorum', 90, 'deorum_shovel')
    melting('forbidden_arcanus:deorum_hoe', 'deorum', 180, 'deorum_hoe')
    melting('forbidden_arcanus:deorum_sword', 'deorum', 180, 'deorum_sword')

    melting('forbidden_arcanus:deorum_blacksmith_gavel', 'deorum', 360, 'deorum_blacksmith_gavel')

    melting('forbidden_arcanus:deorum_helmet', 'deorum', 450, 'deorum_helmet')
    melting('forbidden_arcanus:deorum_chestplate', 'deorum', 720, 'deorum_chestplate')
    melting('forbidden_arcanus:deorum_leggings', 'deorum', 630, 'deorum_leggings')
    melting('forbidden_arcanus:deorum_boots', 'deorum', 360, 'deorum_boots')

    // Netherite

    superheatedMelting('minecraft:netherite_ingot', 'netherite', 90, 'netherite_ingot')
    superheatedMelting('createdeco:netherite_nugget', 'netherite', 10, 'netherite_nugget')
    superheatedMelting('createdeco:netherite_sheet', 'netherite', 90, 'netherite_sheet')
    superheatedMelting('minecraft:netherite_block', 'netherite', 810, 'netherite_block')

    netheriteMelting('minecraft:netherite_pickaxe', 270, 'netherite_pickaxe')
    netheriteMelting('minecraft:netherite_axe', 270, 'netherite_axe')
    netheriteMelting('minecraft:netherite_shovel', 90, 'netherite_shovel')
    netheriteMelting('minecraft:netherite_hoe', 180, 'netherite_hoe')
    netheriteMelting('minecraft:netherite_sword', 180, 'netherite_sword')

    netheriteMelting('farmersdelight:netherite_knife', 90, 'netherite_knife')

    netheriteMelting('minecraft:netherite_helmet', 450, 'netherite_helmet')
    netheriteMelting('minecraft:netherite_chestplate', 720, 'netherite_chestplate')
    netheriteMelting('minecraft:netherite_leggings', 630, 'netherite_leggings')
    netheriteMelting('minecraft:netherite_boots', 360, 'netherite_boots')

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'superheated',
        ingredients: [
            Ingredient.of('forbidden_arcanus:netherite_blacksmith_gavel').toJson()
        ],
        results: [
            Fluid.of('kubejs:molten_netherite', 90).toJson(),
            Fluid.of('kubejs:molten_iron', 360).toJson()
        ]
    })
    .id('aspirations:mixing/melting/netherite_blacksmith_gavel')
})