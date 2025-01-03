import { IData, IStore, IUi, ISettings } from 'interfaces/common';
import { paths } from 'misc/constants';

export const settings: ISettings = {
    viewer: {
        pageSize: 10000,
        estimateWidthRows: 500,
        dynamicRowHeight: true,
        maxColWidth: 50,
        dateFormat: 'ISO8601',
        roundNumbers: false,
        copyFormat: 'tab',
    },
    converter: {
        threads: 2,
        defaultOutputFormat: 'json',
    },
    other: {
        checkForUpdates: true,
        loadingAnimation: 'random',
        inEncoding: 'utf8',
    },
};
export const ui: IUi = {
    pathname: paths.SELECT,
    currentFileId: '',
    currentPage: 0,
    viewer: {
        datasetInfoTab: 0,
        filterInputMode: 'manual',
    },
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
    loadedRecords: {},
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
