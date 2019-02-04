module.exports = {
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      region: 'ap-northeast-2',
      bucket: 'caser.com',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5,
      pluginVersion: '3.0.0'
    }
  }
}
