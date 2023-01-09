ServerEvents.recipes(event => {
    event.remove({mod: 'toms_storage'})

    event.shapeless(
        'toms_storage:ts.inventory_connector',
        [
            'create:andesite_casing',
            '#forge:chests/wooden'
        ]
    ).id('aspirations:inventory_connector')

    event.shaped(
        '4x toms_storage:ts.trim',
        [
            ' S ',
            'SCS',
            ' S '
        ],
        {
            S: 'minecraft:stick',
            C: 'toms_storage:ts.inventory_connector'
        }
    ).id('aspirations:trim')

    event.shapeless(
        'toms_storage:ts.trim',
        [
            'toms_storage:ts.painted_trim',
            'minecraft:water_bucket'
        ]
    ).id('aspirations:trim_cleaning')

    event.custom({
        type: 'create:filling',
        ingredients: [
            Ingredient.of('toms_storage:ts.painted_trim').toJson(),
            Fluid.of('minecraft:water', 250).toJson()
        ],
        results: [
            Item.of('toms_storage:ts.trim').toJson()
        ]
    }).id('aspirations:filling/trim_cleaning')

    event.shapeless(
        'toms_storage:ts.inventory_proxy',
        [
            'toms_storage:ts.inventory_connector',
            'create:filter'
        ]
    ).id('aspirations:inventory_proxy')

    event.shaped(
        'toms_storage:ts.storage_terminal',
        [
            'E',
            'C'
        ],
        {
            E: 'create:electron_tube',
            C: 'toms_storage:ts.inventory_connector'
        }
    ).id('aspirations:storage_terminal')

    event.shaped(
        'toms_storage:ts.crafting_terminal',
        [
            'E',
            'C',
            'W'
        ],
        {
            E: 'create:electron_tube',
            C: 'toms_storage:ts.inventory_connector',
            W: '#forge:workbench'
        }
    ).id('aspirations:crafting_terminal')

    event.shapeless(
        'toms_storage:ts.crafting_terminal',
        [
            'toms_storage:ts.storage_terminal',
            '#forge:workbench'
        ]
    ).id('aspirations:crafting_terminal_from_storage_terminal')

    event.shaped(
        '8x toms_storage:ts.inventory_cable',
        [
            'SCS'
        ],
        {
            S: 'create:shaft',
            C: 'toms_storage:ts.inventory_connector'
        }
    ).id('aspirations:inventory_cable')

    event.shaped(
        'toms_storage:ts.inventory_cable_framed',
        [
            ' S ',
            'SCS',
            ' S '
        ],
        {
            S: 'minecraft:stick',
            C: 'toms_storage:ts.inventory_cable'
        }
    ).id('aspirations:inventory_cable_framed')

    event.shapeless(
        'toms_storage:ts.inventory_cable_connector',
        [
            'create:andesite_casing',
            'toms_storage:ts.inventory_cable'
        ]
    ).id('aspirations:inventory_cable_connector')

    event.shapeless(
        'toms_storage:ts.inventory_cable_connector_filtered',
        [
            'toms_storage:ts.inventory_cable_connector',
            'create:filter'
        ]
    ).id('aspirations:inventory_cable_connector')

    event.shaped(
        'toms_storage:ts.inventory_cable_connector_framed',
        [
            ' S ',
            'SCS',
            ' S '
        ],
        {
            S: 'minecraft:stick',
            C: 'toms_storage:ts.inventory_cable_connector'
        }
    ).id('aspirations:inventory_cable_connector_framed')

    event.shapeless(
        'toms_storage:ts.inventory_hopper_basic',
        [
            'toms_storage:ts.inventory_connector',
            'create:chute'
        ]
    ).id('aspirations:inventory_hopper_basic')

    event.shaped(
        'toms_storage:ts.level_emitter',
        [
            'E',
            'C',
            'R'
        ],
        {
            E: 'create:electron_tube',
            C: 'toms_storage:ts.inventory_connector',
            R: 'kubejs:redstone_eye'
        }
    ).id('aspirations:level_emitter')

    event.shaped(
        'toms_storage:ts.adv_wireless_terminal',
        [
            ' T ',
            'CSC',
            ' R '
        ],
        {
            T: 'littlelogistics:transmitter_component',
            C: 'phantasm:crystal_spike_tip',
            S: 'alloyed:steel_sheet',
            R: 'littlelogistics:receiver_component'
        }
    ).id('aspirations:adv_wireless_terminal')

    event.shapeless(
        'toms_storage:ts.paint_kit',
        [
            '#chalk:chalk',
            'minecraft:water_bucket'
        ]
    ).id('aspirations:paint_kit')

    event.custom({
        type: 'create:filling',
        ingredients: [
            Ingredient.of('#chalk:chalk').toJson(),
            Fluid.of('minecraft:water', 250).toJson()
        ],
        results: [
            Item.of('toms_storage:ts.paint_kit').toJson()
        ]
    }).id('aspirations:filling/paint_kit')
})