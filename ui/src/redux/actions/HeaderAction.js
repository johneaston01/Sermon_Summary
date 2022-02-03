import axios from 'axios';

export const loadTestApiResults = () => async (dispatch) => {
    const testUrl = "";
    const response = await axios.get(testUrl);

    dispatch({
        type: "TEST_API_RESULTS",
        payload: {
            testApiResults: response.data
        }
    })
}