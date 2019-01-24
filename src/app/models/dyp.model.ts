export class DypPlayer {
    id: number;
    firstName: string;
    lastName: string;
    elo: number;
}

export class DypTeam {
    player1: DypPlayer;
    player2?: DypPlayer;
}

export class DypResult {
    position: number;
    team: DypTeam;
    forecast: number;
    points: number;
}

export class Dyp {
    id: number;
    date: string;
    results?: DypResult[];
}
