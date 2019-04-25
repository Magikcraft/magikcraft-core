import * as events from 'events'
const Material = Java.type('org.bukkit.Material')

export function icePath() {
    if (!self) return
    let sneakDebounce = false
    let active = true

    const eventHandler = events.playerMove(event => {
        if (!event.player || event.player.name !== self.name) return
        if (!active) return

        const headBlock = event.from.block.getRelative(0, 1, 0)
        const feetBlock = event.from.block.getRelative(0, 0, 0)
        const blockBeneath = event.from.block.getRelative(0, -1, 0)
        const block2Beneath = event.from.block.getRelative(0, -2, 0)

        if (headBlock.type == 'ICE') headBlock.setType(Material.AIR)
        if (feetBlock.type == 'ICE') feetBlock.setType(Material.AIR)

        if (event.player.isSneaking() && !sneakDebounce) {
            if (blockBeneath.type == 'ICE') {
                sneakDebounce = true
                blockBeneath.setType(Material.AIR)
                setTimeout(() => sneakDebounce = false, 100)
            }
            if (block2Beneath.type == 'AIR') {
                const type = block2Beneath.type
                block2Beneath.setType(Material.ICE)
                setTimeout(() => block2Beneath.setType(type), 20000)
            }
        } else {
            if (blockBeneath.type == 'AIR' || blockBeneath.type == 'WATER') {
                const type = blockBeneath.type
                setTimeout(() => blockBeneath.setType(type), 20000)
                blockBeneath.setType(Material.ICE)
            }
        }
    })

    setTimeout(() => eventHandler.unregister(), 10000)
}
