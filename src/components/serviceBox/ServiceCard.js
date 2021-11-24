function ServiceCard(props) {
  const { item = {} } = props;
  const { title, description, Icon } = item;

  return (
    <div className="service-card">
      <div className="service-card__icon">
        <Icon />
      </div>
      <h5 className="service-card__title">{title}</h5>
      <p className="service-card__description">{description}</p>
    </div>
  );
}

export default ServiceCard;
