import { all, fork } from 'redux-saga/effects';
import userSaga from '@/store/sagas/userSaga'

export default function* rootSaga() {
    yield all([fork(userSaga)])
}