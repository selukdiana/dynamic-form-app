import { useSearchParams } from "react-router";
import { Entity } from "../../components/Entity";

export const EntityPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return (
    <section>
      <div className="container">
        <Entity editId={id} />
      </div>
    </section>
  );
};
