import React from 'react'
import Link from 'next/link'

const PageLinks = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'F.A.I.S Method', href: '/fais-method' },
    { label: 'Team', href: '/team' },
    { label: 'Media', href: '/media' },
    { label: 'Resources', href: '/resources' },
    { label: 'News', href: '/news' },
    { label: 'Donate', href: '/donate' },
    { label: 'Need Help', href: '/need-help' },
    { label: 'Contact', href: '/contact' },
    { label: 'Parents', href: '/parents' },
  ]

  return (
    <section className="page-links-section">
      <div className="page-links-inner">
        <h3 className="page-links-title">Explore FAIS IT</h3>
        <div className="page-links-grid">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="page-links-item">{link.label}</a>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .page-links-section {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 40px;
          background-color: #0d0d0d;
          border-top: 1px solid #222;
        }
        .page-links-inner {
          width: 100%;
          max-width: var(--dl-layout-size-maxwidth);
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .page-links-title {
          color: #aaaaaa;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0;
        }
        .page-links-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px 32px;
        }
        .page-links-item {
          color: #ffffff;
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .page-links-item:hover {
          opacity: 0.5;
        }
        @media (max-width: 767px) {
          .page-links-section {
            padding: 40px 20px;
          }
          .page-links-item {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  )
}

export default PageLinks
