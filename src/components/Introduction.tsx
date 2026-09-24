import { Mail, Phone } from 'lucide-react'

export function Introduction() {
  return (
    <section className="introduction" id="introduction" aria-labelledby="intro-title">
      <div className="intro-copy">
        <h1 id="intro-title">
          Katie <span>Ho</span>
        </h1>
        <p className="intro-role">
          Software Engineer <span aria-hidden="true">·</span> Data Science{' '}
        </p>
        <p className="intro-summary">
          I build thoughtful automation, data, and immersive experiences.
        </p>

        <div className="intro-socials" aria-label="Contact links">
          <a href="mailto:katiehh04@gmail.com">
            <span className="intro-social-icon" aria-hidden="true">
              <Mail size={18} strokeWidth={1.9} />
            </span>
            <span>
              <strong>Email</strong>
              <small>katiehh04@gmail.com</small>
            </span>
          </a>
          <a
            href="https://linkedin.com/in/katho4/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="intro-social-icon" aria-hidden="true">
              <b>in</b>
            </span>
            <span>
              <strong>LinkedIn</strong>
              <small>linkedin.com/in/katho4/</small>
            </span>
          </a>
          <div className="intro-phone">
            <span className="intro-social-icon" aria-hidden="true">
              <Phone size={18} strokeWidth={1.9} />
            </span>
            <span>
              <strong>Phone</strong>
              <small>+1 (714) 933-0944</small>
            </span>
          </div>
        </div>
      </div>

      <div className="intro-photo" role="img" aria-label="Profile photo placeholder">
        <img src="/public/IMG_3178.jpg" alt="Photo" />
      </div>
    </section>
  )
}
