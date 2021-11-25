function ProductCardDetail(props) {
  const { item } = props;

  return (
    <div className="product-card-detail">
      <div className="container">
        <h3 className="product-card-detail__title">Đặc Điểm Nổi Bật</h3>
        <ul className="product-card-detail__hightLight-list">
          {item.hightLight && item.hightLight.map((hl,index) => {
            return <li key={index}>{hl}</li>;
          })}
        </ul>
        <div className="product-card-detail__description">
          <p><span>{item.title}</span> {item.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCardDetail;
