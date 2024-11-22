let allState = {
    isRegister: false,
    isLogged: false,
    activeNav: null,
    viewedBook: {},
    searchedBook: [],
    allBooks: [],
    userUploads: [],
    booksByGenre: []
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

        case "BOOKSEARCH":
            const { bookTitle } = action.payload;

            const regex = new RegExp(bookTitle, 'i');

            const matchedBook = state.allBooks.reduce((acc, book) => {
                if (regex.test(book.title) || regex.test(book.author)) {
                    acc.push(book);
                }
                return acc;
            }, []);

            return {
                ...state,
                searchedBook: matchedBook
            };


        case "NAV_BTNS":
            const { type } = action.payload

            return {
                ...state,
                activeNav: state.activeNav === type ? null : type
            }

        case "ALL_BOOKS":
            const { allBooks } = action.payload

            state.allBooks.forEach(book => {
                if (!state.booksByGenre[book.genre]) {
                    state.booksByGenre[book.genre] = [];
                }
                state.booksByGenre[book.genre].push(book);
            })

            return {
                ...state,
                allBooks
            }

        case "SORT_GENRE":
            return {
                ...state,
                booksByGenre: state.allBooks.reduce((acc, book) => {
                    if (!acc[book.genre]) {
                        acc[book.genre] = [];
                    }
                    acc[book.genre].push(book);
                    return acc;
                }, [...state.booksByGenre])
            }

        case "CLEARSEARCH":
            return {
                ...state,
                searchedBook: []
            }

        case "MY_UPLOADS":
            let { userUploads } = action.payload
            return {
                ...state,
                userUploads
            }

        case "SIGN_OUT":
            return {
                ...state,
                isLogged: false,
                isRegister: false,
                viewedBook: {},
                allBooks: [],
                userUploads: [],
                bookTitle: ''
            };

    }
    return state
}
export default myReducer;