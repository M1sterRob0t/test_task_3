import { Player } from "./player"

export type Team = {
    name: string
    place: number
    players: Player[]
    points: number
    total_kills: number
}
