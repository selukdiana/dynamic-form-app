import styles from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { EntityRow } from "../../components/EntityRow";
import React from "react";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const entities = useSelector((state) => state.entities.data);
  const navigate = useNavigate();
  const handleAddBtnClick = () => {
    navigate("/entity");
  };
  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <button onClick={handleAddBtnClick} className={styles.btn}>
            +
          </button>
          <table className={styles.table} cellSpacing="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Education</th>
                <th>Location</th>
                <th>Age</th>
                <th>Phone Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map((entity) => <EntityRow entity={entity} />)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
