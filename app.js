// === Book spine color palette ===
const BOOK_COLORS = [
  { bg: '#5B9A8B', dark: false },  // teal
  { bg: '#4A8B7A', dark: false },  // deep teal
  { bg: '#6DAF9E', dark: false },  // light teal
  { bg: '#8B7D3C', dark: false },  // olive/gold
  { bg: '#9E8E4A', dark: false },  // warm olive
  { bg: '#746A2E', dark: false },  // dark olive
  { bg: '#F5F0E8', dark: true },   // cream/ivory
  { bg: '#E8E0D0', dark: true },   // warm parchment
  { bg: '#2D4A3E', dark: false },  // dark forest green
  { bg: '#3A5A4C', dark: false },  // forest green
  { bg: '#7A5C44', dark: false },  // warm brown
  { bg: '#8E6B50', dark: false },  // light brown
  { bg: '#5C4332', dark: false },  // dark brown
  { bg: '#4A6670', dark: false },  // muted blue-green
  { bg: '#3D5A65', dark: false },  // deep slate blue
  { bg: '#5A7A86', dark: false },  // dusty blue
  { bg: '#C4B896', dark: true },   // light khaki
  { bg: '#B5A882', dark: true },   // warm sand
  { bg: '#6B5D4A', dark: false },  // espresso
  { bg: '#8A4A4A', dark: false },  // muted burgundy
];

