import configureStore from 'redux-mock-store';



const mockStore = configureStore([]);

const store = mockStore({
    yourReducer: {
        data: 'Mocked data',
    },
});