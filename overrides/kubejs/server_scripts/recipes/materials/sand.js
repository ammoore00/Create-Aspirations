ServerEvents.recipes(event => {
  event.remove({id: 'create:splashing/soul_sand'})

  event.custom({
      type: 'create:splashing',
      ingredients: [
          Ingredient.of('biomesoplenty:white_sand').toJson()
      ],
      results: [
          Item.of('create:zinc_nugget').withChance(.125).toJson(),
          Item.of('ecologics:seashell').withChance(.005).toJson()
      ],
      processingTime: 250
  })
  .id('aspirations:splashing/white_sand')

  event.custom({
      type: 'create:splashing',
      ingredients: [
          Ingredient.of('biomesoplenty:orange_sand').toJson()
      ],
      results: [
          Item.of('create:copper_nugget').withChance(.125).toJson()
      ],
      processingTime: 250
  })
  .id('aspirations:splashing/orange_sand')

  event.custom({
      type: 'create:splashing',
      ingredients: [
          Ingredient.of('biomesoplenty:black_sand').toJson()
      ],
      results: [
          Item.of('minecraft:iron_nugget').withChance(.125).toJson()
      ],
      processingTime: 250
  })
  .id('aspirations:splashing/black_sand')

  event.custom({
      type: 'create:splashing',
      ingredients: [
          Ingredient.of('minecraft:soul_sand').toJson()
      ],
      results: [
          Item.of('minecraft:quartz', 4).withChance(.125).toJson(),
          Item.of('forbidden_arcanus:soul').withChance(.05).toJson()
      ],
      processingTime: 250
  })
  .id('aspirations:splashing/soul_sand')
})