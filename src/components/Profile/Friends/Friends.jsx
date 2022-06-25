import s from "./Friends.module.css";
import { Friend } from "./Friend/Friend";
import friendAnton from "../../../images/Anton.jpg";
import friendLena from "../../../images/Lena.jpg";
export const Friends = () => {
  return (
    <div>
      <div className={s.friends}>
        <div className={s.friends__title}>Friends</div>
        <div className={s.friends__inner}>
          <Friend name="Anton" friendImg={friendAnton} />
          <Friend name="Lena" friendImg={friendLena} />
        </div>    
      </div>
    </div>
  )
}