// === Default books ===
const DEFAULT_BOOKS = [
  // Reading
  { title: 'Meditations', author: 'Marcus Aurelius', status: 'reading', pages: 256, coverId: '10679828' },
  { title: 'The Republic', author: 'Plato', status: 'reading', pages: 416, coverId: '2324117' },
  { title: 'Letters from a Stoic', author: 'Seneca', status: 'reading', pages: 320, coverId: '103759' },
  { title: 'The Art of War', author: 'Sun Tzu', status: 'reading', pages: 112, coverId: '103576' },
  { title: 'Walden', author: 'Henry David Thoreau', status: 'reading', pages: 352, coverId: '103318' },
  { title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche', status: 'reading', pages: 352, coverId: '9279223' },
  { title: 'The Prince', author: 'Niccolò Machiavelli', status: 'reading', pages: 140, coverId: '14637276' },
  { title: 'Tao Te Ching', author: 'Lao Tzu', status: 'reading', pages: 96, coverId: '9286400' },
  { title: 'The Iliad', author: 'Homer', status: 'reading', pages: 704, coverId: '15166208' },
  { title: 'The Odyssey', author: 'Homer', status: 'reading', pages: 560, coverId: '13081298' },
  { title: 'Critique of Pure Reason', author: 'Immanuel Kant', status: 'reading', pages: 856, coverId: '104255' },
  { title: 'Brave New World', author: 'Aldous Huxley', status: 'reading', pages: 288, coverId: '12992919' },
  { title: 'The Divine Comedy', author: 'Dante Alighieri', status: 'reading', pages: 798 },
  { title: 'Confessions', author: 'Augustine', status: 'reading', pages: 368, coverId: '6480533' },
  { title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', status: 'reading', pages: 240, coverId: '104352' },
  { title: 'The Analects', author: 'Confucius', status: 'reading', pages: 224, coverId: '103902' },
  { title: 'Discourse on Method', author: 'René Descartes', status: 'reading', pages: 100 },
  { title: 'Symposium', author: 'Plato', status: 'reading', pages: 128, coverId: '14409980' },
  { title: 'Phaedrus', author: 'Plato', status: 'reading', pages: 148, coverId: '4574819' },
  { title: 'Ethics', author: 'Baruch Spinoza', status: 'reading', pages: 308, coverId: '103390' },
  { title: 'Leviathan', author: 'Thomas Hobbes', status: 'reading', pages: 736, coverId: '103121' },
  { title: 'On Liberty', author: 'John Stuart Mill', status: 'reading', pages: 176, coverId: '103127' },
  { title: 'The Social Contract', author: 'Jean-Jacques Rousseau', status: 'reading', pages: 168 },
  { title: 'Siddhartha', author: 'Hermann Hesse', status: 'reading', pages: 152, coverId: '6456720' },
  { title: 'Steppenwolf', author: 'Hermann Hesse', status: 'reading', pages: 248, coverId: '178037' },
  { title: 'The Trial', author: 'Franz Kafka', status: 'reading', pages: 255, coverId: '15160439' },
  { title: 'Metamorphosis', author: 'Franz Kafka', status: 'reading', pages: 56, coverId: '8694137' },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury', status: 'reading', pages: 194, coverId: '12460599' },
  { title: '1984', author: 'George Orwell', status: 'reading', pages: 328, coverId: '12054527' },
  { title: 'Animal Farm', author: 'George Orwell', status: 'reading', pages: 112 },
  { title: 'Candide', author: 'Voltaire', status: 'reading', pages: 144, coverId: '12736045' },
  { title: 'Faust', author: 'Johann Wolfgang von Goethe', status: 'reading', pages: 464 },
  { title: 'The Stranger', author: 'Albert Camus', status: 'reading', pages: 123, coverId: '13151259' },
  { title: 'The Myth of Sisyphus', author: 'Albert Camus', status: 'reading', pages: 212, coverId: '8824673' },
  { title: 'Being and Nothingness', author: 'Jean-Paul Sartre', status: 'reading', pages: 811, coverId: '6310051' },
  { title: 'Nausea', author: 'Jean-Paul Sartre', status: 'reading', pages: 253 },
  { title: 'The Aeneid', author: 'Virgil', status: 'reading', pages: 442, coverId: '104362' },
  { title: 'Metamorphoses', author: 'Ovid', status: 'reading', pages: 723, coverId: '12132425' },
  { title: 'Antigone', author: 'Sophocles', status: 'reading', pages: 80, coverId: '7494279' },
  { title: 'Oedipus Rex', author: 'Sophocles', status: 'reading', pages: 96, coverId: '104374' },
  // Read
  { title: 'The Histories', author: 'Herodotus', status: 'read', pages: 716, dateCompleted: '2025-01-12', coverId: '104337' },
  { title: 'On the Origin of Species', author: 'Charles Darwin', status: 'read', pages: 502, dateCompleted: '2025-02-03', coverId: '295779' },
  { title: 'War and Peace', author: 'Leo Tolstoy', status: 'read', pages: 1225, dateCompleted: '2025-03-18' },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', status: 'read', pages: 671, dateCompleted: '2025-04-07', coverId: '14935910' },
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', status: 'read', pages: 796, dateCompleted: '2025-05-22', coverId: '10458920' },
  { title: 'Anna Karenina', author: 'Leo Tolstoy', status: 'read', pages: 864, dateCompleted: '2025-06-14', coverId: '111128' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', status: 'read', pages: 432, dateCompleted: '2025-07-01', coverId: '12645114' },
  { title: 'Wuthering Heights', author: 'Emily Brontë', status: 'read', pages: 416, dateCompleted: '2025-07-19', coverId: '14834848' },
  { title: 'Jane Eyre', author: 'Charlotte Brontë', status: 'read', pages: 532, dateCompleted: '2025-08-10' },
  { title: 'Great Expectations', author: 'Charles Dickens', status: 'read', pages: 544, dateCompleted: '2025-08-30', coverId: '13029793' },
  { title: 'A Tale of Two Cities', author: 'Charles Dickens', status: 'read', pages: 489, dateCompleted: '2025-09-15', coverId: '8493695' },
  { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', status: 'read', pages: 1276, dateCompleted: '2025-10-28', coverId: '14564134' },
  { title: 'Les Misérables', author: 'Victor Hugo', status: 'read', pages: 1463, dateCompleted: '2025-12-20', coverId: '15094839' },
  { title: 'Madame Bovary', author: 'Gustave Flaubert', status: 'read', pages: 329, dateCompleted: '2026-01-05', coverId: '9267027' },
  { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', status: 'read', pages: 254, dateCompleted: '2026-01-18', coverId: '14314591' },
  { title: 'Heart of Darkness', author: 'Joseph Conrad', status: 'read', pages: 96, dateCompleted: '2026-01-24', coverId: '2324953' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'read', pages: 180, dateCompleted: '2026-02-08', coverId: '14314120' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'read', pages: 281, dateCompleted: '2026-02-22', coverId: '15162569' },
  { title: 'Catch-22', author: 'Joseph Heller', status: 'read', pages: 453, dateCompleted: '2026-03-10', coverId: '6717176' },
  { title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', status: 'read', pages: 275, dateCompleted: '2026-03-20', coverId: '8577935' },
  { title: 'The Old Man and the Sea', author: 'Ernest Hemingway', status: 'read', pages: 127, dateCompleted: '2026-03-25', coverId: '8701922' },
  // Wishlist
  { title: 'Ulysses', author: 'James Joyce', status: 'wishlist', pages: 730, coverId: '13136676' },
  { title: 'Don Quixote', author: 'Cervantes', status: 'wishlist', pages: 1072 },
  { title: 'Moby-Dick', author: 'Herman Melville', status: 'wishlist', pages: 720, coverId: '110556' },
  { title: 'In Search of Lost Time', author: 'Marcel Proust', status: 'wishlist', pages: 4215, coverId: '110622' },
  { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', status: 'wishlist', pages: 417 },
  { title: 'Gravity\'s Rainbow', author: 'Thomas Pynchon', status: 'wishlist', pages: 776, coverId: '111560' },
  { title: 'Infinite Jest', author: 'David Foster Wallace', status: 'wishlist', pages: 1079, coverId: '14832346' },
  { title: 'The Master and Margarita', author: 'Mikhail Bulgakov', status: 'wishlist', pages: 384, coverId: '8192494' },
  { title: 'Pale Fire', author: 'Vladimir Nabokov', status: 'wishlist', pages: 315, coverId: '11203725' },
  { title: 'Blood Meridian', author: 'Cormac McCarthy', status: 'wishlist', pages: 337, coverId: '15103045' },
  { title: 'Beloved', author: 'Toni Morrison', status: 'wishlist', pages: 324, coverId: '15169554' },
  { title: 'Middlemarch', author: 'George Eliot', status: 'wishlist', pages: 880, coverId: '9328284' },
  { title: 'The Sound and the Fury', author: 'William Faulkner', status: 'wishlist', pages: 326, coverId: '15159779' },
  { title: 'Absalom, Absalom!', author: 'William Faulkner', status: 'wishlist', pages: 313, coverId: '10718328' },
];

const DEFAULT_ACTIVITY = [
  { text: 'Finished reading "The Histories"', color: 'brown' },
  { text: 'Added "Ulysses" to Wishlist', color: 'blue' },
  { text: 'Started reading "Meditations"', color: 'gold' },
];

const STATUS_COLOR = { reading: 'gold', read: 'brown', wishlist: 'blue' };
const STATUS_LABEL = { reading: 'Reading', read: 'Read', wishlist: 'Wishlist' };
const MAX_ACTIVITY = 3;

// === State Management ===

// Compact encoding: books as arrays [title, author, status_char, pages, coverId, dateCompleted]
// Status chars: r=reading, d=read, w=wishlist
const STATUS_TO_CHAR = { reading: 'r', read: 'd', wishlist: 'w' };
const CHAR_TO_STATUS = { r: 'reading', d: 'read', w: 'wishlist' };

function booksToArrays(books) {
  return books.map(b => [
    b.title, b.author, STATUS_TO_CHAR[b.status] || 'r',
    b.pages || 0, b.coverId || '', b.dateCompleted || ''
  ]);
}

function arraysToBooks(arrays) {
  return arrays.map(a => {
    const book = { title: a[0], author: a[1], status: CHAR_TO_STATUS[a[2]] || 'reading', pages: a[3] || 200 };
    if (a[4]) book.coverId = a[4];
    if (a[5]) book.dateCompleted = a[5];
    return book;
  });
}

function encodeState(state) {
  // For userStarted states, use compact array-of-arrays format
  let payload;
  if (state.userStarted) {
    payload = {
      b: booksToArrays(state.books),
      a: (state.activity || []).map(a => [a.text, a.color]),
      v: state.view, t: state.tab, u: 1
    };
    if (state.initials) payload.i = state.initials;
    if (state.darkMode !== undefined) payload.d = state.darkMode;
    if (state.demoCleared) payload.dc = 1;
  } else {
    payload = state;
  }
  return 'Z.' + LZString.compressToEncodedURIComponent(JSON.stringify(payload));
}

function decodeState(hash) {
  try {
    let raw = hash.replace(/^#/, '');
    if (!raw) return null;

    let parsed;
    // New format: 'Z.' prefix means LZ-compressed
    if (raw.startsWith('Z.')) {
      const json = LZString.decompressFromEncodedURIComponent(raw.slice(2));
      parsed = json ? JSON.parse(json) : null;
    } else {
      // Legacy format: URL-safe base64
      raw = raw.replace(/-/g, '+').replace(/_/g, '/');
      while (raw.length % 4) raw += '=';
      const binary = atob(raw);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      parsed = JSON.parse(new TextDecoder().decode(bytes));
    }
    if (!parsed) return null;

    // Expand compact format back to full state
    if (parsed.u) {
      return {
        books: arraysToBooks(parsed.b || []),
        activity: (parsed.a || []).map(a => ({ text: a[0], color: a[1] })),
        view: parsed.v || 'main', tab: parsed.t || 'read',
        userStarted: true,
        ...(parsed.i ? { initials: parsed.i } : {}),
        ...(parsed.d !== undefined ? { darkMode: parsed.d } : {}),
        ...(parsed.dc ? { demoCleared: true } : {}),
      };
    }

    return parsed;
  } catch {
    return null;
  }
}

function getState() {
  const decoded = decodeState(window.location.hash);
  const defaults = { books: DEFAULT_BOOKS, activity: DEFAULT_ACTIVITY, view: 'main', tab: 'read' };
  if (!decoded) return defaults;
  if (decoded.userStarted) return decoded;
  // Merge lightweight URL state with in-memory defaults
  return Object.assign(defaults, decoded);
}

function setState(state) {
  let hash;
  if (!state.userStarted) {
    const light = { view: state.view, tab: state.tab };
    if (state.initials) light.initials = state.initials;
    if (state.darkMode !== undefined) light.darkMode = state.darkMode;
    hash = encodeState(light);
  } else {
    hash = encodeState(state);
  }
  history.replaceState(null, '', '#' + hash);
}

function initState() {
  if (!decodeState(window.location.hash)) {
    setState({ view: 'main', tab: 'read' });
  }
}

// === Helpers ===

function hashTitle(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

// === Cover patterns ===

const COVER_PATTERNS = [
  // Diamond grid
  (w, h, accent) => `
    <line x1="0" y1="0" x2="${w}" y2="${h}" stroke="${accent}" stroke-width="0.5" opacity="0.15"/>
    <line x1="${w}" y1="0" x2="0" y2="${h}" stroke="${accent}" stroke-width="0.5" opacity="0.15"/>
    <line x1="${w/2}" y1="0" x2="${w}" y2="${h/2}" stroke="${accent}" stroke-width="0.5" opacity="0.12"/>
    <line x1="0" y1="${h/2}" x2="${w/2}" y2="${h}" stroke="${accent}" stroke-width="0.5" opacity="0.12"/>
    <line x1="${w/2}" y1="0" x2="0" y2="${h/2}" stroke="${accent}" stroke-width="0.5" opacity="0.12"/>
    <line x1="${w}" y1="${h/2}" x2="${w/2}" y2="${h}" stroke="${accent}" stroke-width="0.5" opacity="0.12"/>
  `,
  // Concentric rectangles
  (w, h, accent) => {
    let s = '';
    for (let i = 1; i <= 3; i++) {
      const m = i * 8;
      s += `<rect x="${m}" y="${m}" width="${w-m*2}" height="${h-m*2}" fill="none" stroke="${accent}" stroke-width="0.5" opacity="${0.2 - i*0.04}"/>`;
    }
    return s;
  },
  // Horizontal lines
  (w, h, accent) => {
    let s = '';
    const spacing = 6;
    for (let y = h * 0.3; y < h * 0.7; y += spacing) {
      s += `<line x1="15" y1="${y}" x2="${w-15}" y2="${y}" stroke="${accent}" stroke-width="0.5" opacity="0.15"/>`;
    }
    return s;
  },
  // Circle ornament
  (w, h, accent) => `
    <circle cx="${w/2}" cy="${h*0.45}" r="${Math.min(w,h)*0.18}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.2"/>
    <circle cx="${w/2}" cy="${h*0.45}" r="${Math.min(w,h)*0.12}" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.15"/>
  `,
  // Corner flourishes
  (w, h, accent) => {
    const d = 20;
    return `
      <path d="M${d},8 L8,8 L8,${d}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.2"/>
      <path d="M${w-d},8 L${w-8},8 L${w-8},${d}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.2"/>
      <path d="M${d},${h-8} L8,${h-8} L8,${h-d}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.2"/>
      <path d="M${w-d},${h-8} L${w-8},${h-8} L${w-8},${h-d}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.2"/>
    `;
  },
  // Radial sunburst
  (w, h, accent) => {
    let s = '';
    const cx = w / 2, cy = h * 0.45, r = Math.min(w, h) * 0.22;
    for (let a = 0; a < 360; a += 30) {
      const rad = a * Math.PI / 180;
      s += `<line x1="${cx}" y1="${cy}" x2="${cx + Math.cos(rad)*r}" y2="${cy + Math.sin(rad)*r}" stroke="${accent}" stroke-width="0.5" opacity="0.12"/>`;
    }
    return s;
  },
  // Dotted border
  (w, h, accent) => {
    let s = '';
    const m = 10, spacing = 8;
    for (let x = m; x <= w - m; x += spacing) {
      s += `<circle cx="${x}" cy="${m}" r="1" fill="${accent}" opacity="0.15"/>`;
      s += `<circle cx="${x}" cy="${h-m}" r="1" fill="${accent}" opacity="0.15"/>`;
    }
    for (let y = m; y <= h - m; y += spacing) {
      s += `<circle cx="${m}" cy="${y}" r="1" fill="${accent}" opacity="0.15"/>`;
      s += `<circle cx="${w-m}" cy="${y}" r="1" fill="${accent}" opacity="0.15"/>`;
    }
    return s;
  },
  // Cross-hatch
  (w, h, accent) => {
    let s = '';
    const spacing = 12;
    for (let i = -h; i < w + h; i += spacing) {
      s += `<line x1="${i}" y1="0" x2="${i+h}" y2="${h}" stroke="${accent}" stroke-width="0.3" opacity="0.08"/>`;
      s += `<line x1="${i}" y1="0" x2="${i-h}" y2="${h}" stroke="${accent}" stroke-width="0.3" opacity="0.08"/>`;
    }
    return s;
  },
  // Stacked arches
  (w, h, accent) => {
    let s = '';
    const cx = w / 2;
    for (let i = 1; i <= 4; i++) {
      const r = i * 15;
      s += `<path d="M${cx-r},${h*0.55} A${r},${r} 0 0,1 ${cx+r},${h*0.55}" fill="none" stroke="${accent}" stroke-width="0.5" opacity="${0.2 - i*0.03}"/>`;
    }
    return s;
  },
  // Diamond single
  (w, h, accent) => {
    const cx = w / 2, cy = h * 0.44, s = Math.min(w, h) * 0.15;
    return `
      <polygon points="${cx},${cy-s} ${cx+s},${cy} ${cx},${cy+s} ${cx-s},${cy}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.2"/>
      <polygon points="${cx},${cy-s*0.6} ${cx+s*0.6},${cy} ${cx},${cy+s*0.6} ${cx-s*0.6},${cy}" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.12"/>
    `;
  },
  // Vertical stripes
  (w, h, accent) => {
    let s = '';
    const spacing = 8;
    for (let x = w * 0.2; x <= w * 0.8; x += spacing) {
      s += `<line x1="${x}" y1="${h*0.15}" x2="${x}" y2="${h*0.85}" stroke="${accent}" stroke-width="0.4" opacity="0.1"/>`;
    }
    return s;
  },
  // Star ornament
  (w, h, accent) => {
    const cx = w / 2, cy = h * 0.44, r1 = Math.min(w, h) * 0.18, r2 = r1 * 0.4;
    let pts = '';
    for (let i = 0; i < 10; i++) {
      const a = (i * 36 - 90) * Math.PI / 180;
      const r = i % 2 === 0 ? r1 : r2;
      pts += `${cx + Math.cos(a)*r},${cy + Math.sin(a)*r} `;
    }
    return `<polygon points="${pts}" fill="none" stroke="${accent}" stroke-width="0.7" opacity="0.18"/>`;
  },
  // Wave lines
  (w, h, accent) => {
    let s = '';
    for (let i = 0; i < 5; i++) {
      const y = h * 0.25 + i * 12;
      s += `<path d="M12,${y} Q${w*0.25},${y-6} ${w*0.5},${y} Q${w*0.75},${y+6} ${w-12},${y}" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.12"/>`;
    }
    return s;
  },
];

function buildCover(title, author, coverW, coverH, bgColor, isDark) {
  const seed = hashTitle(title);
  const textColor = isDark ? 'rgba(59,42,26,0.85)' : 'rgba(255,255,255,0.9)';
  const accent = isDark ? '#3B2A1A' : '#ffffff';
  const pattern = COVER_PATTERNS[seed % COVER_PATTERNS.length];
  const titleSize = coverW < 90 ? 8 : 10;
  const authorSize = coverW < 90 ? 6 : 7;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${coverW}" height="${coverH}" viewBox="0 0 ${coverW} ${coverH}">
    ${pattern(coverW, coverH, accent)}
    <foreignObject x="8" y="${coverH * 0.28}" width="${coverW - 16}" height="${coverH * 0.2}">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Playfair Display',serif;font-size:${titleSize}px;color:${textColor};text-align:center;line-height:1.3;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">
        ${escapeXml(title)}
      </div>
    </foreignObject>
    <line x1="${coverW*0.3}" y1="${coverH*0.48}" x2="${coverW*0.7}" y2="${coverH*0.48}" stroke="${textColor}" stroke-width="0.5" opacity="0.4"/>
    <foreignObject x="8" y="${coverH * 0.50}" width="${coverW - 16}" height="${coverH * 0.12}">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Inter',sans-serif;font-size:${authorSize}px;color:${textColor};opacity:0.7;text-align:center;letter-spacing:1px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">
        ${escapeXml(author)}
      </div>
    </foreignObject>
  </svg>`;
}

function escapeXml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// === Cover image loading from Open Library ===
const LS_COVER_KEY = 'books_covers';
const _coverCache = loadCoverCacheFromStorage(); // coverId -> { url, dominant: [r,g,b] } | 'failed'

function loadCoverCacheFromStorage() {
  try {
    const raw = localStorage.getItem(LS_COVER_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveCoverCache() {
  try {
    // Only persist successful entries, not failures (those may be transient)
    const toSave = {};
    for (const id in _coverCache) {
      if (_coverCache[id] !== 'failed') toSave[id] = _coverCache[id];
    }
    localStorage.setItem(LS_COVER_KEY, JSON.stringify(toSave));
  } catch {} // quota exceeded — degrade gracefully
}

function loadCoverImage(coverId, coverEl, spineEl, seed, isDark) {
  const url = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;

  if (_coverCache[coverId] === 'failed') return;
  if (_coverCache[coverId]) {
    applyCoverImage(coverEl, _coverCache[coverId].url);
    applySpineColor(spineEl, _coverCache[coverId].dominant, seed, isDark);
    return;
  }

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    if (img.naturalWidth <= 1 && img.naturalHeight <= 1) {
      _coverCache[coverId] = 'failed';
      return;
    }
    const dominant = extractDominantColor(img);
    _coverCache[coverId] = { url, dominant };
    saveCoverCache();
    applyCoverImage(coverEl, url);
    applySpineColor(spineEl, dominant, seed, isDark);
  };
  img.onerror = () => { _coverCache[coverId] = 'failed'; };
  img.src = url;
}

function applyCoverImage(coverEl, url) {
  coverEl.style.backgroundImage = `url(${url})`;
  coverEl.style.backgroundSize = 'cover';
  coverEl.style.backgroundPosition = 'center';
  // Remove SVG fallback but keep the action buttons
  const buttons = coverEl.querySelectorAll('.book-cover-btn');
  coverEl.innerHTML = '';
  buttons.forEach(btn => coverEl.appendChild(btn));
}

function extractDominantColor(img) {
  const canvas = document.createElement('canvas');
  const size = 50; // sample at small size for speed
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, size, size);
  const data = ctx.getImageData(0, 0, size, size).data;

  // K-means-lite: bucket colors and find the most common non-white/non-black bucket
  const buckets = {};
  for (let i = 0; i < data.length; i += 16) { // sample every 4th pixel
    const r = data[i], g = data[i+1], b = data[i+2];
    // Skip near-white and near-black
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum > 230 || lum < 25) continue;
    // Quantize to 32-level buckets
    const qr = (r >> 3) << 3, qg = (g >> 3) << 3, qb = (b >> 3) << 3;
    const key = `${qr},${qg},${qb}`;
    if (!buckets[key]) buckets[key] = { r: 0, g: 0, b: 0, count: 0 };
    buckets[key].r += r;
    buckets[key].g += g;
    buckets[key].b += b;
    buckets[key].count++;
  }

  let best = null, bestCount = 0;
  for (const key in buckets) {
    if (buckets[key].count > bestCount) {
      bestCount = buckets[key].count;
      best = buckets[key];
    }
  }

  if (!best) return [100, 80, 60]; // fallback brown
  return [
    Math.round(best.r / best.count),
    Math.round(best.g / best.count),
    Math.round(best.b / best.count),
  ];
}

function complementaryColor(r, g, b) {
  // Convert to HSL, rotate hue 180°, convert back
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }

  h = (h + 0.5) % 1; // rotate 180°
  // Clamp saturation down a bit so complements aren't garish
  s = Math.min(s, 0.55);

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [
    Math.round(hue2rgb(p, q, h + 1/3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1/3) * 255),
  ];
}

function applySpineColor(spineEl, dominant, seed, wasDark) {
  const [r, g, b] = dominant;
  const useComplement = (seed % 3) === 0; // ~1/3 get complementary
  const [sr, sg, sb] = useComplement ? complementaryColor(r, g, b) : [r, g, b];

  // Darken slightly for spine (books spines are typically darker than covers)
  const dr = Math.round(sr * 0.85);
  const dg = Math.round(sg * 0.85);
  const db = Math.round(sb * 0.85);
  const spineColor = `rgb(${dr},${dg},${db})`;

  // Determine if text should be dark or light on this spine
  const lum = 0.299 * dr + 0.587 * dg + 0.114 * db;
  const isDark = lum > 140;

  // Apply linen texture over the new color
  const linenLight = isDark ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)';
  spineEl.style.background = `repeating-linear-gradient(0deg, ${linenLight} 0px, ${linenLight} 1px, transparent 1px, transparent 3px), ${spineColor}`;
  spineEl.style.color = isDark ? 'rgba(59,42,26,0.7)' : 'rgba(255,255,255,0.7)';

  // Update text classes
  const textEl = spineEl.querySelector('.book-spine-text');
  const authorEl = spineEl.querySelector('.spine-author');
  if (textEl) {
    textEl.classList.toggle('dark-text', isDark);
  }
  if (authorEl) {
    authorEl.classList.toggle('dark-text', isDark);
  }
}

// === Rendering ===

const HEADINGS = {
  reading: 'Reading Now',
  read: 'Finished Reading',
  wishlist: 'Wishlist',
};

function render() {
  const scrollY = window.scrollY;
  const state = getState();

  // View toggle
  document.getElementById('app-main').style.display = 'flex';
  document.getElementById('app-add-book').style.display = state.view === 'add' ? 'flex' : 'none';

  // Active tab
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.status === state.tab);
  });

  // Section heading
  document.getElementById('section-heading').textContent = HEADINGS[state.tab] || 'Reading Now';

  // Avatar initials
  const avatar = document.getElementById('user-avatar');
  const initials = (state.initials || 'J').slice(0, 3);
  avatar.textContent = initials;
  avatar.style.fontSize = initials.length >= 3 ? '0.55rem' : initials.length === 2 ? '0.65rem' : '0.8rem';

  // Bookshelf
  const area = document.getElementById('bookshelf-area');
  let filteredBooks = state.books.filter(b => b.status === state.tab);
  if (state.tab === 'read') {
    filteredBooks.sort((a, b) => (b.dateCompleted || '').localeCompare(a.dateCompleted || ''));
  }
  area.innerHTML = '';

  // Pre-compute book dimensions
  const bookData = filteredBooks.map((book, i) => {
    const color = BOOK_COLORS[(hashTitle(book.title + book.author)) % BOOK_COLORS.length];
    const pages = book.pages || 200;
    const seed = hashTitle(book.title);
    const baseHeight = 160 + (pages / 1200) * 80;
    const jitter = (seed % 20) - 10;
    // Ensure book is tall enough for the title at minimum font size (8px)
    const titleMinH = Math.ceil((book.title.length * 0.6 * 8 + 16) / 0.9);
    const height = Math.max(Math.min(240, Math.round(baseHeight + jitter)), titleMinH);
    const volume = pages / 8;
    const width = Math.round(Math.max(22, Math.min(55, volume / (height / 100))));
    return { book, color, seed, height, width, pages };
  });

  // Split books into shelf rows based on available width
  const areaStyle = getComputedStyle(area);
  const shelfPadding = parseFloat(areaStyle.paddingLeft) + parseFloat(areaStyle.paddingRight);
  const availableWidth = area.clientWidth - shelfPadding || 800;
  const rows = [];
  let currentRow = [];
  let currentWidth = 0;

  bookData.forEach(bd => {
    const bookSpace = bd.width + 2; // width + CSS gap
    if (currentRow.length > 0 && currentWidth + bookSpace > availableWidth) {
      rows.push(currentRow);
      currentRow = [];
      currentWidth = 0;
    }
    currentRow.push(bd);
    currentWidth += bookSpace;
  });
  if (currentRow.length > 0) rows.push(currentRow);

  // Render each shelf row
  rows.forEach(row => {
    const container = document.createElement('div');
    container.className = 'bookshelf-container';

    const shelf = document.createElement('div');
    shelf.className = 'bookshelf';

    row.forEach((bd, i) => {
      const { book, color, seed, height, width, pages } = bd;

      const wrapper = document.createElement('div');
      wrapper.className = 'book-wrapper';
      wrapper.style.height = height + 'px';
      wrapper.style.width = width + 'px';

      const bookEl = document.createElement('div');
      bookEl.className = 'book';
      bookEl.style.width = width + 'px';
      bookEl.style.height = height + 'px';
      bookEl.title = `${book.title} — ${book.author} (${pages} pages)` + (book.dateCompleted ? `\nCompleted: ${book.dateCompleted}` : '');

      const spineFace = document.createElement('div');
      spineFace.className = 'book-spine';
      spineFace.style.width = width + 'px';
      spineFace.style.height = height + 'px';
      // Linen cloth texture over base color
      const linenLight = color.dark ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)';
      const linenDark = 'transparent';
      spineFace.style.background = `repeating-linear-gradient(0deg, ${linenLight} 0px, ${linenLight} 1px, ${linenDark} 1px, ${linenDark} 3px), ${color.bg}`;
      spineFace.style.color = color.dark ? 'rgba(59,42,26,0.7)' : 'rgba(255,255,255,0.7)';

      // Top gilt band
      const bandTop = document.createElement('div');
      bandTop.className = 'spine-band spine-band-top';
      spineFace.appendChild(bandTop);

      const spineText = document.createElement('span');
      spineText.className = 'book-spine-text' + (color.dark ? ' dark-text' : '');
      spineText.textContent = book.title;
      // Dynamic font: fit title in available spine height (reduced for bands/author)
      const availH = height * 0.65 - 16;
      const fitPx = availH / (book.title.length * 0.6);
      const fontPx = Math.min(11.2, Math.max(7, fitPx));
      if (fontPx < 11.2) {
        spineText.style.fontSize = (fontPx / 16) + 'rem';
      }
      spineFace.appendChild(spineText);

      // Decorative motif (only on wider spines)
      if (width >= 28) {
        const motif = document.createElement('div');
        motif.className = 'spine-motif';
        const motifColor = color.dark ? 'rgba(59,42,26,0.7)' : 'rgba(255,255,255,0.7)';
        const motifType = seed % 4;
        const ms = Math.min(width - 6, 12);
        let motifSvg;
        if (motifType === 0) {
          // Diamond
          motifSvg = `<svg width="${ms}" height="${ms}" viewBox="0 0 12 12"><polygon points="6,1 11,6 6,11 1,6" fill="none" stroke="${motifColor}" stroke-width="1"/></svg>`;
        } else if (motifType === 1) {
          // Circle
          motifSvg = `<svg width="${ms}" height="${ms}" viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" fill="none" stroke="${motifColor}" stroke-width="1"/></svg>`;
        } else if (motifType === 2) {
          // Star (6-point)
          motifSvg = `<svg width="${ms}" height="${ms}" viewBox="0 0 12 12"><polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9 3,11 3.5,7.5 1,5 4.5,4.5" fill="none" stroke="${motifColor}" stroke-width="0.8"/></svg>`;
        } else {
          // Horizontal line ornament
          motifSvg = `<svg width="${ms}" height="6" viewBox="0 0 12 6"><line x1="1" y1="3" x2="4" y2="3" stroke="${motifColor}" stroke-width="0.8"/><circle cx="6" cy="3" r="1.5" fill="none" stroke="${motifColor}" stroke-width="0.8"/><line x1="8" y1="3" x2="11" y2="3" stroke="${motifColor}" stroke-width="0.8"/></svg>`;
        }
        motif.innerHTML = motifSvg;
        spineFace.appendChild(motif);
      }

      // Author name (only if spine is tall enough)
      if (height >= 140 && width >= 24) {
        const authorEl = document.createElement('span');
        authorEl.className = 'spine-author' + (color.dark ? ' dark-text' : '');
        // Use last name only to save space
        const parts = book.author.split(' ');
        authorEl.textContent = parts[parts.length - 1];
        spineFace.appendChild(authorEl);
      }

      // Bottom gilt band
      const bandBottom = document.createElement('div');
      bandBottom.className = 'spine-band spine-band-bottom';
      spineFace.appendChild(bandBottom);

      bookEl.appendChild(spineFace);

      const coverWidth = Math.round(height * 0.65);
      const coverFace = document.createElement('div');
      coverFace.className = 'book-cover';
      coverFace.style.width = coverWidth + 'px';
      coverFace.style.height = height + 'px';
      coverFace.style.background = color.bg;
      coverFace.style.transform = 'translateX(' + (width - 1) + 'px) rotateY(90deg)';
      coverFace.innerHTML = buildCover(book.title, book.author, coverWidth, height, color.bg, color.dark);

      // Edit button on cover (visible when book is open)
      const editBtn = document.createElement('button');
      editBtn.className = 'book-cover-btn book-edit-btn';
      editBtn.title = 'Edit book';
      editBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>';
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showEditBook(book.title, book.author);
      });
      coverFace.appendChild(editBtn);

      // Delete button on cover (visible when book is open)
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'book-cover-btn book-delete-btn';
      deleteBtn.title = 'Remove from library';
      deleteBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteBook(book.title, book.author, wrapper);
      });
      coverFace.appendChild(deleteBtn);

      bookEl.appendChild(coverFace);

      // Load cover image from Open Library if ISBN is available
      if (book.coverId) {
        loadCoverImage(book.coverId, coverFace, spineFace, seed, color.dark);
      }

      wrapper.dataset.title = book.title;
      wrapper.dataset.author = book.author;
      wrapper.setAttribute('draggable', 'true');
      wrapper.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ title: book.title, author: book.author }));
        e.dataTransfer.setDragImage(spineFace, width / 2, height / 2);
        wrapper.classList.add('dragging');
      });
      wrapper.addEventListener('dragend', () => {
        wrapper.classList.remove('dragging');
        document.querySelectorAll('.nav-item.drop-target').forEach(el => el.classList.remove('drop-target'));
      });

      wrapper.addEventListener('click', () => {
        area.querySelectorAll('.book-wrapper.open').forEach(el => {
          if (el !== wrapper) el.classList.remove('open');
        });
        wrapper.classList.toggle('open');
      });

      wrapper.appendChild(bookEl);
      shelf.appendChild(wrapper);
    });

    const edge = document.createElement('div');
    edge.className = 'shelf-edge';

    container.appendChild(shelf);
    container.appendChild(edge);
    area.appendChild(container);
  });

  // Volume count
  document.getElementById('total-volumes').textContent = state.books.length;

  // Monthly books-read chart (previous 3 months)
  const chartEl = document.getElementById('monthly-chart');
  chartEl.innerHTML = '';
  const now = new Date();
  const months = [];
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
    const label = d.toLocaleString('default', { month: 'short' });
    months.push({ key, label });
  }
  const counts = months.map(m => {
    return state.books.filter(b => b.dateCompleted && b.dateCompleted.startsWith(m.key)).length;
  });
  const maxCount = Math.max(...counts, 1);
  months.forEach((m, i) => {
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    const track = document.createElement('div');
    track.className = 'chart-bar-track';
    const count = document.createElement('span');
    count.className = 'chart-bar-count';
    count.textContent = counts[i];
    const fill = document.createElement('div');
    fill.className = 'chart-bar-fill';
    fill.style.height = Math.round((counts[i] / maxCount) * 100) + '%';
    track.appendChild(count);
    track.appendChild(fill);
    const label = document.createElement('span');
    label.className = 'chart-bar-label';
    label.textContent = m.label;
    bar.appendChild(track);
    bar.appendChild(label);
    chartEl.appendChild(bar);
  });

  // Recent activity
  const activityList = document.getElementById('activity-list');
  const activities = state.activity || DEFAULT_ACTIVITY;
  activityList.innerHTML = '';
  activities.slice(0, MAX_ACTIVITY).forEach(a => {
    const li = document.createElement('li');
    li.className = 'activity-item activity-' + a.color;
    li.textContent = a.text;
    activityList.appendChild(li);
  });

  window.scrollTo(0, scrollY);
}

