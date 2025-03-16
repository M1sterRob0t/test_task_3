import { MatchStatus } from "./matchStatus"
import { Team } from "./team"

export type Match = {
    awayScore: number
    awayTeam: Team
    homeScore: number
    homeTeam: Team
    status: MatchStatus
    time: Date
    title: string
}