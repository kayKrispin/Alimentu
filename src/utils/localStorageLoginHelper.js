import { store } from '../store/createStore';
import { loggedIn } from '../store/modules/Auth/actions';

export default () => {
    const name =  localStorage.getItem('name');
    const email =  localStorage.getItem('email');
    const image =  localStorage.getItem('image');

    store.dispatch(loggedIn({
        firstName:name,
        email:email,
        image:image,
    }));
}
