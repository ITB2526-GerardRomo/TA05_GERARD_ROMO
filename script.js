/* --- FUENTES & RESET --- */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto+Mono:wght@300;400&display=swap');

@font-face {
  font-family: Cyber;
  src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
  font-display: swap;
}

:root {
    --bg-dark: #050505;
    --bg-panel: #0a0a0a;
    --neon-cyan: #00f3ff; 
    --neon-magenta: #ff00ff;
    --neon-green: #0aff00;
    --text-main: #e0e0e0;
    --font-heading: 'Orbitron', sans-serif; /* Usamos Orbitron para títulos generales */
    --font-body: 'Roboto Mono', monospace;
    --font-cyber: 'Cyber', sans-serif; /* Fuente especial para el botón */
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: var(--font-body);
    overflow-x: hidden;
}

/* --- HEADER --- */
.cyber-header {
    position: fixed; top: 0; width: 100%;
    background: rgba(5, 5, 5, 0.95);
    border-bottom: 1px solid rgba(0, 243, 255, 0.3);
    display: flex; justify-content: space-between; align-items: center;
    padding: 1rem 5%; z-index: 1000;
}

.neon-logo {
    font-family: var(--font-heading);
    font-weight: 900; font-size: 1.5rem; color: var(--neon-cyan);
    text-shadow: 0 0 10px var(--neon-cyan);
}

.nav-links { list-style: none; display: flex; gap: 2rem; }
.nav-item { text-decoration: none; color: #fff; font-size: 0.9rem; transition: 0.3s; }
.nav-item:hover { color: var(--neon-magenta); text-shadow: 0 0 8px var(--neon-magenta); }

/* --- HERO SECTION --- */
.hero-section {
    padding: 8rem 5% 4rem; text-align: center;
    background: radial-gradient(circle at center, #111 0%, #000 100%);
}

.section-title {
    font-family: var(--font-heading); font-size: 2.5rem; margin-bottom: 3rem;
    color: #fff; text-transform: uppercase;
}

.hero-grid {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 3rem; flex-wrap: wrap;
}

.img-wrapper {
    position: relative; width: 300px; height: 200px; overflow: hidden;
    border: 2px solid #333; transition: 0.3s; cursor: pointer;
}

.img-wrapper:hover { border-color: var(--neon-cyan); transform: scale(1.02); }
.img-wrapper img { width: 100%; height: 100%; object-fit: cover; }

/* --- SEARCH BAR (Funcionalidad JS 2) --- */
.search-container {
    max-width: 600px; margin: 0 auto 3rem; position: relative;
}
.cyber-input {
    width: 100%; background: #000; border: 1px solid #333; padding: 1rem;
    color: var(--neon-cyan); font-family: var(--font-body);
    border-left: 5px solid var(--neon-cyan); outline: none;
}
.cyber-input:focus { box-shadow: 0 0 15px rgba(0, 243, 255, 0.2); }

/* --- PROJECTS GRID --- */
.projects-section { padding: 4rem 5%; }
.projects-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem;
}

.project-card {
    background: var(--bg-panel); border: 1px solid #222; cursor: pointer; transition: 0.3s;
}
.project-card:hover { border-color: var(--neon-magenta); transform: translateY(-5px); }
.card-image img { width: 100%; height: 150px; object-fit: cover; }
.card-content { padding: 1rem; }
.card-content h3 { font-family: var(--font-heading); color: var(--neon-cyan); font-size: 1rem; margin-bottom: 0.5rem; }
.card-content p { font-size: 0.8rem; color: #888; }

/* --- NEW BUTTON STYLE IMPLEMENTATION --- */
/* Adaptado para usar colores Cyan/Magenta en lugar de amarillo */
.cybr-btn {
  --primary: var(--neon-cyan);
  --shadow-primary: var(--neon-magenta);
  --color: #000; /* Texto negro para contraste con el cian */
  --font-size: 20px;
  --label-size: 9px;
  --shadow-secondary: var(--neon-green);
  --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
  --border: 4px;
  --shimmy-distance: 5;
  --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
  --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
  --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
  --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
  --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
  
  font-family: var(--font-cyber);
  color: var(--color);
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: var(--font-size);
  outline: transparent;
  letter-spacing: 2px;
  position: relative;
  font-weight: 700;
  border: 0;
  min-width: 250px;
  height: 60px;
  line-height: 60px;
  transition: background 0.2s;
}

.cybr-btn:hover { --primary: #00c2cc; } /* Un cian un poco más oscuro al hover */

.cybr-btn:after, .cybr-btn:before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  clip-path: var(--clip); z-index: -1;
}

.cybr-btn:before { background: var(--shadow-primary); transform: translate(var(--border), 0); }
.cybr-btn:after { background: var(--primary); }

.cybr-btn__tag {
  position: absolute; padding: 1px 4px; letter-spacing: 1px; line-height: 1;
  bottom: -5%; right: 5%; font-weight: normal; color: #fff; font-size: var(--label-size);
}

.cybr-btn__glitch {
  position: absolute; top: calc(var(--border) * -1); left: calc(var(--border) * -1);
  right: calc(var(--border) * -1); bottom: calc(var(--border) * -1);
  background: var(--shadow-primary);
  text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
  clip-path: var(--clip); animation: glitch 2s infinite; display: none;
}

.cybr-btn:hover .cybr-btn__glitch { display: block; }

@keyframes glitch {
  0% { clip-path: var(--clip-one); }
  2%, 8% { clip-path: var(--clip-two); transform: translate(calc(var(--shimmy-distance) * -1%), 0); }
  6% { clip-path: var(--clip-two); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  9% { clip-path: var(--clip-two); transform: translate(0, 0); }
  10% { clip-path: var(--clip-three); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  13% { clip-path: var(--clip-three); transform: translate(0, 0); }
  14%, 21% { clip-path: var(--clip-four); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  25% { clip-path: var(--clip-five); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  30% { clip-path: var(--clip-five); transform: translate(calc(var(--shimmy-distance) * -1%), 0); }
  35%, 45% { clip-path: var(--clip-six); transform: translate(calc(var(--shimmy-distance) * -1%)); }
  40% { clip-path: var(--clip-six); transform: translate(calc(var(--shimmy-distance) * 1%)); }
  50% { clip-path: var(--clip-six); transform: translate(0, 0); }
  55% { clip-path: var(--clip-seven); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  60% { clip-path: var(--clip-seven); transform: translate(0, 0); }
  31%, 61%, 100% { clip-path: var(--clip-four); }
}

/* --- CONTACT & MODAL --- */
.contact-container { padding: 4rem 5%; max-width: 600px; margin: 0 auto; }
.form-group { margin-bottom: 1.5rem; text-align: left; }
.form-group label { color: var(--neon-magenta); display: block; margin-bottom: 0.5rem; }

.modal {
    display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.9); justify-content: center; align-items: center;
}
.modal-content {
    background: #000; border: 1px solid var(--neon-cyan); width: 90%; max-width: 800px;
    padding: 2rem; position: relative; box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
}
.close-btn { position: absolute; top: 10px; right: 20px; color: #fff; font-size: 2rem; cursor: pointer; }
.detail-img { width: 100%; height: 300px; object-fit: cover; margin-bottom: 1rem; border: 1px solid #333; }