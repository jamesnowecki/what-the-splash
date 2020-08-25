import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';


//worker saga
function* handleImagesLoad() {
    console.log("fetchjing images from unsplash")
}

//watcher saga
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

//watcher saga -> actions -> invokes worker saga




export default rootSaga;