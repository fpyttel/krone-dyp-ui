
export class PlayerStats {
    elo: number;
    effectivity: number;
    lastDypDate: string;
    dyps: number;
    matches: number;
    wins: number;
    loss: number;
}

export class Player {
    id: number;
    firstName: string;
    lastName: string;
    stats?: PlayerStats;
}
