let allState = {
    isRegister: false,
    isLogged: false,
    viewedBook: {},
    allBooks: [],
    myUploads: []
}

const myReducer = (state = allState, action) => {
    switch (action.type) {
        case "LOGIN":
            const { username } = action.payload
            return {
                ...state,
                isLogged: true,
                username
            }

        case "REGISTER":
            const { value } = action.payload
            return {
                ...state,
                isRegister: value
            }

        case "MESSAGE":
            const { message } = action.payload
            return {
                ...state,
                message
            }

        case "ALL_BOOKS":
            const { allBooks } = action.payload
            return {
                ...state,
                allBooks
            }

        case "VIEWED_BOOK":
            const { viewedBook } = action.payload
            return {
                ...state,
                viewedBook
            }

        case "BOOK_SEARCH":
            const { searchedBook } = action.payload
            return {
                ...state,
                searchedBook
            }

        case "MY_UPLOADS":
            let { myUploads } = action.payload
            return {
                ...state,
                myUploads
            }

        case "SIGN_OUT":
            return {
                ...state,
                isLogged: false,
                isRegister: false,
                viewedBook: {},
                allBooks: [],
                myUploads: [],
                message: ''
            };

    }
    return state
}
export default myReducer;