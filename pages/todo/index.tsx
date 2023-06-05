import LayoutComponent from '@/src/components/LayoutComponent';
import Todo from '@/src/components/Todo';
import store from '@/src/redux/store';
import React from 'react'
import { Provider } from 'react-redux';

const index = () => {
    return (
        <LayoutComponent>
            <Provider store={store}>
                <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply vh-100">
                    <br />
                    <Todo />
                </section>
            </Provider>
        </LayoutComponent>
    )
}

export default index;
