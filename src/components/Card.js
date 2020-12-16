import './Card.css'

const Card = ({small, name, href, x, y, onClick}) => {
    //href={href}
  return (
    <div onClick={onClick} style={{paddingTop:y, paddingLeft:x}}>
        <button  className={`${small ? 'card small' : 'card'}` }>
            <div>{name}</div>
        </button>
    </div>
  );
}

export default Card;