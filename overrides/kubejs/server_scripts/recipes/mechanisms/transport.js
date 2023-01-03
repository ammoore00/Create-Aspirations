ServerEvents.recipes(event => {
  event.replaceInput({id: 'littlelogistics:barge'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')
  event.replaceInput({id: 'littlecontraptions:contraption_barge'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')
  event.replaceInput({id: 'littlelogistics:fishing_barge'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')
  event.replaceInput({id: 'littlelogistics:seater_barge'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')
  event.replaceInput({id: 'littlelogistics:tug'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')
  event.replaceInput({id: 'littlelogistics:energy_tug'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')

  event.replaceInput({id: 'littlelogistics:seater_car'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')
  event.replaceInput({id: 'littlelogistics:steam_locomotive'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')
  event.replaceInput({id: 'littlelogistics:energy_locomotive'}, 'minecraft:iron_ingot', 'createdeco:cast_iron_ingot')

  event.remove({id: 'littlelogistics:fluid_barge'})
  event.remove({id: 'littlelogistics:fluid_hopper'})
  event.remove({id: 'littlelogistics:vessel_charger'})
  
  event.shaped(
    'littlelogistics:fluid_barge',
    [
      'CTC',
      'III'
    ],
    {
      C: 'create:copper_sheet',
      T: 'create:fluid_tank',
      I: 'createdeco:cast_iron_ingot'
    }
  ).id('aspirations:fluid_barge')

  event.shaped(
    'littlelogistics:vessel_charger',
    [
      'SCS',
      'SMS'
    ],
    {
      S: 'alloyed:bronze_sheet',
      C: 'createaddition:copper_spool',
      M: 'create_things_and_misc:vibration_mechanism'
    }
  ).id('aspirations:vessel_charger')
})