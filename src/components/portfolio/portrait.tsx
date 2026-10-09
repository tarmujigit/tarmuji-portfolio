import { useState } from 'react';
import { profile } from '@/data/portfolio';

export function Portrait() {
  const [failed, setFailed] = useState(false);

  const photo =
    profile.portrait && !failed
      ? profile.portrait
      : '';

  return (
    <div
      className={`hero-art profile-art ${
        photo ? 'with-portrait' : 'identity-only'
      }`}
    >
      {photo ? (
        <img
          key={photo}
          className="profile-photo"
          src={photo}
          onError={() => setFailed(true)}
          alt="Tarmuji mengenakan jas hitam dengan latar gelap"
          fetchPriority="high"
        />
      ) : (
        <div
          className="identity-composition"
          aria-label="Identitas Tarmuji — Bisnis, Data, Kreativitas, Teknologi"
        >
          <div className="identity-top">
            <span>PORTFOLIO / {profile.year}</span>
            <span>✳</span>
          </div>

          <div className="identity-monogram" aria-hidden="true">
            T<span>.</span>
          </div>

          <div className="identity-bottom">
            <span>TARMUJI</span>
            <p>
              BISNIS / DATA
              <br />
              KREATIVITAS / TEKNOLOGI
            </p>
          </div>
        </div>
      )}

      <span className="profile-caption">
        BISNIS · DATA · KREATIVITAS · TEKNOLOGI
      </span>
    </div>
  );
}
