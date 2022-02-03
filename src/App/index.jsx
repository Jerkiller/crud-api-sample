import React from 'react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { useBoolean } from '@fluentui/react-hooks';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { MovieList } from '../MovieList';
import { CreateMovieDialog } from '../CreateMovieDialog';
import './styles.css';

initializeIcons();

export const App = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

  return (
    <div className="ms-Grid">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-xl6 centered-col">
          <div className="page-wrapper">
            <h2 className='ms-fontSize-28'>Movies CRUD</h2>

            <CreateMovieDialog
              hideDialog={hideDialog}
              toggleHideDialog={toggleHideDialog}
            />
            <MovieList />

            <PrimaryButton
              className='mt-2'
              iconProps={{ iconName: 'Add' }}
              onClick={toggleHideDialog}
              text="Create Movie"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
