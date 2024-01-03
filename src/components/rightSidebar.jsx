import React from 'react'
import Widget from './widget';
import WidgetTags from './widgetTags';
import './rightSidebar.scss';

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget/>
        <WidgetTags/>
    </aside>
  )
}

export default RightSidebar;