// === Navigation ===

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const state = getState();
    state.tab = item.dataset.status;
    state.view = 'main';
    setState(state);
    render();
    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
    document.querySelector('.sidebar-overlay').classList.remove('open');
    document.querySelector('.burger-btn').style.display = '';
  });
});

// === Add Book ===

function editInitials() {
  const state = getState();
  document.getElementById('app-edit-initials').style.display = 'flex';
  const input = document.getElementById('initials-input');
  input.value = state.initials || 'J';
  input.select();
}

function hideEditInitials() {
  document.getElementById('app-edit-initials').style.display = 'none';
  document.getElementById('edit-initials-form').reset();
}

function handleEditInitials(e) {
  e.preventDefault();
  const val = document.getElementById('initials-input').value.trim().slice(0, 3);
  if (!val) return;
  const state = getState();
  state.initials = val;
  setState(state);
  render();
  hideEditInitials();
}

let _editingBook = null; // { title, author } of book being edited

function showAddBook() {
  _editingBook = null;
  document.querySelector('#app-add-book .modal-heading').textContent = 'New Addition';
  document.querySelector('#app-add-book .submit-btn').innerHTML = 'ADD TO COLLECTION <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>';
  const state = getState();
  state.view = 'add';
  setState(state);
  render();
  const dateGroup = document.getElementById('date-completed-group');
  const dateInput = document.getElementById('book-date-completed');
  if (state.tab === 'read') {
    dateGroup.style.display = '';
    dateInput.value = new Date().toISOString().slice(0, 10);
  } else {
    dateGroup.style.display = 'none';
    dateInput.value = '';
  }
  document.getElementById('cover-group').style.display = 'none';
  document.getElementById('book-isbn').focus();
}

