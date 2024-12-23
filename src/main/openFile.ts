import { dialog } from 'electron';

const openFile = async (): Promise<{ path: string } | undefined> => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
        title: 'Open Dataset-JSON file',
        filters: [
            { name: 'JSON Files', extensions: ['json', 'ndjson'] }
        ]
    });
    if (!canceled) {
        return { path: filePaths[0] };
    }
    return undefined;
};

export default openFile;
