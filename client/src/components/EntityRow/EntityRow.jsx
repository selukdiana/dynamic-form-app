import { useNavigate } from "react-router";
import styles from "./EntityRow.module.css";
import { FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";

export const EntityRow = ({ entity }) => {
  const navigate = useNavigate();
  const changeEntityRowClickHandler = (id) => {
    navigate(`/entity?id=${id}`);
  };
  const { ages, educations, codes } = useSelector((state) => state.data);
  const ageValue = ages.find((age) => age.id == entity.ageId)?.value;
  const educationValue = educations.find(
    (education) => education.id == entity.educationId
  )?.value;
  const codeValue = codes.find((code) => code.id == entity.phoneCodeId)?.value;

  return (
    <tr className={styles.row}>
      <td>{entity.name}</td>
      <td>{entity.surname}</td>
      <td>{entity.email}</td>
      <td>{educationValue}</td>
      <td>{entity.location}</td>
      <td>{ageValue}</td>
      <td>
        {entity.isPhoneNumber === "on"
          ? `${codeValue} ${entity.phoneNumber}`
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
