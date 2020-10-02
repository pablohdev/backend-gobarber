export default interface IStorageProviders {
    saveFile(file: string): Promise<string>;
    deleteFile(file: string): Promise<void>;
}
