import axios from 'axios'

// http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/

export const GET_DATE = "GET_DATE";
export const SET_TRANSIT_TYPE = "SET_TRANSIT_TYPE";
export const GET_ROUTE = "GET_ROUTE";
export const GET_COORDINATES = "GET_COORDINATES";
export const GET_REPORTS = "GET_REPORTS";
export const GET_ROUTEREPORT = "GET_ROUTEREPORT";


export const getType = () => dispatch => {
    axios.get("http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/type")
        .then(res => {
            dispatch({ type: SET_TRANSIT_TYPE, payload: res.data })
        })
        .catch(error => {
            console.log(error, "cant get data");
        })
}

export const sendType = param => dispatch => {
    axios.post("http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/route", param)
        .then(res => {
            dispatch({ type: GET_ROUTE, payload: res.data })
        })
        .catch(error => {
            console.log(error.message, "cant send data")
        })
}

export const getCoordinates = id => dispatch => {
    axios.get(`http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/route/${id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: GET_COORDINATES, payload: res.data })
        })
        .catch(error => {
            console.log(error, "couldnt get coord")
        })
}

export const getReport = (rid) => dispatch => {
    axios.get('http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/report', rid)
        .then(res => {
            console.log(res, 'get report res');
            dispatch({ type: GET_REPORTS, payload: res.data })
        })
        .catch(error => {
            console.log(error, "couldn't get report")
        })
}

export const getRoutereport = (param) => dispatch => {
    axios.post('http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/report/type', param)
        .then(res => {
            console.log(res, 'get route report');
            dispatch({ type: GET_ROUTEREPORT, payload: res.data })
        })
        .catch(error => {
            console.log(error, "couldn't get route type report")
        })
}

export const getDate = (param) => dispatch => {
    axios.post('http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/report/date', param)
        .then(res => {
            console.log(res, "get report by date");
            dispatch({ type: GET_DATE, paylood: res.data })
        })
        .catch(error => {
            console.log(error, "couldnt get report by date")
        })
}