import { all, fork } from 'redux-saga/effects';
import userSaga from '@/store/sagas/userSaga'
import uiSaga from './uiSaga';

export default function* rootSaga() {
    yield all([fork(userSaga), fork(uiSaga)])
}