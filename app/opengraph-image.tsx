import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mateo Loaiza — Full Stack & Cloud Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
          gap: 60,
        }}
      >
        {/* Avatar placeholder */}
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #3b82f6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 72,
            flexShrink: 0,
            border: '4px solid rgba(99,102,241,0.4)',
          }}
        >
          ML
        </div>

        {/* Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
          <div style={{ fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>
            Mateo Loaiza
          </div>
          <div style={{ fontSize: 28, color: '#6366f1', fontWeight: 600 }}>
            Full Stack & Cloud Engineer
          </div>
          <div style={{ fontSize: 22, color: '#94a3b8', lineHeight: 1.4 }}>
            React · Node.js · AWS · TypeScript
          </div>
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 8,
            }}
          >
            {['Manizales', 'Colombia', 'LATAM'].map((tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(99,102,241,0.2)',
                  border: '1px solid rgba(99,102,241,0.4)',
                  color: '#a5b4fc',
                  borderRadius: 999,
                  padding: '6px 16px',
                  fontSize: 18,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
