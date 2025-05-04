import styles from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { Entity } from "../../components/Entity";

export const HomePage = () => {
  const entities = useSelector((state) => state.entities.data);
  return (
    <>
      {entities.length && entities.map((entity) => <Entity entity={entity} />)}
    </>
  );
};
