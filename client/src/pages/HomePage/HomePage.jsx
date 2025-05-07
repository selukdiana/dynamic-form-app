import styles from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { EntityRow } from "../../components/EntityRow";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getAllEntities } from "../../store/slices/entitiesSlice";
import {
  getAges,
  getEducations,
  getPhoneCodes,
} from "../../store/slices/dataSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const entities = useSelector((state) => state.entities.data);
  const handleAddBtnClick = () => {
    navigate("/entity");
  };

  useEffect(() => {
    dispatch(getAllEntities());
    dispatch(getAges());
    dispatch(getEducations());
    dispatch(getPhoneCodes());
  }, []);

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
              {entities.length
                ? entities.map((entity) => (
                    <EntityRow entity={entity} key={entity.id} />
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
