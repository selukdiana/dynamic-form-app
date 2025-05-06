import { useNavigate } from "react-router";
import styles from "./EntityRow.module.css";
import { FaPen } from "react-icons/fa";

export const EntityRow = ({ entity }) => {
  const navigate = useNavigate();
  const changeEntityRowClickHandler = (id) => {
    navigate(`/entity?id=${id}`);
  };
  return (
    <tr className={styles.row}>
      <td>{entity.name}</td>
      <td>{entity.surname}</td>
      <td>{entity.email}</td>
      <td>{entity.education}</td>
      <td>{entity.location}</td>
      <td>{entity.age}</td>
      <td>
        {entity.isPhoneNumber === "on"
          ? `${entity.phoneNumber.code} ${entity.phoneNumber.number}`
          : "-"}
      </td>
      <td
        onClick={() => changeEntityRowClickHandler(entity.id)}
        style={{ width: "1%" }}
      >
        <FaPen className={styles.icon} />
      </td>
    </tr>
  );
};
