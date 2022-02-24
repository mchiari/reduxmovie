import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../..//common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', 
    async () => {
        const movieText = "Woman";
        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', 
    async () => {
        const seriesText = "Friends";
        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
        return response.data;

});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', 
    async (id) => {
        const response = await movieApi
        .get(`?apiKey=${APIKey}&i=${id}&plot=full`)
        return response.data;
});


const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
};


const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () =>{
            console.log("Pending")
        },
        [fetchAsyncMovies.rejected]: () =>{
            console.log("Rejected")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("Fetched Successfully!")
            return ({...state, movies: payload})
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) =>{
            console.log("Fetched Successfully!")
            return ({...state, shows: payload})
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) =>{
            console.log("Fetched Successfully!")
            return ({...state, selectedMovieOrShow: payload})
        }
    }
});


export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;