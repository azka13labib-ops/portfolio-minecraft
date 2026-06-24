export function Footer() {
  return (
    <footer className='border-t border-mc-cobble py-8 text-center'>
      <p className='font-pixel text-mc-gray text-xs'>
        © {new Date().getFullYear()} · Built with Next.js · Deployed on Vercel
      </p>
    </footer>
  )
}
