import Grid from "../grid";
import ServiceCard from "./ServiceCard";
function ServiceBox(props) {
  const { data = [], grid = {} } = props;
  return (
    <div className="service-box">
      <div className="container">
        <Grid {...grid}>
          {data.map((item) => {
            return <ServiceCard item={item} key={item.id}></ServiceCard>;
          })}
        </Grid>
      </div>
    </div>
  );
}

export default ServiceBox;