function showEditBook(title, author) {
  const state = getState();
  const book = state.books.find(b => b.title === title && b.author === author);
  if (!book) return;
  _editingBook = { title, author };
  document.querySelector('#app-add-book .modal-heading').textContent = 'Edit Book';
  document.querySelector('#app-add-book .submit-btn').innerHTML = 'SAVE CHANGES <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>';
  document.getElementById('book-isbn').value = '';
  document.getElementById('book-title').value = book.title;
  document.getElementById('book-author').value = book.author;
  document.getElementById('book-pages').value = book.pages || '';
  const dateGroup = document.getElementById('date-completed-group');
  const dateInput = document.getElementById('book-date-completed');
  if (book.status === 'read') {
    dateGroup.style.display = '';
    dateInput.value = book.dateCompleted || '';
  } else {
    dateGroup.style.display = 'none';
    dateInput.value = '';
  }
  document.getElementById('cover-group').style.display = book.coverId ? '' : 'none';
  state.view = 'add';
  setState(state);
  render();
  document.getElementById('book-isbn').focus();
}

function removeCover() {
  if (!_editingBook) return;
  const state = getState();
  const book = state.books.find(b => b.title === _editingBook.title && b.author === _editingBook.author);
  if (!book) return;
  delete book.coverId;
  state.userStarted = true;
  setState(state);
  document.getElementById('cover-group').style.display = 'none';
}

