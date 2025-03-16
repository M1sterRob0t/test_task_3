import { DropListItem } from "../types/dropListItem"
import style from "./styles/item.module.scss"

interface Props {
    item: DropListItem
    onSelect: (id: number) => void
}

export function Item({ item, onSelect }: Props) {
    return (
        <div>
            <button
                className={style.item}
                onClick={() => onSelect(item.id)}
                draggable={false}
            >
                {item.text}
            </button>
        </div>
    )
}
