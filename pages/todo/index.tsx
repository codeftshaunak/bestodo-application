import LayoutComponent from '@/src/components/LayoutComponent';
import Todo from '@/src/components/Todo';
import store from '@/src/redux/store';
import React from 'react'
import { Provider } from 'react-redux';

const index = () => {
    return (
        <LayoutComponent>
            <Provider store={store}>

                <Todo />
            </Provider>
        </LayoutComponent>
    )
}

export default index;
