import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowLeft, ArrowRight, Heart, ImagePlus, Send, Sparkles, X } from 'lucide-react';
import './styles/theme.css';
import './styles/global.css';

const photos = [
  { src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80', alt: 'Những bông hoa hồng phấn trong nắng' },
  { src: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=80', alt: 'Bó hoa nhẹ nhàng với sắc tím' },
  { src: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=900&q=80', alt: 'Hoa nhỏ giữa khu vườn' },
];
const wishes = [
  { title: 'Mong bạn luôn bình yên', body: 'Mong những điều tốt đẹp sẽ đến với bạn nhiều hơn những nỗi buồn, và mỗi ngày đều có một lý do nhỏ để mỉm cười.', icon: '✿' },
  { title: 'Mong bạn luôn vững vàng', body: 'Dù sau này mọi chuyện có lúc không như ý, mong bạn vẫn giữ được sự lạc quan và tin rằng mình sẽ tìm ra cách bước tiếp.', icon: '♡' },
  { title: 'Mong mọi điều thuận lợi', body: 'Từ chuyện học hành, thi cử đến những điều bình dị trong cuộc sống, mong bạn gặp nhiều may mắn và những người thật lòng tốt với bạn.', icon: '✧' },
];

function Petals({ strong = false }) {
  return <div className={`petal-field ${strong ? 'petal-field--strong' : ''}`} aria-hidden="true">
    {Array.from({ length: strong ? 22 : 11 }, (_, i) => <span key={i} style={{
      '--x': `${(i * 37 + 7) % 100}%`, '--delay': `${(i % 8) * -1.4}s`,
      '--duration': `${8 + (i % 7)}s`, '--size': `${8 + (i % 5) * 3}px`,
    }}>✿</span>)}
  </div>;
}

function App() {
  const [animation, setAnimation] = useState('medium');
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('');
  const [sent, setSent] = useState(false);
  const [lightbox, setLightbox] = useState(-1);

  useEffect(() => {
    if (lightbox < 0) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setLightbox(-1);
      if (event.key === 'ArrowRight') setLightbox((index) => (index + 1) % photos.length);
      if (event.key === 'ArrowLeft') setLightbox((index) => (index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!message.trim()) return;
    setSent(true);
    window.setTimeout(() => setSent(false), 4200);
    setMessage('');
  }

  return <main className={`site animation-${animation}`}>
    <Petals strong={animation === 'strong'} />
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Về đầu trang"><span className="brand-mark">✿</span> little bloom</a>
      <a className="top-link" href="#letter">Lời nhắn dành cho bạn <Heart size={15} aria-hidden="true" /></a>
    </header>

    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <span className="eyebrow"><Sparkles size={15} /> 20 THÁNG 10 · MỘT NGÀY ĐẶC BIỆT</span>
        <h1>Một chút dịu dàng,<br /><em>gửi đến bạn.</em></h1>
        <p className="hero-lead">Không cần điều gì quá lớn lao. Chỉ mong hôm nay và cả những ngày sau, bạn đều được đối xử bằng sự tử tế mà bạn xứng đáng nhận.</p>
        <a className="primary-button" href="#letter">Mở lời nhắn <ArrowDown size={17} /></a>
        <div className="hero-note"><span className="note-line" /> Một lời chúc nhỏ, với thật nhiều chân thành.</div>
      </div>
      <div className="hero-art" aria-label="Minh họa bó hoa màu hồng và tím">
        <div className="art-halo"></div>
        <div className="art-card art-card-back"></div>
        <div className="art-card art-card-front">
          <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85" alt="Bó hoa hồng phấn" fetchPriority="high" />
          <div className="art-caption"><span>for your day</span><Heart size={16} fill="currentColor" /></div>
        </div>
        <span className="floating-sticker sticker-one">♡</span>
        <span className="floating-sticker sticker-two">✿</span>
        <span className="floating-sticker sticker-three">with love</span>
      </div>
      <div className="hero-bottom">SCROLL TO READ <span></span></div>
    </section>

    <section className="letter-section section-wrap" id="letter">
      <div className="section-heading">
        <span className="eyebrow">A LITTLE LETTER</span>
        <h2>Gửi bạn, vào ngày <em>20/10.</em></h2>
        <p>Đôi khi, những lời chúc giản dị lại là điều muốn gửi đi nhất.</p>
      </div>
      <article className="letter-card">
        <div className="letter-top"><span className="letter-flower">✿</span><span>20.10 · FOR YOU</span><span className="letter-heart">♡</span></div>
        <div className="letter-content">
          <p className="letter-greeting">Hello, bạn!</p>
          <p>Hôm nay mình ghé qua đây chỉ để chúc bạn có một ngày 20/10 thật vui vẻ.</p>
          <p>Mong rằng những điều tốt đẹp sẽ tìm đến bạn nhiều hơn những nỗi buồn. Mong bạn luôn có thể vui vẻ, lạc quan và giữ được sự ấm áp của riêng mình, dù sau này cuộc sống đôi lúc chẳng diễn ra như mong đợi.</p>
          <p>Mình cũng mong bạn sẽ gặp được những người thật sự tử tế, những người biết trân trọng bạn và luôn đối xử với bạn bằng sự chân thành. Từ chuyện học hành, thi cử cho đến những điều nhỏ bé trong cuộc sống thường ngày, mong mọi việc đều thuận lợi hơn một chút, nhẹ nhàng hơn một chút.</p>
          <p className="letter-ending">Chúc bạn luôn có đủ can đảm để theo đuổi điều mình muốn, đủ bình yên để tận hưởng những gì đang có, và luôn tìm thấy niềm vui trong những ngày bình thường nhất.</p>
          <div className="signature">Gửi bạn những điều tốt đẹp nhất <span>♡</span></div>
        </div>
        <div className="letter-decoration" aria-hidden="true">✿</div>
      </article>
    </section>

    <section className="wishes-section section-wrap">
      <div className="section-heading section-heading-left">
        <span className="eyebrow">THREE LITTLE WISHES</span>
        <h2>Điều mình mong <em>cho bạn.</em></h2>
      </div>
      <div className="wish-grid">
        {wishes.map((wish, index) => <article className={`wish-card wish-card-${index + 1}`} key={wish.title}>
          <div className="wish-icon" aria-hidden="true">{wish.icon}</div>
          <span className="wish-number">0{index + 1} / A WISH</span>
          <h3>{wish.title}</h3><p>{wish.body}</p>
        </article>)}
      </div>
    </section>

    <section className="gallery-section section-wrap" id="gallery">
      <div className="section-heading">
        <span className="eyebrow">A FEW SOFT COLORS</span>
        <h2>Nhặt một chút <em>nắng hoa.</em></h2>
        <p>Một góc nhỏ dịu dàng cho ngày của bạn.</p>
      </div>
      <div className="gallery-grid">
        {photos.map((photo, index) => <button className={`gallery-photo gallery-photo-${index + 1}`} key={photo.src} onClick={() => setLightbox(index)} aria-label={`Mở ảnh: ${photo.alt}`}>
          <img src={photo.src} alt={photo.alt} loading="lazy" />
          <span className="photo-open"><ImagePlus size={18} /> Xem ảnh</span>
        </button>)}
      </div>
    </section>

    <section className="wish-form-section section-wrap">
      <div className="form-intro">
        <span className="eyebrow">PASS THE KINDNESS ON</span>
        <h2>Gửi một lời chúc<br /><em>đến thế giới.</em></h2>
        <p>Viết ra một điều tốt đẹp bạn muốn gửi đến ai đó. Những lời tử tế luôn đáng được sẻ chia.</p>
        <div className="form-flower" aria-hidden="true">✿</div>
      </div>
      <form className="wish-form" onSubmit={handleSubmit}>
        <label htmlFor="sender">Tên của bạn <span>(không bắt buộc)</span></label>
        <input id="sender" name="sender" value={sender} onChange={(event) => setSender(event.target.value)} placeholder="Một người bạn..." maxLength={60} />
        <label htmlFor="message">Lời chúc của bạn</label>
        <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Mong bạn luôn..." rows="4" required maxLength={500} />
        <div className="form-bottom"><span>{message.length}/500 ký tự</span><button className="primary-button" type="submit">Gửi lời chúc <Send size={16} /></button></div>
        {sent && <div className="success-wrap" role="status" aria-live="polite">
          <div className="confetti-burst" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div>
          <div className="success-message"><span>✿</span> Lời chúc đã được ghi nhận trên trang này. Cảm ơn bạn vì đã lan tỏa điều tử tế!</div>
        </div>}
        <p className="privacy-note">Bản demo này chưa gửi dữ liệu lên máy chủ; lời chúc chỉ hiển thị trạng thái xác nhận trong trình duyệt.</p>
      </form>
    </section>

    <footer className="footer">
      <a className="brand footer-brand" href="#home"><span className="brand-mark">✿</span> little bloom</a>
      <p>Được làm bằng sự chân thành, dành cho ngày 20/10.</p>
      <a href="#home" className="back-top">Về đầu trang ↑</a>
      <span className="footer-sparkle" aria-hidden="true">✧</span>
    </footer>

    <aside className="animation-picker" aria-label="Tùy chọn hiệu ứng">
      <span>Hiệu ứng</span>
      <div role="group" aria-label="Chọn cường độ animation">
        {[['light', 'Nhẹ'], ['medium', 'Vừa'], ['strong', 'Mạnh']].map(([value, label]) =>
          <button type="button" key={value} className={animation === value ? 'selected' : ''} onClick={() => setAnimation(value)} aria-pressed={animation === value}>{label}</button>
        )}
      </div>
    </aside>

    {lightbox >= 0 && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Xem ảnh lớn" onClick={() => setLightbox(-1)}>
      <button className="lightbox-close" onClick={() => setLightbox(-1)} aria-label="Đóng ảnh"><X /></button>
      <button className="lightbox-arrow lightbox-prev" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }} aria-label="Ảnh trước"><ArrowLeft /></button>
      <figure onClick={(event) => event.stopPropagation()}>
        <img src={photos[lightbox].src} alt={photos[lightbox].alt} />
        <figcaption>{photos[lightbox].alt}</figcaption>
      </figure>
      <button className="lightbox-arrow lightbox-next" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }} aria-label="Ảnh tiếp theo"><ArrowRight /></button>
    </div>}
  </main>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);