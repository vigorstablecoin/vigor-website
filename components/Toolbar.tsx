import Link from 'next/link';
import styled from 'styled-components'

const StyledLink = styled.a`
  margin-right: 10px;
  cursor: pointer;
`

const Toolbar = () => (
  <div>
    <Link href="/" passHref>
      <StyledLink>Products</StyledLink>
    </Link>
    <Link href="/learn" passHref>
      <StyledLink>Learn</StyledLink>
    </Link>
    <Link href="/community" passHref>
      <StyledLink>Community</StyledLink>
    </Link>
    <Link href="/faq" passHref>
      <StyledLink>FAQ</StyledLink>
    </Link>
  </div>
);

export default Toolbar;
