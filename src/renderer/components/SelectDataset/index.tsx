import { useContext, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'renderer/redux/hooks';
import { openSnackbar, setPathname } from 'renderer/redux/slices/ui';
import { setData, addRecent, resetFilter } from 'renderer/redux/slices/data';
import { openNewDataset } from 'renderer/utils/readData';
import Layout from 'renderer/components/SelectDataset/Layout';
import AppContext from 'renderer/utils/AppContext';

const SelectDataset = () => {
    const dispatch = useAppDispatch();
    const { apiService } = useContext(AppContext);
    const recentFiles = useAppSelector((state) => state.data.recentFiles);
    const recentFolders = useAppSelector((state) => state.data.recentFolders);

    const openedFiles = apiService.getOpenedFiles();

    const handleOpenLocal = useCallback(
        async (filePath?: string, folderPath?: string) => {
            const newDataInfo = await openNewDataset(
                apiService,
                'local',
                filePath,
                folderPath,
            );
            if (newDataInfo.errorMessage) {
                if (newDataInfo.errorMessage !== 'cancelled') {
                    dispatch(
                        openSnackbar({
                            type: 'error',
                            message: newDataInfo.errorMessage,
                        }),
                    );
                }
                return;
            }
            dispatch(
                setData({
                    fileId: newDataInfo.fileId,
                    type: newDataInfo.type,
                    name: newDataInfo.metadata.name,
                    label: newDataInfo.metadata.label,
                }),
            );
            dispatch(
                addRecent({
                    name: newDataInfo.metadata.name,
                    label: newDataInfo.metadata.label,
                    path: newDataInfo.path,
                }),
            );
            dispatch(
                setPathname({
                    pathname: '/viewFile',
                    currentFileId: newDataInfo.fileId,
                }),
            );
        },
        [apiService, dispatch],
    );

    const handleRecentFileClick = (file: {
        name: string;
        label: string;
        path: string;
    }) => {
        handleOpenLocal(file.path);
    };

    const handleRecentFolderClick = (folder: string) => {
        handleOpenLocal(undefined, folder);
    };

    const handleSelectFileClick = (file: { fileId: string }) => {
        dispatch(resetFilter());
        dispatch(
            setPathname({
                pathname: '/viewFile',
                currentFileId: file.fileId,
            }),
        );
    };

    // Add shortcuts for open new
    useEffect(() => {
        const handleViewerToolbarKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey) {
                switch (event.key) {
                    case 'o':
                        handleOpenLocal();
                        break;
                    default:
                        break;
                }
            }
        };

        window.addEventListener('keydown', handleViewerToolbarKeyDown);

        return () => {
            window.removeEventListener('keydown', handleViewerToolbarKeyDown);
        };
    }, [handleOpenLocal]);

    return (
        <Layout
            recentFiles={recentFiles}
            recentFolders={recentFolders}
            openedFiles={openedFiles}
            handleOpenLocal={handleOpenLocal}
            handleRecentFileClick={handleRecentFileClick}
            handleRecentFolderClick={handleRecentFolderClick}
            handleSelectFileClick={handleSelectFileClick}
        />
    );
};

export default SelectDataset;