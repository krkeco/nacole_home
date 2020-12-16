import './Card.css'

const Card = ({name, href, x, y, onClick}) => {
    //href={href}
  return (
    <div onClick={onClick} style={{paddingTop:y, paddingLeft:x}}>
        <a  className='card'>
            <div>{name}</div>
        </a>
    </div>
  );
}

export default Card;