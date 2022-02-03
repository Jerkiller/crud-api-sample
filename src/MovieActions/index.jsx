import React from 'react';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { IconButton } from '@fluentui/react/lib/Button';
import PropTypes from 'prop-types';
import { useBoolean } from '@fluentui/react-hooks';
import { useSetRecoilState } from 'recoil';
import DeleteDialog from '../DeleteDialog';
import { moviesAtom } from '../store/moviesAtom';
import { deleteMovie } from '../services/movieService';

export const MovieActions = ({ item }) => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const setMovieList = useSetRecoilState(moviesAtom);

  const onDelete = (movie) => {
    setMovieList((ml) => (ml.filter((m) => m.id !== movie.id)));
    deleteMovie(movie)
      .then(() => {})
      .catch((e) => { console.error(e); });
  };

  return (
    <>
      <DeleteDialog
        hideDialog={hideDialog}
        toggleHideDialog={toggleHideDialog}
        confirmAction={() => { onDelete(item); }}
      />
      <TooltipHost content="Edit Movie">
        <IconButton
          iconProps={{ iconName: 'Edit' }}
          title="Emoji"
          disabled
          onClick={() => {}}
        />
      </TooltipHost>
      <TooltipHost content="Delete Movie">
        <IconButton
          iconProps={{ iconName: 'Delete' }}
          title="Emoji"
          onClick={toggleHideDialog}
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
