import React from 'react';
import {injectIntl} from 'react-intl';

const Page = props => {
    return(
        <div>Page{props.intl.messages['title']}</div>
    )
}

export default injectIntl(Page);