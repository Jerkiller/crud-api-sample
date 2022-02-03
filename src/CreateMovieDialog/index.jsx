import React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';

import { Dialog, DialogFooter, DialogType } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import PropTypes from 'prop-types';
import { useNewMovie } from './useNewMovie';

export const CreateMovieDialog = ({
  hideDialog, toggleHideDialog,
}) => {
  const {
    setMovieName, setMovieYear, submit,
  } = useNewMovie();
  return (
    <Dialog
      hidden={hideDialog}
      onDismiss={toggleHideDialog}
      dialogContentProps={{
        type: DialogType.largeHeader,
        title: 'Create Movie',
      }}
    >
      <TextField label="Name" placeholder='Name' onChange={(e) => setMovieName(e.target.value)} />
      <TextField label="Year" placeholder='Year' onChange={(e) => setMovieYear(Number(e.target.value))} />
      <DialogFooter>
        <DefaultButton onClick={toggleHideDialog} text="Cancel" />
        <PrimaryButton onClick={() => { toggleHideDialog(); submit(); }} text="Create" />
      </DialogFooter>
    </Dialog>
  );
};

CreateMovieDialog.propTypes = {
  hideDialog: PropTypes.bool.isRequired,
  toggleHideDialog: PropTypes.func.isRequired,
};
