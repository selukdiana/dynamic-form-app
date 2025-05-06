import { useSearchParams } from "react-router";
import { Entity } from "../../components/Entity";
import styles from "./EntityPage.module.css";

export const EntityPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  return (
    <section>
      <div className="container">
        <Entity editId={id} />
      </div>
    </section>
  );
};
