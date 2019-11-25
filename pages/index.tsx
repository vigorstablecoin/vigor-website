import { NextPage } from 'next';
import styled from 'styled-components'
import Layout from '../components/Layout';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <Title>Vigor</Title>
  </Layout>
);

export default Home;