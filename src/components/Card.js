import './Card.css'

const Card = ({small, name, href, x, y, onClick, bgColor}) => {
    //href={href}
  return (
    <div onClick={onClick} style={{paddingTop:y, paddingLeft:x}}>
        <button  className={`${small ? 'card small' : 'card'}` } style={{backgroundColor: bgColor}}>
            <div>{name}</div>
        </button>
    </div>
  );
}

export default Card;