import styles from "./Entity.module.css";
import { useFieldArray, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, edit } from "../../store/slices/entitiesSlice";
import { useNavigate } from "react-router";
import { Select } from "./Select";

export const Entity = ({ editId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "hobbies",
    control,
  });

  const entity =
    useSelector((state) =>
      state.entities.data.find((elem) => elem.id == editId)
    ) || {};

  const onSubmit = (data) => {
    editId ? dispatch(edit({ id: editId, data })) : dispatch(add(data));
    navigate("/");
  };
  const [isRadioBtnClicked, setIsRadioBtnClicked] = useState(
    entity.phone === "on" ? true : false
  );

  const handleRadioBtnClick = () => {
    setIsRadioBtnClicked((prev) => !prev);
  };
  const handleAddHobbyClick = () => {
    append({ value: `Hobby ${fields.length}` });
  };
  const handleRemoveHobbyClick = (index) => {
    remove(index);
  };

  useEffect(() => {
    reset(entity);
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>Enter...</h1>
      <input
        type="text"
        className={styles.name}
        {...register("name")}
        placeholder="name"
      />
      <input
        type="text"
        className={styles.surname}
        {...register("surname")}
        placeholder="surname"
      />
      <input
        type="text"
        className={styles.email}
        {...register("email")}
        placeholder="email"
      />
      <input
        type="text"
        className={styles.location}
        {...register("location")}
        placeholder="location"
      />
      <Select
        className={styles.age}
        {...register("age")}
        placeholder="age"
        options={["18-25", "26-35", "36-50", "51+"]}
      />
      <Select
        className={styles.education}
        {...register("education")}
        placeholder="education"
        options={[
          "Primary Education",
          "Secondary Education",
          "Further Education",
          "Higher Education",
        ]}
      />
      <div className={styles.phone}>
        <input
          type="radio"
          {...register("phone")}
          id="phone"
          style={{ marginRight: "5px" }}
          onChange={handleRadioBtnClick}
        />
        <label htmlFor="phone" style={{ color: "rgb(56, 59, 61)" }}>
          phone number
        </label>
      </div>
      <div className={styles.hobbies}>
        <div className={styles.hobbiesHeader}>
          <h3 style={{ color: "rgb(56, 59, 61)" }}>Hobbies</h3>
          <button onClick={handleAddHobbyClick} type="button">
            add
          </button>
        </div>
        {fields.map((field, index) => {
          return (
            <div className={styles.field} key={field.id}>
              <input
                type="text"
                {...register(`hobbies.${index}.value`)}
              ></input>
              <span onClick={() => handleRemoveHobbyClick(index)}>x</span>
            </div>
          );
        })}
      </div>
      {isRadioBtnClicked && (
        <>
          <Select
            {...register("code")}
            className={styles.code}
            placeholder="code"
            options={["+375", "+7", "+381"]}
          />
          <input
            type="text"
            {...register("number")}
            className={styles.number}
          />
        </>
      )}
      <button type="submit" className={styles.btn}>
        OK
      </button>
    </form>
  );
};
