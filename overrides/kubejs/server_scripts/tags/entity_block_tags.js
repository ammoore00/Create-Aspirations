ServerEvents.tags('block', event => {
  event.removeAll("minecraft:enderman_holdable");
  event.add("minecraft:wither_immune", "minecraft:netherite_block");
})