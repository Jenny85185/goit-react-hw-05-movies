import { HomeList } from 'components/Home/HomeList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchFilm } from 'Api/Api';

export const Movies = () => {
  const [searchFilm, setSearchFilm] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    try {
      const searchFilms = fetchSearchFilm(query);

      searchFilms.then(data => {
        return setSearchFilm(data);
      });
    } catch (error) {
      console.warn(error);
    }
  }, [query]);

  const onSubmit = values => {
    setSearchParams({ query: values.value });
  };

  return (
    <div>
      <SearchBox onSubmit={onSubmit} />
      {searchFilm && <HomeList trendFilms={searchFilm} />}
    </div>
  );
};