function hideAddBook() {
  _editingBook = null;
  const state = getState();
  state.view = 'main';
  setState(state);
  render();
  document.getElementById('add-book-form').reset();
}

let _isbnLookupTimer = null;

function onIsbnInput() {
  clearTimeout(_isbnLookupTimer);
  const raw = document.getElementById('book-isbn').value.trim().replace(/[^0-9X]/gi, '');
  if (raw.length !== 10 && raw.length !== 13) return;
  _isbnLookupTimer = setTimeout(() => lookupIsbn(raw), 300);
}

function lookupIsbn(isbn) {
  fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
    .then(r => r.json())
    .then(data => {
      const entry = data['ISBN:' + isbn];
      if (!entry) return;
      const titleEl = document.getElementById('book-title');
      const authorEl = document.getElementById('book-author');
      const pagesEl = document.getElementById('book-pages');
      const overwrite = !!_editingBook;
      if ((overwrite || !titleEl.value.trim()) && entry.title) titleEl.value = entry.title;
      if ((overwrite || !authorEl.value.trim()) && entry.authors && entry.authors[0]) authorEl.value = entry.authors[0].name;
      if ((overwrite || !pagesEl.value) && entry.number_of_pages) pagesEl.value = entry.number_of_pages;
    })
    .catch(() => {});
}

