import React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Dialog, DialogFooter, DialogType } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import PropTypes from 'prop-types';
import { useEditMovie } from './useEditMovie';

export const EditMovieDialog = ({
  hideDialog, toggleHideDialog, movie: baseMovie,
}) => {
  const {
    movie, setMovieName, setMovieYear, submit,
  } = useEditMovie(baseMovie);
  return (
    <Dialog
      hidden={hideDialog}
      onDismiss={toggleHideDialog}
      dialogContentProps={{
        type: DialogType.normal,
        title: 'Edit Movie',
      }}
    >
      <TextField
        label="Name"
        value={movie.name}
        placeholder='Name'
        onChange={(e) => setMovieName(e.target.value)}
      />
      <TextField
        label="Year"
        value={movie.year}
        placeholder='Year'
        onChange={(e) => setMovieYear(Number(e.target.value))}
      />
      <DialogFooter>
        <DefaultButton onClick={toggleHideDialog} text="Cancel" />
        <PrimaryButton
          onClick={() => { toggleHideDialog(); submit(); }}
          text="Edit"
          disabled={movie.name.trim() === '' || Number.isNaN(movie.year)}
        />
      </DialogFooter>
    </Dialog>
  );
};

EditMovieDialog.propTypes = {
  hideDialog: PropTypes.bool.isRequired,
  toggleHideDialog: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
};
