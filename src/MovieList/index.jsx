import React, { useEffect } from 'react';
import { DetailsList, DetailsListLayoutMode, SelectionMode } from '@fluentui/react/lib/DetailsList';
import { useRecoilState } from 'recoil';
import { MovieActions } from '../MovieActions';
import { getMovies } from '../services/movieService';
import { moviesAtom } from '../store/moviesAtom';

export const MovieList = () => {
  const [movieList, setMovieList] = useRecoilState(moviesAtom);

  useEffect(() => {
    getMovies()
      .then((d) => { setMovieList(d.movies); })
      .catch((e) => { console.error(e); });
  }, []);

  const movieListColumns = [
    {
      key: 'name',
      name: 'Name',
      fieldName: 'name',
      minWidth: 100,
      maxWidth: 300,
      isResizable: true,
    },
    {
      key: 'year',
      name: 'Year',
      fieldName: 'year',
      minWidth: 100,
      maxWidth: 150,
      isResizable: true,
    },
    {
      key: 'actions',
      name: 'Actions',
      // iconName: 'Page',
      fieldName: 'actions',
      onRender: (item) => (<MovieActions item={item} />),
    },
  ];

  return (
    <DetailsList
      items={movieList}
      enableShimmer={movieList == null}
      columns={movieListColumns}
      setKey="none"
      selectionPreservedOnEmptyClick
      selectionMode={SelectionMode.none}
      layoutMode={DetailsListLayoutMode.justified}
    />
  );
};
