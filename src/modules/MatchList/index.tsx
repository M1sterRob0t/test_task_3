import { useCallback, useEffect, useState } from "react"


import { Match } from "../../types"
import { getMatches } from "../../api"
import logo from "/logo.svg"
import { RefreshButton } from "../../components/RefreshButton"
import { ErrorLabel } from "./components/ErrorLabel"
import style from "./MatchList.module.scss"
import { MatchCard } from "./components/MatchCard"


export const MatchList = () => {
    const [matches, setMatches] = useState<Match[]>([])
    const [isLoading, setLoading] = useState(false)
    const [isFailed, setFailed] = useState(false)

    const refresh = useCallback(async () => {
        try {
            setFailed(false)
            setLoading(true)

            setMatches(await getMatches())
        } catch {
            setFailed(true)
        } finally {
            setLoading(false)
        }
    }, [setLoading, setFailed, setMatches])

    useEffect(() => {
        refresh()
    }, [refresh])

    return (
        <div className={style.MatchList}>
            <div className={style.topBarContainer}>
                <img src={logo} draggable={false} />
                <div>
                    {isFailed && <ErrorLabel></ErrorLabel>}
                    <RefreshButton onClick={refresh} isLoading={isLoading} />
                </div>
            </div>
            <div className={style.matchesContainer}>
                {matches.map((match) => (
                    <MatchCard match={match} key={match.title} />
                ))}
            </div>
        </div>
    )
}
