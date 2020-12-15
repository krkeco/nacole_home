import './Card.css'

const Card = ({name, href, x, y}) => {
  return (
    <div style={{position:'absolute',top:y,left:x}}>
        <a href={href} className='card'>
            <div>{name}</div>
        </a>
    </div>
  );
}

export default Card;