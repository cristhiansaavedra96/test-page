// KubeJS Recipe Script for Farmer's Delight Roast Chicken
// This script adds a crafting recipe for roast_chicken using roast_chicken_block and bowl

ServerEvents.recipes(event => {
    // Add shaped recipe for farmersdelight:roast_chicken
    event.shaped('farmersdelight:roast_chicken', [
        'AB'
    ], {
        A: 'farmersdelight:roast_chicken_block',
        B: 'minecraft:bowl'
    })
    
    // Alternative pattern (ingredients can be swapped)
    event.shaped('farmersdelight:roast_chicken', [
        'BA'
    ], {
        A: 'farmersdelight:roast_chicken_block',
        B: 'minecraft:bowl'
    })
})
