ServerEvents.tags('block', event => {
  event.removeAll("minecraft:enderman_holdable");
  event.add("minecraft:wither_immune", "minecraft:netherite_block");
})

ServerEvents.tags('entity_type', event => {
  event.add("forbidden_arcanus:quantum_catcher_blacklisted", [
    "cataclysm:ender_golem",
    "cataclysm:ender_guardian",
    "cataclysm:ignis",
    "cataclysm:netherite_monstrosity",
  ])
})