document.getElementById('book-isbn').addEventListener('input', onIsbnInput);

function handleAddBook(e) {
  e.preventDefault();
  const isbnVal = document.getElementById('book-isbn').value.trim().replace(/[^0-9X]/gi, '');
  let title = document.getElementById('book-title').value.trim();
  let author = document.getElementById('book-author').value.trim();
  const pagesVal = document.getElementById('book-pages').value.trim();

  if (_editingBook) {
    if (!title || !author) return;
    const state = getState();
    const book = state.books.find(b => b.title === _editingBook.title && b.author === _editingBook.author);
    if (!book) return;
    book.title = title;
    book.author = author;
    book.pages = parseInt(pagesVal, 10) || book.pages;
    if (book.status === 'read') {
      book.dateCompleted = document.getElementById('book-date-completed').value || book.dateCompleted;
    }
    state.userStarted = true;
    state.view = 'main';
    setState(state);
    document.getElementById('add-book-form').reset();
    _editingBook = null;
    render();
    if (isbnVal) {
      resolveCoverId(isbnVal, book);
    }
    return;
  }

  // If ISBN is provided but title/author are empty, look up and submit after
  if (isbnVal && (!title || !author)) {
    const btn = e.target.querySelector('.submit-btn');
    if (btn) btn.textContent = 'LOOKING UP…';
    lookupIsbnAndSubmit(isbnVal, title, author, pagesVal);
    return;
  }

  if (!title || !author) return;
  submitBook(title, author, pagesVal, isbnVal);
}

