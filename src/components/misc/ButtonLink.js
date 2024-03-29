import tw from 'twin.macro'
const ButtonLink = tw.a`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`

export default ({ children, href }) => (
  <ButtonLink target="_blank" href={href}>
    {children}
  </ButtonLink>
)
