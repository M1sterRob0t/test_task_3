import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { DropListItem } from "./types/dropListItem"
import style from "./styles/DropList.module.scss"
import arrowImage from "/arrow.svg"
import { Item } from "./Item/Item"

interface Props {
    items: DropListItem[]
    selectedItemId: number
    onSelectItem: Dispatch<SetStateAction<number>>
}

export function DropList({ items, selectedItemId, onSelectItem }: Props) {
    const [isOpened, setOpened] = useState(false)
    const [containerHeight, setContainerHeight] = useState(0)
    const itemsContainerRef = useRef(null)

    useEffect(() => {
        if (!itemsContainerRef.current) {
            return
        }

        const element = itemsContainerRef.current as HTMLDivElement

        if (isOpened) {
            setContainerHeight(element.scrollHeight)
        } else {
            setContainerHeight(0)
        }
    }, [itemsContainerRef, isOpened])

    return (
        <div
            className={style.dropList}
            onClick={() => setOpened((prev) => !prev)}
            draggable={false}
        >
            <p>{items.find((item) => item.id == selectedItemId)?.text}</p>
            <img
                src={arrowImage}
                className={style.arrow}
                style={{ transform: `rotateZ(${isOpened ? 0 : 180}deg)` }}
            />
            <div
                className={style.itemsContainer}
                ref={itemsContainerRef}
                style={{ height: containerHeight }}
            >
                <div className={style.itemsContainerInner}>
                    {items.map((item) => (
                        <Item
                            item={item}
                            onSelect={onSelectItem}
                            key={JSON.stringify(item.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
