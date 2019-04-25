const GameMode = Java.type('org.bukkit.GameMode')

export function spectris() {
    const player = self
    if (!self) return
    if (player.gameMode == 'SPECTATOR') return

    const gameMode = player.gameMode
    const isFlying​ = player.isFlying​()
    player.setGameMode(GameMode.SPECTATOR)

    let count = 5
    echo(player, `WARPING... ${count}`)
    count--

    const timer = setInterval(() => {
        echo(player, `WARPING... ${count}`)
        count--
        if (count === 0) {
            clearInterval(timer)
            player.setGameMode(GameMode[gameMode])
            player.setFlying(isFlying)
        }
    }, 1000)
}
