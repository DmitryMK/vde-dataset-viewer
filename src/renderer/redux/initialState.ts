import { IData, IStore, IUi, ISettings } from 'interfaces/common';

export const settings: ISettings = {
    viewer: {
        pageSize: 10000,
        estimateWidthRows: 500,
        dynamicRowHeight: true,
        maxColWidth: 200,
        dateFormat: 'ISO8601',
        roundNumbers: false,
        copyFormat: 'tab',
    },
    converter: {
        threads: 2,
        defaultOutputFormat: 'json',
    },
    other: {
        loadingAnimation: 'random',
        inEncoding: 'utf8',
    },
};
export const ui: IUi = {
    pathname: '/select',
    currentFileId: '',
    currentPage: 0,
    modals: [],
    snackbar: {
        type: null,
        message: null,
        props: {},
    },
    control: {
        goTo: {
            row: null,
            column: null,
        },
    },
};

export const data: IData = {
    openedFileIds: {},
    recentFolders: [],
    recentFiles: [],
    filterData: {
        currentFilter: null,
        recentFilters: [],
        lastOptions: { caseInsensitive: true },
        lastType: 'manual',
    },
};

const initialState: IStore = {
    ui,
    data,
    settings,
};

export default initialState;
