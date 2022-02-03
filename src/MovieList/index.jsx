import React, { useEffect, useState } from 'react';
import { DetailsList, DetailsListLayoutMode, SelectionMode } from '@fluentui/react/lib/DetailsList';
import { getMovies } from '../services/movieService';
import MovieActions from '../MovieActions';
export const MovieList = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    getMovies()
      .then(setData);
  }, []);


    const columns = [
      { key: 'name', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'year', name: 'Year', fieldName: 'year', minWidth: 100, maxWidth: 200, isResizable: true },
      {
        key: 'actions',
        name: 'Actions',
        // iconName: 'Page',
        fieldName: 'actions',
        onRender: (item) => (<MovieActions item={item} />),
      },
    ];


  return (
    <>
      <DetailsList
        items={data?.movies ?? []}
        enableShimmer={data == null || !data?.movies}
        columns={columns}
        setKey="none"
        selectionPreservedOnEmptyClick={true}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.justified}
      />
    </>
  );
};
