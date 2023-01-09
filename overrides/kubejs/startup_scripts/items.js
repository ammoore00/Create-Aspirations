StartupEvents.registry('item', event => {
	//------ Metallurgy ------//
    
	event.create('refined_iron_ore');
    event.create('refined_copper_ore');
    event.create('refined_gold_ore');
    event.create('refined_zinc_ore');

    event.create('crushed_coal').burnTime(1600);
    event.create('refined_coal_dust').burnTime(200);
    event.create('coke').burnTime(2400);

    event.create('deorum_sheet');

    event.create('raw_diamond');
    event.create('diamondium_ingot');

    event.create('ender_slag');

	//------ Misc Items ------//

	event.create('polished_lapis').displayName('Polished Lapis Lazuli');
    event.create('redstone_eye');
    
    event.create('diamond_chisel', 'pickaxe').tier('diamond');
})

StartupEvents.registry('fluid', event => {
	event.create('molten_iron')
        .thickTexture(0xd8d8d8)
        .bucketColor(0xd8d8d8)
        
    event.create('molten_copper')
        .thickTexture(0xc77c56)
        .bucketColor(0xc77c56)
    
    event.create('molten_gold')
        .thickTexture(0xfdf55f)
        .bucketColor(0xfdf55f)
        
    event.create('molten_zinc')
        .thickTexture(0xb9c9c1)
        .bucketColor(0xb9c9c1)
    
    event.create('molten_brass')
        .thickTexture(0xffeb94)
        .bucketColor(0xffeb94)
    
    event.create('molten_bronze')
        .thickTexture(0xd3b176)
        .bucketColor(0xd3b176)

    event.create('molten_steel')
        .thickTexture(0x878486)
        .bucketColor(0x878486)
    
    event.create('molten_deorum')
        .thickTexture(0xfcba03)
        .bucketColor(0xfcba03)
    
    event.create('molten_netherite')
        .thickTexture(0x4c4143)
        .bucketColor(0x4c4143)
})