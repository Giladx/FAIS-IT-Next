export async function getStaticProps({ locale }) {
  return {
    redirect: {
      destination: '/contact',
      permanent: true,
    },
  }
}

export default function GetInvolved() {
  return null
}
