# download-core

> Utility to download files from services

## Install

    npm install @availity/api-core @availity/api-angular @availity/download-core @availity/download-angular --save

## Usage

```js
app.service('myCustomService', AvDownloadApi => {
    const downloadApi = new AvDownloadApi({
        clientId: '1234',
    });

    dowloadApi.getAttachment().then(response => {
        const { data } = response;
        downloadApi.downloadAttachment(data, 'filename.csv');
    });
});
```