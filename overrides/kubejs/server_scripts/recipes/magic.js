ServerEvents.recipes(event => {
    event.remove({id: 'forbidden_arcanus:golden_orchid_seeds'})
    event.remove({id: 'forbidden_arcanus:sanity_meter'})
    event.remove({id: 'forbidden_arcanus:spectral_eye_amulet'})

    event.remove({id: 'forbidden_arcanus:smithing/quantum_catcher_smithing'})

    event.remove({id: 'forbidden_arcanus:corrupti_dust'})
    event.remove({id: 'forbidden_arcanus:mundabitur_dust'})

    event.remove({id: 'recall:item_recall'})

    event.custom({
        type: 'create:mixing',
        ingredients: [
            Ingredient.of('create:powdered_obsidian').toJson(),
            Ingredient.of('forbidden_arcanus:arcane_crystal_dust').toJson(),
            Ingredient.of('sculked:sculk_paste').toJson(),
            Ingredient.of('forbidden_arcanus:dark_matter').toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:corrupti_dust', 4).toJson()
        ]
    }).id('aspirations:corrupti_dust')

    event.custom({
        type: 'create:mixing',
        ingredients: [
            Ingredient.of('create:powdered_obsidian').toJson(),
            Ingredient.of('forbidden_arcanus:arcane_crystal_dust').toJson(),
            Ingredient.of('minecraft:blaze_powder').toJson(),
            Ingredient.of('create:rose_quartz').toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:mundabitur_dust', 4).toJson()
        ]
    }).id('aspirations:mundabitur_dust')

    event.remove({id: 'nocubescreateexp:recipe_exp_block'})

    event.replaceInput({id: 'create_things_and_misc:experiencesheetcraft'}, 'create:experience_nugget', 'create_sa:heap_of_experience')

    event.custom({
        type: 'create_enchantment_industry:disenchanting',
        ingredients: [
            Ingredient.of('create_things_and_misc:experience_sheet').toJson()
        ],
        results: [
            Fluid.of('create_enchantment_industry:experience', 27).toJson()
        ]
    }).id('aspirations:disenchanting/experience_sheet')

    event.shaped(
        'nocubescreateexp:exp_block',
        [
            'EEE',
            'EEE',
            'EEE'
        ],
        {
            E: 'create_sa:heap_of_experience'
        }
    ).id('aspirations:exp_block')

    event.custom({
        type: 'create_enchantment_industry:disenchanting',
        ingredients: [
            Ingredient.of('nocubescreateexp:exp_block').toJson()
        ],
        results: [
            Fluid.of('create_enchantment_industry:experience', 243).toJson()
        ]
    }).id('aspirations:disenchanting/exp_block')
})