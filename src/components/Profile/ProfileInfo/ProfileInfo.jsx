import s from "./ProfileInfo.module.css";
export const ProfileInfo = () => {
  return (
    <div>
      <p className={s.profile__name}>Maria Ilinih</p>
      <p className={s.profile__status}>Я делаю вдох, так пахнет Dior❤‍🔥</p>
      <div className={s.profile__info}>
        <div className={s.profile__tags}>
          <p className={s.profile__tag}>
            День рождения:
          </p>
          <p className={s.profile__tag}>
            Город:
          </p>
          <p className={s.profile__tag}>
            Место учёбы:
          </p>
          <p className={s.profile__tag}>
            Дата регистрации:
          </p>
        </div>
        <div className={s.profile__box}>
          <p className={s.profile__text}>
            10 мая 2003 г. (19 лет, Телец)
          </p>
          <p className={s.profile__text}>
            Новосибирск
          </p>
          <p className={s.profile__text}>
            НГТУ (НЭТИ)
          </p>
          <p className={s.profile__text}>
            26 августа 2011 (14:22)
          </p>
        </div>
      </div>
    </div>
  )
}