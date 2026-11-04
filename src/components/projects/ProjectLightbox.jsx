import { useEffect } from 'react'
import { X } from 'lucide-react'
export default function ProjectLightbox({ images, active, onClose, onChange }) {
  useEffect(() => {
    if (active === null) return
    const onKey = e => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') onChange((active + 1) % images.length); if (e.key === 'ArrowLeft') onChange((active - 1 + images.length) % images.length) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, images.length, onClose, onChange])
  if (active === null) return null
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project image viewer" onClick={onClose}>
    <button className="lightbox-close" onClick={onClose} aria-label="Close image viewer"><X /></button>
    <button className="lightbox-prev" onClick={e => { e.stopPropagation(); onChange((active - 1 + images.length) % images.length) }}>←</button>
    <img src={images[active]} alt={`Project gallery image ${active + 1}`} onClick={e => e.stopPropagation()} />
    <button className="lightbox-next" onClick={e => { e.stopPropagation(); onChange((active + 1) % images.length) }}>→</button>
  </div>
}