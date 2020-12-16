import './Card.css'

const Card = ({small, name, href, x, y, onClick}) => {
    //href={href}
  return (
    <div onClick={onClick} style={{paddingTop:y, paddingLeft:x}}>
        <a  className={`${small ? 'card small' : 'card'}` }>
            <div>{name}</div>
        </a>
    </div>
  );
}

export default Card;