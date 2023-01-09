ServerEvents.recipes(event => {

    //------ Item Crushing ------//

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:coal').toJson()
        ],
        results: [
            Item.of('kubejs:crushed_coal').toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/coal')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:coal_block').toJson()
        ],
        results: [
            Item.of('kubejs:crushed_coal', 9).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/coal_block')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:charcoal').toJson()
        ],
        results: [
            Item.of('kubejs:crushed_coal').withChance(0.78).toJson(),
            Item.of('supplementaries:ash').withChance(0.22).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/charcoal')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('quark:charcoal_block').toJson()
        ],
        results: [
            Item.of('kubejs:crushed_coal', 7).toJson(),
            Item.of('supplementaries:ash', 2).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/charcoal_block')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('kubejs:raw_diamond').toJson()
        ],
        results: [
            Item.of('createaddition:diamond_grit').toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/diamond')

    //------ Ore Crushing ------//

    // Overworld Ores

    let secondaryOutputs = {
        'minecraft:': 'minecraft:cobblestone',
        'minecraft:deepslate_': 'minecraft:cobbled_deepslate',

        'excavated_variants:andesite_': 'minecraft:cobblestone',
        'excavated_variants:granite_': 'biomesoplenty:orange_sand',
        'excavated_variants:diorite_': 'biomesoplenty:white_sand',
        'excavated_variants:tuff_': 'minecraft:flint',
        'excavated_variants:calcite_': 'biomesoplenty:white_sand',
        'excavated_variants:smooth_basalt_': 'biomesoplenty:black_sand',
        'excavated_variants:sandstone_': 'minecraft:sand',
        'excavated_variants:red_sandstone_': 'minecraft:red_sand',

        'excavated_variants:biomesoplenty_black_sandstone_': 'biomesoplenty:black_sand',
        'excavated_variants:biomesoplenty_orange_sandstone_': 'biomesoplenty:orange_sand',
        'excavated_variants:biomesoplenty_white_sandstone_': 'biomesoplenty:white_sand',

        'excavated_variants:quark_jasper_': 'minecraft:red_sand',
        'excavated_variants:quark_shale_': 'minecraft:gravel',

        'excavated_variants:create_limestone_': 'biomesoplenty:white_sand',
        'excavated_variants:create_veridium_': 'create:copper_nugget',
        'excavated_variants:create_crimsite_': 'minecraft:iron_nugget',
        'excavated_variants:create_asurine_': 'create:zinc_nugget',
        'excavated_variants:create_ochrum_': 'minecraft:gold_nugget',
        'excavated_variants:create_scoria_': 'biomesoplenty:black_sand',
        'excavated_variants:create_scorchia_': 'biomesoplenty:black_sand',

        'excavated_variants:twigs_rhyolite_': 'minecraft:red_sand',
        'excavated_variants:twigs_schist_': 'minecraft:gravel',
    }

    event.remove({id: 'create:crushing/coal_ore'});
    event.remove({id: 'create:crushing/deepslate_coal_ore'});

    event.remove({id: 'create:crushing/copper_ore'});
    event.remove({id: 'create:crushing/deepslate_copper_ore'});

    event.remove({id: 'create:crushing/iron_ore'});
    event.remove({id: 'create:crushing/deepslate_iron_ore'});

    event.remove({id: 'create:crushing/gold_ore'});
    event.remove({id: 'create:crushing/deepslate_gold_ore'});

    event.remove({id: 'create:crushing/zinc_ore'});
    event.remove({id: 'create:crushing/deepslate_zinc_ore'});

    event.remove({id: 'create:crushing/diamond_ore'});
    event.remove({id: 'create:crushing/deepslate_diamond_ore'});

    event.remove({id: 'create:crushing/emerald_ore'});
    event.remove({id: 'create:crushing/deepslate_emerald_ore'});

    event.remove({id: 'create:crushing/lapis_ore'});
    event.remove({id: 'create:crushing/deepslate_lapis_ore'});

    event.remove({id: 'create:crushing/redstone_ore'});
    event.remove({id: 'create:crushing/deepslate_redstone_ore'});

    for (const [oreType, secondaryOutput] of Object.entries(secondaryOutputs)) {
        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'coal_ore').toJson()
            ],
            results: [
                Item.of('kubejs:crushed_coal', 2).toJson(),
                Item.of('kubejs:crushed_coal').withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'coal_ore')

        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'copper_ore').toJson()
            ],
            results: [
                Item.of('create:crushed_copper_ore', 7).toJson(),
                Item.of('create:crushed_copper_ore', 2).withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'copper_ore')

        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'iron_ore').toJson()
            ],
            results: [
                Item.of('create:crushed_iron_ore', 2).toJson(),
                Item.of('create:crushed_iron_ore').withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'iron_ore')

        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'gold_ore').toJson()
            ],
            results: [
                Item.of('create:crushed_gold_ore', 2).toJson(),
                Item.of('create:crushed_gold_ore').withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'gold_ore')

        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'diamond_ore').toJson()
            ],
            results: [
                Item.of('kubejs:raw_diamond', 2).toJson(),
                Item.of('kubejs:raw_diamond').withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'diamond_ore')

        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'emerald_ore').toJson()
            ],
            results: [
                Item.of('minecraft:emerald', 2).toJson(),
                Item.of('minecraft:emerald').withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'emerald_ore')

        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'lapis_ore').toJson()
            ],
            results: [
                Item.of('minecraft:lapis_lazuli', 12).toJson(),
                Item.of('minecraft:lapis_lazuli', 6).withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'lapis_ore')

        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'redstone_ore').toJson()
            ],
            results: [
                Item.of('minecraft:redstone', 5).toJson(),
                Item.of('minecraft:redstone').withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'redstone_ore')
    }

    let secondaryZincOutputs = {
        'create:': 'minecraft:cobblestone',
        'create:deepslate_': 'minecraft:cobbled_deepslate',

        'excavated_variants:andesite_': 'minecraft:cobblestone',
        'excavated_variants:granite_': 'biomesoplenty:orange_sand',
        'excavated_variants:diorite_': 'biomesoplenty:white_sand',
        'excavated_variants:tuff_': 'minecraft:flint',
        'excavated_variants:calcite_': 'biomesoplenty:white_sand',
        'excavated_variants:smooth_basalt_': 'biomesoplenty:black_sand',
        'excavated_variants:sandstone_': 'minecraft:sand',
        'excavated_variants:red_sandstone_': 'minecraft:red_sand',

        'excavated_variants:biomesoplenty_black_sandstone_': 'biomesoplenty:black_sand',
        'excavated_variants:biomesoplenty_orange_sandstone_': 'biomesoplenty:orange_sand',
        'excavated_variants:biomesoplenty_white_sandstone_': 'biomesoplenty:white_sand',

        'excavated_variants:quark_jasper_': 'minecraft:red_sand',
        'excavated_variants:quark_shale_': 'minecraft:gravel',

        'excavated_variants:create_limestone_': 'biomesoplenty:white_sand',
        'excavated_variants:create_veridium_': 'create:copper_nugget',
        'excavated_variants:create_crimsite_': 'minecraft:iron_nugget',
        'excavated_variants:create_asurine_': 'create:zinc_nugget',
        'excavated_variants:create_ochrum_': 'minecraft:gold_nugget',
        'excavated_variants:create_scoria_': 'biomesoplenty:black_sand',
        'excavated_variants:create_scorchia_': 'biomesoplenty:black_sand',

        'excavated_variants:twigs_rhyolite_': 'minecraft:red_sand',
        'excavated_variants:twigs_schist_': 'minecraft:gravel',
    }

    for (const [oreType, secondaryOutput] of Object.entries(secondaryZincOutputs)) {
        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'zinc_ore').toJson()
            ],
            results: [
                Item.of('create:crushed_zinc_ore', 2).toJson(),
                Item.of('create:crushed_zinc_ore').withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'zinc_ore')
    }

    // Other Overworld Ores

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:xpetrified_ore').toJson()
        ],
        results: [
            Item.of('create:experience_nugget', 5).toJson(),
            Item.of('create:experience_nugget').withChance(0.5).toJson(),
            Item.of('minecraft:cobblestone').withChance(0.125).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/xpetrified_ore')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:xpetrified_orb').toJson()
        ],
        results: [
            Item.of('create:experience_nugget', 5).toJson(),
            Item.of('create:experience_nugget').withChance(0.5).toJson(),
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/xpetrified_orb')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:arcane_crystal_ore').toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:arcane_crystal', 2).toJson(),
            Item.of('forbidden_arcanus:arcane_crystal').withChance(0.5).toJson(),
            Item.of('create:experience_nugget').withChance(0.75).toJson(),
            Item.of('minecraft:cobblestone').withChance(0.125).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/arcane_crystal_ore')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:deepslate_arcane_crystal_ore').toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:arcane_crystal', 2).toJson(),
            Item.of('forbidden_arcanus:arcane_crystal').withChance(0.5).toJson(),
            Item.of('create:experience_nugget').withChance(0.75).toJson(),
            Item.of('minecraft:cobbled_deepslate').withChance(0.125).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/deepslate_arcane_crystal_ore')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:runic_stone').toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:rune', 2).toJson(),
            Item.of('forbidden_arcanus:rune').withChance(0.5).toJson(),
            Item.of('create:experience_nugget').withChance(0.75).toJson(),
            Item.of('minecraft:cobblestone').withChance(0.125).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/runic_stone')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:runic_deepslate').toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:rune', 2).toJson(),
            Item.of('forbidden_arcanus:rune').withChance(0.5).toJson(),
            Item.of('create:experience_nugget').withChance(0.75).toJson(),
            Item.of('minecraft:cobbled_deepslate').withChance(0.125).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/runic_deepslate')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('forbidden_arcanus:runic_deepslate').toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:rune', 2).toJson(),
            Item.of('forbidden_arcanus:rune').withChance(0.5).toJson(),
            Item.of('create:experience_nugget').withChance(0.75).toJson(),
            Item.of('biomesoplenty:black_sand').withChance(0.125).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/runic_darkstone')

    // Nether Ores
    
    let secondaryQuartzOutputs = {
        'minecraft:nether_': 'create:cinder_flour',

        'excavated_variants:basalt_': 'biomesoplenty:black_sand',
        'excavated_variants:smooth_basalt_': 'biomesoplenty:black_sand',
        'excavated_variants:blackstone_': 'biomesoplenty:black_sand',

        'excavated_variants:create_scoria_': 'biomesoplenty:black_sand',
        'excavated_variants:create_scorchia_': 'biomesoplenty:black_sand',

        'excavated_variants:twigs_bloodstone_': 'biomesoplenty:black_sand',

        'deeper_nether_biomes:soul_': 'minecraft:soul_sand',
        'deeper_nether_biomes:basalt_': 'biomesoplenty:black_sand'
    }
    
    event.remove({id: 'create:crushing/nether_quartz_ore'});

    for (const [oreType, secondaryOutput] of Object.entries(secondaryQuartzOutputs)) {
        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'quartz_ore').toJson()
            ],
            results: [
                Item.of('minecraft:quartz', 2).toJson(),
                Item.of('minecraft:quartz').withChance(0.5).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'quartz_ore')
    }
    
    let secondaryNetherGoldOutputs = {
        'minecraft:': 'create:cinder_flour',

        'excavated_variants:basalt_': 'biomesoplenty:black_sand',
        'excavated_variants:smooth_basalt_': 'biomesoplenty:black_sand',
        'excavated_variants:blackstone_': 'biomesoplenty:black_sand',

        'excavated_variants:create_scoria_': 'biomesoplenty:black_sand',
        'excavated_variants:create_scorchia_': 'biomesoplenty:black_sand',

        'excavated_variants:twigs_bloodstone_': 'biomesoplenty:black_sand'
    }

    event.remove({id: 'create:crushing/nether_gold_ore'});

    for (const [oreType, secondaryOutput] of Object.entries(secondaryNetherGoldOutputs)) {
        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'nether_gold_ore').toJson()
            ],
            results: [
                Item.of('minecraft:gold_nugget', 18).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'nether_gold_ore')
    }

    let secondaryDeeperNetherBiomesGoldOutputs = {
        'deeper_nether_biomes:soul_': 'minecraft:soul_sand',
        'deeper_nether_biomes:basalt_': 'biomesoplenty:black_sand'
    }

    for (const [oreType, secondaryOutput] of Object.entries(secondaryDeeperNetherBiomesGoldOutputs)) {
        event.custom({
            type: 'create:crushing',
            ingredients: [
                Ingredient.of(oreType + 'gold_ore').toJson()
            ],
            results: [
                Item.of('minecraft:gold_nugget', 18).toJson(),
                Item.of('create:experience_nugget').withChance(0.75).toJson(),
                Item.of(secondaryOutput).withChance(0.125).toJson()
            ],
            processingTime: 400
        })
        .id('aspirations:crushing/' + oreType.split(":")[1] + 'gold_ore')
    }

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('infernalexp:basalt_iron_ore').toJson()
        ],
        results: [
            Item.of('create:crushed_iron_ore', 2).toJson(),
            Item.of('create:crushed_iron_ore').withChance(0.5).toJson(),
            Item.of('create:experience_nugget').withChance(0.75).toJson(),
            Item.of('biomesoplenty:black_sand').withChance(0.125).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/basalt_iron_ore')
})