ServerEvents.recipes(event => {

    //------ Redstone ------//

    event.remove({output: 'minecraft:hopper'})

    event.remove({id: 'minecraft:repeater'})
    event.remove({id: 'quark:tweaks/crafting/utility/misc/repeater'})
    event.remove({id: 'minecraft:comparator'})
    event.remove({id: 'minecraft:observer'})
    event.remove({id: 'create:crafting/logistics/content_observer'})
    event.remove({id: 'create:crafting/logistics/redstone_link'})
    event.remove({id: 'create:crafting/logistics/pulse_extender'})
    event.remove({id: 'create:crafting/logistics/pulse_repeater'})
    event.remove({id: 'quark:automation/crafting/redstone_randomizer'})

    event.shaped(
        'minecraft:repeater',
        [
            'RDR',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            D: 'minecraft:redstone',
            S: '#bookshelf:stones'
        }
    )
    .id('aspirations:crafting/repeater')

    event.shaped(
        'minecraft:comparator',
        [
            ' R ',
            'RER',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            E: 'kubejs:redstone_eye',
            S: '#bookshelf:stones'
        }
    )
    .id('aspirations:crafting/comparator')

    event.shaped(
        'minecraft:observer',
        [
            'SSS',
            'RRE',
            'SSS'
        ],
        {
            R: 'minecraft:redstone',
            E: 'kubejs:redstone_eye',
            S: '#bookshelf:stones'
        }
    )
    .id('aspirations:crafting/observer')

    event.shaped(
        'create:content_observer',
        [
            'E',
            'B',
            'T'
        ],
        {
            E: 'kubejs:redstone_eye',
            B: 'create:brass_casing',
            T: 'create:electron_tube'
        }
    )
    .id('aspirations:crafting/content_observer')

    event.shaped(
        '2x create:redstone_link',
        [
            'E',
            'B',
            'S'
        ],
        {
            E: 'create:electron_tube',
            B: 'create:brass_casing',
            S: 'alloyed:bronze_sheet'
        }
    )
    .id('aspirations:crafting/redstone_link')

    event.shaped(
        'create:pulse_extender',
        [
            '  R',
            'EBR',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            E: 'create:electron_tube',
            B: 'alloyed:bronze_sheet',
            S: '#bookshelf:stones'
        }
    )
    .id('aspirations:crafting/pulse_extender')

    event.shaped(
        'create:pulse_repeater',
        [
            'TBR',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            T: 'create:electron_tube',
            B: 'alloyed:bronze_sheet',
            S: '#bookshelf:stones'
        }
    )
    .id('aspirations:crafting/pulse_repeater')

    event.shaped(
        'quark:redstone_randomizer',
        [
            ' R ',
            'RER',
            'SSS'
        ],
        {
            R: 'minecraft:redstone_torch',
            E: 'create:electron_tube',
            S: '#bookshelf:stones'
        }
    )
    .id('aspirations:crafting/redstone_randomizer')

    //------ Components ------//

    event.remove({id: 'create:crafting/materials/rose_quartz'});
    event.remove({id: 'create:crafting/materials/electron_tube'});

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            Ingredient.of('minecraft:quartz').toJson(),
            Ingredient.of('minecraft:redstone').toJson(),
            Ingredient.of('minecraft:redstone').toJson(),
            Ingredient.of('minecraft:redstone').toJson(),
            Ingredient.of('minecraft:redstone').toJson(),
            Fluid.of('kubejs:molten_iron', 90).toJson()
        ],
        results: [
            Ingredient.of('create:rose_quartz').toJson()
        ]
    })
    .id('aspirations:mixing/rose_quartz')

    event.custom({
        type: 'create:sandpaper_polishing',
        ingredients: [
            Ingredient.of('minecraft:lapis_lazuli').toJson()
        ],
        results: [
            Item.of('kubejs:polished_lapis').toJson()
        ]
    })
    .id('aspirations:polishing/lapis')

    event.shaped(
        'kubejs:redstone_eye',
        [
            'L',
            'I',
            'G'
        ],
        {
            L: 'kubejs:polished_lapis',
            I: 'create:iron_sheet',
            G: 'createaddition:gold_wire'
        }
    )
    .id('aspirations:redstone_eye')

    event.shaped(
        'create:electron_tube',
        [
            'L',
            'I',
            'G'
        ],
        {
            L: 'create:polished_rose_quartz',
            I: 'create:iron_sheet',
            G: 'createaddition:copper_wire'
        }
    )
    .id('aspirations:electron_tube')
})