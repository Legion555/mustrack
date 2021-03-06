import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: null
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        updateUserData: (state, {payload}) => {
            state.value = payload
        },
        resetUserData: () => initialState
    }
})

export const {updateUserData} = userDataSlice.actions

export const userData = state => state.userData.value

export default userDataSlice.reducer