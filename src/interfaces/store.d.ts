import { Filter, DatasetType } from 'interfaces/api';
import { ICheckUpdateResult } from 'interfaces/main';

export interface ISettings {
    viewer: {
        pageSize: number;
        estimateWidthRows: number;
        dynamicRowHeight: boolean;
        maxColWidth: number;
        dateFormat: 'ISO8601' | 'DDMONYEAR';
        roundNumbers: boolean;
        maxPrecision?: number;
        copyFormat: 'tab' | 'csv' | 'json';
    };
    converter: {
        threads: number;
        defaultOutputFormat: 'json' | 'ndjson';
    };
    other: {
        checkForUpdates: boolean;
        loadingAnimation: 'santa' | 'cat' | 'dog' | 'normal' | 'random';
        inEncoding: 'utf8' | 'utf16le' | 'base64' | 'ucs2' | 'latin1' | 'ascii';
    };
}

export interface IUiModal {
    type: string;
    data:
        | {
              [key: string]: string;
          }
        | ICheckUpdateResult;
}

export interface IUiSnackbar {
    type: 'success' | 'error' | 'info' | 'warning' | null;
    message: string | null;
    props?: {
        duration?: number;
    };
}

export interface IUiControl {
    goTo: {
        row: number | null;
        column: string | null;
    };
}

export type AllowedPathnames =
    | '/select'
    | '/viewFile'
    | '/api'
    | '/settings'
    | '/about'
    | '/converter';

export interface IUiViewer {
    datasetInfoTab: 0 | 1;
    filterInputMode: 'manual' | 'interactive';
}

export interface IUi {
    pathname: AllowedPathnames;
    currentFileId: string;
    currentPage: number;
    viewer: IUiViewer;
    modals: IUiModal[];
    snackbar: IUiSnackbar;
    control: IUiControl;
}

export interface IRecentFile {
    name: string;
    label: string;
    path: string;
}

export interface IData {
    openedFileIds: {
        [name: string]: {
            name: string;
            label: string;
            type: DatasetType;
            totalRecords: number;
        };
    };
    loadedRecords: {
        [name: string]: number;
    };
    recentFolders: string[];
    recentFiles: IRecentFile[];
    filterData: {
        currentFilter: Filter | null;
        recentFilters: { filter: Filter; datasetName: string; date: number }[];
        lastOptions: Filter['options'];
        lastType: 'manual' | 'ui';
    };
}

export interface IStore {
    ui: IUi;
    data: IData;
    settings: ISettings;
}
