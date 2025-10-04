/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..', '..');

const defaultConfig = getDefaultConfig(projectRoot);

const customConfig = {
  resolver: {
    extraNodeModules: {
      curriculum: path.resolve(workspaceRoot, 'curriculum'),
      data: path.resolve(workspaceRoot, 'data')
    },
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules')
    ],
    unstable_enablePackageExports: true
  },
  watchFolders: [...(defaultConfig.watchFolders || []), workspaceRoot]
};

module.exports = mergeConfig(defaultConfig, customConfig);
