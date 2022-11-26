import { HomeList } from '../HomeList';
import { TrendingTitle } from './Home.styled';

export const Home = ({ trendFilms }) => {
  return (
    <main>
      <TrendingTitle>Trending Today</TrendingTitle>
      <HomeList trendFilms={trendFilms} />
    </main>
  );
};