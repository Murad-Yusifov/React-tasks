const productSlice = createSlice({
    name: 'pro',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPro.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPro.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getPro.fulfilled, (state, action) => {
                state.loading = false;
                state.pro = action.payload;
            })
            .addCase(postPro.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postPro.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(postPro.fulfilled, (state, action) => {
                state.loading = false;
                state.pro.push(action.payload);
            })
            .addCase(deletePro.fulfilled, (state, action) => {
                state.loading = false;
                state.pro = state.pro.filter((item) => item._id !== action.payload);
            });
    },
});
