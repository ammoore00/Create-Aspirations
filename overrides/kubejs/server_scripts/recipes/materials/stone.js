ServerEvents.recipes(event => {
    
    //------ General ------//

    event.remove({id: 'create:crushing/tuff'});
    event.remove({id: 'create:crushing/tuff_recylcing'});

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:tuff').toJson()
        ],
        results: [
            Item.of('minecraft:flint').withChance(0.25).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/tuff')

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('#create:stones/tuff').toJson()
        ],
        results: [
            Item.of('minecraft:flint').withChance(0.25).toJson()
        ],
        processingTime: 400
    })
    .id('aspirations:crushing/tuff_recycling')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('quark:shale').toJson()
        ],
        results: [
            Item.of('minecraft:gravel').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/shale')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('twigs:schist').toJson()
        ],
        results: [
            Item.of('minecraft:gravel').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/schist')

    //------ Sand Milling ------//

    event.remove({id: 'create:milling/calcite'});
    event.remove({id: 'create:milling/diorite'});
    event.remove({id: 'create:crushing/diorite_recycling'});
    event.remove({id: 'create:milling/granite'});
    event.remove({id: 'create:milling/gravel'});

    // Sand

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('minecraft:gravel').toJson()
        ],
        results: [
            Item.of('minecraft:sand').toJson(),
            Item.of('minecraft:flint').withChance(0.25).toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/gravel')

    // Red Sand

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('quark:jasper').toJson()
        ],
        results: [
            Item.of('minecraft:red_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/jasper')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('twigs:rhyolite').toJson()
        ],
        results: [
            Item.of('minecraft:red_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/rhyolite')

    // Orange Sand

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('biomesoplenty:orange_sandstone').toJson()
        ],
        results: [
            Item.of('biomesoplenty:orange_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/orange_sandstone')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('minecraft:granite').toJson()
        ],
        results: [
            Item.of('biomesoplenty:orange_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/granite')

    // White Sand

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('biomesoplenty:white_sandstone').toJson()
        ],
        results: [
            Item.of('biomesoplenty:white_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/white_sandstone')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('minecraft:calcite').toJson()
        ],
        results: [
            Item.of('biomesoplenty:white_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/calcite')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('minecraft:diorite').toJson()
        ],
        results: [
            Item.of('biomesoplenty:white_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/diorite')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('create:limestone').toJson()
        ],
        results: [
            Item.of('biomesoplenty:white_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/limestone')

    // Black Sand

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('biomesoplenty:black_sandstone').toJson()
        ],
        results: [
            Item.of('biomesoplenty:black_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/black_sandstone')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('minecraft:blackstone').toJson()
        ],
        results: [
            Item.of('biomesoplenty:black_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/blackstone')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('minecraft:basalt').toJson()
        ],
        results: [
            Item.of('biomesoplenty:black_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/basalt')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('minecraft:smooth_basalt').toJson()
        ],
        results: [
            Item.of('biomesoplenty:black_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/smooth_basalt')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('create:scorchia').toJson()
        ],
        results: [
            Item.of('biomesoplenty:black_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/scorchia')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('create:scoria').toJson()
        ],
        results: [
            Item.of('biomesoplenty:black_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/scoria')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('twigs:bloodstone').toJson()
        ],
        results: [
            Item.of('biomesoplenty:black_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/bloodstone')

    // Soul Sand

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('quark:soul_sandstone').toJson()
        ],
        results: [
            Item.of('minecraft:soul_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/soul_sandstone')

    event.custom({
        type: 'create:milling',
        ingredients: [
            Ingredient.of('forbidden_arcanus:soulless_sandstone').toJson()
        ],
        results: [
            Item.of('forbidden_arcanus:soulless_sand').toJson()
        ],
        processingTime: 250
    })
    .id('aspirations:milling/soulless_sandstone')
})