function lookupIsbnAndSubmit(isbn, existingTitle, existingAuthor, existingPages) {
  fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
    .then(r => r.json())
    .then(data => {
      const entry = data['ISBN:' + isbn];
      const title = existingTitle || (entry && entry.title) || '';
      const author = existingAuthor || (entry && entry.authors && entry.authors[0] && entry.authors[0].name) || '';
      const pages = existingPages || (entry && entry.number_of_pages ? String(entry.number_of_pages) : '');
      if (!title || !author) {
        resetSubmitButton();
        return;
      }
      submitBook(title, author, pages, isbn);
    })
    .catch(() => resetSubmitButton());
}

function resetSubmitButton() {
  const btn = document.querySelector('#add-book-form .submit-btn');
  if (btn) btn.innerHTML = 'ADD TO COLLECTION <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>';
}

function submitBook(title, author, pagesVal, isbnVal) {
  const pages = parseInt(pagesVal, 10) || 200;
  const state = getState();
  const status = state.tab;
  if (!state.demoCleared) {
    state.books = [];
    state.activity = [];
    state.demoCleared = true;
  }
  state.userStarted = true;
  const book = { title, author, status, pages };
  if (status === 'read') {
    const dateVal = document.getElementById('book-date-completed').value;
    book.dateCompleted = dateVal || new Date().toISOString().slice(0, 10);
  }
  state.books.push(book);
  state.activity.unshift({ text: 'Added "' + title + '" to ' + STATUS_LABEL[status], color: STATUS_COLOR[status] });
  if (state.activity.length > MAX_ACTIVITY) state.activity.length = MAX_ACTIVITY;
  state.view = 'main';
  setState(state);
  document.getElementById('add-book-form').reset();
  resetSubmitButton();
  render();

  // Resolve ISBN to cover ID in the background
  if (isbnVal) {
    resolveCoverId(isbnVal, book);
  }
}

function deleteBook(title, author, wrapperEl) {
  if (!wrapperEl) return;

  // Step 1: Close the book back to spine view
  wrapperEl.classList.remove('open');

  // Step 2: After close animation, shrink width to 0
  setTimeout(() => {
    wrapperEl.classList.add('deleting');
    // Set explicit width so the transition has a start value
    wrapperEl.style.width = wrapperEl.offsetWidth + 'px';
    // Force reflow
    wrapperEl.offsetHeight;
    wrapperEl.style.width = '0';
    wrapperEl.style.marginRight = '0';
    wrapperEl.style.opacity = '0';

    // Step 3: After shrink animation, update state and re-render
    wrapperEl.addEventListener('transitionend', function onEnd(e) {
      if (e.propertyName !== 'width') return;
      wrapperEl.removeEventListener('transitionend', onEnd);

      const state = getState();
      const idx = state.books.findIndex(b => b.title === title && b.author === author);
      if (idx === -1) return;
      state.books.splice(idx, 1);
      if (!state.activity) state.activity = [];
      state.activity.unshift({ text: 'Removed "' + title + '"', color: 'brown' });
      if (state.activity.length > MAX_ACTIVITY) state.activity.length = MAX_ACTIVITY;
      state.userStarted = true;
      setState(state);
      render();
    });
  }, 400); // matches the .book close transition duration
}

function resolveCoverId(isbn, book) {
  fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
    .then(r => r.json())
    .then(data => {
      const entry = data['ISBN:' + isbn];
      if (!entry || !entry.cover) return;
      const match = (entry.cover.medium || '').match(/\/id\/(\d+)-/);
      if (!match) return;
      book.coverId = match[1];
      // Re-save state with the resolved cover ID
      const state = getState();
      const found = state.books.find(b => b.title === book.title && b.author === book.author);
      if (found) {
        found.coverId = match[1];
        setState(state);
        render();
      }
    })
    .catch(() => {}); // silently fail — book still works without cover
}

// === Drag & Drop ===

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('dragover', (e) => {
    e.preventDefault();
    item.classList.add('drop-target');
  });
  item.addEventListener('dragleave', () => {
    item.classList.remove('drop-target');
  });
  item.addEventListener('drop', (e) => {
    e.preventDefault();
    item.classList.remove('drop-target');
    try {
      const data = JSON.parse(e.dataTransfer.getData('text/plain'));
      const newStatus = item.dataset.status;
      const state = getState();
      const match = state.books.find(b => b.title === data.title && b.author === data.author);
      if (match && match.status !== newStatus) {
        match.status = newStatus;
        if (newStatus === 'read') {
          match.dateCompleted = match.dateCompleted || new Date().toISOString().slice(0, 10);
        } else {
          delete match.dateCompleted;
        }
        if (!state.activity) state.activity = [];
        state.activity.unshift({ text: 'Moved "' + match.title + '" to ' + STATUS_LABEL[newStatus], color: STATUS_COLOR[newStatus] });
        if (state.activity.length > MAX_ACTIVITY) state.activity.length = MAX_ACTIVITY;
        state.userStarted = true;
        setState(state);
        render();
      }
    } catch (_) {}
  });
});

// === Reset ===

function confirmReset() {
  return confirm('This will erase your entire library and start fresh. Are you sure?');
}

// === Mobile sidebar ===

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const isOpen = sidebar.classList.toggle('open');
  document.querySelector('.sidebar-overlay').classList.toggle('open', isOpen);
  document.querySelector('.burger-btn').style.display = isOpen ? 'none' : '';
}

// === Share ===

function shareLibrary() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.querySelector('.share-btn');
    const textNode = btn.firstChild;
    textNode.textContent = 'Link Copied! ';
    setTimeout(() => { textNode.textContent = 'Share Library '; }, 2000);
  });
}

// === CSV Import ===

function showImport() {
  document.getElementById('app-import').style.display = 'flex';
  document.getElementById('import-csv').value = '';
  document.getElementById('import-status').textContent = '';
  document.getElementById('import-csv').focus();
}

