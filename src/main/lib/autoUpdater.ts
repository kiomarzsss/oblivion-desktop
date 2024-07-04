// https://www.electron.build/auto-update

import electronUpdater, { type AppUpdater } from 'electron-updater';

export function getAutoUpdater(): AppUpdater {
    const { autoUpdater } = electronUpdater;
    return autoUpdater;
}
