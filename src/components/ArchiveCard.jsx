import { Link } from 'react-router-dom';

export default function ArchiveCard({item, index}){
  return (
    <Link className={`archive-card editorial-card card-${index % 4}`} to={`/archive/${item.id}`}>
      <div className="card-image">
        <img src={item.image} alt={`${item.institution}, ${item.year}`} />
        <span className="card-index">{String(index + 1).padStart(2,'0')}</span>
        <span className="open-pill">View archive item ↗</span>
      </div>
      <div className="card-copy">
        <div className="card-meta"><span>{item.type}</span><span>{item.year}</span></div>
        <h2>{item.institution}</h2>
        <p>{item.city}, {item.country}</p>
      </div>
    </Link>
  );
}
