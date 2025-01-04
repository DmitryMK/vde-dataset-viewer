import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ui as initialUi } from 'renderer/redux/initialState';
import {
    IUiSnackbar,
    IUiModal,
    AllowedPathnames,
    DatasetType,
} from 'interfaces/common';
import { paths } from 'misc/constants';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUi,
    reducers: {
        openDataset: (
            state,
            action: PayloadAction<{
                fileId: string;
                type?: DatasetType;
                name?: string;
                label?: string;
                currentFileId?: string;
                totalRecords?: number;
            }>,
        ) => {
            const { fileId } = action.payload;
            // If the current dataset is the opened one, do nothing
            if (state.currentFileId !== fileId) {
                // Set the opened dataset as the current dataset
                state.currentFileId = fileId;
                // Set the current page to 0
                state.currentPage = 0;
                // Reset the control.goTo object
                state.control = initialUi.control;
                // Open dataset view
                state.pathname = paths.VIEWFILE;
            } else if (state.pathname !== paths.VIEWFILE) {
                // Open the view page
                state.pathname = paths.VIEWFILE;
            }
        },
        closeDataset: (state, action: PayloadAction<{ fileId: string }>) => {
            const { fileId } = action.payload;
            // Check if the closed dataset is the current dataset
            if (state.currentFileId === fileId) {
                // Close the current dataset
                state.currentFileId = '';
                if (state.pathname === paths.VIEWFILE) {
                    // Close dataset view
                    state.pathname = paths.SELECT;
                }
                // Reset the current page to 0
                if (state.currentPage !== 0) {
                    state.currentPage = 0;
                }
                if (
                    state.control.goTo.row !== null ||
                    state.control.goTo.column !== null
                ) {
                    state.control = initialUi.control;
                }
            }
        },
        setPathname: (
            state,
            action: PayloadAction<{ pathname: AllowedPathnames }>,
        ) => {
            state.pathname = action.payload.pathname;
        },
        openSnackbar: (state, action: PayloadAction<IUiSnackbar>) => {
            const { type, message, props } = action.payload;
            state.snackbar = { type, message, props };
        },
        closeSnackbar: (state) => {
            state.snackbar = { type: null, message: null, props: {} };
        },
        openModal: (state, action: PayloadAction<IUiModal>) => {
            const { type, data } = action.payload;
            state.modals.push({ type, data });
        },
        setGoTo: (
            state,
            action: PayloadAction<{
                row?: number | null;
                column?: string | null;
            }>,
        ) => {
            const { row, column } = action.payload;
            if (row !== undefined) {
                state.control.goTo.row = row;
            }
            if (column !== undefined) {
                state.control.goTo.column = column;
            }
        },
        closeModal: (state, action: PayloadAction<{ type: string }>) => {
            const { type } = action.payload;
            // Find the last opened modal of the given type and remove it
            const index = state.modals.map((m) => m.type).lastIndexOf(type);
            if (index !== -1) {
                state.modals.splice(index, 1);
            }
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setDatasetInfoTab: (state, action: PayloadAction<0 | 1>) => {
            state.viewer.datasetInfoTab = action.payload;
        },
        setFilterInputMode: (
            state,
            action: PayloadAction<'manual' | 'interactive'>,
        ) => {
            state.viewer.filterInputMode = action.payload;
        },
    },
});

export const {
    setPathname,
    openDataset,
    closeDataset,
    openSnackbar,
    closeSnackbar,
    closeModal,
    openModal,
    setGoTo,
    setPage,
    setDatasetInfoTab,
    setFilterInputMode,
} = uiSlice.actions;

export default uiSlice.reducer;
