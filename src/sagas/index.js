import { takeEvery, put } from 'redux-saga/effects';



//worker saga
function* workerSaga() {
    console.log('Hello cat this is worker saga')
    yield put({type: 'ACTION_FROM_WORKER'});
}

//watcher saga
function* rootSaga() {
    yield takeEvery('HELLO', workerSaga)
}

//watcher saga -> actions -> invokes worker saga




export default rootSaga;