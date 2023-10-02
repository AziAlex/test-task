import styles from "./styles.module.scss"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../app/redux";

const Header = () => {
  const {table} = useSelector((state: RootState) => state.columns)

  return (
    <div className={styles.header}>
      <ul>
        <li><Link to="/">Projects</Link></li>
        <li><Link to={table ? `/project/${table?.id}` : "/"}>Tables</Link></li>
      </ul>
    </div>
  );
};

export default Header;