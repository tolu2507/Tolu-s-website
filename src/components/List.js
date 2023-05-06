export function List(link, title) {
  return (
    <li className="lin">
      <a href={link} style={{ color: "#7c808f" }}>
        {title}
      </a>
    </li>
  );
}

export function Card(image, name, year) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="card" className="card-images" />
      </div>
      <div className="card-lower">
        <div>{name}</div>
      </div>
    </div>
  );
}

export function CardComponent(stack, array) {
  return (
    <div
      style={{
        backgroundColor: "#4a4c52",
        padding: "10px",
        borderRadius: "15px",
        margin: "5px",
      }}
    >
      <div>
        <h4>{stack}</h4>
      </div>
      <div className="card-content">
        {array.map((prog) => Card(prog.image, prog.name, prog.year))}
      </div>
    </div>
  );
}

export function Portfolio(name, link, image, description, tech) {
  return (
    <a href={link} target="blank" className="port">
      <div
        style={{
          display: "flex",
          fontSize: "15px",
          padding: "5px",
          flexDirection: "column",
          fontWeight: "700",
        }}
      >
        {name}
      </div>
      <div style={{ borderRadius: "0px", height: "150px", width: "100%" }}>
        <img
          src={image}
          alt="alt"
          style={{
            borderRadius: "0px",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <div
        style={{
          height: "150px",
          display: "flex",
          padding: "2px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "9px",
            padding: "5px",
            flexDirection: "column",
            height: "70%",
          }}
        >
          <b>Description :</b>
          {description.length > 300
            ? description.slice(0, 300) + "........"
            : description}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "9px",
            padding: "5px",
            flexDirection: "column",
            height: "25%",
          }}
        >
          <b>Technology :</b>
          {tech.length > 40 ? tech.slice(0, 70) + "...." : tech}
        </div>
      </div>
    </a>
  );
}
