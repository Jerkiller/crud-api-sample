import React from 'react';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { IconButton } from '@fluentui/react/lib/Button';
import PropTypes from 'prop-types';
import { useBoolean } from '@fluentui/react-hooks';
import { useSetRecoilState } from 'recoil';
import { DeleteMovieDialog } from '../DeleteMovieDialog';
import { moviesAtom } from '../store/moviesAtom';
import { deleteMovie } from '../services/movieService';
import { EditMovieDialog } from '../EditMovieDialog';

export const MovieActions = ({ item }) => {
  const [hideDeleteDialog, { toggle: toggleHideDeleteDialog }] = useBoolean(true);
  const [hideEditDialog, { toggle: toggleHideEditDialog }] = useBoolean(true);
  const setMovieList = useSetRecoilState(moviesAtom);

  const onDelete = (movie) => {
    setMovieList((ml) => (ml.filter((m) => m.id !== movie.id)));
    deleteMovie(movie)
      .then(() => {})
      .catch((e) => { console.error(e); });
  };

  return (
    <>
      <DeleteMovieDialog
        hideDialog={hideDeleteDialog}
        toggleHideDialog={toggleHideDeleteDialog}
        confirmAction={() => { onDelete(item); }}
      />
      <EditMovieDialog
        movie={item}
        hideDialog={hideEditDialog}
        toggleHideDialog={toggleHideEditDialog}
      />
      <TooltipHost content="Edit Movie">
        <IconButton
          iconProps={{ iconName: 'Edit' }}
          onClick={toggleHideEditDialog}
        />
      </TooltipHost>
      <TooltipHost content="Delete Movie">
        <IconButton
          iconProps={{ iconName: 'Delete' }}
          onClick={toggleHideDeleteDialog}
        />
      </TooltipHost>
    </>
  );
};

MovieActions.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    name: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
};
