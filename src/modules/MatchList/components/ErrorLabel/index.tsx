import errorIcon from "/error.svg"
import style from "./ErrorLabel.module.scss"


export const ErrorLabel = () => {
    return (
        <div className={style.errorLabel}>
            <img src={errorIcon} draggable={false} />
            <p>Ошибка: не удалось загрузить информацию</p>
        </div>
    )
}