document.getElementById('import-csv').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    handleImport();
  }
});

function hideImport() {
  document.getElementById('app-import').style.display = 'none';
}

function parseCSV(text) {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];

  // Parse header — normalize to lowercase, trim, replace spaces with underscores
  const header = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));

  const books = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const vals = parseCSVLine(line);
    const row = {};
    header.forEach((h, j) => { row[h] = (vals[j] || '').trim(); });

    const title = row.title;
    const author = row.author;
    if (!title || !author) continue;

    const statusRaw = (row.status || '').toLowerCase();
    let status = 'reading';
    if (statusRaw === 'read' || statusRaw === 'finished') status = 'read';
    else if (statusRaw === 'wishlist' || statusRaw === 'to-read' || statusRaw === 'to_read') status = 'wishlist';
    else if (statusRaw === 'reading' || statusRaw === 'currently-reading' || statusRaw === 'currently_reading') status = 'reading';

    const pages = parseInt(row.pages || row.number_of_pages, 10) || 200;
    const isbn = row.isbn || row.isbn13 || row.isbn_13 || '';
    const dateCompleted = row.date_completed || row.date_read || '';

    books.push({ title, author, status, pages, isbn: isbn.replace(/[^0-9X]/gi, ''), dateCompleted });
  }
  return books;
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        result.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
  }
  result.push(current);
  return result;
}

function handleImport() {
  const text = document.getElementById('import-csv').value;
  const statusEl = document.getElementById('import-status');
  const books = parseCSV(text);

  if (books.length === 0) {
    statusEl.textContent = 'No valid books found. Ensure CSV has title and author columns.';
    return;
  }

  const state = getState();
  if (!state.demoCleared) {
    state.books = [];
    state.activity = [];
    state.demoCleared = true;
  }
  state.userStarted = true;

  books.forEach(b => {
    const book = { title: b.title, author: b.author, status: b.status, pages: b.pages };
    if (b.dateCompleted) book.dateCompleted = b.dateCompleted;
    state.books.push(book);
  });

  state.activity.unshift({ text: 'Imported ' + books.length + ' books', color: 'brown' });
  if (state.activity.length > MAX_ACTIVITY) state.activity.length = MAX_ACTIVITY;
  state.view = 'main';
  setState(state);
  render();

  // Resolve ISBNs to cover IDs in background batches
  const booksWithIsbn = books.filter(b => b.isbn).map(b => ({
    isbn: b.isbn,
    title: b.title,
    author: b.author,
  }));

  if (booksWithIsbn.length > 0) {
    statusEl.textContent = 'Imported ' + books.length + ' books. Resolving ' + booksWithIsbn.length + ' covers...';
    resolveCoversInBatch(booksWithIsbn).then(resolved => {
      if (resolved > 0) {
        statusEl.textContent = 'Imported ' + books.length + ' books, ' + resolved + ' covers found.';
      }
      setTimeout(hideImport, 1500);
    });
  } else {
    statusEl.textContent = 'Imported ' + books.length + ' books.';
    setTimeout(hideImport, 1200);
  }
}

function resolveCoversInBatch(entries) {
  // Open Library supports up to ~50 bibkeys per request
  const BATCH = 40;
  let resolved = 0;

  function processBatch(start) {
    const batch = entries.slice(start, start + BATCH);
    if (batch.length === 0) return Promise.resolve(resolved);

    const bibkeys = batch.map(b => 'ISBN:' + b.isbn).join(',');
    return fetch('https://openlibrary.org/api/books?bibkeys=' + bibkeys + '&format=json&jscmd=data')
      .then(r => r.json())
      .then(data => {
        const state = getState();
        let changed = false;
        batch.forEach(b => {
          const entry = data['ISBN:' + b.isbn];
          if (!entry || !entry.cover) return;
          const match = (entry.cover.medium || '').match(/\/id\/(\d+)-/);
          if (!match) return;
          const found = state.books.find(sb => sb.title === b.title && sb.author === b.author);
          if (found) {
            found.coverId = match[1];
            changed = true;
            resolved++;
          }
        });
        if (changed) {
          setState(state);
          render();
        }
        return processBatch(start + BATCH);
      })
      .catch(() => processBatch(start + BATCH));
  }

  return processBatch(0);
}

// === Settings & Dark Mode ===

function showSettings() {
  document.getElementById('app-settings').style.display = 'flex';
  const toggle = document.getElementById('dark-mode-toggle');
  if (document.documentElement.classList.contains('dark')) {
    toggle.classList.add('active');
  } else {
    toggle.classList.remove('active');
  }
}

function hideSettings() {
  document.getElementById('app-settings').style.display = 'none';
}

function toggleDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  const isDark = document.documentElement.classList.toggle('dark');
  toggle.classList.toggle('active', isDark);
  const state = getState();
  state.darkMode = isDark;
  setState(state);
}

function applyDarkMode() {
  const state = getState();
  let dark;
  if (state.darkMode !== undefined) {
    dark = state.darkMode;
  } else {
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.documentElement.classList.toggle('dark', dark);
}

// === Modal dismiss (Escape + click outside) ===

document.addEventListener('keydown', (e) => {
  // Don't trigger shortcuts when typing in an input
  const tag = document.activeElement && document.activeElement.tagName;
  const inInput = tag === 'INPUT' || tag === 'TEXTAREA';

  if (e.key === 'Escape') {
    if (document.getElementById('app-import').style.display !== 'none') hideImport();
    else if (document.getElementById('app-add-book').style.display !== 'none') hideAddBook();
    else if (document.getElementById('app-edit-initials').style.display !== 'none') hideEditInitials();
    else if (document.getElementById('app-settings').style.display !== 'none') hideSettings();
    return;
  }

  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    const open = document.querySelector('.book-wrapper.open');
    if (!open) return;
    e.preventDefault();
    const all = Array.from(document.querySelectorAll('.book-wrapper'));
    const idx = all.indexOf(open);
    const next = e.key === 'ArrowRight' ? all[idx + 1] : all[idx - 1];
    if (!next) return;
    open.classList.remove('open');
    next.classList.add('open');
    next.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    return;
  }

  if (e.key === 'e' && !inInput) {
    const open = document.querySelector('.book-wrapper.open');
    if (open) {
      e.preventDefault();
      showEditBook(open.dataset.title, open.dataset.author);
      return;
    }
  }

  if (inInput || e.ctrlKey || e.metaKey || e.altKey) return;

  const tabs = ['read', 'reading', 'wishlist'];
  if (e.key === 'n') showAddBook();
  else if (e.key === 's') shareLibrary();
  else if (e.key >= '1' && e.key <= '3') {
    const state = getState();
    state.tab = tabs[e.key - 1];
    state.view = 'main';
    setState(state);
    render();
  }
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      if (overlay.id === 'app-import') hideImport();
      else if (overlay.id === 'app-add-book') hideAddBook();
      else if (overlay.id === 'app-edit-initials') hideEditInitials();
      else if (overlay.id === 'app-settings') hideSettings();
    }
  });
});

// === Init ===

window.addEventListener('hashchange', render);
let _lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
  if (window.innerWidth !== _lastWidth) {
    _lastWidth = window.innerWidth;
    render();
  }
});
initState();
applyDarkMode();
render();
