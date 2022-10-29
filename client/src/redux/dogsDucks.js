import axios from 'axios'
//constantes
const dataInitial = {
    allDogs: [],
    divitionPage: [],
    eigthDogs: [],
    allDogsGlobal: [],
    temperaments: [],
    currentPageGlobal: 0
}

const GET_DOGS_OK = 'GET_DOGS_OK'
const GET_DIVISION_PAGE = 'GET_DIVISION_PAGE'
const EIGTH_DOGS_PAGE = 'EIGTH_DOGS_PAGE'
const SEARCH_DOGS_OK = 'SEARCH_DOGS_OK'
const GET_BY_AZ_ZA = 'GET_BY_AZ_ZA'
const GET_BY_WEIGHT = 'GET_BY_WEIGHT'
const FILTER_BY = 'FILTER_BY'
const ALL_DOGS_GLOBAL = 'ALL_DOGS_GLOBAL'
const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
const FILTER_TEMPERAMENTS = 'FILTER_TEMPERAMENTS'
const FILTER_AZ = 'FILTER_AZ'
const CHANGE_PAGE = 'CHANGE_PAGE'

//reducers
export default function dogsReducer(state = dataInitial, action) {
    switch (action.type) {
        case GET_DOGS_OK:
            return { ...state, allDogs: action.payload }
        case GET_DIVISION_PAGE:
            return { ...state, divitionPage: action.payload }
        case EIGTH_DOGS_PAGE:
            return { ...state, eigthDogs: action.payload.update }
        case SEARCH_DOGS_OK:
            return { ...state, allDogs: action.payload }
        case GET_BY_AZ_ZA:

            return { ...state, allDogs: action.payload }
        case GET_BY_WEIGHT:
            return { ...state, allDogs: action.payload }
        case FILTER_BY:
            return { ...state, allDogs: action.payload }
        case ALL_DOGS_GLOBAL:
            return { ...state, allDogsGlobal: action.payload }
        case GET_TEMPERAMENTS:
            return { ...state, temperaments: action.payload }
        case FILTER_TEMPERAMENTS:
            return { ...state, allDogs: action.payload }

        case FILTER_AZ:
            return { ...state, allDogs: action.payload }

        case CHANGE_PAGE:
            return {
                ...state,
                currentPageGlobal: action.payload
            }
        default:
            return state;
    }
}



//acciones
export const getDogsAction = (rta) => (dispatch) => {
    console.log(rta);
    let body = rta.map(r => r)

    try {
        dispatch({
            type: GET_DOGS_OK,
            payload: body
        })
    } catch (error) {
        console.log(error)
    }


}

export const getDivisionPage = (dogs) => (dispatch) => {

    try {
        let arr = [];
        for (let i = 0; i < dogs.length / 8; i++) {
            arr.push(i);
        }
        dispatch({
            type: GET_DIVISION_PAGE,
            payload: arr
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPageDogs = (currentPageP, doggies) => (dispatch) => {
    let update = [];
    for (let i = currentPageP * 8; i < currentPageP * 8 + 8; i++) {
        update.push(doggies[i]);
    }

    dispatch({
        type: EIGTH_DOGS_PAGE,
        payload: { update: update, currentPage: currentPageP }
    });



}

export const getDogsByNameAction = (search) => async (dispatch) => {

    try {
        const res = await axios.get('/dogs?name=' + search)
        console.log(res.data);
        dispatch({
            type: SEARCH_DOGS_OK,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }

}

export const orderByAsc = (dogs, option) => (dispatch) => {
    try {
        let rta = dogs.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            } else if (a.name > b.name) {
                return 1
            } else {
                return 0
            }
        })
        dispatch({
            type: GET_BY_AZ_ZA,
            payload: option === 'A-z' || option === 'select' ? rta : rta.reverse()
        })
    } catch (error) {
        console.log(error)
    }
}

export const orderByWeight = (dogs, option) => (dispatch) => {

    let modifed = dogs.map((dog) => {
        let [splitt, secondSplitt] = dog.weight.split("-")

        return {
            ...dog,
            numberWeight: isNaN(parseFloat(splitt)) ? parseFloat(secondSplitt) : parseFloat(splitt)
        }


    })
    let rta = modifed.sort(function (a, b) {

        return a.numberWeight - b.numberWeight
    })

    console.log(rta.length)

    dispatch({
        type: GET_BY_WEIGHT,
        payload: option === 'ASC' ? rta : rta.reverse()
    })

}

export const filterDogs = (dogs, option) => (dispatch) => {

    const filterBy = dogs.filter((d) => {
        if (option === 'API') {
            return d.originApi === true
        } else if (option === 'BD') {
            return d.originApi === false
        }
    })



    dispatch({
        type: FILTER_BY,
        payload: option === '' ? dogs : filterBy
    })


}

export const allDogGlobal = () => async (dispatch) => {
    try {

        const rta = await fetch("/dogs")
        const body = await rta.json();
        dispatch({
            type: ALL_DOGS_GLOBAL,
            payload: body
        })
    } catch (error) {
        console.log(error)
    }
}

export const getTemperaments = () => async (dispatch) => {
    try {
        const res = await axios.get('/temperaments')
        dispatch({
            type: GET_TEMPERAMENTS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }

}

export const filterByTemperaments = (dogs, option) => async (dispatch) => {
    const doggy = dogs.map((d) => {
        if (d.temperament !== undefined) {
            let arrStr = d.temperament.split(',')
            let arrStrTrim = arrStr.map((i) => {
                return i.trim()
            })

            return {
                ...d,
                tmp: arrStrTrim
            }


        }
    })

    const doggyFilter = doggy.map((d) => {
        if (d !== undefined) {

            for (let i = 0; i < d.tmp.length; i++) {
                if (d.tmp[i] === option) {
                    return d
                }
            }
        }

    })
    let rta = doggyFilter.filter((d) => d !== undefined)
    dispatch({
        type: FILTER_TEMPERAMENTS,
        payload: option === '' ? dogs : rta
    })


}

export const orderByAzAction = (dogs, option) => (dispatch) => {

    let dogi = dogs.map((d) => d)

    let rta = dogi.sort((a, b) => {
        if (a.name < b.name) {
            return -1
        } else if (a.name > b.name) {
            return 1
        } else {
            return 0
        }
    })
    dispatch({
        type: GET_BY_AZ_ZA,
        payload: option == 'A-Z' ? rta : rta.reverse()
    })
}


export const newCurrentPage = (p) => (dispatch) => {
    dispatch(
        {
            type: CHANGE_PAGE,
            payload: p
        }
    )
}

