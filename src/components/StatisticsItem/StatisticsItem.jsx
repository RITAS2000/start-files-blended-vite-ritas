import style from './StatisticsItem.module.css';

export default function StatisticsItem({ total, title, icon: Icon }) {
  return (
    <>
      <Icon />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
}
