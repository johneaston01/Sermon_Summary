const initialState = {
    testApiResults: []
}

const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TEST_API_RESULTS":
            return { ...state, testApiResults: action.payload.testApiResults};
        default:
            return { ...state }
    }
};

export default HeaderReducer;