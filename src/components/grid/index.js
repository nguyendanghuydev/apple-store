function Grid(props) {
  const { lg, md, sm,gap,children } = props;
  return (
    <div
      className={`grid grid-col-${lg} grid-col-md-${md} grid-col-sm-${sm}`}
      style={{gap:`${gap}px`}}
    >
        {children}
    </div>
  );
}

export default Grid;
