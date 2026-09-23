import { useState } from 'react';
import { experiences, rawCv } from '../data/experiences.js';

const jsonPreview = JSON.stringify(experiences.map(({image,gallery,confidence,source,...rest})=>({
  ...rest,
  images: gallery,
  source,
  confidence
})), null, 2);

export default function AIStructure(){
  const [raw, setRaw] = useState(rawCv);
  const [done, setDone] = useState(true);
  const transform = () => { setDone(false); setTimeout(()=>setDone(true), 600); };
  return <main className="ai-page">
    <section className="ai-hero">
      <div className="ai-hero-left"><p className="eyebrow">AI / ARCHIVE WORKFLOW</p><h1>From artist CV<br/>to <i>curated data.</i></h1></div>
      <div className="ai-hero-right"><p>The machine proposes structure. The archive keeps editorial control.</p><span>PROTOTYPE / STRUCTURED OUTPUT</span></div>
    </section>

    <section className="pipeline section">
      <div className="pipeline-intro"><span>01</span><h2>Extraction workspace</h2><p>A strict schema turns an unstructured CV into consistent entries without pretending uncertain information is fact.</p></div>
      <div className="pipeline-grid">
        <div className="panel raw-panel">
          <div className="panel-title"><b>Source material</b><small>RAW ARTIST CV</small></div>
          <textarea value={raw} onChange={e=>setRaw(e.target.value)} />
          <button className="btn primary" onClick={transform}>Structure with AI →</button>
        </div>
        <div className="panel json-panel">
          <div className="panel-title"><b>Proposed archive objects</b><small>STRICT JSON / VALIDATED</small></div>
          <pre className={done?'':'processing'}><code>{done ? jsonPreview : 'Reading source…\nIdentifying experiences…\nNormalising entities…\nValidating against schema…\nPreparing review queue…'}</code></pre>
        </div>
      </div>
    </section>

    <section className="schema-section section">
      <div className="schema-title"><p className="eyebrow dark">DATA MODEL</p><h2>Enough structure to connect the archive.</h2></div>
      <div className="schema-grid">
        <article><span>CORE</span><h3>Identity</h3><p>year · type · title · institution · city · country</p></article>
        <article><span>EDITORIAL</span><h3>Context</h3><p>description · dates · credits · collaborators · references</p></article>
        <article><span>MEDIA</span><h3>Material</h3><p>images · captions · alt text · copyright · source</p></article>
        <article><span>TRUST</span><h3>Review</h3><p>source · confidence · review state · editor notes</p></article>
      </div>
    </section>

    <section className="human-section">
      <div className="section human-wrap">
        <p className="eyebrow">HUMAN IN THE LOOP</p>
        <h2>AI accelerates cataloguing.<br/><i>It does not become the curator.</i></h2>
        <div className="human-steps"><span>Extract</span><b>→</b><span>Validate</span><b>→</b><span>Review</span><b>→</b><span>Publish</span></div>
      </div>
    </section>
  </main>;
}
