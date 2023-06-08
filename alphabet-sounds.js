/*const a = new Audio('a.mp3');
const b = new Audio('b.mp3');
const c = new Audio('c.mp3');
const d = new Audio('d.mp3');
const e = new Audio('e.mp3');
const f = new Audio('f.mp3');
const g = new Audio('g.mp3');
const h = new Audio('h.mp3');
const i = new Audio('i.mp3');
const j = new Audio('j.mp3');
const k = new Audio('k.mp3');
const l = new Audio('l.mp3');
const m = new Audio('m.mp3');
const n = new Audio('n.mp3');
const ñ = new Audio('ñ.mp3');
const o = new Audio('o.mp3');
const p = new Audio('p.mp3');
const q = new Audio('q.mp3');
const r = new Audio('r.mp3');
const s = new Audio('s.mp3');
const t = new Audio('t.mp3');
const u = new Audio('u.mp3');
const v = new Audio('v.mp3');
const w = new Audio('w.mp3');
const x = new Audio('x.mp3');
const y = new Audio('y.mp3');
const z = Audio('z.mp3');*/

const audioFiles = {
    a: new Audio('a.mp3'),
    b: new Audio('b.mp3'),
    c: new Audio('c.mp3'),
    d: new Audio('d.mp3')
};
  
function playAudio(event) {
    const audio = audioFiles[event];
    if (audio) {
      audio.play();
    }
}