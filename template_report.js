/* eslint-env es2020 */
const path = require('path');
const fs = require('fs');
const fsextra = require('fs-extra');

const fsConfig = {
    preserveTimestamps: false,
    overwrite: true
}

async function copyFiles() {
    try {
        //Copy Karma Test Report
        if (fs.existsSync(path.resolve(__dirname, './coverage/portafolioNG/TESTS.xml'))) {
            await fsextra.copy(path.resolve(__dirname, './coverage/portafolioNG/TESTS.xml'), path.resolve(__dirname, './reports/karma_test.xml'), fsConfig);
            console.log('Karma Report was successfully copied');
        } else{
            throw new Error('Cannot find TESTS.xml');
        }

    } catch (err) {
        console.log('Cannot copy karma unit test', err);
    }

    try {
        //Copy Code Coverage Report
        if (fs.existsSync(path.resolve(__dirname, './coverage/portafolioNG/cobertura-coverage.xml'))) {
            await  fsextra.copy(path.resolve(__dirname, './coverage/portafolioNG/cobertura-coverage.xml'), path.resolve(__dirname, './reports/cobertura-coverage.xml'), fsConfig);
            console.log('Code Coverage Report was successfully copied');
        } else{
            throw new Error('Cannot find cobertura-coverage.xml');
        }

    } catch (err) {
        console.log('Cannot copy code coverage report', err);
    }

    try {
         //Copy Cypress Test
         if (fs.existsSync(path.resolve(__dirname, './cypress/results/cypress_result.xml'))) {
            await  fsextra.copy(path.resolve(__dirname, './cypress/results/cypress_result.xml'), path.resolve(__dirname, './reports/cypress_test.xml'), fsConfig);
            console.log('Cypress Report was successfully copied');
        } else{
            throw new Error('Cannot find cypress_result.xml');
        }

    } catch (err) {
        console.log('Cannot copy cypress report', err);
    }
}

copyFiles();
