import React from 'react';
import { TooltipHost, ITooltipHostStyles } from '@fluentui/react/lib/Tooltip';
import { IconButton } from '@fluentui/react/lib/Button';
import { useId } from '@fluentui/react-hooks';


const MovieActions = (item) => {
  console.log(item);
  return (
    <>
      <TooltipHost content="Edit Movie">
        <IconButton iconProps={{ iconName: 'Edit' }} title="Emoji" />
      </TooltipHost>
      <TooltipHost content="Delete Movie">
        <IconButton iconProps={{ iconName: 'Delete' }} title="Emoji" />
      </TooltipHost>
    </>
  );
}
 
export default MovieActions;