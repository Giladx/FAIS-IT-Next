import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function GetInvolved() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/contact')
  }, [])
  return null
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  }
}
