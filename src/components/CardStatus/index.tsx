import { MatchStatus, MatchStatuses } from "../../types"
import { FC } from "react"
import style from "./CardStatus.module.scss"

interface Props {
    status: MatchStatus
}

export const CardStatus: FC<Props> = ({ status }) => {
    return (
        <div className={`${style.cardStatus} ${style[status]}`}>
            {(() => {
                switch (status) {
                    case MatchStatuses.Scheduled:
                        return "Match preparing"

                    case MatchStatuses.Ongoing:
                        return "Live"

                    case MatchStatuses.Finished:
                        return "Finished"
                }
            })()}
        </div>
    )
}
