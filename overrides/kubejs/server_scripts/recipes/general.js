ServerEvents.recipes(event => {
    event.replaceInput({id: 'farmersdelight:canvas'}, 'farmersdelight:straw', 'supplementaries:flax')

    event.remove({id: 'supplementaries:sack'})
    event.shaped(
        'supplementaries:sack',
        [
            ' R ',
            'C C',
            ' C '
        ],
        {
            R: 'farmersdelight:rope',
            C: 'farmersdelight:canvas'
        }
    ).id('aspirations:sack')

    event.remove({id: 'quark:oddities/crafting/backpack'})
    event.shaped(
        'quark:backpack',
        [
            'LVL',
            'VCV',
            'VIV'
        ],
        {
            L: 'minecraft:leather',
            V: 'farmersdelight:canvas',
            C: '#forge:chests/wooden',
            I: 'create:iron_sheet'
        }
    ).id('aspirations:backpack')

    event.shapeless(
        'supplementaries:antique_ink',
        [
            'minecraft:glass_bottle',
            'minecraft:ink_sac'
        ]
    ).id('aspirations:antique_ink')

    event.remove({id: 'create_things_and_misc:slime_porridge'})

    event.remove({id: 'vct:quark_azalea_crafting_table'})
    event.remove({id: 'vct:quark_azalea_crafting_table_minecart'})
    event.remove({id: 'supplementaries:quark/hanging_sign_azalea'})
    event.remove({id: 'supplementaries:quark/sign_post_azalea'})

    event.remove({id: 'forbidden_arcanus:ender_pearl_fragment'})
    event.remove({id: 'forbidden_arcanus:ender_pearl'})

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('minecraft:ender_pearl').toJson()
        ],
        results: [
            Item.of('4x forbidden_arcanus:ender_pearl_fragment').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/ender_pearl')

    event.shaped(
        'minecraft:ender_pearl',
        [
            'FF',
            'FF'
        ],
        {
            F: 'forbidden_arcanus:ender_pearl_fragment'
        }
    ).id('aspirations:ender_pearl')

    event.remove({id: 'create:compacting/blaze_cake'})

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Ingredient.of('create:cinder_flour').toJson(),
            Ingredient.of('forbidden_arcanus:arcane_crystal_dust').toJson(),
            Ingredient.of('minecraft:sugar').toJson()
        ],
        results: [
            Item.of('create:blaze_cake_base').toJson()
        ]
    })
    .id('aspirations:compacting/blaze_cake_base')

    event.remove({input: 'spirit:compressed_soul_sand'})
    event.remove({output: 'spirit:compressed_soul_sand'})
    event.remove({input: 'spirit:compressed_soul_powder_block'})
    event.remove({output: 'spirit:compressed_soul_powder_block'})
})