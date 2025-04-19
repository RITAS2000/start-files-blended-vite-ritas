import style from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem';

export default function ForbesList({ forbes }) {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {forbes.map(forbe => {
          return (
            <li className={style.item} key={forbe.id}>
              <ForbesListItem
                name={forbe.name}
                capital={forbe.capital}
                avatar={forbe.avatar}
                isIncrease={forbe.isIncrease}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
