import React from 'react';
import { Dialog, DialogFooter, DialogType } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import PropTypes from 'prop-types';

const DeleteDialog = ({
  hideDialog, toggleHideDialog, confirmAction,
}) => (
  <Dialog
    hidden={hideDialog}
    onDismiss={toggleHideDialog}
    dialogContentProps={{
      type: DialogType.normal,
      title: 'Delete Movie',
      subText: 'Do you want to delete this movie?',
    }}
  >
    <DialogFooter>
      <DefaultButton onClick={toggleHideDialog} text="Cancel" />
      <PrimaryButton onClick={() => { toggleHideDialog(); confirmAction(); }} text="Delete" />
    </DialogFooter>
  </Dialog>
);

export default DeleteDialog;

DeleteDialog.propTypes = {
  hideDialog: PropTypes.bool.isRequired,
  toggleHideDialog: PropTypes.func.isRequired,
  confirmAction: PropTypes.func.isRequired,
};
