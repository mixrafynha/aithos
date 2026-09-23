import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ArchiveCard from '../components/ArchiveCard.jsx';
import { experiences } from '../data/experiences.js';

export default function Archive(){
  const [type, setType] = useState('All');
  const [place, setPlace] = useState('All');
  const types = ['All', ...new Set(experiences.map(x => x.type))];
  const places = ['All', ...new Set(experiences.map(x => x.city))];
  const filtered = useMemo(() => experiences.filter(x =>
    (type === 'All' || x.type === type) && (place === 'All' || x.city === place)
  ), [type, place]);

  return <main>
    <section className="hero art-hero">
      <div className="hero-grain"/>
      <div className="hero-inner art-hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">AEITOS · ARTIST ARCHIVE / PROTOTYPE</p>
          <h1>A living archive of <em>artistic practice.</em></h1>
          <p className="lead">A digital system that turns an artist’s CV into an explorable body of work — exhibitions, residencies, collaborations and their surrounding context.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#catalogue">Explore archive ↓</a>
            <Link className="text-link" to="/ai-structure">See how AI structures the CV ↗</Link>
          </div>
        </div>
        <div className="hero-collage" aria-hidden="true">
          <figure className="hero-art hero-art-a"><img src="/art/palais.svg" alt=""/><figcaption>Paris / 2020</figcaption></figure>
          <figure className="hero-art hero-art-b"><img src="/art/villa-medici-2.svg" alt=""/><figcaption>Rome / 2019</figcaption></figure>
          <span className="hero-vertical">ARCHIVE AS MATERIAL · NOT JUST A LIST</span>
        </div>
      </div>
      <div className="hero-index"><span>2019 — 2022</span><span>04 EXPERIENCES</span><span>04 CITIES</span><span>1 ARTIST / MANY RELATIONS</span></div>
    </section>

    <section className="manifesto section">
      <div className="manifesto-number">01</div>
      <div>
        <p className="eyebrow dark">THE IDEA</p>
        <h2>The CV becomes an <span>archive, not a document.</span></h2>
      </div>
      <p className="manifesto-copy">Each line is transformed into a reusable archive object: structured metadata, editorial description, media and relationships. The same data can later power timelines, maps, thematic collections, artist pages or research tools.</p>
    </section>

    <section id="catalogue" className="catalogue section">
      <div className="section-head editorial-head">
        <div><p className="eyebrow dark">ARCHIVE INDEX</p><h2>Experiences</h2></div>
        <p className="section-note">Browse a small sample of the artist’s history.<br/>Filter by context or place.</p>
      </div>

      <div className="filter-bar">
        <div className="filter-group"><span>TYPE</span>{types.map(v=><button key={v} className={type===v?'active':''} onClick={()=>setType(v)}>{v}</button>)}</div>
        <div className="filter-group"><span>CITY</span>{places.map(v=><button key={v} className={place===v?'active':''} onClick={()=>setPlace(v)}>{v}</button>)}</div>
        <div className="result-count">{String(filtered.length).padStart(2,'0')} / {String(experiences.length).padStart(2,'0')}</div>
      </div>

      <div className="archive-grid art-grid">{filtered.map((item, i)=><ArchiveCard key={item.id} item={item} index={i}/>)}</div>
    </section>

    <section className="process-section">
      <div className="section process-wrap">
        <div className="process-title"><p className="eyebrow">FROM SOURCE TO ARCHIVE</p><h2>AI assists.<br/><i>Editors decide.</i></h2></div>
        <div className="process-list">
          <div><span>01</span><b>Read</b><p>Ingest raw CV text and identify candidate experiences.</p></div>
          <div><span>02</span><b>Structure</b><p>Extract dates, type, institution, city, country and relations into a strict schema.</p></div>
          <div><span>03</span><b>Review</b><p>Flag uncertain fields and keep a human approval step before publication.</p></div>
          <div><span>04</span><b>Connect</b><p>Use approved data to build pages, filters and future connections across the archive.</p></div>
        </div>
        <Link className="btn light" to="/ai-structure">View AI structure prototype →</Link>
      </div>
    </section>
  </main>;
}
