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
})