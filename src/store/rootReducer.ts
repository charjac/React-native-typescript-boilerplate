import { combineReducers } from 'redux'

import { AppState } from './types'
import language from './language/reducer'
import navigation from './navigation/reducer'
import pushNotification from './pushNotification/reducer'
import boot from './boot/reducer'
// Import reducer here

const rootReducer = combineReducers<AppState>({
    language,
    navigation,
    pushNotification,
    boot,
    // Insert reducer here
})

export default rootReducer
