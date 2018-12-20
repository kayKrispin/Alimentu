import { store } from '../store/createStore';
import { loggedIn } from '../store/modules/Auth/actions';

export default () => {
    const name =  localStorage.getItem('name');
    const lastName =  localStorage.getItem('lastName');
    const email =  localStorage.getItem('email');
    const image =  localStorage.getItem('image');
    const _id = localStorage.getItem('_id')

    store.dispatch(loggedIn({
        firstName: name,
        email: email,
        image: image,
        lastName: lastName,
        _id:_id,
    }));
}
