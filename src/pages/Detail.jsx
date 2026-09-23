import { Link, useParams } from 'react-router-dom';
import { experiences } from '../data/experiences.js';

export default function Detail(){
  const { id } = useParams();
  const item = experiences.find(x => x.id === id);
  if(!item) return <main className="not-found"><h1>Entry not found.</h1><Link to="/">Back to archive</Link></main>;
  const current = experiences.indexOf(item);
  const next = experiences[(current + 1) % experiences.length];

  return <main className="detail-page">
    <section className="detail-masthead">
      <div className="detail-number">{String(current+1).padStart(2,'0')} / {String(experiences.length).padStart(2,'0')}</div>
      <div className="detail-title-wrap">
        <Link className="back" to="/">← Archive index</Link>
        <p className="eyebrow dark">{item.type} · {item.year}</p>
        <h1>{item.institution}</h1>
        <p className="location dark-location">{item.city}, {item.country}</p>
      </div>
      <p className="detail-intro">{item.description}</p>
    </section>

    <section className="detail-media-stage">
      <div className="detail-media-frame">
        <img src={item.image} alt={`${item.institution} archive visual`} />
      </div>
      <div className="detail-media-caption">
        <span>FEATURED MATERIAL</span>
        <span>{item.city} · {item.year}</span>
      </div>
    </section>

    <section className="detail-info section">
      <div className="detail-statement">
        <p className="eyebrow dark">ARCHIVE RECORD</p>
        <h2>{item.title}</h2>
        <p className="detail-description">{item.description}</p>
      </div>
      <dl className="detail-table">
        <div><dt>YEAR</dt><dd>{item.year}</dd></div>
        <div><dt>TYPE</dt><dd>{item.type}</dd></div>
        <div><dt>INSTITUTION</dt><dd>{item.institution}</dd></div>
        <div><dt>LOCATION</dt><dd>{item.city}, {item.country}</dd></div>
        <div><dt>SOURCE</dt><dd>{item.source}</dd></div>
        <div><dt>AI CONFIDENCE</dt><dd>{Math.round(item.confidence*100)}% · reviewed before publishing</dd></div>
      </dl>
    </section>

    <section className="gallery section">
      <div className="section-head editorial-head"><div><p className="eyebrow dark">MEDIA</p><h2>Archive material</h2></div><span className="count">{String(item.gallery.length).padStart(2,'0')} IMAGES</span></div>
      <div className="gallery-grid">{item.gallery.map((src,i)=><figure key={src} className={`gallery-item gallery-item-${i+1}`}><div className="gallery-image-wrap"><img src={src} alt={`${item.institution} archive material ${i+1}`}/></div><figcaption><span>{String(i+1).padStart(2,'0')}</span><span>{item.institution} · {item.city}, {item.year}</span></figcaption></figure>)}</div>
    </section>

    <Link className="next-entry" to={`/archive/${next.id}`}><span>NEXT ENTRY</span><strong>{next.institution}</strong><b>→</b></Link>
  </main>;
}
