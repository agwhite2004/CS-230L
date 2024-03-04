



function Card(props) {


    return(
        <div class="card" style={{width: "19rem", margin: "1rem"}}>
  <h5 class="card-header">{props.title}</h5>
  <div class="card-body">
    <h5 class="card-title">{props.subtitle}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" class="btn btn-primary">This does nothing</a>
  </div>
</div>
    );
}

export default Card;