import { BossBarColor, IBossBar, BossBarStyle } from './bossbar';
export declare let BossBar: {
    bar: (msg: any, player: any) => IBossBar;
    color: typeof BossBarColor;
    style: typeof BossBarStyle;
};
