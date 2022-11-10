import React, { Fragment } from 'react';
import renderTemplate from './templateRenderer';

function MainRenderer(props) {

    const {
        templatesList,
        state
    } = props;

    const parseAndRender = () => {
        if(!templatesList || templatesList.length === 0) {
            console.warn('Nothing to render');
            return null;
        }

        return templatesList.map((key) => renderTemplate(key, state[key]));
    }

    return (
        <div className='output-screen'>
            {parseAndRender()}
        </div>
    );

}

export default MainRenderer;