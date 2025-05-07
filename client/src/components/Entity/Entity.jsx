import styles from "./Entity.module.css";
import { useFieldArray, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEntity, updateEntity } from "../../store/slices/entitiesSlice";
import { useNavigate } from "react-router";
import { Select } from "./Select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Entity = ({ editId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const entity = useSelector((state) =>
    state.entities.data.find((elem) => elem.id == editId)
  ) || {
    phoneCodeId: "1",
  };
  const { ages, educations, codes } = useSelector((state) => state.data);
  const [isPhoneNumber, setIsPhoneNumber] = useState(
    entity.isPhoneNumber === "on" ? true : false
  );

  const schema = yup.object().shape({
    name: yup.string().max(10).required(),
    surname: yup.string().max(10).required(),
    email: yup.string().email(),
    location: yup.string().required(),
    ageId: yup.string().required(),
    educationId: yup.string().required(),
    hobbies: yup
      .array()
      .of(
        yup.object().shape({
          value: yup.string(),
        })
      )
      .nullable(true),
    phoneNumber: yup
      .string()
      .matches(/^\d{0,9}$/, {
        message: "Invalid phone number",
      })
      .nullable(true),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "hobbies",
    control,
  });

  const onSubmit = (data) => {
    const result = {};
    for (const key in dirtyFields) {
      if (dirtyFields[key]) {
        result[key] = data[key];
      }
    }
    editId
      ? dispatch(updateEntity({ id: editId, data: result }))
      : dispatch(createEntity(data));
    navigate("/");
  };
  const handleRadioBtnClick = () => {
    setIsPhoneNumber((prev) => !prev);
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
      <div className={styles.name}>
        <input type="text" {...register("name")} placeholder="name" />
        <span className={styles.error}>
          {errors.name && errors.name.message}
        </span>
      </div>
      <div className={styles.surname}>
        <input type="text" {...register("surname")} placeholder="surname" />
        <span className={styles.error}>
          {errors.surname && errors.surname.message}
        </span>
      </div>
      <div className={styles.email}>
        <input type="text" {...register("email")} placeholder="email" />
        <span className={styles.error}>
          {errors.email && errors.email.message}
        </span>
      </div>
      <div className={styles.location}>
        <input type="text" {...register("location")} placeholder="location" />
        <span className={styles.error}>
          {errors.location && errors.location.message}
        </span>
      </div>
      <Select
        className={styles.age}
        {...register("ageId")}
        placeholder="age"
        options={ages}
        errors={errors}
      />
      <Select
        className={styles.education}
        {...register("educationId")}
        placeholder="education"
        options={educations}
        errors={errors}
      />
      <div className={styles.phone}>
        <input
          type="radio"
          {...register("isPhoneNumber")}
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
              <span className={styles.error}>
                {errors.hobbies &&
                  errors.hobbies[index] &&
                  errors.hobbies[index].message}
              </span>
            </div>
          );
        })}
      </div>
      {isPhoneNumber && (
        <>
          <Select
            {...register("phoneCodeId")}
            className={styles.code}
            placeholder="code"
            options={codes}
            errors={errors}
          />
          <div className={styles.number}>
            <input type="text" {...register("phoneNumber")} />
            <span className={styles.error}>
              {errors.phoneNumber &&
                errors.phoneNumber.number &&
                errors.phoneNumber.number.message}
            </span>
          </div>
        </>
      )}
      <button type="submit" className={styles.btn}>
        OK
      </button>
    </form>
  );
};
