export const MatchStatuses = {
    Finished: "Finished",
    Ongoing: "Ongoing",
    Scheduled: "Scheduled",
} as const

export type MatchStatus = (typeof MatchStatuses)[keyof typeof MatchStatuses]
