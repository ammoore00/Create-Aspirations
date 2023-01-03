ServerEvents.recipes(event => {
    event.remove({
        input: 'minecraft:netherite_ingot',
        type: 'smithing'
    })

    event.smithing(
        'minecraft:netherite_pickaxe',
        'alloyed:steel_pickaxe',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_pickaxe')

    event.smithing(
        'minecraft:netherite_axe',
        'alloyed:steel_axe',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_axe')

    event.smithing(
        'minecraft:netherite_shovel',
        'alloyed:steel_shovel',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_shovel')

    event.smithing(
        'minecraft:netherite_hoe',
        'alloyed:steel_hoe',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_hoe')

    event.smithing(
        'minecraft:netherite_sword',
        'alloyed:steel_sword',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_sword')

    event.smithing(
        'farmersdelight:netherite_knife',
        'alloyed:steel_knife',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_knife')

    event.smithing(
        'forbidden_arcanus:netherite_blacksmith_gavel',
        'forbidden_arcanus:iron_blacksmith_gavel',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_blacksmith_gavel')

    event.smithing(
        'minecraft:netherite_helmet',
        'alloyed:steel_helmet',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_helmet')

    event.smithing(
        'minecraft:netherite_chestplate',
        'alloyed:steel_chestplate',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_chestplate')

    event.smithing(
        'minecraft:netherite_leggings',
        'alloyed:steel_leggings',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_leggings')

    event.smithing(
        'minecraft:netherite_boots',
        'alloyed:steel_boots',
        'minecraft:netherite_ingot'
    ).id('aspirations:netherite_boots')
})